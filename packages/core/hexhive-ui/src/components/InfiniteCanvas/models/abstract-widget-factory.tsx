import { AbstractFactory } from "./abstract-factory";


export interface GenerateWidgetEvent<T>{
    model: T
}

export abstract class AbstractWidgetFactory extends AbstractFactory {

    abstract generateWidget(event: any): JSX.Element;

    abstract parseModel(model: any): any;
}