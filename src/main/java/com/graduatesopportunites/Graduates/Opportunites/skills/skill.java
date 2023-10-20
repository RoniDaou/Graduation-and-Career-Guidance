package com.graduatesopportunites.Graduates.Opportunites.skills;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "Skill")
public class skill {

    @Id
    private String name;
    @Column(nullable=false)
    private String description;
    @Column(nullable=false)
    private String importance;
    @Column(nullable=false)
    private String level;
    @Column(nullable=false)
    private List<String> resources;


}