package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;

public class TestIsCreated {

	@Test
	public void testIsCreated() {
		Student s = new Student(101075401, "tom", true);
		assertTrue(s.isCreated());
	}

}
