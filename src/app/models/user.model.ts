import { ExternalStructureDTO } from "./externalStructure.model";
import { LowyerDTO } from "./lowyer.model";

export interface UserDTO {
    id: number;
    site: string;
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
    lowyer:LowyerDTO;
    externalStructure: ExternalStructureDTO;
}