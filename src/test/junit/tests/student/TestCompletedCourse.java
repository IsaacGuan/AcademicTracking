package test.junit.tests.student;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestCompletedCourse {

	@Test
	public void testCompletedCourse() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		
		List<Course> completedCourses = new ArrayList<Course>();
		completedCourses.add(c1);
		completedCourses.add(c2);
		
		s.setCompletedCourses(completedCourses);
		assertEquals(completedCourses, s.CompletedCourse());
	}

}
