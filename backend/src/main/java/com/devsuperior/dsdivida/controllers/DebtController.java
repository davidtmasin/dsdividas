package com.devsuperior.dsdivida.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdivida.entities.Debt;
import com.devsuperior.dsdivida.services.DebtService;

@RestController
@RequestMapping(value = "/debts")
public class DebtController {

	@Autowired
	private DebtService debtServ;	
	
	@GetMapping
	public List<Debt> findDebts(){
		return debtServ.findDebts();
	}
	
}
