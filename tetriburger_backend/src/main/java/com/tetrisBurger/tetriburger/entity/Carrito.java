package com.tetrisBurger.tetriburger.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Entity
@AllArgsConstructor
@Data
@NoArgsConstructor
@ToString(exclude = "items")

public class Carrito {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int  idCarrito;

    @ManyToOne
    @JoinColumn (name = "id_usuario")
    private  Usuario usuario;

    @OneToMany(mappedBy = "carrito", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<CarritoItem> items;






}

