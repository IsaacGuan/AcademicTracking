package test.junit.tests.course;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestStudents {

	@Test
	public void testStudents() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s1 = new Student(101075401, "tom", true);
		Student s2 = new Student(101075402, "jack", true);
		Map<Student, Integer> m = new HashMap<Student, Integer>();
		m.put(s1, 0);
		m.put(s2, 0);
		c.setEnrollStudent(m);
		
		assertEquals(c.Students(), new ArrayList<Student>(m.keySet()));
	}

}
