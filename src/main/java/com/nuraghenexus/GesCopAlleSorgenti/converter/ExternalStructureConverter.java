package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ExternalStructureDTO;
import com.nuraghenexus.GesCopAlleSorgenti.dto.LowyerDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.ExternalStructure;
import com.nuraghenexus.GesCopAlleSorgenti.model.Lowyer;
import org.springframework.stereotype.Component;

@Component
public class ExternalStructureConverter extends AbstractConverter<ExternalStructure, ExternalStructureDTO> {

    @Override
    public ExternalStructure toEntity(ExternalStructureDTO externalStructureDTO) {
        ExternalStructure externalStructure = null;
        if (externalStructureDTO != null) {
            externalStructure = new ExternalStructure(
                    externalStructureDTO.getId(),
                    externalStructureDTO.getRefNumber(),
                    externalStructureDTO.getResidence());
        }
        return externalStructure;
    }

    @Override
    public ExternalStructureDTO toDTO(ExternalStructure externalStructure) {
        ExternalStructureDTO externalStructureDTO = null;
        if (externalStructure != null) {
            externalStructureDTO = new ExternalStructureDTO(
                    externalStructure.getId(),
                    externalStructure.getRefNumber(),
                    externalStructure.getResidence());
        }
        return externalStructureDTO;
    }
}
