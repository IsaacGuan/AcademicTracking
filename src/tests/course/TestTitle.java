package tests.course;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;

public class TestTitle {

	@Test
	public void testTitle() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertEquals(c.Title(), "OO Software Dev");
	}

}
