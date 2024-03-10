package com.nuraghenexus.GesCopAlleSorgenti.service;

import com.nuraghenexus.GesCopAlleSorgenti.converter.UserConverter;
import com.nuraghenexus.GesCopAlleSorgenti.model.Image;
import com.nuraghenexus.GesCopAlleSorgenti.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository repository;

    @Autowired
    private UserService userService;
    @Autowired
    private UserConverter userConverter;

    private final String FOLDER_PATH="/src/main/images/";

    public String uploadImageToFileSystem(MultipartFile file, Long id) throws IOException {
        String filePath=FOLDER_PATH+file.getOriginalFilename();


        Image image=repository.save(Image.builder()
                .name(file.getOriginalFilename())
                .type(file.getContentType())
                .filePath(filePath).build());

        file.transferTo(new File(filePath));
        if (image.getFilePath() != null) {
            return "file uploaded successfully : " + filePath;
        }
        return null;
    }

    public byte[] downloadImageFromFileSystem(Long id) throws IOException {
        Optional<Image> fileData = repository.findById(id);
        String filePath=fileData.get().getFilePath();
        byte[] images = Files.readAllBytes(new File(filePath).toPath());
        return images;
    }

}
