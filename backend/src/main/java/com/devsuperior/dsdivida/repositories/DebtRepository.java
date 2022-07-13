package com.devsuperior.dsdivida.repositories;

import java.time.LocalDate;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsdivida.entities.Debt;

public interface DebtRepository extends JpaRepository<Debt, Long> {
	@Query("SELECT obj FROM Debt obj WHERE obj.date BETWEEN :min AND :max ORDER BY obj.amount DESC")
	Page<Debt> findDebts(LocalDate min, LocalDate max, Pageable pageable);
}
