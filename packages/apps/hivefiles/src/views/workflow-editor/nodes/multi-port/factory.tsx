import React from "react";
import { AbstractWidgetFactory } from "@hexhive/ui"
import { MultiportNodeWidget } from "./widget";

export class MultiportNodeFactory extends AbstractWidgetFactory {

    private assets?: {[key: string]: any}

    constructor(assets?: {[key: string]: {component: any; ports: any}}){
        super('multiport-node')

        this.assets = assets;
    }

    parseModel(model: any){
        console.log(model)
        return {
            ...model,
            ports: model.ports ? model.ports : this.assets?.[model.extras.asset].ports
        }
    }

    generateWidget(event: any){
        console.log(event)
        return <MultiportNodeWidget node={event} asset={this.assets?.[event.extras ? event.extras.asset : '']} />
    }
}