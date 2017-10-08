package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;

public class TestDeRegisterCourse {

	@Test
	public void testDeRegisterCourseSuccess() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		
		s.SelectCourse(c1);
		s.RegisterCourse(c1);
		assertTrue(s.DeRegisterCourse(c1));;
	}
	
	@Test
	public void testDeRegisterCourseFail() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		
		s.SelectCourse(c1);
		assertFalse(s.DeRegisterCourse(c1));;
	}

}
