package com.user.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.user.Config.JwtProvider;
import com.user.Entity.User;
import com.user.UserRepo.UserRepo;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;

	@Override
	public User getUserProfile(String jwt) {
		

		String email=JwtProvider.getEmailFromJwtToken(jwt);
		return userRepo.findByEmail(email);
}

	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}


}
