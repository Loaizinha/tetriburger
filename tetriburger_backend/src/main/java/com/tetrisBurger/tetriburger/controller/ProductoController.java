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
    private MenuService menuService;

    @GetMapping("/productos")
    public List<Producto> mostrarProductos() {
        List<Producto> productos = productoService.mostrarProductos();
        return productos;
    }

    @PostMapping("/agregar")
    public Producto agregarProducto(@RequestBody ProductoRequest productoObtenido) {

        Menu menu = menuService.buscarMenuPorId(1);
        Producto producto = new Producto();
        producto.setNombre(productoObtenido.getNombre());
        producto.setDescripcion(productoObtenido.getDescripcion());
        producto.setPrecio(productoObtenido.getPrecio());
        producto.setMenu(menu);
        return productoService.agregarProducto(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable int id){
        Producto producto = productoService.buscarProductoPorId(id);
        productoService.eliminarProducto(producto);
    }

    @GetMapping("/editar/{id}")
    public Producto obtenerProducto(@PathVariable int id){
        return productoService.buscarProductoPorId(id);
    }

    @PutMapping("/editar/{id}")
    public void actualizarProducto(@PathVariable int id, @RequestBody ProductoRequest productoObtenido){
        Producto producto = productoService.buscarProductoPorId(id);
        producto.setNombre(productoObtenido.getNombre());
        producto.setDescripcion(productoObtenido.getDescripcion());
        producto.setPrecio(productoObtenido.getPrecio());
        productoService.agregarProducto(producto);
    }

    @PutMapping("/{id}")
    public void agregarProductoAlMenu(@PathVariable int id){
        Producto producto = productoService.buscarProductoPorId(id);
        Menu menu = menuService.buscarMenuPorId(1);
        producto.setMenu(menu);
        productoService.agregarProducto(producto);
    }

    @PutMapping("menu/{id}")
    public void quitarProductoDelMenu(@PathVariable int id){
        Producto producto = productoService.buscarProductoPorId(id);
        Menu menu = null;
        producto.setMenu(menu);
        productoService.agregarProducto(producto);
    }






}

