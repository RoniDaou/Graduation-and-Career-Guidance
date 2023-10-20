package com.graduatesopportunites.Graduates.Opportunites.scholarships;

import jakarta.persistence.*;
import lombok.Data;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "Scholarship")
public class scholarship {

    @Id // primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable=false)
    private String name;
    @Column(nullable=false)
    private String majors;
    @Column(nullable=false)
    private String eligibility_criteria;
    @Column(nullable=false)
    private String amount;
    @Column(nullable=false)
    private String duration;
    @Column(nullable=false)
    private String phone;
    @Column(nullable=false)
    private String email;


}
