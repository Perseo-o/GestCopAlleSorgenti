package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.DoctorDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/doctor")
@CrossOrigin(origins = "${allowed.origin}")
public class DoctorController extends AbstractController<DoctorDTO>{
}
