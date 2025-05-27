package com.tetrisBurger.tetriburger.controller;


import com.tetrisBurger.tetriburger.dto.ProductoRequest;
import com.tetrisBurger.tetriburger.entity.Menu;
import com.tetrisBurger.tetriburger.entity.Producto;
import com.tetrisBurger.tetriburger.service.MenuService;
import com.tetrisBurger.tetriburger.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/producto")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @Autowired
    private MenuService menuService; // ✅ Corregido

    @GetMapping("/productos")
    public List<Producto> mostrarProductos() {
        return productoService.mostrarProductos();
    }

    @PostMapping("/agregar")
    public Producto agregarProducto(@RequestBody ProductoRequest productoObtenido) {
        Menu menu = menuService.buscarMenuPorId(productoObtenido.getMenu());
        Producto producto = new Producto();
        producto.setNombre(productoObtenido.getNombre());
        producto.setDescripcion(productoObtenido.getDescripcion());
        producto.setPrecio(productoObtenido.getPrecio());
        producto.setMenu(menu);
        return productoService.agregarProducto(producto);
    }
}
