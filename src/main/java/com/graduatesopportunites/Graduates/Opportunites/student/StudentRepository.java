package com.graduatesopportunites.Graduates.Opportunites.student;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

//Database Operations (crud operations available just use them)
@Repository
@Transactional(readOnly = true)
public interface StudentRepository extends JpaRepository<Student, Long>{
    @Query("SELECT s FROM Student s WHERE s.email = ?1")
    public Student findStudentByEmail(String email);

}
