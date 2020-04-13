package com.tengu.models;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Data
@Table(name="tengu_user", uniqueConstraints = {
        @UniqueConstraint(columnNames = {
                "nickName"
        }),
        @UniqueConstraint(columnNames = {
                "email"
        })
})
@AllArgsConstructor
public class User {
    public enum Role{
        ADMINISTRATOR, AUTHOR, READER;
        public static Role getById(String id){
            for(Role e : values()) {
                if(e.name().equalsIgnoreCase(id)) return e;
            }
            return READER;
        }
    };

    @Id
    @GeneratedValue
    UUID id;
    Role role;
    String email;
    String password;
    String nickName;
    @JsonFormat(pattern = "MM/dd/yyyy")
    LocalDate registrationDate;
    @JsonFormat(pattern = "MM/dd/yyyy")
    LocalDate lastLoginDate;
    int points;

    public User(){}
}
