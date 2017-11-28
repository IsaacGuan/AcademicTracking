package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestName {

	@Test
	public void testName() {
		Student s = new Student(101075401, "tom", true);
		assertEquals("tom", s.Name());
	}

}
