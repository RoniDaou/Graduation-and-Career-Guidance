package com.graduatesopportunites.Graduates.Opportunites.extracurricular_activites;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.List;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "Activity")
public class activity {

    @Id
    private String title;
    @Column(nullable=false)
    private String description;
    @Column(nullable=false)
    private String issuer_name;
    @Column(nullable=false)
    private String address;
    @Column(nullable=false)
    private String phone;
    @Column(nullable=false)
    private String email;
    @Column(nullable=false)
    private List<String> achievements;
    @Column(nullable=false)
    private List<String> goals;



}