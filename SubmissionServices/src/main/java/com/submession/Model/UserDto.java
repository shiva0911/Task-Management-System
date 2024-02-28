package com.submession.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto 
{
	private Long id;
	private String password;
	private String email;
	private String role;
	private String fullname;



}
