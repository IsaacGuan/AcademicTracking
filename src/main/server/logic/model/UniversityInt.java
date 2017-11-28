package main.server.logic.model;

import java.util.List;

public interface UniversityInt {
	
	List<Course> Courses();
	List<Student> Students();
	
	Student GetStudent(int number);
	Course GetCourse(int mycode);
	
	boolean LookupStudent(int number, String name);
	
	boolean CheckCourse(int mycode);
	boolean CheckStudent(int number);
	
	boolean CreateCourse(String title, int mycode, int cap, 
			boolean enforcePrereqs, int numberofmidterms, 
			int numberofassignments, boolean hasafinal, 
			boolean isprojectcourse);
	boolean CreateStudent(int number, String name, boolean isfulltime);
	
	boolean RegisterStudentForCourse(Student student, Course course);
	boolean DeRegisterStudentFromCourse(Student student, Course course);
	
	boolean CancelCourse(Course course);
	
	boolean DestroyCourse(Course course);
	boolean DestroyStudent(Student student);
	
	boolean MarkStudents(Course course);
	
	List<Student> DeansList();

}
