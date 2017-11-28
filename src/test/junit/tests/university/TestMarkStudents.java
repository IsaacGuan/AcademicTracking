package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;

import org.junit.Before;
import org.junit.Test;

public class TestMarkStudents {
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testMarkStudentsSuccess() {
		Course c1 = University.getInstance().getCourses().get(0);
		Student s1 = University.getInstance().getStudents().get(0);
		Student s2 = University.getInstance().getStudents().get(1);
		
		s1.SelectCourse(c1);
		s2.SelectCourse(c1);
		University.getInstance().RegisterStudentForCourse(s1, c1);
		University.getInstance().RegisterStudentForCourse(s2, c1);
		
		assertTrue(University.getInstance().MarkStudents(c1));
	}
	
	@Test
	public void testMarkStudentsFail_NoStudentsEnrolled() {
		Course c2 = University.getInstance().getCourses().get(1);
		
		assertFalse(University.getInstance().MarkStudents(c2));
	}

}
