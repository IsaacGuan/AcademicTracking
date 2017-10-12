package tests.university;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;

public class TestDeansList {

	@Test
	public void testDeansList() {
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Student s1 = new Student(101075401, "tom", true);
		Student s2 = new Student(101075401, "jack", true);
		s1.SelectCourse(c1);
		s2.SelectCourse(c1);
		University.getInstance().RegisterStudentForCourse(s1, c1);
		University.getInstance().RegisterStudentForCourse(s2, c1);
		
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
