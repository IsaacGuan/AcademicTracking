package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.University;
import main.utilities.Trace;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

public class TestCancelCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testCancelCourse() {
		logger.info(String.format("Cancel course starts"));
		Course c = (Course) University.getInstance().GetCourse(105104);
		assertTrue(University.getInstance().CancelCourse(c));
		logger.info(String.format("Cancel course ends"));
	}

}
