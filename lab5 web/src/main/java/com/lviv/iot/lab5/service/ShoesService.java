package com.lviv.iot.lab5.service;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
//import com.lviv.iot.lab5.dal.LocationFilestore;
import com.lviv.iot.lab5.model.Shoes;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ShoesService {
    private Map<Integer, Shoes> shoes = new HashMap();
    private Integer index = 0;


    public List<Shoes> findAllShoes() {
        return new ArrayList<>(shoes.values());
    }

    public Shoes findShoesById(Integer id) {
        return shoes.get(id);
    }

    public Shoes addShoes(Shoes shoe) {
        index += 1;
        shoe.setId(index);
        shoes.put(index, shoe);
        return shoe;
    }

    public Shoes updateShoes(Integer id, Shoes shoe) {
        shoe.setId(id);
        shoes.put(id, shoe);
        return shoe;
    }

    public Shoes deleteShoes(Integer id) {
        return shoes.remove(id);
    }
}