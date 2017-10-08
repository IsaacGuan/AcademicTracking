package server.logic.model;

import java.util.List;

public interface UniversityInt {
	
	List<Course> Courses();
	List<Student> Students();
	
	Object GetStudent(int number);
	Object GetCourse(int mycode);
	
	boolean CreateCourse(String title, int mycode, int cap, 
			boolean enforcePrereqs, int numberofmidterms, 
			int numberofassignments, boolean hasafinal, 
			boolean isprojectcourse);
	boolean CreateStudent(int number, String name, boolean isfulltime);
	
	boolean RegisterStudentForCourse(Student student, Course course);
	boolean CancelCourse(Course course);
	
	boolean DestroyCourse(Course course);
	boolean DestroyStudent(Student student);

}
