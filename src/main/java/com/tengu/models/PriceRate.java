package com.tengu.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Data
//@AllArgsConstructor
public class PriceRate {
    @Id
    @GeneratedValue
    UUID id;
    UUID authorId;
    UUID storyId;
    int rate;
    public PriceRate() {
    }

    public PriceRate(UUID id, UUID authorId, UUID storyId, int rate) {
        this.id = id;
        this.authorId = authorId;
        this.storyId = storyId;
        this.rate = rate;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public UUID getAuthorId() {
        return authorId;
    }

    public void setAuthorId(UUID authorId) {
        this.authorId = authorId;
    }

    public UUID getStoryId() {
        return storyId;
    }

    public void setStoryId(UUID storyId) {
        this.storyId = storyId;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int value) {
        this.rate = value;
    }
}
