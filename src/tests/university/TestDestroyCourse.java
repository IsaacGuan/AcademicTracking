package tests.university;

import static org.junit.Assert.*;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.University;
import utilities.Trace;

public class TestDestroyCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testDestroyCourse() {
		logger.info(String.format("Destroy course starts"));
		Course c = (Course) University.getInstance().GetCourse(105104);
		assertTrue(University.getInstance().DestroyCourse(c));
		logger.info(String.format("Destroy course ends"));
	}

}
