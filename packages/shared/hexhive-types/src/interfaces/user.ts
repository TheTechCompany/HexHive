export interface IUser {
    id: string;
    name? : string
    email? : string
    active? : boolean;
    organisation? : string, //{ type: Schema.Types.ObjectId, ref: 'Organisation'}, 
    readonly? : boolean, 
    type?: string 
}