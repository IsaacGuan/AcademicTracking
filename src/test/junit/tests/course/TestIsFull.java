package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

/**
 * @author Yanran Guan
 *
 */
public class TestIsFull {

	@Test
	public void testNotFull() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s1 = new Student(101075401, "tom", true);
		Student s2 = new Student(101075402, "jack", true);
		c.AddStudent(s1);
		c.AddStudent(s2);
		
		assertFalse(c.IsFull());
	}
	
	@Test
	public void testFull() {
		Course c = new Course("OO Software Dev", 105104, 2);
		Student s1 = new Student(101075401, "tom", true);
		Student s2 = new Student(101075402, "jack", true);
		c.AddStudent(s1);
		c.AddStudent(s2);
		
		assertTrue(c.IsFull());
	}

}
