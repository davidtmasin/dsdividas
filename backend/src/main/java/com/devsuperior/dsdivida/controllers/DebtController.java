package com.devsuperior.dsdivida.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsdivida.entities.Debt;
import com.devsuperior.dsdivida.services.DebtService;
import com.devsuperior.dsdivida.services.SmsService;

@RestController
@RequestMapping(value = "/debts")
public class DebtController {

	@Autowired
	private DebtService debtServ;
	
	@Autowired
	private SmsService smsService;
	
	@GetMapping
	public Page<Debt> findDebts(
			@RequestParam(value = "minDate", defaultValue = "") String minDate, 
			@RequestParam(value = "maxDate", defaultValue = "") String maxDate, 
			Pageable pageable){
		return debtServ.findDebts(minDate, maxDate, pageable);
	}
	
	@GetMapping("/{id}/notification")
	public void notifySms(@PathVariable Long id) {
		smsService.sendSms(id);
	}
	
}
