package tests.course;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;

public class TestHasProject {

	@Test
	public void test() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertFalse(c.HasProject());
	}

}
