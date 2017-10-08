package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;
import server.logic.model.University;

public class TestDestroyStudent {

	@Test
	public void testDestroyStudent() {
		University u = new University();
		Student s = (Student) u.GetStudent(101075401);
		assertTrue(u.DestroyStudent(s));
	}

}
