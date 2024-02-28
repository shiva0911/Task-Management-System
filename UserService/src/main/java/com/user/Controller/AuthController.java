package com.user.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.user.Config.JwtProvider;
import com.user.Entity.User;
import com.user.Service.CustomeUserServiceImplementation;
import com.user.UserRepo.UserRepo;
import com.user.request.LoginRequest;
import com.user.response.AuthResponse;

@RestController
@RequestMapping("/auth")
public class AuthController 
{
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	@Autowired
	private CustomeUserServiceImplementation customeUserServiceImplementation;
	
	
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws Exception
	{
		
		String email=user.getEmail();
		String password=user.getPassword();
		String fullname=user.getFullname();
		String role=user.getRole();
		User isEmailExist=userRepo.findByEmail(email);
		if(isEmailExist!=null)
		{
			throw new Exception("Email Already Use With Another Account");
		}
		User createUser=new User();
		createUser.setEmail(email);
		createUser.setFullname(fullname);
		createUser.setRole(role);
		createUser.setPassword(passwordEncoder.encode(password));
		User savedUser=userRepo.save(createUser);
		
		Authentication authentication=new UsernamePasswordAuthenticationToken(email, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
	String token=JwtProvider.generateToken(authentication);
	AuthResponse authResponse=new AuthResponse();
	authResponse.setJwt(token);
	authResponse.setMessage("Register Success");
	authResponse.setStatus(true);
	return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
	
	
	}
	@PostMapping("/signin")
	public ResponseEntity<AuthResponse>signin(@RequestBody LoginRequest loginRequest)
	{
		String username=loginRequest.getEmail();
		String password=loginRequest.getPassword();
		System.out.println(username+"...."+password);
		
		Authentication authentication=authenticate(username,password);
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		String token=JwtProvider.generateToken(authentication);
		AuthResponse authresponse=new AuthResponse();
		authresponse.setMessage("Login Success");
		authresponse.setJwt(token);
		authresponse.setStatus(true);
		return new ResponseEntity<>(authresponse,HttpStatus.OK);
		
	}
	private Authentication authenticate(String username,String password)
	{
		UserDetails userDetails=customeUserServiceImplementation.loadUserByUsername(username);
		System.out.println("sign in userDetails"+userDetails);
	if(userDetails==null)
	{
		System.out.println("sign in userDetails-null"+userDetails);
		throw new BadCredentialsException("Invalid username or password");
		
	}
	if(!passwordEncoder.matches(password, userDetails.getPassword()))
	{
		System.out.println("sign in userDetails -password not match"+userDetails);
		throw new BadCredentialsException("nvalid username or passsword");
		
	}
	return new UsernamePasswordAuthenticationToken(userDetails, null,userDetails.getAuthorities());
	}
	
	
	

}
