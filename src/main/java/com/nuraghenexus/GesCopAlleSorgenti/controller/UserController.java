package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.SearchRequestDTO;
import com.nuraghenexus.GesCopAlleSorgenti.dto.UserDTO;
import com.nuraghenexus.GesCopAlleSorgenti.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
@CrossOrigin(origins = "${allowed.origin}")
public class UserController extends AbstractController<UserDTO>{

    @Autowired
    private UserService service;

    @PostMapping("/search")
    public List<UserDTO> Search(@RequestBody SearchRequestDTO searchRequest){
        return service.Search(searchRequest);
    }
}
