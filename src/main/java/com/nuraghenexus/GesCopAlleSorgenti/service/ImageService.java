package com.nuraghenexus.GesCopAlleSorgenti.service;

import com.nuraghenexus.GesCopAlleSorgenti.converter.ImageConverter;
import com.nuraghenexus.GesCopAlleSorgenti.dto.ImageDTO;
import com.nuraghenexus.GesCopAlleSorgenti.model.Image;
import com.nuraghenexus.GesCopAlleSorgenti.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Comparator;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository repository;

    @Autowired
    private ImageConverter imageConverter;

    public ImageDTO uploadImageToFileSystem(MultipartFile file) throws IOException {
        String FOLDER_PATH = "C:\\Users\\marce\\Desktop\\prog Sorgenti front\\GestCopAlleSorgenti\\src\\assets\\images\\";
        String filePath= FOLDER_PATH +file.getOriginalFilename();
        System.out.println("create");


        Image image=repository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .filePath(filePath).build());

        file.transferTo(new File(filePath));
        if (image.getId() != null) {
            return imageConverter.toDTO(image);
        }
        return null;
    }

    public byte[] downloadImageFromFileSystem(Long id) throws IOException {
        Optional<Image> fileData = repository.findById(id);
        String filePath=fileData.get().getFilePath();
        return Files.readAllBytes(new File(filePath).toPath());
    }

    public ImageDTO read(Long id) {
        return imageConverter.toDTO(repository.getById(id));
    }

    public ImageDTO readLast() {
        // Ordina in ordine decrescente in base all'id
        System.out.println("readLast");
        return imageConverter.toDTOList(repository.findAll()).stream()
                .max(Comparator.comparing(ImageDTO::getId))
                .orElse(null);
    }


}
