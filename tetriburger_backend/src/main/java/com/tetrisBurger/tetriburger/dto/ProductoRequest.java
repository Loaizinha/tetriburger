package com.tetrisBurger.tetriburger.dto;

public class ProductoRequest {

    private String nombre;
    private String descripcion;
    private double precio;
    private int menu;

    public ProductoRequest(){

    }

    public ProductoRequest(String nombre, String descripcion, double precio, int menu) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.menu = menu;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public int getMenu() {
        return menu;
    }

    public void setMenu(int menu) {
        this.menu = menu;
    }
}
