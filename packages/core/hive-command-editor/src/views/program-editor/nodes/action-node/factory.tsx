import React from 'react';
import { AbstractWidgetFactory } from "@thetechcompany/live-ui";
import { ActionNodeWidget } from "./widget";

export interface ActionDevice {
    _id?: string;
    name?: string;
    actions?: string[]
}

export class ActionNodeFactory extends AbstractWidgetFactory{

    private devices: ActionDevice[];

    constructor(devices: ActionDevice[]){
        super('action-node')

        this.devices = devices;
    }

    parseModel(model: any){
        return {
            ...model,
            ports: model.ports ? model.ports : [
                {
                    type: 'base',
                    name: 'inlet'
                },
                {
                    type: 'base',
                    name: 'outlet'
                }

            ]
        }
    }

    generateEditor(){
        return (
            <div>
                
            </div> 
        );
    }

    generateWidget(event : any): JSX.Element {
        return <ActionNodeWidget  />
    }

}