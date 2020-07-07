package com.tengu.models;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.UUID;

@Entity
@Data
public class Exercise {
    @Id
    @GeneratedValue
    UUID id;
    @Column(unique = true)
    String name;
    UUID authorId;
    int price;
    String description;

    public Exercise(){
    }
    public Exercise(UUID id, String name, UUID authorId, int price, String description) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.authorId = authorId;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UUID getAuthorId() {
        return authorId;
    }

    public void setAuthorId(UUID authorId) {
        this.authorId = authorId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}