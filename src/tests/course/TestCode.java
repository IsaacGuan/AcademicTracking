package tests.course;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;

public class TestCode {

	@Test
	public void testCode() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertEquals(c.Code(), 105104);
	}

}
