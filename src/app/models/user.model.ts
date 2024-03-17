import { ExternalStructureDTO } from "./externalStructure.model";
import { LowyerDTO } from "./lowyer.model";

export interface UserDTO {
    id: number;
    site: Site;
    name: string;
    surname:string;
    nationState:string;
    nationality:string;
    birthDate:string;
    codFiscal:string;
    dateIngIta:string;
    dateIngStrut:string;
    legalSituation:string;
    idVestanet:string;
    active:Boolean;
    lawyers:LowyerDTO[];
    externalStructures: ExternalStructureDTO[];
}

export enum Site {
    COP_SORG_IGL = 'COP_SORG_IGL',
    COP_SORG_MONT = 'COP_SORG_MONT'
}