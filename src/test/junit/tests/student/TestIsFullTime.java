package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestIsFullTime {

	@Test
	public void testIsFullTime() {
		Student s = new Student(101075401, "tom", true);
		assertTrue(s.isFullTime());
	}

}
