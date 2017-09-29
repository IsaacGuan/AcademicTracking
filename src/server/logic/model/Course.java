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

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getMyCode() {
		return myCode;
	}

	public void setMyCode(int myCode) {
		this.myCode = myCode;
	}

	public int getCapsize() {
		return capsize;
	}

	public void setCapsize(int capsize) {
		this.capsize = capsize;
	}

	public boolean isEnforcePrereqs() {
		return enforcePrereqs;
	}

	public void setEnforcePrereqs(boolean enforcePrereqs) {
		this.enforcePrereqs = enforcePrereqs;
	}

	public List<Integer> getPreRequisites() {
		return preRequisites;
	}

	public void setPreRequisites(List<Integer> preRequisites) {
		this.preRequisites = preRequisites;
	}

	public int getNumberOfMidterms() {
		return numberOfMidterms;
	}

	public void setNumberOfMidterms(int numberOfMidterms) {
		this.numberOfMidterms = numberOfMidterms;
	}

	public List<Integer> getWeightOfMidterms() {
		return weightOfMidterms;
	}

	public void setWeightOfMidterms(List<Integer> weightOfMidterms) {
		this.weightOfMidterms = weightOfMidterms;
	}

	public int getNumberOfAssignments() {
		return numberOfAssignments;
	}

	public void setNumberOfAssignments(int numberOfAssignments) {
		this.numberOfAssignments = numberOfAssignments;
	}

	public List<Integer> getWeightOfAssignments() {
		return weightOfAssignments;
	}

	public void setWeightOfAssignments(List<Integer> weightOfAssignments) {
		this.weightOfAssignments = weightOfAssignments;
	}

	public boolean isHasAFinal() {
		return hasAFinal;
	}

	public void setHasAFinal(boolean hasAFinal) {
		this.hasAFinal = hasAFinal;
	}

	public int getWeightOfFinal() {
		return weightOfFinal;
	}

	public void setWeightOfFinal(int weightOfFinal) {
		this.weightOfFinal = weightOfFinal;
	}

	public Map<Student, Integer> getEnrollStudent() {
		return enrollStudent;
	}

	public void setEnrollStudent(Map<Student, Integer> enrollStudent) {
		this.enrollStudent = enrollStudent;
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
