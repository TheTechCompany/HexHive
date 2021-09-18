import { Box } from 'grommet';
import React from 'react';
import {Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export interface ComposerProps {
    
}

export const Composer : React.FC<ComposerProps> = (props) => {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ];
    return (
        <Box
            flex
            background="neutral-1">
                <ResponsiveGridLayout 
                        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
                    className="layout"
                     layouts={{lg: layout}} 
                         rowHeight={30}>
                    <Box elevation="small" key="a">a</Box>
                    <Box elevation="small"  key="b">b</Box>
                    <Box elevation="small"  key="c">c</Box>
                </ResponsiveGridLayout>
        </Box>
    )
}