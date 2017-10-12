package tests.course;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;

public class TestWeightOfFinal {

	@Test
	public void testWeightOfFinal() {
		Course c = new Course("OO Software Dev", 105104, 30);
		c.setWeightOfFinal(50);
		assertEquals(50, c.WeightOfFinal());
	}

}
