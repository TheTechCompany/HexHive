import {KubeConfig, CoreV1Api, loadYaml, loadAllYaml, KubernetesObject, KubernetesObjectApi} from "@kubernetes/client-node"
import fs from "fs"
import path from "path"

const kc = new KubeConfig()
kc.loadFromDefault()

// console.log(kc)

// kc.setCurrentContext('arn:aws:eks:ap-southeast-2:471796009502:cluster/hexhive-automate')
// kc.loadFromOptions({
//     clusters: [{name: 'hexhive-automate.ap-southeast-2.eksctl.io', server: 'https://90CCBD4348606DE3668A1B876660C93F.sk1.ap-southeast-2.eks.amazonaws.com'}],
//     users: [{name: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io'}],
//     contexts: [{name: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io', user: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io', cluster: 'hexhive-automate.ap-southeast-2.eksctl.io'}],
//     currentContext: 'iam-root-account@hexhive-automate.ap-southeast-2.eksctl.io'
// });

// export class K8S {
//     config: KubeConfig;

//     client : KubernetesObjectApi
//     api: CoreV1Api

//     constructor(){
//         this.config = new KubeConfig()
//         this.config.loadFromDefault() //(path.join(__dirname, './config'))
        
//         console.log(path.join(__dirname, './config'))

//         this.api = this.config.makeApiClient(CoreV1Api)
//         this.client = this.config.makeApiClient(KubernetesObjectApi)
        
//         this.client.read({apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: 'stp2glb'}}).then((res) => {
//             console.log(res.body)
//         }).catch((e) => {
//             console.log(e)
//         })

//     }
// }

// new K8S();
const k8sApi = kc.makeApiClient(CoreV1Api)
const client = kc.makeApiClient(KubernetesObjectApi)

// client.read({apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: 'stp2glb'}}).then((res) => {
//     console.log(res.body)
// })

export const apply = async (spec: string) => {
	const specifications = loadAllYaml(spec)
	const created: KubernetesObject[] = []

	for(const spec of specifications){
		// this is to convince the old version of TypeScript that metadata exists even though we already filtered specs
		// without metadata out
		spec.metadata = spec.metadata || {}
		spec.metadata.annotations = spec.metadata.annotations || {}
		delete spec.metadata.annotations["kubectl.kubernetes.io/last-applied-configuration"]
		spec.metadata.annotations["kubectl.kubernetes.io/last-applied-configuration"] = JSON.stringify(spec)
		try {
			// try to get the resource, if it does not exist an error will be thrown and we will end up in the catch
			// block.
			console.log(spec.metadata)
			// console.log(spec)
			const r = await client.read(spec) //{apiVersion: 'tekton.dev/v1beta1', kind: 'Task', metadata: {name: spec.metadata.name}});
			// console.log("BODY", r.body)
			// we got the resource, so it exists, so patch it

			const response = await client.patch(spec, "true", undefined, undefined, undefined, {
				headers: {
					"Content-Type": "application/merge-patch+json"
				}
			})
			created.push(response.body)
		} catch (e) {
			// we did not get the resource, so it does not exist, so create it
			try{
				const response = await client.create(spec)
				created.push(response.body)
			}catch(e){
				console.log(e)
			}
		}

		// console.log(created[created.length - 1])
	}
	console.log(created)
	return created

}

