package test.junit.tests.course;

import static org.junit.Assert.*;
import main.server.logic.model.Course;

import org.junit.Test;

public class TestHasProject {

	@Test
	public void test() {
		Course c = new Course("OO Software Dev", 105104, 30);
		assertFalse(c.HasProject());
	}

}
