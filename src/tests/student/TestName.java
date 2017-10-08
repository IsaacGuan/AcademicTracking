package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;

public class TestName {

	@Test
	public void testName() {
		Student s = new Student(101075401, "tom", true);
		assertEquals("tom", s.Name());
	}

}
