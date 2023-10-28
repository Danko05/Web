package com.lviv.iot.lab5.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Shoes {
    private Integer id;
    private String brand;
    private String information;
    private Integer price;
}