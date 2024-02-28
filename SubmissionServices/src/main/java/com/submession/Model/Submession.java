package com.submession.Model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Submession 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private Long taskId;
	private String githubLink;
	private Long userId;
	private String status="PENDING";
	private LocalDateTime submessionTime;

}
