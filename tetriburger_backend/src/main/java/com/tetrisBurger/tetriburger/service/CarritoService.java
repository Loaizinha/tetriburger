package com.tetrisBurger.tetriburger.service;

import com.tetrisBurger.tetriburger.entity.Carrito;
import com.tetrisBurger.tetriburger.repository.CarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarritoService {

    @Autowired
    private CarritoRepository carritoRepository;

    public List<Carrito> obtenerTodos() {
        return carritoRepository.findAll();
    }

    public Carrito guardarCarrito(Carrito carrito) {
        return carritoRepository.save(carrito);
    }

    public Carrito obtenerPorId(Integer idCarrito) {
        return carritoRepository.findById(idCarrito).orElse(null);
    }

    public void eliminarCarrito(Integer idCarrito) {
        carritoRepository.deleteById(idCarrito);
    }


}
