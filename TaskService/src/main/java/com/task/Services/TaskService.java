package com.task.Services;

import java.util.List;
import com.task.Entity.Task;
import com.task.Entity.TaskStatus;

public interface TaskService 
{
	Task createTask(Task task,String requestedRole)throws Exception;
	Task getTaskById(Long id)throws Exception;
	List<Task>getAllTask(TaskStatus status);
	Task updateTask(Long id,Task updateTask,Long userId)throws Exception;
	void deleteTask(Long id);
	Task assignedToUser(Long userId,Long id)throws Exception;
	List<Task>assignedUserTask(Long userId,TaskStatus status);
	Task completeTask(Long id) throws Exception;
}
