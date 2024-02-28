package com.submession.Service;

import java.time.LocalDateTime;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.submession.Model.Submession;
import com.submession.Model.TaskDto;
import com.submession.Repo.SubmessionRepo;

@Service
public class SubmessionServiceImpl implements SubmessionService {

	@Autowired
	private SubmessionRepo submessionRepo;
	@Autowired
	private TaskService taskService;
//	@Autowired
//	private TaskService taskService;
//	@Override
	public Submession submitTask(Long taskId, String githubLink, Long UserId ,String jwt) throws Exception 
	{
	
	TaskDto tasks=taskService.getTaskById(taskId,jwt);
	if(tasks!=null)
	{
		Submession submession=new Submession();
		submession.setTaskId(taskId);
		submession.setUserId(UserId);
		submession.setGithubLink(githubLink);
		submession.setSubmessionTime(LocalDateTime.now());
		return submessionRepo.save(submession);
	}
	throw new Exception("Task not found with id:"+taskId);
	}

	@Override
	public Submession getTaskSubmessionById(Long id) throws Exception {
		return submessionRepo.findById(id).orElseThrow(()->new Exception("RTask Submession not found with Id"+id));
	}

	@Override
	public List<Submession> getAllTaskSubmessions() {
		return submessionRepo.findAll();
	}

	@Override
	public List<Submession> getTaskSubmessionsByTaskId(Long taskId) {
		
		return submessionRepo.findByTaskId(taskId);
	}

	@Override
	public Submession acceptDeclineSubmession(Long id, String status) throws Exception 
	{
		Submession submession=getTaskSubmessionById(id);
		submession.setStatus(status);
		if(status.equals("ACCEPT"))
		{
			taskService.completeTask(submession.getTaskId(),"COMPLETED");
				
		}
		return submessionRepo.save(submession);
	}

}
