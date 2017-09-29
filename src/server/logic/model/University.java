package server.logic.model;

import java.util.List;

public class University implements UniversityInt {

	int universityCourses;
	static int maxCourseForFTStudent = 4;
	static int maxCourseForPTStudent = 2;
	static int passRate = 70;
	
	public University(int universityCourses) {
		super();
		this.universityCourses = universityCourses;
	}

	@Override
	public List<Course> Courses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Student> Students() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Course CreateCourse(String name, int cap) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void RegisterStudentForCourse(String student, CourseInt aCourse) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void CancelCourse(Course course) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void DestroyCourse(Course course) {
		// TODO Auto-generated method stub
		
	}

}
