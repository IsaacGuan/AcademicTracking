package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;

public class TestSelectCourse {

	@Test
	public void testSelectCourseSuccess() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		
		s.SelectCourse(c1);
		s.SelectCourse(c2);
		s.RegisterCourse(c1);
		s.RegisterCourse(c2);
		assertTrue(s.SelectCourse(c3));
	}
	
	@Test
	public void testSelectCourseFail() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		
		s.SelectCourse(c1);
		s.SelectCourse(c2);
		s.SelectCourse(c3);
		s.RegisterCourse(c1);
		s.RegisterCourse(c2);
		assertFalse(s.SelectCourse(c2));
	}

}
