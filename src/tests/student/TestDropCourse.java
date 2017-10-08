package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;

public class TestDropCourse {

	@Test
	public void testDropCourseSuccess() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		
		s.SelectCourse(c1);
		assertTrue(s.DropCourse(c1));
	}
	
	@Test
	public void testDropCourseFail() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		
		assertFalse(s.DropCourse(c1));
	}

}
