package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.University;

public class TestCreatCourse {

	@Test
	public void testCreatCourseSuccess(){
		assertTrue(University.getInstance().CreateCourse("Computer Security and Usability", 105110, 30, false, 1, 3, true, false));
	}

	@Test
	public void testCreatCourseFail_CourseExisted(){
		assertFalse(University.getInstance().CreateCourse("Principles of Distributed Computing", 105003, 20, false, 1, 2, true, false));
	}
	
}
