package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.University;

public class TestCancelCourse {

	@Test
	public void testCancelCourse() {
		University u = new University();
		Course c = (Course) u.GetCourse(105104);
		assertTrue(u.CancelCourse(c));
	}

}
