
export abstract class AbstractFactory {
    protected type : string;

    constructor(type: string){
        this.type = type;
    }


    getType(): string {
        return this.type
    }
}