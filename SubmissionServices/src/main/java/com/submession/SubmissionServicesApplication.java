package com.submession;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;

import com.submession.Service.TaskService;

@SpringBootApplication
@EnableFeignClients
public class SubmissionServicesApplication {

	public static void main(String[] args) {
		SpringApplication.run(SubmissionServicesApplication.class, args);
	}
	


}
