package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.UserDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "${allowed.origin}")
public class UserController extends AbstractController<UserDTO>{
}
