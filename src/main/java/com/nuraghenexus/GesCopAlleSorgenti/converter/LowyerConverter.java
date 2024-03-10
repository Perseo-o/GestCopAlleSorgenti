package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.LowyerDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Lowyer;
import org.springframework.stereotype.Component;

@Component
public class LowyerConverter extends AbstractConverter<Lowyer, LowyerDTO> {

    @Override
    public Lowyer toEntity(LowyerDTO lowyerDTO) {
        Lowyer lowyer = null;
        if (lowyerDTO != null) {
            lowyer = new Lowyer(
                    lowyerDTO.getId(),
                    lowyerDTO.getName(),
                    lowyerDTO.getContDetails());
        }
        return lowyer;
    }

    @Override
    public LowyerDTO toDTO(Lowyer lowyer) {
        LowyerDTO lowyerDTO = null;
        if (lowyer != null) {
            lowyerDTO = new LowyerDTO(
                    lowyer.getId(),
                    lowyer.getName(),
                    lowyer.getContDetails());
        }
        return lowyerDTO;
    }
}
