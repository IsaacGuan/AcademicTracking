package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.University;
import main.utilities.Trace;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

public class TestCreatStudent {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testCreatStudentSuccess(){
		logger.info(String.format("Create student starts"));
		assertTrue(University.getInstance().CreateStudent(101075403, "john", true));
		logger.info(String.format("Create student ends"));
	}
	
	@Test
	public void testCreatStudentFail(){
		logger.info(String.format("Create student starts"));
		assertFalse(University.getInstance().CreateStudent(101075401, "tom", true));
		logger.info(String.format("Create student ends"));
	}

}
