package com.tengu.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
//@AllArgsConstructor
public class Purchase {
    @Id
    @GeneratedValue
    UUID id;
    UUID userId;
    UUID storyId;

    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate createdDate;

    int price;

    public Purchase() {
    }

    public Purchase(UUID id, UUID userId, UUID storyId, int price, LocalDate localDate) {
        this.id = id;
        this.userId = userId;
        this.storyId = storyId;
        this.price = price;
        this.createdDate = localDate;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getUserId() {
        return userId;
    }

    public void setUserId(UUID userId) {
        this.userId = userId;
    }

    public UUID getStoryId() {
        return storyId;
    }

    public void setStoryId(UUID storyId) {
        this.storyId = storyId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }
}
