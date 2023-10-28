package com.lviv.iot.lab5.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.lviv.iot.lab5.service.ShoesService;
import com.lviv.iot.lab5.model.Shoes;

import java.util.List;

@RestController
@RequestMapping("/shoes")
public class ShoesController {
    @Autowired
    private ShoesService shoesService;


    @PostMapping
    public Shoes addShoes(@RequestBody Shoes shoes) {
        return shoesService.addShoes(shoes);
    }

    @GetMapping
    public List<Shoes> getAllShoes() {
        return shoesService.findAllShoes();
    }

    @GetMapping("/{id}")
    public Shoes getShoesById(@PathVariable Integer id) {
        return shoesService.findShoesById(id);
    }


    @PutMapping("/{id}")
    public  Shoes updateShoes(@PathVariable Integer id, @RequestBody Shoes shoes) {
        return shoesService.updateShoes(id, shoes);
    }



    @DeleteMapping("/{id}")
    public Shoes deleteShoes(@PathVariable Integer id) {
        return shoesService.deleteShoes(id);
    }
}