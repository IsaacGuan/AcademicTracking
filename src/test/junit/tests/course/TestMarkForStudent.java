package test.junit.tests.course;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestMarkForStudent {

	@Test
	public void testMarkForStudent() {
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s1 = new Student(101075401, "tom", true);
		Map<Student, Integer> m = new HashMap<Student, Integer>();
		m.put(s1, 90);
		c.setEnrollStudent(m);
		
		assertEquals(90, c.MarkForStudent(s1));
	}

}
