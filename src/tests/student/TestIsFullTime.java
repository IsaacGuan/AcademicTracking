package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;

public class TestIsFullTime {

	@Test
	public void testIsFullTime() {
		Student s = new Student(101075401, "tom", true);
		assertTrue(s.isFullTime());
	}

}
