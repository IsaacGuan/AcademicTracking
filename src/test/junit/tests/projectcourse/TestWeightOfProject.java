package test.junit.tests.projectcourse;

import static org.junit.Assert.*;
import main.server.logic.model.ProjectCourse;

import org.junit.Test;

public class TestWeightOfProject {

	@Test
	public void testWeightOfProject() {
		ProjectCourse p = new ProjectCourse("OO Software Dev", 105104, 30);
		p.setWeightOfProject(30);
		assertEquals(p.getWeightOfProject(), p.WeightOfProject());
	}

}
