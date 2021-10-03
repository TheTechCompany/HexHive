import { useQuery } from '@apollo/client';
import React, { Suspense, lazy, useEffect, useRef, useState, useCallback } from 'react';
import { GET_PROGRAM, GET_PROGRAM_SHARDS, GET_STACKS } from '../../actions/flow-shards';
import { Box, Text, Spinner } from 'grommet';
import { programActions } from '../../actions';
import { Program, useQuery as useQLess} from '@hexhive/client';
import Editor from '@hexhive/command-editor'
import qs from 'qs';
import { RouteComponentProps } from 'react-router-dom';

import { useAutomergeDoc } from '@hexhive/collaboration-client'
import { IEditorProgram } from '@hexhive/command-editor';
import { IFlowShardPaths } from '@hexhive/types/dist/interfaces';
//const Editor = lazy(() => import('@hive-flow/editor'));

export interface EditorProps extends RouteComponentProps<{id: string}> {

}

export const EditorPage: React.FC<EditorProps> = (props) => {

    const [ program, setProgram ] = useAutomergeDoc<{program: Program[]} & any>('Program', props.match.params.id)

    // const shardQuery = useQuery(GET_PROGRAM_SHARDS, { variables: { parent: props.match.params.id } })
    // const programQuery = useQuery(GET_PROGRAM, { variables: { id: props.match.params.id } })
    // const stackQuery = useQuery(GET_STACKS)
    
    const gqless = useQLess({suspense: false, staleWhileRevalidate: true})

    // const Processes = (shardQuery.data || {}).FlowShardMany || []
    // const program_root = (programQuery.data || {}).ProgramOne;
    const stacks = gqless.StackMany() // ((stackQuery.data || {}).StackMany || [])

    console.log("PROGRAM", program)
    
    const [ updateProject, updateInfo ] = programActions.useUpdateProgram(props.match.params.id)

    const query = qs.parse(props.location.search, {ignoreQueryPrefix: true})

    return (
        <Suspense fallback={(
            <Box 
                direction="column"
                align="center"
                justify="center"
                flex>
                <Spinner size="medium"/>
                <Text>Loading Editor ...</Text>
            </Box>)}>
        <Editor
            onBack={() => {
                props.history.push(`/dashboard/programs`)
            }}
            onAddProgram={(program) => {
                console.log("Add program", program)
                setProgram((doc) => {
                    console.log("NEw program", program)
                    doc.program?.push(program)
                })
            }}
            onAddProgramPath={(program_id: string, path : any) => {
                console.log("ADD PATH", path)
                setProgram((doc) => {
                    if(!doc.program.find((a: any) => a._id == program_id).paths) doc.program.find((a: any) => a._id == program_id).paths = {}

                    path.points = Object.assign({}, path.points || [])

                    doc.program.find((a: any) => a._id == program_id).paths[path.id] = path;
              
                 //  doc.program.find((a: any) => a._id == program_id).paths[path.id].points.push({x: 100, y: 100}) //[0].x += 100
                })
                console.log(program.program.find((a: any) => a._id == program_id))
            }}
            onUpdateProgramPath={(program_id, path: IFlowShardPaths & any) => {
                console.log(path.points)

                const p = Object.assign({}, path)
                    setProgram((doc) => {
                        console.log("UPDATE PATH", path.points)

                        if(!doc.program.find((a: any) => a._id == program_id).paths) doc.program.find((a: any) => a._id == program_id).paths = {}
                        
                        try{
                            console.log("UPDATE PATH", path, program_id)

                        // if(path.target && path.targetHandle){
                            if(path.points.length > 0) {
                                if(Object.keys(doc.program.find((a: any) => a._id == program_id).paths[path.id].points).length == 0){
                                    doc.program.find((a: any) => a._id == program_id).paths[path.id].points['0'] = path.points[0]
                                    console.log("FIRST POINT")
                                }else{
                                    console.log("SECOND POINT")
                                    console.log(path.points)

                                    // console.log("Points exist", doc.program.find((a: any) => a._id == program_id).paths[path.id].points[0])

                                    for(var i = 0; i < path.points.length; i++){
                                  //  for(var i = 0; i < doc.program.find((a: any) => a._id == program_id).paths[path.id].points.length; i++){
                                  //      console.log(path.points[i])
                                        if(!doc.program.find((a: any) => a._id == program_id).paths[path.id].points[`${i}`]){
                                            doc.program.find((a: any) => a._id == program_id).paths[path.id].points[`${i}`] = {}
                                        }
                                     doc.program.find((a: any) => a._id == program_id).paths[path.id].points[`${i}`].x = path.points[i].x
                                     doc.program.find((a: any) => a._id == program_id).paths[path.id].points[`${i}`].y = path.points[i].y
                                    }

                                    //  doc.program.find((a: any) => a._id == program_id).paths[path.id].points[i].y = path.points[i].y

                              //      } //[0].x = path.points[0].x //path_target.slice(1) //'origin'
                                    // doc.program.find((a: any) => a._id == program_id).paths[path.id].points[0].y = path.points[0].y //path_target.slice(1) //'origin'
                                }
                            }

                                if(path.target !== null && path.target !== undefined) {
                                    console.log("UPDATE", path, path.target, path.targetHandle)

                                    const path_target = `${(' ' + path.target)}`

                                    doc.program.find((a: any) => a._id == program_id).paths[path.id].target = ` ${Object.assign({}, path).target}`; //path_target.slice(1) //'origin'
                                    doc.program.find((a: any) => a._id == program_id).paths[path.id].targetHandle = ` ${Object.assign({}, p).targetHandle}`;
                                    doc.program.find((a: any) => a._id == program_id).paths[path.id].targetHandle =  doc.program.find((a: any) => a._id == program_id).paths[path.id].targetHandle.slice(1)
                                    doc.program.find((a: any) => a._id == program_id).paths[path.id].target =  doc.program.find((a: any) => a._id == program_id).paths[path.id].target.slice(1)

                                }

                                // if(path.target) doc.program.find((a: any) => a._id == program_id).paths[path.id].target = path.target;
                                // if(path.targetHandle) doc.program.find((a: any) => a._id == program_id).paths[path.id].targetHandle = path.targetHandle;


                            //    doc.program.find((a: any) => a._id == program_id).paths[path.id].points = path.points;
                            
                                // path.points = [{x: 100, y: 100}]
                            //  doc.program.find((a: any) => a._id == program_id).paths[path.id] = path;

                        //  }


                    // doc.program.find((a: any) => a._id == program_id).paths[path.id].points[0].y = path.points[0].y;
                        }catch(e){
                            console.log("ERR", e)
                        }

                    })
                
            }}
            onAddProgramNode={(program: string, node : any) => {
                console.log("Add node", node, program)
                setProgram((doc) => {
                
                    doc.program.find((a: any) => a._id == program).nodes[node.id] = node
                })
            }}
            onUpdateProgramNode={(program_id, node: any) => {
                console.log(program, node)
               // console.log("Update node state", program.program?.find((a) => a._id == program_id)?.nodes)
                setProgram((doc) => {
                    try{
                        if(!doc.program) return;
                        //if(doc.program.find((a: any) => a._id == program_id).nodes.length > 0){
                        //doc.program.find((a: any) => a._id == program_id).nodes = [{id: 'id', type: 'icon-node', x: node.x, y: node.y}]
                   
                         doc.program.find((a: any) => a._id == program_id).nodes[node.id].x = node.x// node.x // push({id: 'test', type: 'icon-node', x: 20, y: 20})
                          doc.program.find((a: any) => a._id == program_id).nodes[node.id].y =  node.y
                        
                        doc.program.find((a: any) => a._id == program_id).nodes[node.id].ports =  node.ports || []

                   
                        // }
                        console.log("UPDATE", node.id, doc.program.find((a: any) => a._id == program_id).nodes[node.id].x)
                    // if(!doc.program) doc.program = [];

                    // let _program = program.program?.find((a) => a._id == program_id);
                    // if(!_program || !_program.nodes || !program.program) return;
                    // let _program_ix = program.program.map((x) => x._id).indexOf(program_id)

                    // console.log("NODE", _program.nodes, program.name)

                    //  let _node_ix = _program.nodes?.map((a:FlowShardNodes) => a.id).indexOf(node.id);

                    // //  (doc.program.find((a) => a._id == program_id)?.nodes?.find((a) => a.id == node.id) as any).x = node.x;
                    // //  (doc.program.find((a) => a._id == program_id)?.nodes?.find((a) => a.id == node.id) as any).y = node.y;
                      
                    //  if(doc.program && doc.program[_program_ix]){
                    //     let p = doc.program[_program_ix]
                    //     let n = p.nodes
                    //      if(n){
                    //         console.log("Nde", node.x, node.y);
                    //       //   console.log(doc.program.find((a) => a._id == program_id)?.nodes?.find((a) => a.id == node.id) as any);

                    //      (doc.program.find((a) => a._id == program_id)?.nodes?.find((a: any) => a.id == node.id) as any).x = node.x;
                    //     //   (doc.program.find((a) => a._id == program_id)?.nodes?.find((a) => a.id == node.id) as any).y = node.y;


                    //      }
                    //  }
                    }catch(e){
                        console.log(e)
                    }
                //     if(!doc.program || !doc.program.find((a) => a._id == program_id)?.nodes) return;
                //     let length = doc.program.find((a) => a._id == program_id)?.nodes?.length
                //     if(length != undefined && length > 0){
                //         console.log("UPDATE PROGRAM NODE", program.program?.find((a) => a._id == program_id)?.nodes)
                //    //  let _node = doc.program.find((a) => a._id == program_id)?.nodes?.map((a) => a._id) //== node._id)
                //     }
                    // if(_node == undefined) return;
                    // _node.x = node.x;
              
              
                    //      if(!programRef || !programRef.nodes) return;

                //   //   programRef = Object.assign({}, programRef.nodes)
                //     console.log("NODES", programRef.nodes[0])
                //      if(programRef && programRef.nodes  && programRef.nodes.length > 0){
                //         console.log("UPDATE NODE 1", program, programRef.nodes[0])

                //         let nodeRef = programRef.nodes.find((a: any) => a._id == node._id)
                //         console.log("UPDATE NODE 2", program, node)

                //         if(!nodeRef) return;
                //         for(var k in node){
                //           nodeRef[k] = (node as any)[k];
                //         }
                //         console.log("UPDATE NODE 3", program, node)

                    //}

                    // if(!nodeRef) return;
                    // console.log("PROGRAM REF", program, node, nodeRef, programRef)
                    // for(var k in node){
                    // //  nodeRef[k] = (node as any)[k];
                    // }
                })
            }}
            onPublish={(program) => {
                updateProject(  {args: {id: props.match.params.id, update: program}})
                console.log("PROGRAM", program)
            }}
            view={(query.view || 'program') as any}
            program={{
                _id: program?._id,
                name: program?.name || '',
                program: program.program?.map((x: any) => ({
                    ...x, 
                    nodes: Object.keys(x.nodes).map((y) => x.nodes[y]), 
                    paths: Object.keys(x.paths || {}).map((y) => x.paths[y]).map((y) => ({...y, points: Object.keys(y.points).map((z) => y.points[z])}))
                })) || [],
                hmi: program.hmi || [],
                io: [],
                plugins: stacks as any
            }} />
        </Suspense>
    )
}