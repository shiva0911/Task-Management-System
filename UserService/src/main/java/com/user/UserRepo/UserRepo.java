package com.user.UserRepo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.user.Entity.User;

public interface UserRepo  extends JpaRepository<User, Long>{
public  User findByEmail(String email);
}
