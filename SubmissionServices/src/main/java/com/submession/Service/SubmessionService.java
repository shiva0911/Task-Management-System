package com.submession.Service;

import com.submession.Model.Submession;
import java.util.*;
public interface SubmessionService
{
	Submession submitTask(Long taskId,String githubLink,Long UserId,String jwt)throws Exception;
	Submession getTaskSubmessionById(Long id)throws Exception;
	List<Submession>getAllTaskSubmessions();
	List<Submession>getTaskSubmessionsByTaskId(Long taskId);
	Submession acceptDeclineSubmession(Long id,String status) throws Exception;;
}
