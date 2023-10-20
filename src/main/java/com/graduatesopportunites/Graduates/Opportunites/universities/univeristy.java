package com.graduatesopportunites.Graduates.Opportunites.universities;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "University")
public class univeristy {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(nullable=false)
    private String name;
    @Column(nullable=false)
    private String type;
    @Column(nullable=false)
    private String department;
    @Column(nullable=false)
    private String tuition_fees;
    @Column(nullable=false)
    private String major;
    @Column(nullable=false)
    private String address;
    @Column(nullable=false)
    private String phone;
    @Column(nullable=false)
    private String email;


}