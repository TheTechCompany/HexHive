import { Box, Text, Button } from 'grommet';
import { VariableSizeNodeData, VariableSizeTree as Tree, TreeWalker  } from 'react-vtree'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as Icons from 'grommet-icons'
import { StackItemModal } from '../../modals/stacks/item'
import useResizeAware from 'react-resize-aware'
import { size } from 'lodash';
import { Stack, StackItems } from '@hexhive/types/dist/interfaces';
import { TreeView } from '../../components/tree-view';

type TreeNode = Readonly<{
    children?: TreeNode[];
    id: string;
    name: string;
  }>;
  
  type NodeMeta = Readonly<{
    nestingLevel: number;
    node: TreeNode;
  }>;
  type ExtendedData = VariableSizeNodeData &
  Readonly<{
    isLeaf: boolean;
    name: string;
    nestingLevel: number;
  }>;

  
export interface PluginEditorMenuProps{
    selected?: any;
    onClick?: (id: any) => void;
    onAdd?: (item: any) => void;

    plugin?: Stack
}

const defaultGapStyle = {marginLeft: 6};
const defaultButtonStyle = {fontFamily: 'Courier New'};


const Node: FC<any> = ({
height,
data: {isLeaf,isSelected, onRightAction, onClick, name, nestingLevel},
isOpen,
resize,
style,
items = [],
setOpen,
treeData: itemSize,
}) => {
const canOpen = height <= itemSize;
const halfSize = itemSize / 2;

const toggleNodeSize = useCallback(
  () => resize(canOpen ? height + halfSize : height - halfSize, true),
  [height, resize],
);

return (
  <div
    onClick={onClick}
    style={{      
        paddingTop: 4,
        paddingBottom: 4,
      alignItems: 'center',
      display: 'flex',
      cursor: 'pointer',
      background: isSelected ? 'rgba(127, 127, 127, 0.3)' : 'none',
      paddingLeft: 8 + (nestingLevel * 12 + (isLeaf ? 12 : 0)),
    }}
  >
    {!isLeaf && (
      <div>
        <Button
            plain
            size="small"
            icon={isOpen ? <Icons.Down size="small" /> : <Icons.Next size="small" />}
            onClick={(e) => {
                e.stopPropagation();
                setOpen(!isOpen)
            }} />
      </div>
    )}
    
    <Box 
        flex   
        align="center"
        margin={{left: 'small'}}
        direction="row">
        {!isLeaf ? <Icons.Folder size="small" /> : <Icons.Document size="small"/> } 
        <div style={defaultGapStyle}>{name}</div>
    </Box>

    {!isLeaf && (
        <Button
            onClick={onRightAction}
            style={{padding: 4}}
            hoverIndicator
            icon={<Icons.Add  size="small"/>} />
    )}
   
 
  </div>
);
};
      

export const PluginEditorMenu : React.FC<PluginEditorMenuProps> = (props) => {

    const [ modalOpen, openModal ] = useState<boolean>(false)

    const treeRef = useRef<Tree<ExtendedData>>(null)
    const [resizeListener, sizes] = useResizeAware();


    const nodeMap = (node: any) => {
        return {
            id: node._id || '',
            name: node.name || '',
            children: node.children?.map(nodeMap)
        }
    }

    const nodes = [{
        id: 'root',
        name: 'Plugin',
        children: props.plugin?.items?.map(nodeMap)
    }]

      // This helper function constructs the object that will be sent back at the step
      // [2] during the treeWalker function work. Except for the mandatory `data`
      // field you can put any additional data here.
      const getNodeData = (
        node?: TreeNode,
        nestingLevel?: number,
        itemSize?: number,
      ): any => ({
        data: {
          defaultHeight: itemSize,
          id: node?.id.toString(),
          isLeaf: (node?.children || []).length == 0,
          isSelected: node?.id == props.selected,
          onClick: () => ((node?.children || []).length == 0) && props.onClick?.(node?.id),
          onRightAction: () => openModal(true),
          isOpenByDefault: true,
          name: node?.name,
          nestingLevel,
        },
        isOpen: false,
        nestingLevel,
        node,
      });
      
//{data: {isLeaf, name}, isOpen, style, setOpen}: any

    function* treeWalker() : ReturnType<TreeWalker<ExtendedData, NodeMeta>>{
        // Step [1]: Define the root node of our tree. There can be one or
        // multiple nodes.
        let plugins = [{
            _id: 'root',
            name: 'Plugin',
            children: nodes || []
        }]

        for (let i = 0; i < plugins.length; i++) {
            let item = plugins?.[i]

            yield getNodeData({
                id: item?._id || `${i}`,
                name: item?.name || '',
                children: item.children || []
            }, 0, 20);
        }
      
        while (true) {
          // Step [2]: Get the parent component back. It will be the object
          // the `getNodeData` function constructed, so you can read any data from it.
          const parent = yield;
      
          for (let i = 0; i < (parent.node.children || []).length; i++) {
            // Step [3]: Yielding all the children of the provided component. Then we
            // will return for the step [2] with the first children.
            yield getNodeData(parent.node.children?.[i], parent.nestingLevel + 1, 20);
          }
        }
      }

    useEffect(() => {
        console.log(treeRef.current)
    }, [props.selected])

    useEffect(() => {
        if(treeRef.current){
     //       treeRef.current.recomputeTree({})
        }
    }, [props.plugin?.items])
      
    return (
        <Box   
            style={{height: '100%', position: 'relative'}}
            elevation="medium"
            width="18vw">
            
            <StackItemModal 
                onSubmit={(item: any) => {
                    props.onAdd?.(item)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)}/>

            
            <Box
                margin={{top: '8px'}} 
                flex>
            {resizeListener}
            <TreeView 
                nodes={nodes}
                width={`${sizes.width || 100}px`} />
            </Box>
            
        </Box>
    )
}   