package test.junit.tests.student;

import static org.junit.Assert.*;
import main.server.logic.model.Course;
import main.server.logic.model.Student;

import org.junit.Test;

public class TestAverageMark {

	@Test
	public void testAverageMark() {
		Student s = new Student(101075401, "tom", true);
		Course c1 = new Course("OO Software Dev", 105104, 30);
		Course c2 = new Course("Computational Geometry", 105008, 20);
		Course c3 = new Course("Principles of Distributed Computing", 105003, 30);
		
		s.SelectCourse(c1);
		s.RegisterCourse(c1);
		c1.AddStudent(s);
		s.SelectCourse(c2);
		s.RegisterCourse(c2);
		c2.AddStudent(s);
		s.SelectCourse(c3);
		s.RegisterCourse(c3);
		c3.AddStudent(s);
		
		assertEquals((c1.MarkForStudent(s)+c2.MarkForStudent(s)+c3.MarkForStudent(s))/3, s.AverageMark());
	}

}
