import React, { useCallback, FC } from "react";
import { Box, Button } from 'grommet'
import * as Icons from 'grommet-icons'

const defaultGapStyle = { marginLeft: 6 };

export const TreeNode: FC<any> = (props) => {
const {
    height,
    data: { isLeaf, isSelected, onRightAction, onClick, name, nestingLevel },
    isOpen,
    resize,
    style,
    items = [],
    toggle,
    treeData: itemSize,
} = props;

    console.log(props)

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
                        hoverIndicator
                        style={{padding: 6, borderRadius: 3}}
                        size="small"
                        icon={isOpen ? <Icons.Down size="small" /> : <Icons.Next size="small" />}
                        onClick={(e) => {
                            e.stopPropagation();
                            toggle(!isOpen)
                        }} />
                </div>
            )}

            <Box
                flex
                align="center"
                margin={{ left: 'small' }}
                direction="row">
                {(!isLeaf || nestingLevel == 0) ? <Icons.Folder size="small" /> : <Icons.Document size="small" />}
                <div style={defaultGapStyle}>{name}</div>
            </Box>

            {(!isLeaf || nestingLevel == 0) && (
                <Button
                    onClick={onRightAction}
                    style={{ padding: 4 }}
                    hoverIndicator
                    icon={<Icons.Add size="small" />} />
            )}


        </div>
    );
};

