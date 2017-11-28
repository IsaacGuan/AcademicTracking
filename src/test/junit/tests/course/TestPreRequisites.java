package test.junit.tests.course;

import static org.junit.Assert.*;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.model.Course;

import org.junit.Test;

public class TestPreRequisites {

	@Test
	public void testPreRequisites() {
		Course c = new Course("OO Software Dev", 105104, 30);
		List<Integer> l = new ArrayList<Integer>();
		l.add(104001);
		l.add(104002);
		c.setPreRequisites(l);
		
		assertEquals(c.PreRequisites(), c.getPreRequisites());
	}

}
