package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;

import org.junit.Test;

public class TestCode {

	@Test
	public void testCode() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertEquals(c.Code(), 105104);
	}

}
