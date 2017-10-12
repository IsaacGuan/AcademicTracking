package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;

public class TestDeRegisterFromCourse {

	@Test
	public void testDeRegisterFromCourseSuccess() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertTrue(University.getInstance().DeRegisterStudentFromCourse(s, c));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_StudentNotExist() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075404, "mike", true);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_CourseNotExist() {
		Course c = new Course("Virtual Environments", 115151, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_CourseNotRegistered() {
		Course c = new Course("Computational Geometry", 105008, 20);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
	}

}
