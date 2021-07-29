export interface IO {
    _id?: string;
    name?: string;
    type?: string;
}

export interface IOInput {
    name: string,
    type: string,
    typeData: any
}

export interface IOOutput {
    name: string,
    type: string,
    typeData: any
}