package com.tetrisBurger.tetriburger.controller;

import com.tetrisBurger.tetriburger.entity.CarritoItem;
import com.tetrisBurger.tetriburger.service.CarritoItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carrito-items")
@CrossOrigin(origins = "*")
public class CarritoItemController {

    @Autowired
    private CarritoItemService carritoItemService;

    @PostMapping("/item")
    public CarritoItem agregarItem(@RequestBody CarritoItem item)
    {
        item.calcularTotal();
        return carritoItemService.guardarItem(item);
    }

    @PutMapping("/item/{idCarritoItem}")
    public ResponseEntity<?> actualizarCarritoItem(@PathVariable int idCarritoItem, @RequestBody CarritoItem itemActualizado) {
        CarritoItem actualizado = carritoItemService.actualizarItem(idCarritoItem, itemActualizado);
        if (actualizado != null) {
            return ResponseEntity.ok(actualizado);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Carrito item no encontrado");
        }
    }



    @DeleteMapping("/{idCarritoItem}")
    public void eliminarItem(@PathVariable Integer idCarritoItem) {
        carritoItemService.eliminarItem(idCarritoItem);
    }

    @GetMapping("/carrito/{idCarrito}")
    public List<CarritoItem> obtenerItemsDeCarrito(@PathVariable("idCarrito") Integer idCarrito) {
        return carritoItemService.obtenerItemsPorCarritoId(idCarrito);
    }

    @DeleteMapping("/carrito/{idCarrito}")
    public void vaciarCarrito(@PathVariable("idCarrito") int idCarrito) {
        List<CarritoItem> items = carritoItemService.obtenerItemsPorCarritoId(idCarrito);
        for (CarritoItem item : items) {
            carritoItemService.eliminarItem(item.getIdCarritoItem());
        }
    }
}

