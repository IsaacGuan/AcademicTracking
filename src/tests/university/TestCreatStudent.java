package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.University;

public class TestCreatStudent {

	@Test
	public void testCreatStudentSuccess(){
		assertTrue(University.getInstance().CreateStudent(101075403, "john", true));
	}
	
	@Test
	public void testCreatStudentFail(){
		assertFalse(University.getInstance().CreateStudent(101075401, "tom", true));
	}

}
