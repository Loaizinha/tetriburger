package com.tetrisBurger.tetriburger.controller;

import com.tetrisBurger.tetriburger.model.Usuario;
import com.tetrisBurger.tetriburger.repository.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class BurgerController {

    @Autowired UsuarioRepositorio usuarioRepositorio;

    @GetMapping("/registro")
    public String inicio(){
        return "inicio";
    }

    @PostMapping("/usuarios")
    public Usuario guardarUsuario(@RequestBody Usuario usuario) {
        return usuarioRepositorio.save(usuario);
    }


}
