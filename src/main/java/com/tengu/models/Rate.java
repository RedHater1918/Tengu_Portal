package com.tengu.models;

import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
//@AllArgsConstructor
public class Rate {
    @Id
    @GeneratedValue
    UUID id;
    UUID userId;
    UUID storyId;
    int value;

    public Rate() {
    }

    public Rate(UUID id, UUID userId, UUID storyId, int value) {
        this.id = id;
        this.userId = userId;
        this.storyId = storyId;
        this.value = value;
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

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}
