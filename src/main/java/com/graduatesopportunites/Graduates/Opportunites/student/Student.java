package com.graduatesopportunites.Graduates.Opportunites.student;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.graduatesopportunites.Graduates.Opportunites.entities.Gender;
import com.graduatesopportunites.Graduates.Opportunites.mentorships.Mentor;
import jakarta.persistence.*;


import java.time.LocalDate;

//Entities and Attributes
import lombok.*;
@JsonPropertyOrder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Student")
public class Student {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false)
    private String email;
    @Column(nullable=false)
    private String password;
    @Column(nullable=false)
    private String role;
    @Column(nullable=false)
    private String first_name;
    @Column(nullable=false)
    private String last_name;
    @Column(nullable=false)
    private LocalDate dateOfBirth;
    @Column(nullable=false)
    @Enumerated(EnumType.STRING)
    private Gender gender;
    @Column(nullable=false)
    private String major;
    @Column(nullable=false)
    private int year_of_study;
    @Column(nullable=false)
    private String address;
    @Column(nullable=false)
    private String phone;
    @Transient
    private Integer age;

    @OneToOne
    @JoinColumn(name = "mentorId", referencedColumnName = "id")
    private Mentor mentor;





}
