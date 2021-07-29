import { Dispatch, useRef, useState } from "react";
import { FlowShard, IO, Stack } from "@hexhive/types/dist/interfaces"
import * as actions from './actions'
import { v4 } from 'uuid';
import { IEditorProgram } from "../HiveFlowEditor";
import _ from "lodash";
import Automerge from 'automerge'
import { nanoid } from 'nanoid'

export interface EditorState {
    program?: IEditorProgram

    selectedPluginItem?: {
        stack: number;
        item: number;
    }

    edited?: {
        program?: string[]
        hmi?: string[],
        plugins?: string[],
        io?: string[]
    }

    created?: {
        program?: string[];
        hmi?: string[];
        plugins?: string[];
        io?: string[];
    }

    selectedHMI?: string;
    selectedProgram?: string;
}

export interface EditorAction {
    type?: string;
    data?: any;
}

let id_ref;

let plugins: any[] = [];
let plugin_index = 0;

let items: any[] = [];
let item_idx = 0;

let item_inputs: any[] = [];
let item_input_ix = 0;

let item_outputs: any[] = [];
let item_output_ix = 0;

export const useEditorStore = (initialState: EditorState) => {

    console.log(initialState)
    const stateRef = useRef<Automerge.FreezeObject<EditorState>>(Automerge.from(initialState))
    const [ state, _setState ] = useState<Automerge.FreezeObject<EditorState>>(Automerge.from(initialState))

    const setState = (obj: Automerge.FreezeObject<EditorState>) => {
        stateRef.current = obj;
        _setState(obj)
    }

    const _dispatch = (action: EditorAction) => {
        switch (action.type) {
            case actions.SET_ROOT:
                return setRoot(action)
            case actions.ADD_PROGRAM:
                return addProgram(action)
            
            case actions.ADD_NODE:
                return addNode(action)
            case actions.UPDATE_NODE:
                return updateNode(action)

            case actions.ADD_PATH:
                return addPath(action)
            case actions.UPDATE_PATH:
                return updatePath(action)
            case actions.UPDATE_PROGRAM:
                return state; 
            //   return updateProgram(action)
            case actions.SELECT_PROGRAM:
                return selectProgram(action)
            default: 
                return state;
        }
    }

    const dispatch = (action: EditorAction) => {
        console.log("DIspatch", action)
        const new_state = _dispatch(action)
        setState(new_state)
    }

    const setRoot = (action: EditorAction) => {
        return Automerge.change(stateRef.current, "Set root", (doc) => {
            console.log(action)
            if(!action.data._id) return;
            doc.program = {
                id: action.data._id,
                program: action.data.program?.slice().map((x: FlowShard) => ({
                        ...x,
                        nodes: x.nodes?.slice().map((x) => ({
                            ...x,
                            ports: x.ports?.slice().map((x: any) => _.cloneDeep(x))
                        }))
                }))
            }
        })
    }

    const addProgram = (action: EditorAction) => {
        console.log("ADd program", action)
        let id_ref = nanoid()
        return Automerge.change(stateRef.current, "Add program", (doc) => {
            if(!doc.program) doc.program = doc.program = {}
            if(!doc.program.program) doc.program.program = [];

            let newProgram : any = {
                _id: id_ref,
                name: action.data.name,
                program: action.data.program,
                nodes: [],
                paths: []
            }


            if(action.data.parent) newProgram.parent = action.data.parent;
            doc.program?.program.push(newProgram)  
        })
    }

    const addPath = (action: EditorAction) => {
        return Automerge.change(stateRef.current, "Add program path", (doc) => {
            if(!doc.program) doc.program = {};
            if(!doc.program.program) doc.program.program = [];

            doc.program.program.find((a) => a._id == action.data.id)?.paths?.push({
                id: action.data.path.id,
                points: action.data.path.points,
                source: action.data.path.source,
                sourceHandle: action.data.path.sourceHandle
            })
        })
    }  

    const updatePath = (action: EditorAction) => {
        return Automerge.change(stateRef.current, 'Update program path', (doc) => {
            if(!doc.program) doc.program = {}
            if(!doc.program.program) doc.program.program = [];

            let program_ix = doc.program.program.map((a) => a._id).indexOf(action.data.id)
            if(program_ix == undefined && program_ix < 0 ) return;

            let program = doc.program.program[program_ix]
            
            console.log(program.paths?.slice())
            let path_ix = (program.paths || []).map((a) => a.id).indexOf(action.data.path_id)
            if(path_ix == undefined || path_ix < 0 ) return;

            console.log("Update path", action.data.path, program_ix, path_ix)


            console.log("Program", program.paths)

            if(program && program.paths){
                if(action.data.path.points) program.paths[path_ix].points = action.data.path.points;
                if(action.data.path.target) program.paths[path_ix].target = action.data.path.target;
                if(action.data.path.targetHandle) program.paths[path_ix].targetHandle = action.data.path.targetHandle
            }

        })
    }

    const addNode = (action: EditorAction) => {
        return Automerge.change(stateRef.current, "Add program node", (doc) => {
            if(!doc.program) doc.program = {}
            if(!doc.program.program) doc.program.program = [];

            doc.program.program.find((a) => a._id == action.data.id)?.nodes?.push({
                id: nanoid(),
                type: action.data.node.type,
                extras: action.data.node.extras,
                x: action.data.node.x,
                y: action.data.node.y
            })
        })
    }

    const updateNode = (action: EditorAction) => {
        return Automerge.change(stateRef.current, 'Update program node', (doc) => {
            if(!doc.program) doc.program = {}
            if(!doc.program.program) doc.program.program = [];

            let program_ix = doc.program.program.map((a) => a._id).indexOf(action.data.id)
            if(program_ix == undefined && program_ix < 0 ) return;

            let program = doc.program.program[program_ix]
            
            let node_ix = (program.nodes || []).map((a) => a.id).indexOf(action.data.node_id)
            if(node_ix == undefined && node_ix < 0 ) return;

            console.log("Update node", action.data.node, program_ix, node_ix)


            console.log("Program", program.nodes)

            if(program && program.nodes){
                    program.nodes[node_ix].x = action.data.node.x
                    program.nodes[node_ix].y = action.data.node.y

                    console.log("NODE", program.nodes[node_ix].ports, action.data.node)
                if(!program.nodes[node_ix].ports) program.nodes[node_ix].ports = [];
                if(action.data.node.ports && action.data.node.ports.length > 0){

                    for(var i = 0; i < action.data.node.ports.length; i++){
                        let item = action.data.node.ports[i];
                        if(!program.nodes[node_ix].ports[i]){
                            program.nodes[node_ix].ports[i] = item
                        }else{
                            //TODO fix this recursion so it deals with nested objects nicer
                            for(var k in item){
                                if(typeof(item[k]) === 'object'){   
                                    if(!program.nodes[node_ix].ports[i][k]) program.nodes[node_ix].ports[i][k] = {};

                                    for(var ko in item[k]){
                                        program.nodes[node_ix].ports[i][k][ko] = item[k][ko];
                                    }
                                }else{
                                    program.nodes[node_ix].ports[i][k] = item[k];
                                }
                            }
                        }
                    }
                   
                   //  program.nodes[node_ix].ports = action.data.node.ports.slice();
                }
            }

        })
    }
 
    const selectProgram = (action: EditorAction) => {

        return Automerge.change(stateRef.current, (doc) => {
            doc.selectedProgram = action.data;
        })
    }

    const updateProgram = (action: EditorAction) => {

        return Automerge.change(stateRef.current, (doc) => {
            if(!doc.program) doc.program = {};
            if(!doc.program.program) doc.program.program = [];


            let _doc = doc.program.program.find((a) => a._id == action.data.id)
            if (_doc) {

                console.log(_doc.nodes, doc.program.program)
                console.log(action.data.update.nodes.map((node: any) => _.pickBy(node, _.identity)))

                _doc.nodes = action.data.update.nodes.map((node: any) => {

                    let update = {
                        id: node.id,
                        type: node.type,
                        x: node.x,
                        y: node.y,
                        extras: node.extras,
                    }

                   // if(node.ports) update.ports = node.ports;

                    return update;
                    
                })
                

              
                // _program[p_ix] = {
                //     ..._program[p_ix],
                //     ..._.pickBy(action.data.update, _.identity)
                // }
            }

         //   doc.program.program = _program;
        })

    }

    return { state, dispatch }
}


