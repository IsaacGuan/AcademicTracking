package test.junit.tests.projectcourse;

import static org.junit.Assert.*;
import main.server.logic.model.ProjectCourse;

import org.junit.Test;

public class TestHasProject {

	@Test
	public void testTestHasProject() {
		ProjectCourse p = new ProjectCourse("OO Software Dev", 105104, 30);
		assertTrue(p.HasProject());
	}

}
