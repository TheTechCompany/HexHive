import Automerge, { FreezeObject } from "automerge";
import { DocumentNode, NamedTypeNode, ObjectTypeDefinitionNode } from "graphql";
import { pick, xor } from "lodash";
import { Driver, Relationship, Session, Transaction } from "neo4j-driver";
import { DocSet } from "../DocSet";

export class GraphQLParser extends DocSet {
	private schema : DocumentNode;
	private driver: Driver;
	// private docs : {[key: string]: Automerge.FreezeObject<any>} = {};
	// private handlers : any[] = [];

	constructor(driver: Driver, schema: DocumentNode){
		super()
		this.driver = driver;
		this.schema = schema;
	}	

	async getDoc(collection: string, docId: string): Promise<FreezeObject<any>> {
		let doc = this.docs[`${collection}-${docId}`]
		if(!doc){

			const preExisting = await this.getGraphDoc(collection, docId)
			
			  // let tmp_doc = await this.models[collection]?.findById(docId)

			  doc = Automerge.from({
				  ...preExisting
				// title: tmp_doc.title,
				// children: tmp_doc.children || [],
				// _id: tmp_doc.id
			  })
	  
			  
			  this.docs[`${collection}-${docId}`] = doc;
		}

		return doc;
	}

	buildGraphDocQuery(collection: string, docId: string){
		return `MATCH (:${collection} {id: "${docId}"})`
	}

	async getGraphDoc(collection: string, docId: string){
		const typeDef = this.getGraphMap(collection)

		if(!typeDef) return;

		const relationshipFields = typeDef.fields.filter((a) => a.directives.filter((b) => b.name == 'relationship').length > 0)

		let query = `MATCH (root:${collection} {id: $rootId})
			${relationshipFields.map((relationship) => {
				let relationshipType = relationship.directives.find((a) => a.name == 'relationship')?.arguments.find((a) => a.name == 'type')?.value
				let direction = relationship.directives.find((a) => a.name == 'relationship')?.arguments.find((a) => a.name == 'direction')?.value
				
				let mergeStatement = direction == "OUT" ? `(root)-[r:${relationshipType}]->(${relationship.name.toLowerCase()}:${relationship.type})` : `(${relationship.name.toLowerCase()}:${relationship.type})-[r:${relationshipType}]->(root)`;

				return `OPTIONAL MATCH ${mergeStatement}`
			}).join('\n')}
		
		RETURN root{
			.*,
			${relationshipFields.map((field) => {
				return field.isList ? `${field.name}: collect(${field.name.toLowerCase()} {.*})` : `${field.name}: ${field.name.toLowerCase()}`
			}).join(', ')}
		}
		`

		const session = this.driver.session()
		const result = await session.readTransaction(async (tx) => {
			const result = await tx.run(query, {rootId: docId})
			return result.records?.map((x) => x.get(0))?.[0]
		})
		session.close()
		return result
	}

	async setDoc (docId: string, doc: Automerge.FreezeObject<any>) {
		this.docs[docId] = doc

		let parts = docId.match(/(.+?)-(.+)/)
		if(!parts) return;
		const [ full, type, id ] = parts

		const session = this.driver.session()
		session.writeTransaction(async (tx) => {
			await this.sanitize(tx, doc, type)

		})
	
		// for (let handler of this.handlers) handler(docId, doc)
	}

	getGraphMap(type: string): {name: string, fields: {
		name: string, 
		isList: boolean, 
		isID: boolean,
		type: string, 
		typeDef: any,
		directives: {name: string, arguments: {name: string, value: string}[]}[]
	}[]} | undefined{
		let typeDefinition = this.schema.definitions.map((x) => (x as ObjectTypeDefinitionNode)).find((a) => a.name.value == type)
		if(!typeDefinition) return undefined;

		return {
			name: typeDefinition.name.value,
			fields: (typeDefinition.fields  || []).map((field) => ({
				name: field.name.value,
				isList: field.type.kind == "ListType",
				isID: (field.type.kind == "NamedType" ? (field.type as any)?.name?.value : (field.type as any)?.type?.name?.value) == "ID",
				type: field.type.kind == "NamedType" ? (field.type as any)?.name?.value : (field.type as any)?.type?.name?.value,
				typeDef: this.getGraphMap((field.type.kind == "NamedType" ? (field.type as any)?.name?.value : (field.type as any)?.type?.name?.value)),
				directives: (field.directives || []).map((dir) => ({name: dir.name.value, arguments: (dir.arguments || []).map((arg) => ({name: arg.name.value, value: (arg.value as any).value}))}))
			}))
		}
	}

