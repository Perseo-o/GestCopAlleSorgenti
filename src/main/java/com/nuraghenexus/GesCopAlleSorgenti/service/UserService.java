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
        if (!searchRequest.getActive()) {
            if (searchRequest.getOption() != OptionSearch.NAME) {
                return repository.findAll().stream().map(converter::toDTO)
                        .filter(user -> searchRequest.getId().equals(user.getId()))
                        .sorted(Comparator.comparing(UserDTO::getId))
                        .collect(Collectors.toList());
            } else {
                return repository.findAll().stream()
                        .map(converter::toDTO)
                        .filter(user -> (user.getName() + ' ' + user.getSurname()).toLowerCase()
                                .contains(searchRequest.getName().toLowerCase()))
                        .sorted(Comparator.comparing(UserDTO::getId))
                        .collect(Collectors.toList());
            }
        }else{
            if (searchRequest.getOption() != OptionSearch.NAME) {
                return repository.findAll().stream().map(converter::toDTO)
                        .filter(user -> searchRequest.getId().equals(user.getId())&&
                                        searchRequest.getActive().equals(user.getActive()))
                        .sorted(Comparator.comparing(UserDTO::getId))
                        .collect(Collectors.toList());
            } else {
                return repository.findAll().stream().map(converter::toDTO)
                        .filter(user -> (user.getName() + ' ' + user.getSurname()).toLowerCase()
                                .contains(searchRequest.getName().toLowerCase())&&
                                        searchRequest.getActive().equals(user.getActive()))
                        .sorted(Comparator.comparing(UserDTO::getId))
                        .collect(Collectors.toList());
            }
        }    
    }
}