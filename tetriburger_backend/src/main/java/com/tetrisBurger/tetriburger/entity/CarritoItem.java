package com.tetrisBurger.tetriburger.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CarritoItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCarritoItem;

    @ManyToOne
    @JoinColumn(name = "id_carrito")
    @JsonBackReference
    private Carrito carrito;

    @ManyToOne
    @JoinColumn(name = "id_producto")
    private Producto producto;

    private int cantidad;
    private double total;

    public void calcularTotal() {
        if (producto != null && producto.getPrecio() > 0) {
            this.total = this.cantidad * producto.getPrecio();
        } else {
            this.total = 0;
        }
    }
}
