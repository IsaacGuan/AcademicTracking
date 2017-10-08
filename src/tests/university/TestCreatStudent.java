package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.University;
import server.network.StartServer;
import utilities.Config;

public class TestCreatStudent {

	@Test
	public void testCreatStudentSuccess() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * 1);
		assertTrue(u.CreateStudent(101075403, "john", true));
	}
	
	@Test
	public void testCreatStudentFail_Overdue() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * (Config.OVERDUE + 1));
		assertFalse(u.CreateStudent(101075403, "john", true));
	}
	
	@Test
	public void testCreatStudentFail_StudentExisted() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Thread.sleep(Config.STIMULATED_DAY * 1);
		assertFalse(u.CreateStudent(101075401, "tom", true));
	}

}
