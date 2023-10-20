package com.graduatesopportunites.Graduates.Opportunites.student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//HTTP requests handling
//each method is an api
@RestController
@RequestMapping//(path = "/student")
@CrossOrigin(origins = "http://localhost:5173")
public class StudentController {
    private final StudentService studentService;
    private final StudentRepository studentRepository;
    @Autowired
    public StudentController(StudentService studentService, StudentRepository studentRepository) {

        this.studentService = studentService;
        this.studentRepository = studentRepository;
    }
    @GetMapping("/data")
    public String getData() {
        return "Hello from the backend!";
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestParam String username, @RequestParam String password) {
        Student user = studentRepository.findStudentByEmail(username);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
    //From this method because it is void i can't send the messages to the frontend,
    // in the frontend to see the message i use reponse.data
//    @PostMapping("/add")
//    public void registerNewStudent(@RequestBody Student student){
//        studentService.addNewStudent(student);
//    }
    @PostMapping("/add")
    public ResponseEntity<String> registerNewStudent(@RequestBody Student student) {
        if (student == null || !studentService.isStudentDataValid(student)) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid student data");
        }
        Student studentByEmail = studentRepository.findStudentByEmail(student.getEmail());

        if (studentByEmail != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already taken");
        } else {
            studentService.addNewStudent(student);
            return ResponseEntity.status(HttpStatus.CREATED).body("Student registered successfully");
        }
    }



//    @GetMapping("/getAllStudents")
//    public List<Student> getStudents() {
//        return studentService.getStudents();
//    }

//    @PutMapping(path = "{studentId}")
//    public ResponseEntity<String> updateStudent(@PathVariable("studentId") Long studentId, @RequestBody Student updatedStudent) {
//        try {
//            studentService.updateStudent(studentId, updatedStudent);
//            return ResponseEntity.ok("Student updated successfully.");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update student: " + e.getMessage());
//        }
//    }
//
//    @DeleteMapping(path = "{studentId}")
//    public ResponseEntity<String> deleteStudent(@PathVariable("studentId") Long studentId) {
//        try {
//            studentService.deleteStudent(studentId);
//            return ResponseEntity.ok("Student deleted successfully.");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete student: " + e.getMessage());
//        }
//    }

}
