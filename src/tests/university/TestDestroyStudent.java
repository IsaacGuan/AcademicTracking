package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;
import server.logic.model.University;

public class TestDestroyStudent {

	@Test
	public void testDestroyStudent() {
		Student s = (Student) University.getInstance().GetStudent(101075401);
		assertTrue(University.getInstance().DestroyStudent(s));
	}

}
