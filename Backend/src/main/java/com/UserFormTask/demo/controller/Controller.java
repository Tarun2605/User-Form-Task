package com.UserFormTask.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.UserFormTask.demo.model.Feedback;
import com.UserFormTask.demo.respository.FeedbackRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Controller {

    @Autowired
    FeedbackRepository feedbackRepository;

    @GetMapping("/")
    public String home() {
        return "Welcome to User Form Task";
    }
    

    //get all feedbacks
    @GetMapping("/getFeedbacks")
    public List<Feedback> getFeedbacks() {
        return feedbackRepository.findAll();
    }
    //get feedback by id
    @GetMapping("/getFeedbackById")
    public Feedback getFeedbackById(@RequestParam String id) {
        return feedbackRepository.findById(id).get();
    }
    //add feedback
    @PostMapping("/addFeedback")
    public ResponseEntity<String> addFeedback(@RequestBody Feedback feedback) {
        feedbackRepository.save(feedback);
        return ResponseEntity.ok("Feedback added successfully");
    }

}
