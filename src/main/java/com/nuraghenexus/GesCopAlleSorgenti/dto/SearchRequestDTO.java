package com.nuraghenexus.GesCopAlleSorgenti.dto;

import com.nuraghenexus.GesCopAlleSorgenti.model.enumeration.OptionSearch;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class SearchRequestDTO {

    private String name;
    private Long id;
    private OptionSearch option;
}
