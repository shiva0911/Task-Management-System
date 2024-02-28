package com.user.Service;

import java.util.List;

import com.user.Entity.User;

public interface UserService 
{
	public User getUserProfile(String jwt);
	public List<User>getAllUser();
}
