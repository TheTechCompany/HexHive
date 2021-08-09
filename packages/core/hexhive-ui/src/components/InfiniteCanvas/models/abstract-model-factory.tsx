import { AbstractFactory } from "./abstract-factory";

export interface GenerateModelEvent{
    initialConfig?: any;
}

export abstract class AbstractModelFactory extends AbstractFactory {

}