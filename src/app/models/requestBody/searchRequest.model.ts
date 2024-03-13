export interface SearchRequest{
    name: string;
    id: number;
    option: Option;
    active: boolean;
}
export enum Option {
    NAME = 'NAME',
    ID = 'ID'
}