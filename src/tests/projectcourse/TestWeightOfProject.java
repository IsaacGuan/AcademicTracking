package tests.projectcourse;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.ProjectCourse;

public class TestWeightOfProject {

	@Test
	public void testWeightOfProject() {
		ProjectCourse p = new ProjectCourse("OO Software Dev", 105104, 30);
		p.setWeightOfProject(30);
		assertEquals(p.getWeightOfProject(), p.WeightOfProject());
	}

}
