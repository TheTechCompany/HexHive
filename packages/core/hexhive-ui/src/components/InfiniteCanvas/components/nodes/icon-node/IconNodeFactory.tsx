import React from "react";
import { AbstractWidgetFactory } from "../../../InfiniteCanvas";
import { IconNode } from "./IconNode";

export class IconNodeFactory extends AbstractWidgetFactory {

    constructor(){
        super('icon-node')
    }

    generateWidget(event: any): JSX.Element {
        return (<IconNode  {...event} />)
    }
    parseModel(model: any) {
        
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