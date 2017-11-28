package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;

import org.junit.Test;

public class TestTitle {

	@Test
	public void testTitle() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertEquals(c.Title(), "OO Software Dev");
	}

}
