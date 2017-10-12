package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;

public class TestRegisterStudentForCourse {

	@Test
	public void testRegisterStudentForCourseSuccess() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		assertTrue(University.getInstance().RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_StudentNotExist() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075404, "mike", true);
		s.SelectCourse(c);
		assertFalse(University.getInstance().RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_CourseNotExist() {
		Course c = new Course("Virtual Environments", 115151, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		assertFalse(University.getInstance().RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_CourseNotSelected() {
		Course c = new Course("Computational Geometry", 105008, 20);
		Student s = new Student(101075401, "tom", true);
		assertFalse(University.getInstance().RegisterStudentForCourse(s, c));
	}

}
