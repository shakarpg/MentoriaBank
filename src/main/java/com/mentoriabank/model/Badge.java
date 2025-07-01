package com.mentoriabank.model;

import jakarta.persistence.*;

@Entity
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String description;

    @ManyToOne
    private User user;

    // Getters e Setters
}
