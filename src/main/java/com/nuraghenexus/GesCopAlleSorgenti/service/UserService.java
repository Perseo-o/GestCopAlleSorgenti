package com.nuraghenexus.GesCopAlleSorgenti.service;

import com.nuraghenexus.GesCopAlleSorgenti.dto.SearchRequestDTO;
import com.nuraghenexus.GesCopAlleSorgenti.dto.UserDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.User;
import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.OptionSearch;
import com.nuraghenexus.GesCopAlleSorgenti.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService extends AbstractService<User, UserDTO> {

    @Autowired
    private UserRepository repository;

    public List<UserDTO> Search(SearchRequestDTO searchRequest){
        if (searchRequest.getOption() != OptionSearch.NAME){
            return repository.findAll().stream().map(converter::toDTO)
                    .filter(User -> searchRequest.getId().equals(User.getId()))
                    .sorted(Comparator.comparing(UserDTO::getName))
                    .collect(Collectors.toList());
        }else {
            return repository.findAll().stream().map(converter::toDTO)
                    .filter(User -> User.getName().contains(searchRequest.getName()))
                    .sorted(Comparator.comparing(UserDTO::getName))
                    .collect(Collectors.toList());
        }
    }
}