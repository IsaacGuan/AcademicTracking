package tests.university;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.ProjectCourse;
import server.logic.model.University;

public class TestCourses {

	@Test
	public void testCourses() {
		List<Course> courses = new ArrayList<Course>();
		ProjectCourse c1 = new ProjectCourse("OO Software Dev", 105104, 30, false, 0, 3, false);
		ProjectCourse c2 = new ProjectCourse("Computational Geometry", 105008, 20, false, 0, 3, false);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 20, false, 1, 2, true);
		Course c4 = new Course("Advanced Database Systems", 105305, 30, false, 2, 2, true);
		Course c5 = new Course("Foundations of Programming Languages", 105001, 30, false, 1, 3, true);
		courses.add(c1);
		courses.add(c2);
		courses.add(c3);
		courses.add(c4);
		courses.add(c5);
		
		University u = new University();
		University.setCourses(courses);
		assertEquals(u.Courses(), courses);
	}

}
