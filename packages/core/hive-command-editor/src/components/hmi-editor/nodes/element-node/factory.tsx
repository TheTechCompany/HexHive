import React from "react";
import { AbstractWidgetFactory } from "@thetechcompany/live-ui"
import { ElementNodeWidget } from "./widget";

export class ElementNodeFactory extends AbstractWidgetFactory {

    private assets?: {[key: string]: any}

    constructor(assets?: {[key: string]: {component: any; ports: any}}){
        super('element-node')

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
        return <ElementNodeWidget asset={this.assets?.[event.extras ? event.extras.asset : '']} />
    }
}