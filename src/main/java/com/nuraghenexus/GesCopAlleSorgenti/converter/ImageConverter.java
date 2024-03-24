package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ImageDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Image;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ImageConverter {


    public Image toEntity(ImageDTO imageDTO) {
        Image image = null;
        if (imageDTO != null) {
            image = new Image(
                    imageDTO.getId(),
                    imageDTO.getName(),
                    imageDTO.getType(),
                    imageDTO.getFilePath()
            );
        }
        return image;
    }

    public ImageDTO toDTO(Image image) {
        ImageDTO imageDTO = null;
        if(image != null){
            imageDTO = new ImageDTO(
                    image.getId(),
                    image.getName(),
                    image.getType(),
                    image.getFilePath()
            );
        }
        return imageDTO;
    }

    public List<Image> toEntityList (Iterable<ImageDTO> listDTO) {
        List<Image> list = new ArrayList<>();

        if(listDTO != null) {
            for (ImageDTO dto:listDTO) {
                Image entity = toEntity(dto);
                list.add(entity);
            }
        }
        return list;
    }

    public List<ImageDTO> toDTOList (Iterable<Image> listEntity) {
        List<ImageDTO> list = new ArrayList<>();

        if(listEntity != null) {
            for (Image entity:listEntity) {
                ImageDTO dto = toDTO(entity);
                list.add(dto);
            }
        }
        return list;
    }
}
