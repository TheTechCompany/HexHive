import React, { useContext, useEffect, useRef } from 'react';
import { InfiniteCanvasContext } from '../context/context';

export interface GridLayerProps {
}

const DIVISION = 3;

export const GridLayer: React.FC<GridLayerProps> = (props) => {

    const {
        zoom, 
        offset, 
        darkMode,
        snapToGrid,
        grid,
        style
    } = useContext(InfiniteCanvasContext)

    const lineColor =  {
        dark: style?.lineColor || "#131c20",
        light: "#dfdfdf"
    }

    const bgColor = {
        dark: style?.background || 'rgb(42, 42, 42)',
        light: 'white'
    }
    

    const backgroundColor = darkMode ? bgColor.dark : bgColor.light
    const lineColors = darkMode ? lineColor.dark : lineColor.light

    const svgRef = useRef<SVGSVGElement>(null);

    const renderHorizontal = () => {
        let horiz = []
        const w = (grid || {width: 100}).width / (grid?.divisions || 10)
        for (var i = 0; i < (grid?.divisions || 10); i++) {
            horiz.push(<line stroke={lineColors} x1='0.5' x2="99.5" y1={`${i * w}`} y2={`${i * w}`} />)
        }
        return horiz;
    }

    const renderVertical = () => {
        let vert = [];
     
        const h = (grid || {height: 100}).height / (grid?.divisions || 10)

        for (var i = 0; i < (grid?.divisions || 10); i++) {
            vert.push(<line stroke={lineColors} x1={`${i *  h}`} x2={`${i * h}`} y1="0.5" y2="99.5" />)
        }
        return vert;
    }

    useEffect(() => {

    }, [])

    const scaledTile = 100 * zoom;

    const offsetX = offset.x % scaledTile
    const offsetY = offset.y % scaledTile

    return (
        <svg ref={svgRef} style={{flex: 1, backgroundColor: backgroundColor}}>
            <defs>
                <pattern patternUnits="userSpaceOnUse" width={grid?.width || "100"} height={grid?.height || "100"} viewBox="0 0 100 100" id="cells">
                    <rect x="0" y="0" width={grid?.width || "100"} height={grid?.height || "100"} fill="none" style={{strokeWidth: 2, stroke: lineColors}}></rect>
                    {renderHorizontal()}
                    {renderVertical()}
                </pattern>
                <pattern patternUnits="userSpaceOnUse" width={scaledTile} height={scaledTile} viewBox={`0 0 ${scaledTile} ${scaledTile}`} id="cell-rect">
                    <rect 
                        x="-100" 
                        y="-100" 
                        width="300" 
                        height="300" 
                        style={{
                            fill: "url(#cells)",
                            transformOrigin: '0 0',
                            transform: `matrix(${zoom}, 0, 0, ${zoom}, ${offsetX}, ${offsetY})`
                        }}>

                    </rect>
                </pattern>
            </defs>

            <rect height="100%" width="100%" fill="url(#cell-rect)" />
        </svg>
    )
}