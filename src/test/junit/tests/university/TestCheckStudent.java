package test.junit.tests.university;

import static org.junit.Assert.*;
import main.server.logic.model.University;

import org.junit.Before;
import org.junit.Test;

public class TestCheckStudent {
	
	@Before
	public void preparation() {
		University.getInstance();
	}

	@Test
	public void testCheckStudentSuccess() {
		/*
		List<Student> students = new ArrayList<Student>();
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		
		University.getInstance().setStudents(students);
		*/
		assertTrue(University.getInstance().CheckStudent(101075401));
	}
	
	@Test
	public void testCheckStudentFail() {
		/*
		List<Student> students = new ArrayList<Student>();
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		
		University.getInstance().setStudents(students);
		*/
		assertFalse(University.getInstance().CheckStudent(101075400));
	}

}
