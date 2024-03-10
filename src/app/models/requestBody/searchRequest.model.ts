export interface SearchRequest{
    name: string;
    id: number;
    option: Option;
}
export enum Option {
    NAME = 'Nome',
    ID = 'ID'
}