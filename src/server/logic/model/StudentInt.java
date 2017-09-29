package server.logic.model;

import java.util.List;

public interface StudentInt {
	
	int StudentNumber();
	String Name();
	boolean isFullTime();
	boolean isCreated();
	
	List<Course> CompletedCourse();
	List<Course> CurrentCourse();
	
	Course selectCourse(List<Course> coursees);
	
	boolean RegisterCourse(Course course);
	boolean DropCourse(Course course);
	boolean DeRegisterCourse(Course course);

}
