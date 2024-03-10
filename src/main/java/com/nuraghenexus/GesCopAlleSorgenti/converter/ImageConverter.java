package com.nuraghenexus.GesCopAlleSorgenti.converter;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ImageDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Image;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ImageConverter {

    @Autowired
    private UserConverter userConverter;

    public Image toEntity(ImageDTO imageDTO) {
        Image image = null;
        if (imageDTO != null) {
            image = new Image(
                    imageDTO.getId(),
                    imageDTO.getName(),
                    imageDTO.getType(),
                    imageDTO.getFilePath(),
                    userConverter.toEntity(imageDTO.getUserDTO())
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
                    image.getFilePath(),
                    userConverter.toDTO(image.getUser())
            );
        }
        return imageDTO;
    }
}
