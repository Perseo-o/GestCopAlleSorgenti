package com.nuraghenexus.GesCopAlleSorgenti.dto;

import com.nuraghenexus.GesCopAlleSorgenti.model.ExternalStructure;
import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
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
    private LocalDate birthDate;
    private String codFiscal;
    private LocalDate dateIngIta;
    private LocalDate dateIngStrut;
    private String legalSituation;
    private String idVestanet;
    private Boolean active;
    private List<ExternalStructureDTO> externalStructureDTOList;
    private List<LawyerDTO> lawyerDTOList;


}