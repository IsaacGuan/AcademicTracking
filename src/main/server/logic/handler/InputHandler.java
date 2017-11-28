package main.server.logic.handler;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.handler.model.Output;
import main.server.logic.handler.model.ServerOutput;
import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;

public class InputHandler {

	public static final int WAITING = 0;
	public static final int FINISHWAITING = 1;
	public static final int CLERK = 2;
	public static final int CLERKLOGIN = 3;
	public static final int STUDENT = 4;
	public static final int STUDENTLOGIN = 5;
	public static final int CREATECOURSE = 6;
	public static final int CREATESTUDENT = 7;
	public static final int CANCELCOURSE = 8;
	public static final int DELETECOURSE = 9;
	public static final int DELETESTUDENT = 10;
	public static final int SELECTCOURSE = 11;
	public static final int REGISTERFORCOURSE = 12;
	public static final int DROPCOURSE = 13;
	public static final int DEREGISTERCOURSE = 14;

	OutputHandler outputHandler = new OutputHandler();

	public ServerOutput processInput(String input, int state) {
		String output = "";
		Output o = new Output("", 0);
		ServerOutput oo = new ServerOutput(output, o.getState());
		if (state == WAITING) {
			output = "Who Are you? Clerk or Student?";
			state = FINISHWAITING;
			oo.setOutput(output);
			oo.setState(state);
		} else if (state == FINISHWAITING) {
			if (input.equalsIgnoreCase("clerk")) {
				output = "Please Input The Password:";
				state = CLERKLOGIN;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("student")) {
				output = "Please Input Studentnumber and Name: 'student number, name'";
				state = STUDENTLOGIN;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				output = "Who Are you? Clerk or Student?";
				state = FINISHWAITING;
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == CLERKLOGIN) {
			o = outputHandler.clerkLogin(input);
			output = o.getOutput();
			state = o.getState();
			oo.setOutput(output);
			oo.setState(state);
		} else if (state == STUDENTLOGIN) {
			o = outputHandler.studentLogin(input);
			output = o.getOutput();
			state = o.getState();
			oo.setOutput(output);
			oo.setState(state);
		} else if (state == CLERK) {
			if (input.equalsIgnoreCase("create course")) {
				output = "Please Input Course Info: 'title, course code, capsize, enforce prereqs(y/n), number of midterms, number of assignments, has a final(y/n), is project course(y/n)'";
				state = CREATECOURSE;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("create student")) {
				output = "Please Input Student Info: 'student number, name, is fulltime(y/n)'";
				state = CREATESTUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("cancel course")) {
				output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
				for (int i = 0; i < University.getInstance().Courses().size(); i++) {
					output = output
							+ "\n"
							+ University.getInstance().Courses().get(i)
									.toString();
				}
				state = CANCELCOURSE;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("delete course")) {
				output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
				for (int i = 0; i < University.getInstance().Courses().size(); i++) {
					output = output
							+ "\n"
							+ University.getInstance().Courses().get(i)
									.toString();
				}
				state = DELETECOURSE;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("delete student")) {
				output = "Please Input Student Info: 'student number'\nAvailable Student List: ";
				for (int i = 0; i < University.getInstance().Students().size(); i++) {
					output = output
							+ "\n"
							+ University.getInstance().Students().get(i)
									.toString();
				}
				state = DELETESTUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("dean's list")) {
				o = outputHandler.deansList();
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				output = "Please select from the menu.Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == STUDENT) {
			int studentnumber = University.getInstance().getCurrentstudent();
			Student student = (Student) University.getInstance().GetStudent(
					studentnumber);
			if (input.equalsIgnoreCase("select course")) {
				List<Course> availableCourses = new ArrayList<Course>(
						University.getInstance().Courses());
				List<Course> notavailableCourses = new ArrayList<Course>(
						student.getSelectedCourses());
				notavailableCourses.addAll(student.getRegisteredCourses());
				notavailableCourses.addAll(student.getCompletedCourses());
				availableCourses.removeAll(notavailableCourses);
				if (availableCourses.size() > 0) {
					output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
					for (int i = 0; i < availableCourses.size(); i++) {
						output = output + "\n"
								+ availableCourses.get(i).toString();
					}
					state = SELECTCOURSE;
				} else {
					output = "No Available Courses!";
					state = SELECTCOURSE;
				}
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("register for course")) {
				List<Course> availableCourses = new ArrayList<Course>(
						student.getSelectedCourses());
				if (availableCourses.size() > 0) {
					output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
					for (int i = 0; i < availableCourses.size(); i++) {
						output = output + "\n"
								+ availableCourses.get(i).toString();
					}
					state = REGISTERFORCOURSE;
				} else {
					output = "No Available Courses!";
					state = REGISTERFORCOURSE;
				}
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("drop course")) {
				List<Course> availableCourses = new ArrayList<Course>(
						student.getSelectedCourses());
				if (availableCourses.size() > 0) {
					output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
					for (int i = 0; i < availableCourses.size(); i++) {
						output = output + "\n"
								+ availableCourses.get(i).toString();
					}
					state = DROPCOURSE;
				} else {
					output = "No Available Courses!";
					state = DROPCOURSE;
				}
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("deregister course")) {
				List<Course> availableCourses = new ArrayList<Course>(
						student.getRegisteredCourses());
				if (availableCourses.size() > 0) {
					output = "Please Input Course Info: 'course code'\nAvailable Course List: ";
					for (int i = 0; i < availableCourses.size(); i++) {
						output = output + "\n"
								+ availableCourses.get(i).toString();
					}
					state = DEREGISTERCOURSE;
				} else {
					output = "No Available Courses!";
					state = DEREGISTERCOURSE;
				}
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				output = "Please select from the menu. Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == CREATECOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.createCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == CREATESTUDENT) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.createStudent(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == CANCELCOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.cancelCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == DELETECOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.deleteCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == DELETESTUDENT) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Create Course/Student, Delete Course/Student, Cancel Course, Dean's List.";
				state = CLERK;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.deleteStudent(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == SELECTCOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.selectCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == REGISTERFORCOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.registerforCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == DROPCOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.dropCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		} else if (state == DEREGISTERCOURSE) {
			if (input.equalsIgnoreCase("log out")) {
				output = "Successfully Log Out!";
				state = WAITING;
				oo.setOutput(output);
				oo.setState(state);
			} else if (input.equalsIgnoreCase("main menu")) {
				output = "What can I do for you? Menu: Select Course, Register for Course, Drop Course, Deregister Course.";
				state = STUDENT;
				oo.setOutput(output);
				oo.setState(state);
			} else {
				o = outputHandler.deregisterCourse(input);
				output = o.getOutput();
				state = o.getState();
				oo.setOutput(output);
				oo.setState(state);
			}
		}
		return oo;
	}

}
