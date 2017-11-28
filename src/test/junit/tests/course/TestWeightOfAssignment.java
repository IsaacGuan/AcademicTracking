package test.junit.tests.course;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Course;

import org.junit.Test;

public class TestWeightOfAssignment {

	@Test
	public void testWeightOfAssignment() {
		Course c = new Course("OO Software Dev", 105104, 30);
		List<Integer> weightOfAssignments = new ArrayList<Integer>();
		
		int numberOfAssignments = 2;
		
		c.setNumberOfAssignments(numberOfAssignments);
		weightOfAssignments.add(20);
		weightOfAssignments.add(30);
		c.setWeightOfAssignments(weightOfAssignments);
		
		assertEquals(30, c.WeightOfAssignment(2));
	}

}
