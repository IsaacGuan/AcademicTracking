package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestRegisterCourse {

	@Test
	public void testRegisterCourseSuccess() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		
		s.SelectCourse(c1);
		s.SelectCourse(c2);
		s.SelectCourse(c3);
		assertTrue(s.RegisterCourse(c3));
	}
	
	@Test
	public void testRegisterCourseFail_NotSelected() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		
		s.SelectCourse(c1);
		s.SelectCourse(c2);
		assertFalse(s.RegisterCourse(c3));
	}
	
	@Test
	public void testRegisterCourseFail_OverRegistered() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		Course c4 = new Course("Advanced Database Systems", 105305, 30);
		Course c5 = new Course("Foundations of Programming Languages", 105001, 30);
		
		s.SelectCourse(c1);
		s.RegisterCourse(c1);
		s.SelectCourse(c2);
		s.RegisterCourse(c2);
		s.SelectCourse(c3);
		s.RegisterCourse(c3);
		s.SelectCourse(c4);
		s.RegisterCourse(c4);
		s.SelectCourse(c5);
		assertFalse(s.RegisterCourse(c5));
	}

}
