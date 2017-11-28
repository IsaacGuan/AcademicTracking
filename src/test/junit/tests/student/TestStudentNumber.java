package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestStudentNumber {

	@Test
	public void testStudentNumber() {
		Student s = new Student(101075401, "tom", true);
		assertEquals(101075401, s.StudentNumber());
	}

}
