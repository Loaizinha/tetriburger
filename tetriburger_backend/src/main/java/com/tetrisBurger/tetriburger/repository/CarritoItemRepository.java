package com.tetrisBurger.tetriburger.repository;

import com.tetrisBurger.tetriburger.entity.CarritoItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarritoItemRepository extends JpaRepository<CarritoItem, Integer> {

    List<CarritoItem> findByCarritoIdCarrito(Integer idCarrito);
}
