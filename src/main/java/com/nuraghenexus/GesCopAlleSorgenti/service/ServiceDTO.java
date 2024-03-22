package com.nuraghenexus.GesCopAlleSorgenti.service;


import java.util.List;

public interface ServiceDTO<DTO> {

    public List<DTO> getAll();

    public DTO create (DTO dto);

    public DTO read(Long id);

    public DTO update (DTO dto);

    public String delete (Long id);
}