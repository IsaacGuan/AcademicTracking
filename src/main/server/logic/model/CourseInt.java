package main.server.logic.model;

import java.util.List;

public interface CourseInt {

	String Title();
	int Code();
	
	List<Student> Students();
	List<Integer> PreRequisites();
	
	int WeightOfAssignment(int assignmentNum);
	int WeightOfMidterm(int midtermNum);
	int WeightOfFinal();
		
	boolean HasProject();
	boolean IsFull();
	
	int MarkForStudent(Student student);
	boolean AddStudent(Student student);
	boolean RemoveStudent(Student student);
	
}
