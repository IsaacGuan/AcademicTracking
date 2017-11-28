package test.junit.tests.course;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Course;

import org.junit.Test;

public class TestWeightOfMidterm {

	@Test
	public void testWeightOfMidterm() {
		Course c = new Course("OO Software Dev", 105104, 30);
		List<Integer> weightOfMidterms = new ArrayList<Integer>();
		
		int numberOfMidterms = 1;
		
		c.setNumberOfMidterms(numberOfMidterms);
		weightOfMidterms.add(20);
		c.setWeightOfMidterms(weightOfMidterms);
		
		assertEquals(20, c.WeightOfMidterm(1));
	}

}
