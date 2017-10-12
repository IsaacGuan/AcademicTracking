package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.University;

public class TestCancelCourse {

	@Test
	public void testCancelCourse() {
		Course c = (Course) University.getInstance().GetCourse(105104);
		assertTrue(University.getInstance().CancelCourse(c));
	}

}
