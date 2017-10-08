package tests.student;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Student;

public class TestStudentNumber {

	@Test
	public void testStudentNumber() {
		Student s = new Student(101075401, "tom", true);
		assertEquals(101075401, s.StudentNumber());
	}

}
