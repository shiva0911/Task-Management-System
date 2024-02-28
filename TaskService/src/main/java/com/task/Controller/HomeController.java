package com.task.Controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HomeController {

	@GetMapping("/tasks")
    public ResponseEntity<String> getAssignUserTask() throws Exception {
        return new ResponseEntity<>("welcome to task service",HttpStatus.OK);
    }
}
