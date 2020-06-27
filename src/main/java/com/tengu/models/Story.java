package com.tengu.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Entity
@Data
//@AllArgsConstructor
public class Story {

    @Id
    @GeneratedValue
    private UUID id;

    private String title;

    @Lob
    private String text;

    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate createdDate;

    private double price;

    @ManyToOne
    private User author;

    public Story(){}

    public Story(UUID randomUUID, String title, String text, LocalDate date, User author, double price) {
        this.id = randomUUID;
        this.title = title;
        this.text = text;
        this.author = author;
        this.createdDate = date;
        this.price = price;
    }
}
