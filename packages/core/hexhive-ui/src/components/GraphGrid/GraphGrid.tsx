import React, { useState } from "react";
import { Box, Text, Button } from "grommet";
import { Close } from "grommet-icons";
import RGL, {
  Responsive,
  WidthProvider,
} from "react-grid-layout";
import { GraphContainer } from "./GraphContainer";

import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// const ReactGridLayout = WidthProvider(RGL);
const ResponsiveGridLayout = WidthProvider(Responsive);

export interface GridLayout {
	i: string;
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface GridLayoutItem {
	id: string;
	label?: string;
	total?: string;
  extras?: any;
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface GraphGridProps {
  onLayoutChange: (layout: GridLayout[]) => void;
  layout: GridLayoutItem[]
  children: (item: GridLayoutItem) => React.ReactNode;
  noWrap?: boolean;

  rowHeight?: number;
  cols?: {
    [key: string]: number;
  };
  breakpoints?: {
    [key: string]: number;
  };
}

export const GraphGrid: React.FC<GraphGridProps> = (props) => {
  const [layouts, setLayouts] = useState(null);
  const [widgetArray, setWidgetArray] = useState([]);

//   const handleModify = (layouts, layout) => {
//     const tempArray = widgetArray;
//     setLayouts(layout);
//     layouts?.map((position) => {
//       tempArray[Number(position.i)].x = position.x;
//       tempArray[Number(position.i)].y = position.y;
//       tempArray[Number(position.i)].width = position.w;
//       tempArray[Number(position.i)].height = position.h;
//     });
//     setWidgetArray(tempArray);
//   };

  return (
    <Box flex>
      {/* {props.children} */}
      <ResponsiveGridLayout
        rowHeight={props.rowHeight || 30}
        layouts={{lg: props.layout.map((x) => ({...x, i: x.id}))}}
        onLayoutChange={props.onLayoutChange}
        cols={props.cols || {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
		    breakpoints={props.breakpoints || { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        className="rgl"
      >
      {props.layout.map((item) => (
        <div style={{display: 'flex'}} key={item.id}>
          {props.noWrap ? props.children(item) : (
          <GraphContainer dataKey={item.id} label={item.label} total={item.total} onRemove={() => {}}>
            {props.children?.(item)}
          </GraphContainer>
          )}
        </div>
		  ))}
      </ResponsiveGridLayout>
    </Box>
  ); //<div>{props.children}</div>;
};