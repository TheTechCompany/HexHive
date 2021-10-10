import { PluginEditor } from '@hexhive/command-editor';
import { deviceActions, stackActions } from '../../actions';
import React, { useEffect, useState } from 'react';
import { Stack, useQuery } from '@hexhive/client';

export const PluginEditorPage : React.FC<any> = (props) => {

    const query = useQuery({
        staleWhileRevalidate: false,
        suspense: false,
        
    })

    const [ plugin, setPlugin ] = useState<Stack>()
    const _plugin = query.StackById({_id: props.match.params.id}) || undefined

    useEffect(() => {
        setPlugin(_plugin)
    }, [_plugin])

    // const [createStackItem, info] = stackActions.useCreateStackItem(props.match.params.id)

    // const [ updateStack, updateInfo ] = stackActions.useUpdateStack(props.match.params.id)

    return query.$state.isLoading ? null : (
        <PluginEditor
            plugin={plugin}
            onSave={() => {
                if(!plugin?._id) return;
                // updateStack({args: {id: plugin?._id, update: plugin}}).then(() => {
                //     console.log("Updated stack")
                // })
            }}
            onPluginChanged={(plugin: any) => {
                setPlugin(plugin as any)
                console.log("PLUGIN", plugin)
            }}
            onCreateItem={(item: any) => {
                // createStackItem({args: {
                //     stack_id: props.match.params.id,
                //     items: item
                // }}).then((result) => {
                //     console.log("REsult", result)
                // })
            }}
             />
    )
}