package com.tetrisBurger.tetriburger.service;

import com.tetrisBurger.tetriburger.entity.CarritoItem;
import com.tetrisBurger.tetriburger.repository.CarritoItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarritoItemService {

    @Autowired
    private CarritoItemRepository carritoItemRepository;

    public List<CarritoItem> obtenerTodos() {
        return carritoItemRepository.findAll();
    }

    public CarritoItem guardarItem(CarritoItem item) {
        return carritoItemRepository.save(item);
    }

    public CarritoItem obtenerPorId(Integer id) {
        return carritoItemRepository.findById(id).orElse(null);
    }



    public void eliminarItem(Integer idCarritoItem) {
        carritoItemRepository.deleteById(idCarritoItem);
    }
    public List<CarritoItem> obtenerItemsPorCarritoId(Integer idCarrito) {
        return carritoItemRepository.findByCarritoIdCarrito(idCarrito);
    }


    public CarritoItem actualizarItem(Integer id, CarritoItem nuevoItem) {
        Optional<CarritoItem> existenteOpt = carritoItemRepository.findById(id);
        if (existenteOpt.isPresent()) {
            CarritoItem existente = existenteOpt.get();

            existente.setProducto(nuevoItem.getProducto());
            existente.setCantidad(nuevoItem.getCantidad());
            existente.setCarrito(nuevoItem.getCarrito());

            existente.calcularTotal();

            return carritoItemRepository.save(existente);
        }
        return null;
    }

}
