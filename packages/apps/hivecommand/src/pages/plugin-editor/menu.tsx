import { Box, Text, Button, List } from 'grommet';
// import { VariableSizeNodeData, VariableSizeTree as Tree, TreeWalker  } from 'react-vtree'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as Icons from 'grommet-icons'
// import { StackItemModal } from '../../modals/stacks/item'
import useResizeAware from 'react-resize-aware'
import { size } from 'lodash';
import { IStack, IStackItems } from '@hexhive/types';
import { TreeView } from '@hexhive/ui';

type TreeNode = Readonly<{
    children?: TreeNode[];
    id: string;
    name: string;
  }>;
  
  // type NodeMeta = Readonly<{
  //   nestingLevel: number;
  //   node: TreeNode;
  // }>;
  // type ExtendedData = VariableSizeNodeData &
  // Readonly<{
  //   isLeaf: boolean;
  //   name: string;
  //   nestingLevel: number;
  // }>;

  
export interface PluginEditorMenuProps{
    selected?: any;
    onClick?: (id: any) => void;
    onAdd?: (item: any) => void;

    plugin?: IStack
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

    // const treeRef = useRef<Tree<ExtendedData>>(null)
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
  
      
//{data: {isLeaf, name}, isOpen, style, setOpen}: any



      
    return (
        <Box
          background="neutral-1"   
            style={{height: '100%', position: 'relative'}}
            elevation="medium"
            width="18vw">
            
            <Box pad="xxsmall" justify="between" direction="row">
              <Text size="small">Items</Text>
              <Button 
                hoverIndicator
                onClick={props.onAdd}
                plain
                style={{padding: 6, borderRadius: 3}}
                size="small" 
                icon={<Icons.Add size="small" />} />
            </Box>
            
            {/* <StackItemModal 
                onSubmit={(item: any) => {
                    props.onAdd?.(item)
                }}
                open={modalOpen} 
                onClose={() => openModal(false)}/> */}

            
            <Box flex>
                <List 
                  onClickItem={(data) => props.onClick(data.item)}
                  primaryKey="name"
                  data={props.plugin?.items} />
            </Box>
            
        </Box>
    )
}   