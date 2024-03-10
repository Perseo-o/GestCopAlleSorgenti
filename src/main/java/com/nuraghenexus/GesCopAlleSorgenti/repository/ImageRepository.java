package com.nuraghenexus.GesCopAlleSorgenti.repository;

import com.nuraghenexus.GesCopAlleSorgenti.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import jakarta.transaction.Transactional;

import java.util.Optional;


@Repository
@Transactional
public interface ImageRepository extends JpaRepository<Image, Long> {

    Optional<Image> findByName(String fileName);
}
