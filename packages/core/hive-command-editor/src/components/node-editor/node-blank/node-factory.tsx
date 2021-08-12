import React from "react";
import { AbstractWidgetFactory, PortWidget, RetractingPort } from "@hexhive/ui"
import { IStackItemsPorts } from "@hexhive/types";
import { NodeBlank } from "./NodeBlank";

export class NodeFactory extends AbstractWidgetFactory {

    private assets?: {[key: string]: any}

    constructor(assets?: {[key: string]: any}){
        super('new-node')

        this.assets = assets;
    }

    renderPort(port: any){
        switch(port.type){
            case 'retracting':
                return <RetractingPort />
            case 'port':
                return <PortWidget />
            default:
                return <PortWidget />
        }
    }

    parseModel(model: any){
        return {
            ...model
        }
    }

    generateWidget(event: any){
    
        return (
            <NodeBlank
                node={event}>
                {event.ports?.map((port : IStackItemsPorts) => React.cloneElement(this.renderPort(port), {...port}))}
                {this.assets?.["component"]}
            </NodeBlank>
        )
    }
}