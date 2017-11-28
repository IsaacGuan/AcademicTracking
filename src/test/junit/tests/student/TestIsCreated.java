package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestIsCreated {

	@Test
	public void testIsCreated() {
		Student s = new Student(101075401, "tom", true);
		assertTrue(s.isCreated());
	}

}
