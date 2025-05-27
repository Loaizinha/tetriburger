package com.tetrisBurger.tetriburger.repository;

import com.tetrisBurger.tetriburger.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    Usuario findByCorreoAndClave(String correo, String clave);
}
