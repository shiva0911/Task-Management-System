package com.task.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.task.Entity.Task;
import com.task.Entity.TaskStatus;
import com.task.Entity.UserDto;
import com.task.Services.TaskService;
import com.task.Services.UserService;

@RestController
@RequestMapping("/api/tasks")

public class TaskController {

    private final TaskService taskService;
    private final UserService userService;

    @Autowired
    public TaskController(TaskService taskService, UserService userService) 
    {
        this.taskService = taskService;
        this.userService = userService;
    }

    // Create a new task
    @PostMapping("/new")
    public ResponseEntity<Task> createTask(@RequestBody Task task, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        Task createdTask = taskService.createTask(task, user.getRole());
        return new ResponseEntity<>(createdTask, HttpStatus.CREATED);
    }

    // Retrieve a task by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception {
         UserDto user = userService.getUserProfile(jwt);
        Task task = taskService.getTaskById(id);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // Retrieve tasks assigned to the current user
    @GetMapping("/user")
    public ResponseEntity<List<Task>> getAssignUserTask(@RequestParam(required = false) TaskStatus status, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        List<Task> tasks = taskService.assignedUserTask(user.getId(), status);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    // Retrieve all tasks
    @GetMapping()
    public ResponseEntity<List<Task>> getAllTask(@RequestParam(required = false) TaskStatus status, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        List<Task> tasks = taskService.getAllTask(status);
        return new ResponseEntity<>(tasks, HttpStatus.OK);
    }

    // Assign a task to a user
    @PutMapping("/{id}/user/{userId}/assigned")
    public ResponseEntity<Task> assigntasktoUser(@PathVariable Long id, @PathVariable Long userId, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        Task task = taskService.assignedToUser(userId, id);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // Update a task
    @PutMapping("/{id}")
    public ResponseEntity<Task> updateTask(@PathVariable Long id, @RequestBody Task req, @RequestHeader("Authorization") String jwt) throws Exception {
        UserDto user = userService.getUserProfile(jwt);
        Task task = taskService.updateTask(id, req, user.getId());
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // Mark a task as complete
    @PutMapping("/{id}/complete")
    public ResponseEntity<Task> completeTask(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception {
        Task task = taskService.completeTask(id);
        return new ResponseEntity<>(task, HttpStatus.OK);
    }

    // Delete a task
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTask(@PathVariable Long id, @RequestHeader("Authorization") String jwt) throws Exception {
        taskService.deleteTask(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
