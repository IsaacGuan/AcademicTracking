package tests.university;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;

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
