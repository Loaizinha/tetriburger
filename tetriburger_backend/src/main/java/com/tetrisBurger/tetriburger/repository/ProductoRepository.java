package com.tetrisBurger.tetriburger.repository;

import com.tetrisBurger.tetriburger.entity.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Integer> {
}
