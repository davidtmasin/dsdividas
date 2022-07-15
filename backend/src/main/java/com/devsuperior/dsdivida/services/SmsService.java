package com.devsuperior.dsdivida.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.devsuperior.dsdivida.entities.Debt;
import com.devsuperior.dsdivida.repositories.DebtRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;

@Service
public class SmsService {

	@Value("${twilio.sid}")
	private String twilioSid;

	@Value("${twilio.key}")
	private String twilioKey;

	@Value("${twilio.phone.from}")
	private String twilioPhoneFrom;

	@Value("${twilio.phone.to}")
	private String twilioPhoneTo;

	@Autowired
	private DebtRepository debtRepository;
	
	public void sendSms(Long debtId) {
		
		Debt debt = debtRepository.findById(debtId).get();
//		String date = debt.getDate().getDayOfMonth() + "/" + debt.getDate().getMonthValue() + "/" + debt.getDate().getYear(); 
		String date = (debt.getDate().getDayOfMonth() < 10 ? ("0" + debt.getDate().getDayOfMonth()) : (debt.getDate().getDayOfMonth()) ) + "/" 
						+ (debt.getDate().getMonthValue() < 10 ? ("0" + debt.getDate().getMonthValue()) : (debt.getDate().getMonthValue()) ) + "/" 
						+ debt.getDate().getYear(); 		
				
		String msg = "Pagamento efetuado com sucesso!\n" + "Segue abaixo, o demonstrativo:\n" 
				   + "Descrição: " + debt.getDescription() + ".\n" 
		           + "Valor: R$ " + String.format("%.2f",debt.getAmount()) + ".\n" 
				   + "Tipo de despesa: " + debt.getExpenseType() + ".\n" 
				   + "Data do pagamento: " + date + ".";
		
		Twilio.init(twilioSid, twilioKey);

		PhoneNumber to = new PhoneNumber(twilioPhoneTo);
		PhoneNumber from = new PhoneNumber(twilioPhoneFrom);

		Message message = Message.creator(to, from, msg).create();

		System.out.println("Mensagem enviada com sucesso! ID: " + message.getSid());
	}
}
