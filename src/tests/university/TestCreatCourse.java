package tests.university;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;
import org.apache.log4j.Logger;

import server.logic.model.University;
import utilities.Trace;

public class TestCreatCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testCreatCourseSuccess(){
		logger.info(String.format("Create course starts"));
		assertTrue(University.getInstance().CreateCourse("Computer Security and Usability", 105110, 30, false, 1, 3, true, false));
		logger.info(String.format("Create course ends"));
	}

	@Test
	public void testCreatCourseFail_CourseExisted(){
		logger.info(String.format("Create course starts"));
		assertFalse(University.getInstance().CreateCourse("Principles of Distributed Computing", 105003, 20, false, 1, 2, true, false));
		logger.info(String.format("Create course ends"));
	}
	
}
