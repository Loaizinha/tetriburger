package com.tetrisBurger.tetriburger.service;

import com.tetrisBurger.tetriburger.entity.Producto;
import com.tetrisBurger.tetriburger.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.List;

@Service
public class ProductoService {

    @Autowired
    ProductoRepository productoRepository;

    public List<Producto> mostrarProductos(){
        return productoRepository.findAll();
    }

    public Producto agregarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Producto buscarProductoPorId(int id){
        return productoRepository.findById(id).orElse(null);
    }

    public void eliminarProducto(Producto producto){
        productoRepository.delete(producto);
    }
}
