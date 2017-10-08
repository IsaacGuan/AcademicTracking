package tests.projectcourse;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.ProjectCourse;

public class TestHasProject {

	@Test
	public void testTestHasProject() {
		ProjectCourse p = new ProjectCourse("OO Software Dev", 105104, 30);
		assertTrue(p.HasProject());
	}

}
