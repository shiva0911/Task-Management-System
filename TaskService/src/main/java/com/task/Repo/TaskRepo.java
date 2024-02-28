
package com.task.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.task.Entity.Task;

public interface TaskRepo extends JpaRepository<Task, Long>
{
    // Corrected method name to match the case of the field name: "userId"
    public List<Task> findByUserId(Long userId);
}
