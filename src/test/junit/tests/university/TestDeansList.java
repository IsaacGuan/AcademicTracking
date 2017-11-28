package test.junit.tests.university;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;

import org.junit.Before;
import org.junit.Test;

public class TestDeansList {
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testDeansList() {
		Course c1 = University.getInstance().getCourses().get(0);
		Student s1 = University.getInstance().getStudents().get(0);
		Student s2 = University.getInstance().getStudents().get(1);
		
		s1.SelectCourse(c1);
		s2.SelectCourse(c1);
		
		University.getInstance().RegisterStudentForCourse(s1, c1);
		University.getInstance().RegisterStudentForCourse(s2, c1);
		University.getInstance().MarkStudents(c1);
		
		List<Student> deansList = new ArrayList<Student>();
		if (s1.AverageMark()>=85) {
			deansList.add(s1);
		}
		if (s2.AverageMark()>=85) {
			deansList.add(s2);
		}
		assertEquals(deansList, University.getInstance().DeansList());
	}

}
