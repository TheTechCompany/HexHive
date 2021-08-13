import React from 'react';
const { TiledHexagons } = require('tiled-hexagons')

export interface AppPickerProps {
    apps?: {
        icon: any;
        text?: string;
        onClick?: () => void;
    }[]
}

export const AppPicker : React.FC<AppPickerProps> = (props) => {
    return (
        <TiledHexagons
            maxHorizontal={5}
            tileSideLengths={60}
            tileElevations={16}
            tileGap={7}
            tileBorderRadii={9}
            tiles={props.apps?.map(app => {
                return { img: app.icon, onClick: app.onClick }
            })} />
    );
}   