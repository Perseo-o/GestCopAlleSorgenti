package com.nuraghenexus.GesCopAlleSorgenti.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ImageDTO {
    private Long id;

    private String name;
    private String type;
    private String filePath;
    private UserDTO userDTO;

}
