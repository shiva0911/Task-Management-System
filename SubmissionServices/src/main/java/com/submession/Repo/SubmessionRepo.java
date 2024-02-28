package com.submession.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.submession.Model.Submession;

public interface SubmessionRepo extends JpaRepository<Submession, Long>{
List<Submession>findByTaskId(Long taskId);
}
