package com.tetrisBurger.tetriburger.controller;

import com.tetrisBurger.tetriburger.entity.Menu;
import com.tetrisBurger.tetriburger.entity.Producto;
import com.tetrisBurger.tetriburger.repository.MenuRepository;
import com.tetrisBurger.tetriburger.service.MenuService;
import com.tetrisBurger.tetriburger.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class MenuController {

    @Autowired
    private MenuService menuService;

    @Autowired
    private ProductoService productoService;

    @GetMapping("/menu")
    public List<Producto> mostrarMenu(){
        Menu menu = menuService.buscarMenuPorId(1);
        return menuService.mostrarProductosMenu(menu);
    }
}
