package com.nuraghenexus.GesCopAlleSorgenti.dto;

import com.nuraghenexus.GesCopAlleSorgenti.model.ExternalStructure;
import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long id;

    private Site site;
    private String name;
    private String surname;
    private String nationState;
    private String nationality;
    private Date birthDate;
    private String codFiscal;
    private Date dateIngIta;
    private Date dateIngStrut;
    private String legalSituation;
    private String idVestanet;
    private List<ExternalStructureDTO> externalStructureDTOList;
    private List<LowyerDTO> lowyerDTOList;


}