package com.nuraghenexus.GesCopAlleSorgenti.controller;


import com.nuraghenexus.GesCopAlleSorgenti.service.ServiceDTO;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public abstract class AbstractController<DTO> {

    @Autowired
    private ServiceDTO<DTO> service;


    @GetMapping("getAll")
    public List<DTO> getAll() {
        return service.getAll();
    }


    @PostMapping("create")
    public DTO create(@RequestBody DTO dto) {return service.create(dto); }

    @GetMapping("read")
    public DTO read(@RequestParam("id") Long id) {
        return service.read(id);
    }

    @PutMapping("update")
    public DTO update(@RequestBody DTO dto) {
        return service.update(dto);
    }


    @DeleteMapping("delete")
    public boolean delete(@RequestParam("id") Long id) {
        return service.delete(id);
    }
}
