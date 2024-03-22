package com.nuraghenexus.GesCopAlleSorgenti.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.nuraghenexus.GesCopAlleSorgenti.dto.UserDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.User;

import java.time.LocalDate;

@Component
public class UserConverter extends AbstractConverter<User, UserDTO> {

    @Autowired
    private LawyerConverter lawyerConverter;
    @Autowired
    private DoctorConverter doctorConverter;

    @Override
    public User toEntity(UserDTO userDTO) {
        User user = null;
        if (userDTO != null) {
            user = new User(
                    userDTO.getId(),
                    userDTO.getIdGhost(),
                    userDTO.getIdHeadFamily(),
                    userDTO.getIdVestanet(),
                    userDTO.getIdCui(),
                    userDTO.getSurname(),
                    userDTO.getName(),
                    userDTO.getBirthDate(),
                    userDTO.getSex(),
                    userDTO.getNationState(),
                    userDTO.getCodFiscal(),
                    userDTO.getSite(),
                    userDTO.getDateIngIta(),
                    userDTO.getDateIngStrut(),
                    userDTO.getFormC3(),
                    userDTO.getExpiryPermit(),
                    userDTO.getLanguages(),
                    userDTO.getSchooling(),
                    userDTO.getLegalSituation(),
                    userDTO.getActive(),
                    userDTO.getNote(),
                    lawyerConverter.toEntityList(userDTO.getLawyerDTOList()),
                    doctorConverter.toEntityList(userDTO.getDoctorDTOList()));
        }
        return user;
    }

    @Override
    public UserDTO toDTO(User user) {
        UserDTO userDTO = null;
        if (user != null) {
            userDTO = new UserDTO(
                    user.getId(),
                    user.getIdGhost(),
                    user.getIdHeadFamily(),
                    user.getIdVestanet(),
                    user.getIdCui(),
                    user.getSurname(),
                    user.getName(),
                    user.getBirthDate(),
                    user.getSex(),
                    user.getNationState(),
                    user.getCodFiscal(),
                    user.getSite(),
                    user.getDateIngIta(),
                    user.getDateIngStrut(),
                    user.getFormC3(),
                    user.getExpiryPermit(),
                    user.getLanguages(),
                    user.getSchooling(),
                    user.getLegalSituation(),
                    user.getActive(),
                    user.getNote(),
                    lawyerConverter.toDTOList(user.getLawyerList()),
                    doctorConverter.toDTOList(user.getDoctorList()));
        }
        return userDTO;
    }

}
