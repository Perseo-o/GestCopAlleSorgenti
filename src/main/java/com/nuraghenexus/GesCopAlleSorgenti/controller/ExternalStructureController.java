package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ExternalStructureDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/externalStructure")
@CrossOrigin(origins = "${allowed.origin}")
public class ExternalStructureController extends AbstractController<ExternalStructureDTO> {
}
