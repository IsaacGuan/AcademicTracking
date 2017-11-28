package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Trace;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

public class TestDestroyStudent {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testDestroyStudent() {
		logger.info(String.format("Destroy student starts"));
		Student s = (Student) University.getInstance().GetStudent(101075401);
		assertTrue(University.getInstance().DestroyStudent(s));
		logger.info(String.format("Destroy student ends"));
	}

}
