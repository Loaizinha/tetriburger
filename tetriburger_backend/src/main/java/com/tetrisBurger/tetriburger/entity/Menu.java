package com.tetrisBurger.tetriburger.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMenu;

    private String nombre;

    @OneToMany(mappedBy = "menu")
    private List<Producto> productos = new ArrayList<>();

    public Menu(){

    }

    public Menu(int idMenu, String nombre, List<Producto> productos) {
        this.idMenu = idMenu;
        this.nombre = nombre;
        this.productos = productos;
    }

    public int getIdMenu() {
        return idMenu;
    }

    public void setIdMenu(int idMenu) {
        this.idMenu = idMenu;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Producto> getProductos() {
        return productos;
    }

    public void setProductos(List<Producto> productos) {
        this.productos = productos;
    }
}
