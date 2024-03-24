package com.nuraghenexus.GesCopAlleSorgenti.service;


import java.util.List;

public interface ServiceDTO<DTO> {

     List<DTO> getAll();

     DTO create (DTO dto);

     DTO read(Long id);

     DTO update (DTO dto);

     boolean delete (Long id);
}