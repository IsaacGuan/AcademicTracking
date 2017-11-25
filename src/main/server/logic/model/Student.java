package main.server.logic.model;

import java.util.ArrayList;
import java.util.List;

import main.utilities.Trace;

import org.apache.log4j.Logger;

public class Student implements StudentInt {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");

	int studentNumber;
	String studentName;
	boolean isFullTime;
	boolean isCreated;
	
	List<Course> selectedCourses;
	List<Course> registeredCourses;
	List<Course> completedCourses;

	public Student(int studentNumber, String studentName, boolean isFullTime) {
		super();
		
		this.studentNumber = studentNumber;
		this.studentName = studentName;
		this.isFullTime = isFullTime;
		
		this.isCreated = true;
		this.selectedCourses = new ArrayList<Course>();
		this.registeredCourses = new ArrayList<Course>();
		this.completedCourses = new ArrayList<Course>();
		
		logger.info(String.format("Student Operation: Initialize student; student number: %d, student name: %s", this.studentNumber, this.studentName));
	}

	public int getStudentNumber() {
		return studentNumber;
	}

	public void setStudentNumber(int studentNumber) {
		this.studentNumber = studentNumber;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public List<Course> getSelectedCourses() {
		return selectedCourses;
	}

	public void setSelectedCourses(List<Course> selectedCourses) {
		this.selectedCourses = selectedCourses;
	}

	public List<Course> getRegisteredCourses() {
		return registeredCourses;
	}

	public void setRegisteredCourses(List<Course> registeredCourses) {
		this.registeredCourses = registeredCourses;
	}

	public List<Course> getCompletedCourses() {
		return completedCourses;
	}

	public void setCompletedCourses(List<Course> completedCourses) {
		this.completedCourses = completedCourses;
	}

	public void setFullTime(boolean isFullTime) {
		this.isFullTime = isFullTime;
	}

	public void setCreated(boolean isCreated) {
		this.isCreated = isCreated;
	}
	
	public String toString(){
		return this.studentNumber + ", " + this.studentName;
	}

	@Override
	public int StudentNumber() {
		// TODO Auto-generated method stub
		return getStudentNumber();
	}

	@Override
	public String Name() {
		// TODO Auto-generated method stub
		return getStudentName();
	}

	@Override
	public boolean isFullTime() {
		// TODO Auto-generated method stub
		return isFullTime;
	}

	@Override
	public boolean isCreated() {
		// TODO Auto-generated method stub
		return isCreated;
	}

	@Override
	public List<Course> CompletedCourse() {
		// TODO Auto-generated method stub
		return getCompletedCourses();
	}

	@Override
	public List<Course> CurrentCourse() {
		// TODO Auto-generated method stub
		return getRegisteredCourses();
	}

	@Override
	public boolean SelectCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		if(IsSelected(course)||IsRegistered(course)||IsCompleted(course)) {
			result = false;
			logger.info(String.format("Student Operation: student %d select course %d; State: Fail; Reason: student currently take this course or student has completed this course", this.StudentNumber(), course.Code()));
		} else {
			result = this.selectedCourses.add(course);
			logger.info(String.format("Student Operation: student %d select course %d; State: Success", this.StudentNumber(), course.Code()));
		}
		return result;
	}

	@Override
	public boolean RegisterCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		if(!IsSelected(course)||IsRegistered(course)||IsCompleted(course)) {
			result = false;
			logger.info(String.format("Student Operation: student %d register course %d; State: Fail; Reason: student hasn't selected this course or student has completed this course", this.StudentNumber(), course.Code()));
		} else if(isFullTime&&registeredCourses.size()>=University.maxCourseForFTStudent) {
			result = false;
			logger.info(String.format("Student Operation: student %d register course %d; State: Fail; Reason: over registered", this.StudentNumber(), course.Code()));
		} else if(!isFullTime&&registeredCourses.size()>=University.maxCourseForPTStudent) {
			result = false;
			logger.info(String.format("Student Operation: student %d register course %d; State: Fail; Reason: over registered", this.StudentNumber(), course.Code()));
		} else {
			result = this.selectedCourses.remove(course);
			result = this.registeredCourses.add(course);
			logger.info(String.format("Student Operation: student %d register course %d; State: Success", this.StudentNumber(), course.Code()));
		}
		return result;
	}

	@Override
	public boolean DropCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		if(!IsSelected(course)||IsRegistered(course)||IsCompleted(course)) {
			result = false;
			logger.info(String.format("Student Operation: student %d drop course %d; State: Fail; Reason: student hasn't selected this course or student has completed this course", this.StudentNumber(), course.Code()));
		} else {
			result = this.selectedCourses.remove(course);
			logger.info(String.format("Student Operation: student %d drop course %d; State: Success", this.StudentNumber(), course.Code()));
		}
		return result;
	}

	@Override
	public boolean DeRegisterCourse(Course course) {
		// TODO Auto-generated method stub
		boolean result = true;
		if(IsSelected(course)||!IsRegistered(course)||IsCompleted(course)) {
			result = false;
			logger.info(String.format("Student Operation: student %d deregister course %d; State: Fail; Reason: student hasn't registered this course or student has completed this course", this.StudentNumber(), course.Code()));
		} else {
			result = this.registeredCourses.remove(course);
			logger.info(String.format("Student Operation: student %d deregister course %d; State: Success", this.StudentNumber(), course.Code()));
		}
		return result;
	}
	
	public boolean IsSelected (Course course) {
		if (selectedCourses.contains(course)) {
			logger.info(String.format("Student Operation: student %d has selected course %d;", this.StudentNumber(), course.Code()));
			return true;
		} else {
			logger.info(String.format("Student Operation: student %d has not selected course %d;", this.StudentNumber(), course.Code()));
			return false;
		}
	}
	
	public boolean IsRegistered (Course course) {
		if (registeredCourses.contains(course)) {
			logger.info(String.format("Student Operation: student %d has registered for course %d;", this.StudentNumber(), course.Code()));
			return true;
		} else {
			logger.info(String.format("Student Operation: student %d has not registered for course %d;", this.StudentNumber(), course.Code()));
			return false;
		}
	}
	
	public boolean IsCompleted (Course course) {
		if (completedCourses.contains(course)) {
			logger.info(String.format("Student Operation: student %d has completed course %d;", this.StudentNumber(), course.Code()));
			return true;
		} else {
			logger.info(String.format("Student Operation: student %d has not completed course %d;", this.StudentNumber(), course.Code()));
			return false;
		}
	}

	@Override
	public int AverageMark() {
		// TODO Auto-generated method stub
		int sum = 0;
		int average = 0;
		for (int i=0; i<registeredCourses.size(); i++) {
			sum = sum + registeredCourses.get(i).MarkForStudent(this);
		}
		if (registeredCourses.size()!=0) {
			average = sum / registeredCourses.size();
			System.out.println(this.StudentNumber() + " " + this.Name() + " " + average);
		}
		return average;
	}

}
