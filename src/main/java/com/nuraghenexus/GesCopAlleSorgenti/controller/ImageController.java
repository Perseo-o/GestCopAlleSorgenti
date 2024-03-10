package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ImageDTO;
import com.nuraghenexus.GesCopAlleSorgenti.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping("/api/v1/image")
@CrossOrigin(origins = "${allowed.origin}")
public class ImageController{

    @Autowired
    private ImageService imageService;


    @PostMapping("createImg")
    public ResponseEntity<?> create(@RequestParam("image") MultipartFile file, @RequestParam("id")Long id) throws IOException {
        String uploadeImage = imageService.uploadImageToFileSystem(file,id);
        return ResponseEntity.status(HttpStatus.OK).body(uploadeImage);
    }

    @GetMapping("/fileSystem")
    public ResponseEntity<?> downloadImageFromFileSystem(@RequestParam Long id) throws IOException {
        byte[] imageData=imageService.downloadImageFromFileSystem(id);
        return ResponseEntity.status(HttpStatus.OK)
                .contentType(MediaType.valueOf("image/png"))
                .body(imageData);

    }
}
