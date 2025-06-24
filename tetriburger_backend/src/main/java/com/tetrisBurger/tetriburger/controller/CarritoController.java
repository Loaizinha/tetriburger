package com.tetrisBurger.tetriburger.controller;

import com.tetrisBurger.tetriburger.entity.Carrito;
import com.tetrisBurger.tetriburger.service.CarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/carrito")
@CrossOrigin(origins = "*")
public class CarritoController {

    @Autowired
    private CarritoService carritoService;

    @PostMapping
    public Carrito crearCarrito(@RequestBody Carrito carrito) {
        return carritoService.guardarCarrito(carrito);
    }


    @GetMapping("/{idCarrito}")
    public ResponseEntity<?> obtenerCarrito(@PathVariable Integer idCarrito) {
        Carrito carrito = carritoService.obtenerPorId(idCarrito);
        if (carrito != null) {
            return ResponseEntity.ok(carrito);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Carrito no encontrado");
        }
    }




    @DeleteMapping("/{idCarrito}")
    public void eliminarCarrito(@PathVariable Integer idCarrito) {
        carritoService.eliminarCarrito(idCarrito);
    }
}
