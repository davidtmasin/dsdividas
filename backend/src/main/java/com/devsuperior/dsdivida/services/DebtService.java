package com.devsuperior.dsdivida.services;

import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.devsuperior.dsdivida.entities.Debt;
import com.devsuperior.dsdivida.repositories.DebtRepository;

@Service
public class DebtService {
	
	@Autowired
	private DebtRepository debtRepo;
	
	public Page<Debt> findDebts(String minDate, String maxDate, Pageable pageable) {
		
		LocalDate today = LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault());
		
		LocalDate min = minDate.equals("") ? today.minusDays(10) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today.plusDays(10) : LocalDate.parse(maxDate);
		
		return debtRepo.findDebts(min, max, pageable);
	}
	
}
