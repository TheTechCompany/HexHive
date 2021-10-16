import React from "react";
import { AbstractWidgetFactory } from "../../../InfiniteCanvas";
import { IconNode } from "./IconNode";

export class IconNodeFactory extends AbstractWidgetFactory {

    public static TAG : string = 'icon-node';
    constructor(){
        super('icon-node')
    }

    public generateWidget(event: any): JSX.Element {
        return (<IconNode  {...event} />)
    }
    public parseModel(model: any) {
        
        return {
            ...model,
            ports: model.ports ? model.ports : [
                {
                    name: "in",
                    type: "base"
                    
                },
                {
                    name: 'out',
                    type: 'base'
                }
            ]
        }
    }

}