	async sanitize(tx: Transaction, input: any, type: string) : Promise<any | undefined>{
		let typeDef = this.getGraphMap(type);

		let id;
		let updateFields : string[] = [];

		if(typeDef){

			const result = await Promise.all(typeDef.fields.map(async (field) => {
				
				if(field.typeDef){

					if(field.type == "CartesianPoint"){
						return {field: field.name, value: field.isList ? input[field.name].map((x: any) => `point({x: ${x.x}, y: ${x.y}})`) : `point({x: ${input[field.name].x}, y: ${input[field.name].y}})`}
					}

					let value = field.isList ? await Promise.all(input[field.name].map(async (x: any) => this.sanitize(tx, x, field.type))) : await this.sanitize(tx, input[field.name], field.type)
					
					
					let relationshipDirective = field.directives.find((a) => a.name == 'relationship');
				
					if(relationshipDirective){
						let map = this.getGraphMap(field.type);

						let idField = map?.fields.find((a) => a.isID)?.name
						//Merge field based on relationship properties
						if(field.isList){
							let direction = relationshipDirective?.arguments.find((a) => a.name == "direction")?.value;
							let relationshipName = relationshipDirective?.arguments.find((a) => a.name == 'type')?.value;

							await Promise.all(value.map(async (i_value: any) => {
								// let direction = relationshipDirective?.arguments.find((a) => a.name == "direction")?.value;
								// let relationshipName = relationshipDirective?.arguments.find((a) => a.name == 'type')?.value;

								let mergeStatement = direction == "OUT" ? `(root)-[r:${relationshipName}]->(child)` : `(child)-[r:${relationshipName}]->(root)`;

								await tx.run(`
									MATCH (root:${type} {id: $id})
									MATCH (child:${field.type} {id: $childId})
									MERGE ${mergeStatement}
									RETURN r
								`, {
									childId: i_value[idField || ''],
									id: input[(typeDef?.fields || []).find((a) => a.isID)?.name || '']
								})
							}))
							await tx.run(`
								MATCH (root:${type} {id: $id})-[:${relationshipName}]->(child:${field.type})
								WHERE NOT child.${idField} IN $alive
								DETACH DELETE child
							`, {
								id: input[(typeDef?.fields || []).find((a) => a.isID)?.name || ''],
								alive: value.map((x: any) => x[idField || ''])
							})
						}else{
							let direction = relationshipDirective?.arguments.find((a) => a.name == "direction")?.value;
							let relationshipName = relationshipDirective?.arguments.find((a) => a.name == 'type')?.value;

							let mergeStatement = direction == "OUT" ? `(root)-[r:${relationshipName}]->(child)` : `(child)-[r:${relationshipName}]->(root)`;

							await tx.run(`
								MATCH (root:${type} {id: $id})
								MATCH (child:${field.type} {id: childId})
								MERGE ${mergeStatement}
							`)
						}
						
					}else{
						updateFields.push(field.name)
					}
					return {field: field.name, value: value}
				}else{
					let isID  = field.type == "ID"
					if(isID){
						id = input[field.name]
					}
					updateFields.push(field.name)

					return {field: field.name, value: input[field.name]}
				}

			}))
			const object =  result.reduce((prev, curr) => ({
				...prev,
				[curr.field]: curr.value
			}), {})

			updateFields = updateFields.filter((a) => input[a] != undefined)

			if(updateFields.length > 0 && id){
			await tx.run(`
					MERGE (obj:${type} {id: $id})
					ON MATCH
						SET ${updateFields?.map((x) => `obj.${x} = $${x}`).join(', ')}
					ON CREATE
						SET ${updateFields?.map((x) => `obj.${x} = $${x}`).join(', ')}
					RETURN obj
				`, {
					id,
					...pick(object, updateFields)
				})
			}

			return object
		}
	}
	
}