// import { Tablet } from '@thetechcompany/live-ui';
import React, {useRef, useState, useEffect} from 'react';
import styled from 'styled-components'

export interface DrawerPaneProps {
    menu?: {
        label?: string;
        icon?: any;
        pane?: any;
    }[]

    titleBar?: JSX.Element;
    selected?: any;
    onSelect?: (menu_item: any, ix: number | null) => void;

    className?: string;
}

export const BaseDrawerPane : React.FC<DrawerPaneProps> = (props) => {

    const drawerBase = useRef<HTMLDivElement>(null);

    const [selected, setSelected ] = useState<number>(-1)

    const _setSelected = (menu: any, ix? :number) => {
        ix != null && setSelected(ix)
    }

    useEffect(() => {
        if(props.selected){
            setSelected(props.selected)
        }
    }, [props.selected])

    const toggleSelection = (ix: number) => {
        const selectFunc = props.onSelect ? props.onSelect : _setSelected;
        if(selected == ix){
            selectFunc(null, -1)
        }else{
            selectFunc(props.menu?.[ix], ix)
        }
    }
    return null;
    // return (
    //     // <Tablet 
    //     //     selected={props.selected}
    //     //     onSelect={(ix) => toggleSelection(ix)}
    //     //     menu={props.menu}>
    //     //     {props.children}
    //     // </Tablet>
    // )
}

export const DrawerPane = styled(BaseDrawerPane)`
    display: flex;
    flex: 1;
    position: relative;
    height: 100%;
    flex-direction: column;
    width: calc(100% - 10px);

    .drawer-base{
        flex: 1;
        display: flex;
    }

    .drawer-pane__body{
        flex: 1;
        display: flex;
    }

    .drawer-pane__drawer{
        width: 0;
        transition: width 250ms ease-out;
        top: 0;
        bottom: 0;
        right: 60px;
        overflow-y: auto;
        height: 100%;
    }

    .drawer-pane__drawer.open{
        width: 250px;
    }

    .drawer-pane__drawer.open .drawer-pane__body{
        width: calc(100% - 250px);
    }

    .drawer-pane__menu {
        max-width: 60px;
        display: flex;
        flex-direction: column;

        background-color: teal;
        
    }

    .drawer-pane__menu-item{
        height: 50px;
        width: 50px;
    }

    .drawer-pane__menu .MuiSvgIcon-root{
        color: white;
        font-size: 40px;
    }
`
