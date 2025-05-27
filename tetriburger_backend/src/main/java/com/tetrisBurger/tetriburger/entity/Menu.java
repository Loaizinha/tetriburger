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
    public List<Producto> productos = new ArrayList<>();
}
