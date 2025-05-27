package com.tetrisBurger.tetriburger.repository;

import com.tetrisBurger.tetriburger.entity.Menu;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Integer> {
}
