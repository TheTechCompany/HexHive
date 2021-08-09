import { AbstractWidgetFactory } from "../../../InfiniteCanvas";
import { InfiniteCanvasNode } from "../../../types/canvas";
import { ActionNodeWidget } from "./widget";

export class ActionNodeFactory extends AbstractWidgetFactory{
   

    constructor(){
        super('action-node')
    }

    parseModel(model: any){ 
        let m : InfiniteCanvasNode = {
            id: model.id,
            type: model.type,
            x: model.x,
            y: model.y,
            ports: model.ports ? model.ports : [
                {
                    name: "inlet",
                    type: "base"
                    
                },
                {
                    name: 'outlet',
                    type: 'base'
                }
            ]
        }
        
        return m;
    }

    generateWidget(event : any): JSX.Element {
        return <ActionNodeWidget  />
    }

}