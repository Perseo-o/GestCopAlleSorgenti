package com.nuraghenexus.GesCopAlleSorgenti.model;

import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Site;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Site site;
    private String name;
    private String surname;
    private String nationState;
    private String nationality;
    private LocalDateTime birthDate;
    private String codFiscal;
    private LocalDateTime dateIngIta;
    private LocalDateTime dateIngStrut;
    private String legalSituation;
    private String idVestanet;

    @ManyToMany
    private List<ExternalStructure> externalStructureList;

    @ManyToMany
    private List<Lawyer> lawyerList;



}