export const EditorReducer = (state: EditorState = {}, action: EditorAction): EditorState => {
    switch (action.type) {
        case actions.SET_ROOT:
            return {
                ...state,
                program: {
                    ...action.data,
                    id: action.data._id,
                    program: action.data.program.slice().map((x: FlowShard) => ({
                        ...x,
                        nodes: x.nodes?.slice().map((x) => ({
                            ...x,
                            ports: x.ports.slice().map((x: any) => _.cloneDeep(x))
                        }))
                    }))
                }
            }
        case actions.UPDATE_PLUGIN_KEY:
            plugins = state.program?.plugins?.slice() || []
            plugin_index = plugins?.map((x) => x._id).indexOf(action.data.id)

            let items = plugins[plugin_index].items?.slice() || []
            let item_idx = items?.map((x: any) => x._id).indexOf(action.data.item_id)
            items[item_idx].key = action.data.key;

            plugins[plugin_index] = {
                ...plugins[plugin_index],
                items: items
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins
                }
            }
            break;
        case actions.UPDATE_PLUGIN_INPUT:
            plugins = state.program?.plugins?.slice() || []
            plugin_index = plugins?.map((x) => x._id).indexOf(action.data.id)

            items = plugins[plugin_index].items?.slice() || []
            item_idx = items?.map((x: any) => x._id).indexOf(action.data.item_id)

            item_inputs = items[item_idx].inputs.slice() || []
            item_input_ix = item_inputs.map((x: any) => x._id).indexOf(action.data.item_input_ix)

            items[item_idx].inputs[item_input_ix] = {
                ...items[item_idx].inputs[item_input_ix],
                ...action.data.input
            }

            plugins[plugin_index] = {
                ...plugins[plugin_index],
                items: items
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins
                }
            }
            break;
        case actions.UPDATE_PLUGIN_OUTPUT:
            plugins = state.program?.plugins?.slice() || []
            plugin_index = plugins?.map((x) => x._id).indexOf(action.data.id)

            items = plugins[plugin_index].items?.slice() || []
            item_idx = items?.map((x: any) => x._id).indexOf(action.data.item_id)

            item_outputs = items[item_idx].outputs.slice() || []
            item_output_ix = item_inputs.map((x: any) => x._id).indexOf(action.data.item_output_ix)

            items[item_idx].outputs[item_output_ix] = {
                ...items[item_idx].outputs[item_output_ix],
                ...action.data.output
            }

            plugins[plugin_index] = {
                ...plugins[plugin_index],
                items: items
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins
                }
            }
            break;
        case actions.ADD_PLUGIN_INPUT:
            plugins = state.program?.plugins?.slice() || []
            plugin_index = plugins?.map((x) => x._id).indexOf(action.data.id)

            items = plugins[plugin_index].items?.slice() || []
            item_idx = items?.map((x: any) => x._id).indexOf(action.data.item_id)

            items[item_idx].inputs = (items[item_idx].inputs || []).concat([action.data.input])

            plugins[plugin_index] = {
                ...plugins[plugin_index],
                items: items
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins
                }
            }
            break;
        case actions.ADD_PLUGIN_OUTPUT:
            console.log("ADD PLUGIN OUTPUT")
            plugins = state.program?.plugins?.slice() || []
            plugin_index = plugins?.map((x) => x._id).indexOf(action.data.id)

            items = plugins[plugin_index].items?.slice() || []
            item_idx = items?.map((x: any) => x._id).indexOf(action.data.item_id)

            items[item_idx].outputs = (items[item_idx].outputs || []).concat([action.data.output])

            plugins[plugin_index] = {
                ...plugins[plugin_index],
                items: items
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins
                }
            }
            break;
        case actions.ADD_PROGRAM:
            console.log("Add program")
            id_ref = v4()
            return {
                ...state,
                created: {
                    ...state.created,
                    program: [...new Set(state.created?.program?.slice().concat([id_ref]))]
                },
                program: {
                    ...state.program,
                    program: [...(state.program?.program || []), {
                        _id: id_ref,
                        name: action.data.name,
                        parent: action.data.parent,
                        program: action.data.program
                    }]
                }
            }
        case actions.SELECT_PROGRAM:
            return {
                ...state,
                selectedProgram: action.data
            }
        case actions.UPDATE_PROGRAM:
            let edited = state.edited?.program || [];

            let _program = state.program?.program?.slice() || [];

            let p_ix = _program.map((x) => x._id).indexOf(action.data.id)

            if (p_ix > -1) {

                edited = [...new Set(edited.concat(action.data.id))]


                _program[p_ix] = {
                    ..._program[p_ix],
                    ...action.data.update
                }
            }

            return {
                ...state,
                program: {
                    ...state.program,
                    program: _program
                },
                edited: {
                    ...state.edited,
                    program: edited
                }
            }
        case actions.ADD_HMI:
            id_ref = v4()
            return {
                ...state,
                program: {
                    ...state.program,
                    hmi: [...(state.program?.hmi || []), { _id: id_ref, name: action.data.name, parent: action.data.parent, program: action.data.program, nodes: action.data.nodes }]
                },
                created: {
                    ...state.created,
                    hmi: [...new Set(state.created?.hmi?.slice().concat([id_ref]))]
                }
            }
        case actions.SELECT_HMI:
            return {
                ...state,
                selectedHMI: action.data
            }
        case actions.UPDATE_HMI:
            let h = state.program?.hmi?.slice() || []

            let ix = h.map((x) => x._id).indexOf(action.data.id)



            if (ix > -1) {
                console.log("UPDATE HMI")
                h[ix] = {
                    ...h[ix],
                    ...action.data.hmi
                }
            }
            return {
                ...state,
                program: {
                    ...state.program,
                    hmi: h
                },
                edited: {
                    ...state.edited,
                    hmi: [...new Set(state.edited?.hmi?.slice().concat([action.data.id]))]
                }
            }
        case actions.ADD_PLUGIN:
            id_ref = v4()
            return {
                ...state,
                program: {
                    ...state.program,
                    plugins: [...(state.program?.plugins || []), { _id: id_ref, name: action.data.name }]
                },
                created: {
                    ...state.created,
                    plugins: [...new Set(state.created?.plugins?.slice().concat([id_ref]))]
                }
            }
        case actions.ADD_PLUGIN_ITEM:
            let _stacks = state.program?.plugins?.slice() || []
            let _ix = _stacks?.map((x) => x._id).indexOf(action.data.stack)


            let created = state.created?.plugins?.slice();


            console.log(action.data, _ix)
            if (_ix > -1) {

                created = [...new Set(state.created?.plugins?.slice().concat([_stacks[_ix]._id]))]

                _stacks[_ix].items = (_stacks[_ix].items || [])?.concat([{
                    _id: v4(),
                    ...action.data.items
                }])

                console.log(_stacks[_ix].items)
            }
            return {
                ...state,
                program: {
                    ...state.program,
                    plugins: _stacks
                },
                created: {
                    ...state.created,
                    plugins: created //THIS WILL BREAK
                }
            }
        case actions.SELECT_PLUGIN_ITEM:
            return {
                ...state,
                selectedPluginItem: action.data
            }
        case actions.UPDATE_PLUGIN_ITEM:

            const { item, stack } = state.selectedPluginItem || { item: -1, stack: -1 }
            let s = state.program?.plugins?.slice() || []

            let edited_plugins = state.edited?.plugins || [];

            if (stack > -1) {
                let p = s[stack]?.items?.slice() || [];

                p[item] = {
                    ...p[item],
                    ...action.data.update
                };

                edited_plugins = [...new Set(edited_plugins.concat([s[stack]._id]))]
                console.log(p, p[item])

                console.log(stack, item)

                s[stack] = {
                    ...s[stack],
                    items: p,

                }

            }

            return {
                ...state,
                program: {
                    ...state.program,
                    plugins: s
                },
                edited: {
                    ...state.edited,
                    plugins: edited_plugins
                }
            };
        case actions.ADD_IO:
            id_ref = v4()
            console.log("ADD IO")
            return {
                ...state,
                program: {
                    ...state.program,
                    io: [...(state.program?.io || []), {
                        _id: id_ref,
                        name: action.data.name,
                        type: action.data.type
                    }]
                },
                created: {
                    ...state.created,
                    io: [...new Set(state.created?.io?.slice().concat([id_ref]))]
                }
            }
        default:
            return state;
    }
}