package test.junit.tests.university;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Student;
import main.server.logic.model.University;

import org.junit.Before;
import org.junit.Test;

public class TestStudents {
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testStudents() {
		List<Student> students = new ArrayList<Student>();
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		
		University.getInstance().setStudents(students);
		assertEquals(students, University.getInstance().Students());
	}

}
