package com.nuraghenexus.GesCopAlleSorgenti.model;

import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.Sex;
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

    @Column(unique = true)
    private Long idGhost;

    private Long idHeadFamily;
    private String idVestanet;
    private String idCui;
    private String surname;
    private String name;
    private LocalDate birthDate;
    private Sex sex;
    private String nationState;
    private String codFiscal;
    private Site site;
    private LocalDate dateIngIta;
    private LocalDate dateIngStrut;
    private LocalDate formC3;
    private LocalDate expiryPermit;
    private String languages;
    private String schooling;
    private String legalSituation;
    private Boolean active;
    private String note;
    @ManyToMany
    private List<Lawyer> lawyerList;

    @ManyToMany
    private List<Doctor> doctorList;




}
