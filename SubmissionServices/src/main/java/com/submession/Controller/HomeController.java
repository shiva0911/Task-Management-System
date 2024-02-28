
package com.submession.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class HomeController {

    @GetMapping("/task")
    public ResponseEntity<String> home() {
        return ResponseEntity.ok("Welcome");
    }
}
