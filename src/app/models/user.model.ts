import { ExternalStructureDTO } from "./externalStructure.model";
import { LawyerDTO } from "./lawyer.model";

export interface UserDTO {
    id: number;
    site: Site;
    name: string;
    surname: string;
    nationState: string;
    nationality: string;
    birthDate: Date; 
    codFiscal: string;
    dateIngIta: Date; 
    dateIngStrut: Date; 
    legalSituation: string;
    idVestanet: string;
    active: boolean;
    lawyerDTOList:LawyerDTO[];
    externalStructureDTOList: ExternalStructureDTO[];
}

export enum Site {
    COP_SORG_IGL = 'COP_SORG_IGL',
    COP_SORG_MONT = 'COP_SORG_MONT'
}