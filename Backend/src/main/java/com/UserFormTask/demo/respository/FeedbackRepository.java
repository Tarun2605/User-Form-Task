package com.UserFormTask.demo.respository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.UserFormTask.demo.model.Feedback;

public interface FeedbackRepository extends MongoRepository<Feedback, String>{

}
