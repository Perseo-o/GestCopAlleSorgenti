package com.nuraghenexus.GesCopAlleSorgenti.model;

import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Site;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long idGhost;
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
    @ManyToMany
    private List<ExternalStructure> externalStructureList;

    @ManyToMany
    private List<Lawyer> lawyerList;



}
