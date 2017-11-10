package main.server.logic.model;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Random;

import main.utilities.Trace;

import org.apache.log4j.Logger;

public class Course implements CourseInt {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
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
		this.preRequisites = new ArrayList<Integer>();
		this.numberOfMidterms = 0;
		this.weightOfMidterms = new ArrayList<Integer>();
		this.numberOfAssignments = 0;
		this.weightOfAssignments = new ArrayList<Integer>();
		this.hasAFinal = true;
		this.weightOfFinal = 100;
		this.enrollStudent = new HashMap<Student, Integer>();
		GenerateWeights();
		logger.info(String.format("Course Operation: Initialize course; title: %s, myCode: %d", this.title, this.myCode));
	}
	
	public Course(String title, int myCode, int capsize,
			boolean enforcePrereqs, int numberOfMidterms,
			int numberOfAssignments, boolean hasAFinal) {
		super();
		this.title = title;
		this.myCode = myCode;
		this.capsize = capsize;
		this.enforcePrereqs = enforcePrereqs;
		this.preRequisites = new ArrayList<Integer>();
		this.numberOfMidterms = numberOfMidterms;
		this.weightOfMidterms = new ArrayList<Integer>();
		this.numberOfAssignments = numberOfAssignments;
		this.weightOfAssignments = new ArrayList<Integer>();
		this.hasAFinal = hasAFinal;
		this.weightOfFinal = 0;
		this.enrollStudent = new HashMap<Student, Integer>();
		GenerateWeights();
		logger.info(String.format("Course Operation: Initialize course; title: %s, myCode: %d", this.title, this.myCode));
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

	public String toString(){
		return this.myCode + ", " + this.title;
	}
	
	@Override
	public String Title() {
		// TODO Auto-generated method stub
		return getTitle();
	}

	@Override
	public int Code() {
		// TODO Auto-generated method stub
		return getMyCode();
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		List<Student> s = new ArrayList<Student>(getEnrollStudent().keySet());
		return s;
	}

	@Override
	public List<Integer> PreRequisites() {
		// TODO Auto-generated method stub
		return getPreRequisites();
	}

	@Override
	public int WeightOfAssignment(int assignmentNum) {
		// TODO Auto-generated method stub
		int i;
		int w = 0;
		for (i=0; i<weightOfAssignments.size(); i++) {
			if (i == (assignmentNum-1)) {
				w = weightOfAssignments.get(i);
			}
		}
		return w;
	}

	@Override
	public int WeightOfMidterm(int midtermNum) {
		// TODO Auto-generated method stub
		int i;
		int w = 0;
		for (i=0; i<weightOfMidterms.size(); i++) {
			if (i == (midtermNum-1)) {
				w = weightOfMidterms.get(i);
			}
		}
		return w;
	}

	@Override
	public int WeightOfFinal() {
		// TODO Auto-generated method stub
		return getWeightOfFinal();
	}

	@Override
	public boolean HasProject() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean IsFull() {
		// TODO Auto-generated method stub
		if (Students().size()==capsize) {
			return true;
		}
		return false;
	}

	@Override
	public int MarkForStudent(Student student) {
		// TODO Auto-generated method stub
		return getEnrollStudent().get(student);
	}

	@Override
	public boolean AddStudent(Student student) {
		// TODO Auto-generated method stub
		boolean result = true;
		int flag = 0;
		if (Students().size()>=this.capsize) {
			result = false;
			logger.info(String.format("Course Operation: Add student %d to course %d; State: Fail; Reason: The course is full.", student.StudentNumber(), this.myCode));
		} else {
			for (int i = 0; i<Students().size(); i++) {
				if (student.equals(Students().get(i))) {
					flag = flag + 1;
				}
			}
			if (flag==0) {
				enrollStudent.put(student, 0);
				result = true;
				logger.info(String.format("Course Operation: Add student %d to course %d; State: Success", student.StudentNumber(), this.myCode));
			}
			else {
				result = false;
				logger.info(String.format("Course Operation: Add student %d to course %d; State: Fail; Reason: The student has registered.", student.StudentNumber(), this.myCode));
			}
		}
		return result;
	}

	@Override
	public boolean RemoveStudent(Student student) {
		// TODO Auto-generated method stub
		Iterator<Student> iterator = enrollStudent.keySet().iterator();
		while (iterator.hasNext()) {
			Student key = (Student)iterator.next();
			if (student.equals(key)) {
				enrollStudent.remove(student);
				logger.info(String.format("Course Operation: Remove student %d from course %d; State: Success", student.StudentNumber(), this.myCode));
				return true;
			}
		}
		logger.info(String.format("Course Operation: Remove student %d from course %d; State: Fail; Reason: The student has not registered.", student.StudentNumber(), this.myCode));
		return false;
	}
	
	public void GenerateWeights() {
		int n = this.numberOfMidterms + this.numberOfAssignments + (this.hasAFinal?1:0);
		List<Double> randomNumber = new ArrayList<Double>();
		double m = 0;
		Random random = new Random();
		for(int i=0; i<n; i++) {
			randomNumber.add(random.nextDouble());
			m = m + randomNumber.get(i);
		}
		double k = m/100;
		for(int i=0; i<n; i++) {
			double j = randomNumber.get(i) / k;
			randomNumber.set(i, j);
		}
		int s = 0;
		if(this.numberOfMidterms>0) {
			List<Integer> wm = new ArrayList<Integer>();
			for(int i=0; i<this.numberOfMidterms; i++){
				wm.add((int)(double)randomNumber.get(i));
				s = s + wm.get(i);
			}
			setWeightOfMidterms(wm);
		}
		if(this.numberOfAssignments>0) {
			List<Integer> wa = new ArrayList<Integer>();
			for(int i=0; i<this.numberOfAssignments; i++){
				wa.add((int)(double)randomNumber.get(this.numberOfMidterms+i));
				s = s + wa.get(i);
			}
			setWeightOfAssignments(wa);
		}
		if(this.hasAFinal){
			int wf = 100 - s;
			setWeightOfFinal(wf);
		}
	}

}
