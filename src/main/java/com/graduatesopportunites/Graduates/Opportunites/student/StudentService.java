package com.graduatesopportunites.Graduates.Opportunites.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
//Business logic of the application related to students.
// It is the bridge between the StudentController and StudentRepository.
@Service
public class StudentService {
    private final StudentRepository studentRepository;

    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Autowired
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        studentRepository.save(student);
    }

    public boolean isStudentDataValid(Student student) {
        return true;
    }
    public Student getStudentById(Long studentId) {
        return studentRepository.findById(studentId)
                .orElse(null);
    }

}






    //    @Override
//    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
//        // Find the user by email in your user repository
//        Student user = studentRepository.findStudentByEmail(email);
//
//        if (user == null) {
//            throw new UsernameNotFoundException("User not found with email: " + email);
//        }
//
//        return new CustomUserDetails(user);
//    }
//    public void deleteStudent(Long studentId) {
//        boolean exists = studentRepository.existsById(studentId);
//        if (!exists) {
//            throw new IllegalStateException("student with id" + studentId + " does not exists");
//        }
//        studentRepository.deleteById(studentId);
//    }


//    @Transactional
//    public void updateStudent(Long studentId, String name, String email) {
//        Student student = studentRepository.findById(studentId)
//                .orElseThrow(() -> new IllegalStateException("Student with ID " + studentId + " does not exist"));
//
//        if (name != null && !name.isEmpty() && !Objects.equals(student.getEmail(), email)) {
//            Student studentOptional = studentRepository.findByStudentEmail(email);
//            if (studentOptional.isPresent()) {
//                throw new IllegalStateException("Email is already taken");
//            }
//            student.setEmail(email);
//        }
//    }

//    public void updateStudent(Long studentId, Student updatedStudent) {
//        // Fetch the existing student by ID
//        Student existingStudent = getStudentById(studentId);
//
//        if (existingStudent != null) {
//            existingStudent.setFirst_name(updatedStudent.getFirst_name());
//            existingStudent.setLast_name(updatedStudent.getLast_name());
//            existingStudent.setDateOfBirth(updatedStudent.getDateOfBirth());
//            existingStudent.setGender(updatedStudent.getGender());
//            existingStudent.setMajor(updatedStudent.getMajor());
//            existingStudent.setYear_of_study(updatedStudent.getYear_of_study());
//            existingStudent.setAddress(updatedStudent.getAddress());
//            existingStudent.setPhone(updatedStudent.getPhone());
//            existingStudent.setEmail(updatedStudent.getEmail());
//            studentRepository.save(existingStudent);
//        }
//
//    }

//}
