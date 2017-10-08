package tests.course;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;

public class TestAddStudent {

	@Test
	public void testAddStudentSuccess() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		assertTrue(c.AddStudent(s));
	}
	
	@Test
	public void testAddStudentFailure() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		c.AddStudent(s);
		assertFalse(c.AddStudent(s));
	}

}
