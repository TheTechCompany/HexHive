import { Box, Text, Button } from 'grommet';
import { VariableSizeNodeData, VariableSizeTree as Tree } from 'react-vtree'
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import * as Icons from 'grommet-icons'
import useResizeAware from 'react-resize-aware'
import { size } from 'lodash';
import { TreeNode } from './TreeNode';
import { WidthType } from 'grommet/utils';

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
        parent: string;
    }>;


export interface TreeViewProps {
    selected?: any;
    onClickRow?: (id: any) => void;
    onAddItem?: (pwd: any) => void;

    nodes: TreeNode[]

    width?: WidthType;
}

const defaultGapStyle = { marginLeft: 6 };
const defaultButtonStyle = { fontFamily: 'Courier New' };


export const TreeView: React.FC<TreeViewProps> = ({
    nodes = [],
    width,
    onAddItem,
    onClickRow,
    selected
}) => {

    const treeRef = useRef<Tree<ExtendedData>>(null)
    const [resizeListener, sizes] = useResizeAware();

    const [ _selected, setSelected ] = useState<string>()


    const onClick = (id?: string, parent?: string) => {
        setSelected(id)
        onClickRow?.(parent)
    }

    // This helper function constructs the object that will be sent back at the step
    // [2] during the treeWalker function work. Except for the mandatory `data`
    // field you can put any additional data here.
    const getNodeData = (
        node?: TreeNode,
        parent?: string,
        nestingLevel?: number,
        itemSize?: number,
    ): any => ({
        data: {
            defaultHeight: itemSize,
            id: node?.id.toString(),
            isLeaf: (node?.children || []).length == 0,
            isSelected: node?.id == (selected || _selected),
            onClick: () => ((node?.children || []).length == 0) && onClick?.(node?.id, parent),
            onRightAction: () => onAddItem?.(parent),
            isOpenByDefault: true,
            name: node?.name,
            nestingLevel,
            parent: parent,
        },
        isOpen: false,
        nestingLevel,
        node,
    });

    //{data: {isLeaf, name}, isOpen, style, setOpen}: any

    function* treeWalker(): ReturnType<any> {
        // Step [1]: Define the root node of our tree. There can be one or
        // multiple nodes.

        for (let i = 0; i < nodes.length; i++) {
            let item = nodes?.[i]

            yield getNodeData({
                id: item?.id || `${i}`,
                name: item?.name || '',
                children: item.children || []
            }, item.id, 0, 20);
        }

        while (true) {
            // Step [2]: Get the parent component back. It will be the object
            // the `getNodeData` function constructed, so you can read any data from it.
            const parent = yield;

            for (let i = 0; i < (parent.node.children || []).length; i++) {
                // Step [3]: Yielding all the children of the provided component. Then we
                // will return for the step [2] with the first children.
                yield getNodeData(parent.node.children?.[i], `${parent?.data.parent}.${parent.node.children?.[i].id}`, parent.nestingLevel + 1, 20);
            }
        }
    }

    return (
        <Box
            style={{ height: '100%', position: 'relative' }}
            elevation="medium"
            width={width || '18vw'}>

            <Box
                margin={{ top: '8px' }}
                flex>
                {resizeListener}
                <Tree
                    async
                    ref={treeRef}
                    order
                    height={sizes.height || 100}
                    treeWalker={treeWalker}
                    itemSize={() => 30}
                    width={sizes.width || 100}>
                    {TreeNode}
                </Tree>
            </Box>

        </Box>
    )
}