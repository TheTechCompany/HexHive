import React from "react";
import { AbstractWidgetFactory } from "../../../InfiniteCanvas";
import { StartNode } from "./StartNode";

export class StartNodeFactory extends AbstractWidgetFactory {

    constructor(){
        super('start-node')
    }

    generateWidget(event: any): JSX.Element {
        return (<StartNode  {...event} />)
    }
    parseModel(model: any) {
        return {
            ...model,
            ports: model.ports ? model.ports : [
                {
                    name: 'out',
                    type: 'base'
                }
            ]
        }
    }

}