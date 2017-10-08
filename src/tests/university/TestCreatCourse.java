package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.University;
import server.network.StartServer;
import utilities.Config;

public class TestCreatCourse {

	@Test
	public void testCreatCourseSuccess() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * 1);
		assertTrue(u.CreateCourse("Computer Security and Usability", 105110, 30, false, 1, 3, true, false));
	}
	
	@Test
	public void testCreatCourseFail_Overdue() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * (Config.OVERDUE + 1));
		assertFalse(u.CreateCourse("Computer Security and Usability", 105110, 30, false, 1, 3, true, false));
	}

	@Test
	public void testCreatCourseFail_CourseExisted() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * 1);
		assertFalse(u.CreateCourse("Principles of Distributed Computing", 105003, 20, false, 1, 2, true, false));
	}
	
}
