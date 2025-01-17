package com.submession.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.submession.Model.Submession;
import com.submession.Model.UserDto;
import com.submession.Service.SubmessionService;
import com.submession.Service.TaskService;
import com.submession.Service.UserService;

@RestController
@RequestMapping("/api/submit")

public class SubmessionController 
{
	@Autowired
	private SubmessionService submessionService;
	@Autowired
	private UserService userService;
	@Autowired
	private TaskService taskService;

	@PostMapping
	public ResponseEntity<Submession>submitTask
	(
			@RequestParam Long taskId,
			@RequestParam String githubLink,
			@RequestHeader("Authorization") String jwt)throws Exception
	{
		UserDto user=userService.getUserProfile(jwt);
		Submession submession=submessionService.submitTask(taskId, githubLink, user.getId(), jwt);
		return new ResponseEntity<>(submession,HttpStatus.CREATED);
	}
	@GetMapping("/{id}")
	public ResponseEntity<Submession>getSubmessionById
	(
		@PathVariable Long id, 	@RequestHeader("Authorization") String jwt)throws Exception
	{
		UserDto user=userService.getUserProfile(jwt);
		Submession submession=submessionService.getTaskSubmessionById(id);
		return new ResponseEntity<>(submession,HttpStatus.OK);
	}
	@GetMapping()
	public ResponseEntity<List<Submession>>getAllSubmessions
	(
		@RequestHeader("Authorization") String jwt)throws Exception
	{
		UserDto user=userService.getUserProfile(jwt);
		List<Submession> submession=submessionService.getAllTaskSubmessions();
		return new ResponseEntity<>(submession,HttpStatus.OK);
	}
	@GetMapping("/task/{taskId}")
	public ResponseEntity<List<Submession>>getAllSubmessions
	(
			@PathVariable Long taskId,
		@RequestHeader("Authorization") String jwt)throws Exception
	{
		UserDto user=userService.getUserProfile(jwt);
		List<Submession> submession=submessionService.getTaskSubmessionsByTaskId(taskId);
		return new ResponseEntity<>(submession,HttpStatus.OK);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Submession>acceptOrDeclineSubmession
	(
			@PathVariable Long id,
			@RequestParam("status") String status,
		    @RequestHeader("Authorization") String jwt)throws Exception
	{
		UserDto user=userService.getUserProfile(jwt);
		Submession submession=submessionService.acceptDeclineSubmession(id, status);
		return new ResponseEntity<>(submession,HttpStatus.OK);
	}
	
}
