package com.task.Services;

import java.time.LocalDate;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.task.Entity.Task;
import com.task.Entity.TaskStatus;
import com.task.Repo.TaskRepo;
@Service
public class TaskServiceImpl implements TaskService {

	@Autowired
	private TaskRepo taskRepo;
	
	@Override
	public Task createTask(Task task, String requestedRole) throws Exception {
		if(!requestedRole.equals(("ROLE_ADMIN")))
		{
			throw new Exception("only admin can create Task");
		}
		task.setStatus(TaskStatus.PENDING);
		task.setCreatedAt(LocalDate.now());
		return taskRepo.save(task);
		
	}

	@Override
	public Task getTaskById(Long id) throws Exception {
		return taskRepo.findById(id).orElseThrow(()->new Exception("Task Not Found with id"+id));
	}

	@Override
	public List<Task> getAllTask(TaskStatus status) {
		List<Task>allTask= taskRepo.findAll();
		List<Task>filterTask=allTask.stream().filter(task->status==null||task.getStatus().name().equalsIgnoreCase(status.toString())).collect(Collectors.toList());
		return filterTask;
	}

	@Override
	public Task updateTask(Long id, Task updateTask, Long userId) throws Exception {
		Task existingTask=getTaskById(id);
		if(updateTask.getTitle()!=null)
		{
			existingTask.setTitle(updateTask.getTitle());
			
		}
		if(updateTask.getImage()!=null)
		{
			existingTask.setImage(updateTask.getImage());
			
		}
		if(updateTask.getDescription()!=null)
		{
			existingTask.setDescription(updateTask.getDescription());
			
		}
		if(updateTask.getStatus()!=null)
		{
			existingTask.setStatus(updateTask.getStatus());
			
		}
		if(updateTask.getDeadline()!=null)
		{
			existingTask.setDeadline(updateTask.getDeadline());
			
		}
		return taskRepo.save(existingTask);
	}

	@Override
	public void deleteTask(Long id)
	{
		//getTaskById(id);
		taskRepo.deleteById(id);

	}

	@Override
	public Task assignedToUser(Long userId, Long id) throws Exception {
		Task task=getTaskById(id);
		task.setUserId(userId);
		task.setStatus(TaskStatus.DONE);
		return taskRepo.save(task);
	}

	@Override
	public List<Task> assignedUserTask(Long userId, TaskStatus status) {
		List<Task>allTask =taskRepo.findByUserId(userId);

		List<Task>filterTask=allTask.stream().filter(task->status==null||task.getStatus().name().equalsIgnoreCase(status.toString())).collect(Collectors.toList());
		return filterTask;
	
	}

	@Override
	public Task completeTask(Long id) throws Exception {
		
		Task task=getTaskById(id);
		task.setStatus(TaskStatus.ASSIGNED.DONE);	
		return taskRepo.save(task);
	}

}
