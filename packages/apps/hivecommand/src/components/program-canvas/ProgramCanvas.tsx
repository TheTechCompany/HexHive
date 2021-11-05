import React, { useRef, useEffect, useState } from 'react';
import { Box, Button, Collapsible } from 'grommet'
import { IconNodeFactory, ActionNodeFactory, InfiniteCanvas, InfiniteCanvasNode, InfiniteCanvasPath, InfiniteCanvasPosition, ZoomControls } from '@hexhive/ui';
import { NodeDropdown } from '../node-dropdown';
import { Action, Trigger } from 'grommet-icons';
import { nanoid } from 'nanoid';

export interface ProgramCanvasProps {
	nodes: InfiniteCanvasNode[],
	paths: InfiniteCanvasPath[]

	onNodeUpdate?: (node: InfiniteCanvasNode) => void;
	onNodeCreate?: (position: InfiniteCanvasPosition, node: InfiniteCanvasNode) => void;

	onPathCreate?: (path: InfiniteCanvasPath) => void;

	selected?: any[];
	onSelect?: (selected: {key: "node" | "path", id: string}) => void;
	onDelete?: () => void;

	menu?: {
		key: string,
		icon: any,
		panel: any,
	}[]
}

export const ProgramCanvas : React.FC<ProgramCanvasProps> = (props) => {
	const [ nodes, setNodes ] = useState<InfiniteCanvasNode[]>([])
	
	const [ paths, _setPaths ] = useState<InfiniteCanvasPath[]>([])
    
    const pathRef = useRef<{paths: InfiniteCanvasPath[]}>({paths: []})

    const setPaths = (paths: InfiniteCanvasPath[]) => {
        _setPaths(paths)
        pathRef.current.paths = paths;
    }

    const updateRef = useRef<{addPath?: (path: any) => void, updatePath?: (path: any) => void}>({
        updatePath: (path) => {
            let p = pathRef.current.paths.slice()
            let ix = p.map((x) => x.id).indexOf(path.id)
            p[ix] = path;
            setPaths(p)
        },
        addPath: (path) => {
            let p = pathRef.current.paths.slice()
            p.push(path)
            setPaths(p)
        }
    })

	useEffect(() => {
		setPaths(props.paths)
	}, [props.paths])

	useEffect(() => {
		setNodes(props.nodes)
	}, [props.nodes])
	
	const [ menu, setMenu ] = useState<string>(undefined)


	return (
		<Box 
			direction="row"
			flex>
			<InfiniteCanvas 
			 	menu={(
				 	<Collapsible 
						onKeyPress={(e) => {
							console.log("KEY PRESS")
							e.preventDefault();
							e.stopPropagation()
						}}
						open={Boolean(menu)}
						direction="horizontal">
						<Box
							focusIndicator={false}
							onClick={(e) => {
								e.stopPropagation()
								e.preventDefault()
							}}
							pad={'xsmall'} 
							width="small">
								{/* {renderMenu()} */}
								{props.menu.find((a) => a.key == menu)?.panel}
						
						</Box>
					</Collapsible>
				)}
                editable={true}
                nodes={nodes}
				paths={pathRef.current.paths}
				selected={props.selected}
				onSelect={(key, id) => {
					props.onSelect?.({key, id})
				}}
				onDelete={props.onDelete}
                factories={[new IconNodeFactory()]}
                onPathCreate={(path) => {
            
                    updateRef.current?.addPath(path);
                }}
                onPathUpdate={(path) => {

					if(path.source && path.target){
						props.onPathCreate?.(path)
					}
                   
                    updateRef.current?.updatePath(path)
                }}
                onNodeUpdate={(node) => {
					let n = nodes.slice()
					let ix = n.map((x) => x.id).indexOf(node.id)

					n[ix] = {
						...n[ix],
						...node,
					}

					setNodes(n);

					props.onNodeUpdate?.(node)
				}}
                onDrop={(position, node) => {
					
					let n = nodes.slice()
					n.push({
						id: nanoid(),
						x: position.x,
						y: position.y,
						extras: {
                            icon: node.extras.icon
                        },
                        type: IconNodeFactory.TAG
					})
					setNodes(n)
					console.log(n)

					console.log("DROP")
					props.onNodeCreate?.(position, node)


				}}
                >

                <ZoomControls
                    anchor={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}  />
            </InfiniteCanvas>
			<Box
				elevation="small"
				background="accent-1"
				>

				{props.menu.map((menu_item) => (
					<Button 
						hoverIndicator
						icon={menu_item.icon}
						active={menu == menu_item.key}
						onClick={() => {
							if(menu == menu_item.key){
								setMenu(undefined)
							}else{
								setMenu(menu_item.key)
							}
						}} />
				))}
			</Box>
		</Box>
	)
}