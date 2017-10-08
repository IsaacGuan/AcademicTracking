package tests.university;

import static org.junit.Assert.*;

import org.junit.Test;

import server.logic.model.Course;
import server.logic.model.Student;
import server.logic.model.University;
import server.network.StartServer;
import utilities.Config;

public class TestRegisterStudentForCourse {

	@Test
	public void testRegisterStudentForCourseSuccess() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		Thread.sleep(Config.STIMULATED_DAY * (Config.REGISTRATION_START + 1));
		assertTrue(u.RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_NotStart() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		Thread.sleep(Config.STIMULATED_DAY * 1);
		assertFalse(u.RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_StudentNotExist() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Course c = new Course("OO Software Dev", 105104, 30);
		Student s = new Student(101075403, "john", true);
		s.SelectCourse(c);
		Thread.sleep(Config.STIMULATED_DAY * (Config.REGISTRATION_START + 1));
		assertFalse(u.RegisterStudentForCourse(s, c));
	}
	
	@Test
	public void testRegisterStudentForCourseFail_CourseNotExist() throws InterruptedException {
		University u = new University();
		StartServer.start = System.currentTimeMillis();
		Course c = new Course("Computer Security and Usability", 105110, 30);
		Student s = new Student(101075401, "tom", true);
		s.SelectCourse(c);
		Thread.sleep(Config.STIMULATED_DAY * (Config.REGISTRATION_START + 1));
		assertFalse(u.RegisterStudentForCourse(s, c));
	}

}
