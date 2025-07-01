package com.mentoriabank.model;

import jakarta.persistence.*;

@Entity
public class Goal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Double targetAmount;

    @ManyToOne
    private User user;

    // Getters e Setters
}
