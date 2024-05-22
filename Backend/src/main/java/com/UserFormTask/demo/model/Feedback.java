package com.UserFormTask.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedback")
public class Feedback {
    //user feedback with email, name , feedback (string), rating (number) and date
    private String email;
    private String name;
    private String feedback;
    private int rating;
    private String date;

    public Feedback(String email, String name, String feedback, int rating, String date) {
        this.email = email;
        this.name = name;
        this.feedback = feedback;
        this.rating = rating;
        this.date = date;
    }

    public Feedback() {
    }

    public String getEmail() {
        return email;
    }

    public String getName() {
        return name;
    }

    public String getFeedback() {
        return feedback;
    }

    public int getRating() {
        return rating;
    }

    public String getDate() {
        return date;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", feedback='" + feedback + '\'' +
                ", rating=" + rating +
                ", date='" + date + '\'' +
                '}';
    }

}
