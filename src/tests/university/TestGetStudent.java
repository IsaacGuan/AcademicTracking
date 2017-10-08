package tests.university;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import server.logic.model.Student;
import server.logic.model.University;

public class TestGetStudent {

	@Test
	public void testGetStudentSuccess() {
		List<Student> students = new ArrayList<Student>();
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		
		University u = new University();
		University.setStudents(students);
		
		assertEquals(students.get(0), u.GetStudent(101075401));
	}
	
	@Test
	public void testGetStudentFail() {
		List<Student> students = new ArrayList<Student>();
		int[] studentNumberList = new int[]{101075401, 101075402};
		String[] studentNameList = new String[]{"tom","jack"};
		boolean[] isFullTimeList = new boolean[]{true,false};
		for(int i=0;i<studentNumberList.length;i++) {
			Student s = new Student(studentNumberList[i], studentNameList[i], isFullTimeList[i]);
			students.add(s);
		}
		
		University u = new University();
		University.setStudents(students);
		
		assertEquals(false, u.GetStudent(111075401));
	}

}
