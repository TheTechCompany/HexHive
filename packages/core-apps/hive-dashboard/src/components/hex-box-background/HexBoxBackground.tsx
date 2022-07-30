import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Add } from 'grommet-icons';
import { HexBox } from './HexBox';
import useResizeAware from 'react-resize-aware';
import { HexButton } from './HexButton';
import { HexCell } from './HexCell';
import {  HexHiveTheme } from '@hexhive/styles'

const COLORSCHEME = [
    'rgb(201, 210, 189)',
    'rgb(190, 198, 178)',
    'rgb(179, 187, 163)',
    'rgb(201, 210, 189)',
    'rgb(179, 187, 163)',
    'rgb(190, 198, 178)',
    'rgb(201, 210, 189)',
    'rgb(190, 198, 178)',
    'rgb(179, 187, 163)'
    // 'rgb(113, 114, 137)',
    // 'rgb(167, 181, 153)',
    // 'rgb(94, 87, 85)',
    // 'rgb(209, 185, 169)',
    // 'rgb(180, 180, 210)'
]

export interface BoxAction {
    top?: number,
    left?: number,
    path?: string, 
    icon?: any, 
    title?: string
    dev?: boolean
}
export interface BoxBackgroundProps {
    apps?: any[];
    edit?: boolean;
    actions?: BoxAction[]
    onAction?: (action: BoxAction) => void;
    onAdd?: () => void;
    size?: {background?: number, actions: number};
    onActionsChanged: (actions: BoxAction[]) => void,
    className?: string;
    noBackground?: boolean;

    onClick?: (item: {x: number, y: number}) => void;
}

const BaseBoxBackground : React.FC<BoxBackgroundProps> = ({
    className,
    onAction,
    noBackground = false,
    size = { background: 3, actions: 6},
    actions,
    onActionsChanged,
    onAdd,
    children,
    edit,
    apps,
    onClick
}) => {

    console.log({actions})
    
    const [ resizeListener, sizes ] = useResizeAware();


    const MAX_WIDTH = Math.floor((sizes.width || (window.innerWidth / 1.8)) / (60 * ((size.background || 3) / 3)));
    const MAX_HEIGHT = Math.floor((sizes.height ||( window.innerHeight / 2)) / (50 * ((size.background || 3) / 3)));


    const Cubes = useMemo(() => {
        return Array.from(new Array(MAX_WIDTH * MAX_HEIGHT)).map((x, ix) => ix)
    }, [sizes.width, sizes.height])


    const getBoxPosition = (ix: number) => {
        let row = Math.floor( ix / MAX_WIDTH )
        
        let left = ((ix % MAX_WIDTH) * (size.background * 1.4)) + ((row % 2 == 0) ? (size.background * 0.7): 0 )
        let top = ((size.background * 1.2) * row)

        return {left, top}
    }

    const CubeMap = useMemo(() => {
        return Cubes.map((x, ix) => {
            let color_ix = ix * 3;
            let color1 = COLORSCHEME[color_ix % 5];
            let color2 = COLORSCHEME[(color_ix + 1) % 5];
            let color3 = COLORSCHEME[(color_ix + 2) % 5];

        return (
            <HexBox 
                flatPak={false}
                leftColor={color1} 
                topColor={color2} 
                rightColor={color3} 
                size={size.background} 
                {...getBoxPosition(ix)} />
        )})
    }, [Cubes])

    const BUTTON_SIZE = 5;

    let HALF_WIDTH = Math.floor(MAX_WIDTH / 2)
    let HALF_HEIGHT = Math.floor(MAX_HEIGHT / 2)

    let ratio = (size.actions / size.background);


    const changeCell = (pos: {x: number, y: number}, item: any) => {
        let a = actions.slice()


        let cell = a.find((a) => a.left == pos.x && a.top == pos.y)
        if(cell){

            let ix = actions.map((x) => x.path).indexOf(cell.path)

            a[ix]['title'] = item;
        
        }else{
            a.push({
                icon: <Add />,
                left: pos.x,
                top: pos.y,
                path: item,
                title: item
            })
        }
        onActionsChanged?.(a)
    }

    const renderActions = () => {
        //1.74
        
        let top = (HALF_HEIGHT - 2.1) / (size.actions / size.background);
        let mid = (HALF_WIDTH + 0.42) /(size.actions / size.background)

        let action_length = actions.length;

        let action_elements = [];
        for(var i = -(action_length / 2); i < action_length / 2; i++){
            const item = actions[(action_length / 2) + i]
            action_elements.push(
                <HexButton 
                    dev={item.dev}
                    onClick={() => onAction(item)}
                    top={item.top}
                    logo={item.icon}
                    left={item.left}
                    size={size.actions}
                    text={item.title} />)
        }
        return action_elements;
    }

    const renderEditor = (edit: boolean) => {
        let elems = [];
        for(var i = -1; i < (MAX_WIDTH / ratio) + 1; i++){
                for(var o = -1; o < (MAX_HEIGHT / ratio) + 1; o++){

                    const x = i;
                    const y = o;
                    
                    let action = actions.find((a) => a.top == o && a.left == i)
                    // console.log("ACTION", actions)

                    if(action) {
                        elems.push(
                        <HexButton 
                            dev={action.dev}
                            onClick={() => onClick({x, y})}
                            top={action?.top}
                            left={action?.left}
                            logo={action?.icon}
                            size={size?.actions}
                            text={action?.title}
                            />
                        )
                    }else{
                        const left = i;
                        const top = o;
                        elems.push(
                        <HexCell 
                            background={!edit}
                            apps={apps || []} 
                            top={o} 
                            left={i} 
                            opacity={'0.3'}
                            onClick={() => {
                            onClick({x, y})
                        }} size={size?.actions} />)
                    }
                }
        }
        return elems
    }

    
    let top = (HALF_HEIGHT - 2.1) / (size.actions / size.background);
    let mid = (HALF_WIDTH + 0.42) /(size.actions / size.background)

    return (
        <div className={className}>
       
            <div className="container">

            <div className="action-container">
          
                {/* {children} */}
                {edit != undefined && edit != null && edit ? renderEditor(true) : renderEditor(false)}
            </div>
            
            {/* {renderActions()}
            {onAdd ? <HexButton
                onClick={onAdd}
                top={top + 0.84}
                left={mid + 1}
                logo={<Add />}
                size={size.actions} /> : null}

            </div>            */}
         
            {resizeListener}
            {!noBackground && CubeMap}
            </div>
        </div>
    );
}

export const HexBoxBackground = styled(BaseBoxBackground)`

position: absolute;
z-index: 0;
top: 60px;
right: 0;
left: 0;
bottom: 0;

.container:before {
    content: " ";
    display: block;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: absolute;
    z-index: -1; 

    background-color: ${HexHiveTheme.palette.primary.main};
    opacity: 0.3;
}

.action-container {
    -webkit-transform-style: preserve-3d;

    top: 0;

    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 12;
}

.container {
    
    position: relative;
    height: 100%;
    width: 100%;
}


`

/*
box-shadow: 0 0 0 .1em hsla(0,0%,0%,.2);

background-color: hsla(0,0%,0%,.1);
background-image: -webkit-linear-gradient(hsla(0,0%,0%,.1) 2.5%, transparent 2.5%, transparent 97.5%, hsla(0,0%,0%,.1) 97.5%),
                  -webkit-linear-gradient(left, hsla(0,0%,0%,.1) 2.5%, transparent 2.5%, transparent 97.5%, hsla(0,0%,0%,.1) 97.5%);

*/