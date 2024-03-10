package com.nuraghenexus.GesCopAlleSorgenti.service;

import com.nuraghenexus.GesCopAlleSorgenti.converter.Converter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.LinkedHashMap;
import java.util.List;

public abstract class AbstractService<Entity, DTO> implements ServiceDTO<DTO> {

    @Autowired
    protected JpaRepository<Entity, Long> repository;

    @Autowired
    protected Converter<Entity, DTO> converter;

    @Override
    public List<DTO> getAll() {
        return converter.toDTOList(repository.findAll());
    }

    @Override
    public DTO create(DTO dto) {
        return converter.toDTO(repository.save(converter.toEntity(dto)));
    }

    @Override
    public DTO read(Long id) {
         return converter.toDTO(repository.getById(id));
    }

    @Override
    public DTO update(DTO dto) {
        return converter.toDTO(repository.save(converter.toEntity(dto)));
    }

    @Override
    public String delete(Long id) {
        try {
            if (repository.existsById(id)) {
                repository.deleteById(id);
                return "eliminato con successo";
            } else {
                return "utente non trovato";
            }
        }catch (Exception e){}
        return "missione fallita, chiedete a marci";
    }

}