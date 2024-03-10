package com.nuraghenexus.GesCopAlleSorgenti.model;

import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Site;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
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

    @ManyToMany
    private List<ExternalStructure> externalStructureList;

    @ManyToMany
    private List<Lowyer> lowyerList;



}
