import { BaseModal } from '../base';
import React, {useState, useEffect} from 'react';
import { NamedTypeNode, ObjectTypeDefinitionNode, StringValueNode } from 'graphql';
import { Box, CheckBox, Select, TextInput } from 'grommet';
import { useProgramEditor } from 'apps/hivecommand/src/views/Editor/pages/program/context';

export interface ProgramCanvasModalProps {
	open: boolean;
	onClose?: () => void;
	onDelete?: () => void;
	onSubmit?: (item: any) => void;

	modal?: ObjectTypeDefinitionNode

	selected?: any;
}

export const ProgramCanvasModal : React.FC<ProgramCanvasModalProps> = (props) => {

	const [ activeItem, setActiveItem ] = useState<any>({})

	const { devices } = useProgramEditor()

	useEffect(() => {
		console.log("SE:LCT", props.selected)
		setActiveItem(props.selected || {})

	}, [props.selected])

	useEffect(() => {
		if(!props.open){
			setActiveItem(undefined)
		}
	}, [props.open])

	const renderFields = () => {
		return props.modal?.fields?.map((field) => {

			let requires = activeItem?.[(field.directives.find((a) => a.name.value.indexOf('requires') > -1)?.arguments.find((a) => a.name.value == 'key')?.value as any)?.value]

			return (field.type as NamedTypeNode).name.value == "Device" ? (
				<Select
					value={typeof(activeItem?.[field.name.value]) == "object" ? activeItem?.[field.name.value]?.id : activeItem?.[field.name.value]}
					onChange={({value}) => setActiveItem({
						...activeItem,
						[field.name.value]: value
					})}
					valueKey={{reduce: true, key: 'id'}}
					placeholder={field.name.value} 
					options={devices} 
					labelKey="name" />
			) : (field.type as NamedTypeNode).name.value == "DeviceAction"  ? (
				<Select
					value={typeof(activeItem?.[field.name.value]) == "object" ? activeItem?.[field.name.value]?.id : activeItem?.[field.name.value]}
					onChange={({value}) => setActiveItem({
						...activeItem,
						[field.name.value]: value
					})}
					valueKey={{reduce: true, key: 'id'}}
					placeholder={field.name.value}
					labelKey={"key"}
					options={devices.find((a) => a.id == (typeof(requires) == "object" ? requires.id : requires ))?.type?.actions || []} />	
			) :  (field.type as NamedTypeNode).name.value == "DeviceState" ? (
				<Select
					value={typeof(activeItem?.[field.name.value]) == "object" ? activeItem?.[field.name.value]?.id : activeItem?.[field.name.value]}
					onChange={({value}) => setActiveItem({
						...activeItem,
						[field.name.value]: value
					})}
					valueKey={{reduce: true, key: 'id'}}
					placeholder={field.name.value}
					labelKey={"key"}
					options={devices.find((a) => a?.id == (typeof(requires) == "object" ? requires?.id : requires ))?.type?.state || []} />	
			) : (field.type as NamedTypeNode).name.value == "Boolean" ? (
				<Box 
					justify="end"
					direction="row">
					<CheckBox 
						reverse 
						onChange={(e) => setActiveItem({...activeItem, [field.name.value]: e.target.checked})}
						checked={activeItem?.[field.name.value]} 
						label={field.name.value} />
				</Box>
				
			) : (
				<TextInput 
					value={activeItem?.[field.name.value]}
					onChange={(e) => setActiveItem({...activeItem, [field.name.value]: e.target.value})}
					placeholder={field.name.value} />
			)
		}
		)
	}

	return (
		<BaseModal
			title={`Add/Edit ${props.modal?.name?.value}`}
			onSubmit={() => {
				props.onSubmit?.({
					...activeItem
				})
			}}
			onDelete={activeItem?.id && props.onDelete}
			onClose={props.onClose}
			open={props.open}>
				
			{renderFields()}
			
		</BaseModal>
	)
}