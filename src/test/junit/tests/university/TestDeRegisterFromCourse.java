package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Trace;

import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;

public class TestDeRegisterFromCourse {
	
	private Logger logger = Trace.getInstance().getLogger("opreation_file");
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testDeRegisterFromCourseSuccess() {
		logger.info(String.format("Deregister student from course starts"));
		Course c = University.getInstance().GetCourse(105104);
		Student s = University.getInstance().GetStudent(101075401);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertTrue(University.getInstance().DeRegisterStudentFromCourse(s, c));
		logger.info(String.format("Deregister student from course ends"));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_StudentNotExist() {
		logger.info(String.format("Deregister student from course starts"));
		Course c = University.getInstance().GetCourse(105104);
		Student s = new Student(101075404, "mike", true);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
		logger.info(String.format("Deregister student from course ends"));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_CourseNotExist() {
		logger.info(String.format("Deregister student from course starts"));
		Course c = new Course("Virtual Environments", 115151, 30);
		Student s = University.getInstance().GetStudent(101075401);
		s.SelectCourse(c);
		University.getInstance().RegisterStudentForCourse(s, c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
		logger.info(String.format("Deregister student from course ends"));
	}
	
	@Test
	public void testDeRegisterFromCourseFail_CourseNotRegistered() {
		logger.info(String.format("Deregister student from course starts"));
		Course c = University.getInstance().GetCourse(105008);
		Student s = University.getInstance().GetStudent(101075401);
		s.SelectCourse(c);
		assertFalse(University.getInstance().DeRegisterStudentFromCourse(s, c));
		logger.info(String.format("Deregister student from course ends"));
	}

}
