package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestRemoveStudent {

	@Test
	public void testRemoveStudentSuccess() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		c.AddStudent(s);
		assertTrue(c.RemoveStudent(s));
	}
	
	@Test
	public void testRemoveStudentFailure() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		assertFalse(c.RemoveStudent(s));
	}

}
