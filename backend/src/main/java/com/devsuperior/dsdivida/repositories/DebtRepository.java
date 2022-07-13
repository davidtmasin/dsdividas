package com.devsuperior.dsdivida.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsdivida.entities.Debt;

public interface DebtRepository extends JpaRepository<Debt, Long>{
	
}
