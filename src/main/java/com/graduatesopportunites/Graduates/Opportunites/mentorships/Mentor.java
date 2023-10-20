package com.graduatesopportunites.Graduates.Opportunites.mentorships;

import com.graduatesopportunites.Graduates.Opportunites.entities.Address;
import com.graduatesopportunites.Graduates.Opportunites.entities.Gender;
import com.graduatesopportunites.Graduates.Opportunites.student.Student;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Mentorship")
public class Mentor {
    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false)
    private String first_name;
    @Column(nullable=false)
    private String last_name;
    @Column(nullable=false)
    private LocalDate dateOfBirth;
    @Column(nullable=false)
    private Gender gender;
    @Column(nullable=false)
    private String major;
    @Column(nullable=false)
    private String experience;
    @Column(nullable=false)
    private String address;
    @Column(nullable=false)
    private String phone;
    @Column(nullable=false)
    private String email;
    @Column(nullable=false)
    private String job_title;
    @Column(nullable=false)
    private String area_of_expertise;

    @Transient
    private Integer age;
    // One mentor can have multiple students
    @OneToMany(mappedBy = "mentor")
    private List<Student> students;


}