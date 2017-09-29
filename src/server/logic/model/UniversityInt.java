package server.logic.model;

import java.util.List;

public interface UniversityInt {
	
	List<Course> Courses();
	List<Student> Students();
	Course CreateCourse(String name, int cap);
	
	void RegisterStudentForCourse(String student, CourseInt aCourse);
	void CancelCourse(Course course);
	void DestroyCourse(Course course);

}
