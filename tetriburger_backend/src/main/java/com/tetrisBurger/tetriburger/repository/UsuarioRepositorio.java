package com.tetrisBurger.tetriburger.repository;

import com.tetrisBurger.tetriburger.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer> {
    Usuario findByCorreoAndClave(String correo, String clave);
}
