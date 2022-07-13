package com.devsuperior.dsdivida.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsdivida.entities.Debt;
import com.devsuperior.dsdivida.repositories.DebtRepository;

@Service
public class DebtService {
	
	@Autowired
	private DebtRepository debtRepo;
	
	public List<Debt> findDebts() {
		return debtRepo.findAll();
	}
	
}
