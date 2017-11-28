package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

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
