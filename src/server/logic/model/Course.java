package server.logic.model;

import java.util.List;
import java.util.Map;

public class Course implements CourseInt {
	
	String title;
	int myCode;
	int capsize;
	
	boolean enforcePrereqs;
	List<Integer> preRequisites;
	
	int numberOfMidterms;
	List<Integer> weightOfMidterms;
	
	int numberOfAssignments;
	List<Integer> weightOfAssignments;
	
	boolean hasAFinal;
	int weightOfFinal;
	
	Map<Student, Integer> enrollStudent;

	public Course(String title, int myCode, int capsize) {
		super();
		
		this.title = title;
		this.myCode = myCode;
		this.capsize = capsize;
		
		this.enforcePrereqs = false;
		this.preRequisites = null;
		
		this.numberOfMidterms = 0;
		this.weightOfMidterms = null;
		
		this.numberOfAssignments = 0;
		this.weightOfAssignments = null;
		
		this.hasAFinal = true;
		this.weightOfFinal = 100;
		
		this.enrollStudent = null;
		
	}

	@Override
	public String Title() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int Code() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Integer> PreRequisites() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int WeightOfAssignment(int assignmentNum) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int WeightOfMidterm(int midtermNum) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int WeightOfFinal() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean IsFull() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int MarkForStudent(Student student) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean AddStudent(Student student) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean RemoveStudent(Student student) {
		// TODO Auto-generated method stub
		return false;
	}
	
	

}
