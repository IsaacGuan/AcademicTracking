package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.University;

public class TestDestroyCourse {

	@Test
	public void testDestroyCourse() {
		Course c = (Course) University.getInstance().GetCourse(105104);
		assertTrue(University.getInstance().DestroyCourse(c));
	}

}
