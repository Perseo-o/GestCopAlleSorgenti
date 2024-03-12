package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.LawyerDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Lawyer;
import org.springframework.stereotype.Component;

@Component
public class LawyerConverter extends AbstractConverter<Lawyer, LawyerDTO> {

    @Override
    public Lawyer toEntity(LawyerDTO lawyerDTO) {
        Lawyer lawyer = null;
        if (lawyerDTO != null) {
            lawyer = new Lawyer(
                    lawyerDTO.getId(),
                    lawyerDTO.getName(),
                    lawyerDTO.getContDetails());
        }
        return lawyer;
    }

    @Override
    public LawyerDTO toDTO(Lawyer lawyer) {
        LawyerDTO lawyerDTO = null;
        if (lawyer != null) {
            lawyerDTO = new LawyerDTO(
                    lawyer.getId(),
                    lawyer.getName(),
                    lawyer.getContDetails());
        }
        return lawyerDTO;
    }
}
