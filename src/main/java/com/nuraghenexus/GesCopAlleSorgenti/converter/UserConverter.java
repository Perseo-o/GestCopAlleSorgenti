package com.nuraghenexus.GesCopAlleSorgenti.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.nuraghenexus.GesCopAlleSorgenti.dto.UserDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.User;

@Component
public class UserConverter extends AbstractConverter<User, UserDTO> {

    @Autowired
    private LawyerConverter lawyerConverter;
    @Autowired
    private ExternalStructureConverter externalStructureConverter;

    @Override
    public User toEntity(UserDTO userDTO) {
        User user = null;
        if (userDTO != null) {
            user = new User(
                    userDTO.getId(),
                    userDTO.getSite(),
                    userDTO.getName(),
                    userDTO.getSurname(),
                    userDTO.getNationState(),
                    userDTO.getNationality(),
                    userDTO.getBirthDate(),
                    userDTO.getCodFiscal(),
                    userDTO.getDateIngIta(),
                    userDTO.getDateIngStrut(),
                    userDTO.getLegalSituation(),
                    userDTO.getIdVestanet(),
                    userDTO.getActive(),
                    externalStructureConverter.toEntityList(userDTO.getExternalStructureDTOList()),
                    lawyerConverter.toEntityList(userDTO.getLawyerDTOList()));
        }
        return user;
    }

    @Override
    public UserDTO toDTO(User user) {
        UserDTO userDTO = null;
        if (user != null) {
            userDTO = new UserDTO(
                    user.getId(),
                    user.getSite(),
                    user.getName(),
                    user.getSurname(),
                    user.getNationState(),
                    user.getNationality(),
                    user.getBirthDate(),
                    user.getCodFiscal(),
                    user.getDateIngIta(),
                    user.getDateIngStrut(),
                    user.getLegalSituation(),
                    user.getIdVestanet(),
                    user.getActive(),
                    externalStructureConverter.toDTOList(user.getExternalStructureList()),
                    lawyerConverter.toDTOList(user.getLawyerList()));
        }
        return userDTO;
    }

}
