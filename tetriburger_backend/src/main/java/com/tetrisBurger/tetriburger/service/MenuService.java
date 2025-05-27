package com.tetrisBurger.tetriburger.service;

import com.tetrisBurger.tetriburger.entity.Menu;
import com.tetrisBurger.tetriburger.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;

    public Menu buscarMenuPorId(int id){
        Menu menu = menuRepository.findById(id).orElse(null);
        return menu;
    }
}
