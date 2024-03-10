package com.nuraghenexus.GesCopAlleSorgenti.repository;


import com.nuraghenexus.GesCopAlleSorgenti.model.ExternalStructure;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ExternalStructureRepository extends JpaRepository<ExternalStructure, Long> {
}
