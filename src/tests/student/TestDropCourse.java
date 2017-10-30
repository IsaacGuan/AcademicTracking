package tests.student;

import static org.junit.Assert.*;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;
import utilities.Trace;

public class TestDropCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testDropCourseSuccess() {
		logger.info(String.format("Drop course starts"));
		Student s = University.getInstance().GetStudent(101075401);
		Course c = University.getInstance().GetCourse(105104);
		s.SelectCourse(c);
		assertTrue(s.DropCourse(c));
		logger.info(String.format("Drop course ends"));
	}
	
	@Test
	public void testDropCourseFail() {
		logger.info(String.format("Drop course starts"));
		Student s = University.getInstance().GetStudent(101075401);
		Course c = University.getInstance().GetCourse(105008);
		assertFalse(s.DropCourse(c));
		logger.info(String.format("Drop course ends"));
	}

}
