package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.LowyerDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/lowyer")
@CrossOrigin(origins = "${allowed.origin}")
public class LowyerController extends AbstractController<LowyerDTO>{
}
