package com.submession.Model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDto 
{
	  private Long id;
	    private String title;
	    private String description;
	    private String image;
	    private Long userId;
	    private List<String>tags=new ArrayList<>();
	    private LocalDateTime deadline;
	    private LocalDate createdAt;
	    private TaskStatus status;
	  
	

}
