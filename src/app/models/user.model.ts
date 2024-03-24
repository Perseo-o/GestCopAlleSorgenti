
import { DoctorDTO } from "./doctor.model";
import { ImageDTO } from "./image.model";
import { LawyerDTO } from "./lawyer.model";

export interface UserDTO {
    id: number;
    idGhost: number;
    idHeadFamily: number;
    idVestanet: String;
    idCui: String;
    surname: String;
    name: String;
    birthDate: Date;
    sex: Sex;
    nationState: String;
    codFiscal: String;
    site: Site;
    dateIngIta: Date;
    dateIngStrut: Date;
    formC3: Date;
    expiryPermit: Date;
    languages: String;
    schooling: String;
    legalSituation: String;
    active: boolean;
    note: String;
    imageDTO: ImageDTO;
    lawyerDTOList: LawyerDTO[];
    doctorDTOList: DoctorDTO[];
}

export enum Site {
    NULL='NULL',
    COP_SORG_IGL = 'COP_SORG_IGL',
    COP_SORG_MONT = 'COP_SORG_MONT'
}
export enum Sex {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}