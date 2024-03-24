package com.nuraghenexus.GesCopAlleSorgenti.controller;

import com.nuraghenexus.GesCopAlleSorgenti.dto.ImageDTO;
import com.nuraghenexus.GesCopAlleSorgenti.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public ImageDTO create(@RequestParam("image") MultipartFile file) throws IOException {
        return  imageService.uploadImageToFileSystem(file);

    }

    @GetMapping("/fileSystem")
    public byte[] downloadImageFromFileSystem(@RequestParam Long id) throws IOException {
        return  imageService.downloadImageFromFileSystem(id);
    }

    @GetMapping("read")
    public ImageDTO read(@RequestParam("id") Long id) {
        return imageService.read(id);
    }

    @GetMapping("readLast")
    public ImageDTO readLast() {
        return imageService.readLast();
    }
}
