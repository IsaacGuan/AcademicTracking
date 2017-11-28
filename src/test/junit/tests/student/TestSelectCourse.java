package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Trace;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

public class TestSelectCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testSelectCourseSuccess() {
		logger.info(String.format("Select course starts"));
		Student s = University.getInstance().GetStudent(101075401);
		Course c = University.getInstance().GetCourse(105104);
		assertTrue(s.SelectCourse(c));
		logger.info(String.format("Select course ends"));
	}
	
	@Test
	public void testSelectCourseFail() {
		logger.info(String.format("Select course starts"));
		Student s = University.getInstance().GetStudent(101075401);
		Course c = University.getInstance().GetCourse(105008);
		s.SelectCourse(c);
		s.RegisterCourse(c);
		assertFalse(s.SelectCourse(c));
		logger.info(String.format("Select course ends"));
	}

}
