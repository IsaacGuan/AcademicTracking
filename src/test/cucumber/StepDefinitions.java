package test.cucumber;

import java.util.ArrayList;
import java.util.List;

import main.server.logic.handler.InputHandler;
import main.server.logic.handler.OutputHandler;
import main.server.logic.handler.model.ServerOutput;
import main.server.logic.model.Course;
import main.server.logic.model.ProjectCourse;
import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Config;
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {

	InputHandler inputHandler = new InputHandler();
	ServerOutput serverOutput = new ServerOutput("", 0);

	int state;
	String output;
	
	int mark = 0;

	@Given("^the university is initialized$")
	public void the_university_is_initialized() throws Throwable {
		University.getInstance().Reset();
		serverOutput = inputHandler.processInput("", InputHandler.WAITING);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^wait for (\\d+) days$")
	public void wait_for_days(int days) throws Throwable {
		Thread.sleep(Config.SIMULATED_DAY * days);
	}

	@Given("^the user inputs (.*)$")
	public void the_user_inputs(String action) throws Throwable {
		serverOutput = inputHandler.processInput(action, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@When("^the clerk logs in with password (.*)$")
	public void the_clerk_logs_in_with_password(String password)
			throws Throwable {
		serverOutput = inputHandler.processInput(password, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@Given("^log out$")
	public void log_out() throws Throwable {
		serverOutput = inputHandler.processInput("", InputHandler.WAITING);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@When("^the student logs in with (\\d+) and (.*)$")
	public void the_student_logs_in_with(int studentnumber, String name)
			throws Throwable {
		serverOutput = inputHandler.processInput(studentnumber + "," + name,
				state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@When("^the clerk creates student by (\\d+), (.*) and (.*)$")
	public void the_clerk_creates_student_by(int studentnumber, String name,
			String isfulltime) throws Throwable {
		serverOutput = inputHandler.processInput(studentnumber + "," + name
				+ "," + isfulltime, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@When("^the clerk creates course by (.*), (\\d+), (\\d+), (.*), (\\d+), (\\d+), (.*) and (.*)$")
	public void the_clerk_creates_course_by(String title, int coursecode,
			int capsize, String enforceprereqs, int numberofmidterms,
			int numberofassignments, String hasafinal, String isprojectcourse)
			throws Throwable {
		serverOutput = inputHandler.processInput(
				title + "," + coursecode + "," + capsize + "," + enforceprereqs
						+ "," + numberofmidterms + "," + numberofassignments
						+ "," + hasafinal + "," + isprojectcourse, state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the clerk deletes course by (\\d+)$")
	public void the_clerk_deletes_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the clerk deletes student by (\\d+)$")
	public void the_clerk_deletes_student_by(int studentnumber) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(studentnumber), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the clerk cancels course by (\\d+)$")
	public void the_clerk_cancels_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the student selects course by (\\d+)$")
	public void the_student_selects_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the student registers for course by (\\d+)$")
	public void the_student_registers_for_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the student drops course by (\\d+)$")
	public void the_student_drops_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^the student deregisters course by (\\d+)$")
	public void the_student_deregisters_course_by(int coursecode) throws Throwable {
		serverOutput = inputHandler.processInput(String.valueOf(coursecode), state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}
	
	@When("^student starts to take course$")
	public void student_starts_to_take_course() throws Throwable {
		University.getInstance().CanTakeCourse();
	    University.getInstance().CannotDoFinal();
	}
	
	@When("^student (\\d+) does assginments for course (\\d+)$")
	public void student_does_assginments_for_course(int studentnumber, int coursecode) throws Throwable {
		mark = University.getInstance().DoAssignments(University.getInstance().GetStudent(studentnumber), University.getInstance().GetCourse(coursecode));
	}

	@When("^student (\\d+) does midterms for course (\\d+)$")
	public void student_does_midterms_for_course(int studentnumber, int coursecode) throws Throwable {
		mark = University.getInstance().DoMidterms(University.getInstance().GetStudent(studentnumber), University.getInstance().GetCourse(coursecode));
	}
	
	@When("^student (\\d+) does project for course (\\d+)$")
	public void student_does_project_for_course(int studentnumber, int coursecode) throws Throwable {
		mark = University.getInstance().DoProject(University.getInstance().GetStudent(studentnumber), (ProjectCourse)University.getInstance().GetCourse(coursecode));
	}

	@When("^student (\\d+) writes final for course (\\d+)$")
	public void student_writes_final_for_course(int studentnumber, int coursecode) throws Throwable {
		mark = University.getInstance().DoFinal(University.getInstance().GetStudent(studentnumber), University.getInstance().GetCourse(coursecode));
	}

	@Then("^the clerk is logged in$")
	public void the_clerk_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
	}

	@Then("^the clerk is not logged in$")
	public void the_clerk_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERKLOGIN));
	}
	
	@Then("^the user is logged out$")
	public void the_clerk_is_logged_out() throws Throwable {
		assertThat(state, equalTo(OutputHandler.WAITING));
	}

	@Then("^the student is logged in$")
	public void the_student_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
	}

	@Then("^the student is not logged in$")
	public void the_student_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENTLOGIN));
	}
	
	@Then("^(.*) successfully$")
	public void success(String action) throws Throwable {
		assertThat(output, equalTo("Success!"));
	}
	
	@Then("^the (.*) already exists$")
	public void the_already_exists(String object) throws Throwable {
		assertThat(output, equalTo("The " + object + " already exists!"));
	}
	
	@Then("^it is overdue$")
	public void it_is_overdue() throws Throwable {
		assertThat(output, equalTo("Overdue!"));
	}
	
	@Then("^the (.*) does not exist$")
	public void the_does_not_be_exist(String object) throws Throwable {
		assertThat(output, equalTo("The " + object + " does not exist!"));
	}
	
	@Then("^the term ends$")
	public void the_term_ends() throws Throwable {
		assertThat(output, equalTo("Term ends!"));
	}
	
	@Then("^the course cannot be canceled before registration ends$")
	public void the_course_cannot_be_canceled_before_registration_ends() throws Throwable {
		assertThat(output, equalTo("Course cannot be canceled before registration ends!"));
	}
	
	@Then("^the course cannot be selected after registration ends$")
	public void course_cannot_be_selected_after_registration_ends() throws Throwable {
		assertThat(output, equalTo("Course cannot be selected after registration ends!"));
	}
	
	@Then("^registration has not started$")
	public void registration_has_not_started() throws Throwable {
		assertThat(output, equalTo("Registration has not started!"));
	}
	
	@Then("^registration has finished$")
	public void registration_has_finished() throws Throwable {
		assertThat(output, equalTo("Registration has finished!"));
	}

	@Then("^unable to register for this course$")
	public void unable_to_register_for_this_course() throws Throwable {
		assertThat(output, equalTo("Unable to register for this course!"));
	}
	
	@Then("^unable to drop this course$")
	public void unable_to_drop_this_course() throws Throwable {
		assertThat(output, equalTo("Unable to drop this course!"));
	}
	
	@Then("^the course cannot be dropped before registration starts$")
	public void the_course_cannot_be_dropped_before_registration_starts() throws Throwable {
		assertThat(output, equalTo("Course cannot be dropped before registration starts!"));
	}
	
	@Then("^unable to deregister from this course$")
	public void unable_to_deregister_from_this_course() throws Throwable {
		assertThat(output, equalTo("Unable to deregister from this course!"));
	}
	
	@Then("^the dean's list is generated$")
	public void the_dean_s_list_is_generated() throws Throwable {
		String o = "";
		for (int i=0; i<University.getInstance().DeansList().size(); i++) {
			o = o + "\n" + University.getInstance().DeansList().get(i).toString();
		}
	    assertThat(output, equalTo(o));
	}
	
	@Then("^the current courses in the system is shown$")
	public void the_current_courses_in_the_system_is_shown() throws Throwable {
		String o = "Please Input Course Info: 'course code'\nAvailable Course List: ";
		for (int i = 0; i < University.getInstance().Courses().size(); i++) {
			o = o
					+ "\n"
					+ University.getInstance().Courses().get(i)
							.toString();
		}
		assertThat(output, equalTo(o));
	}
	
	@Then("^the current students in the system is shown$")
	public void the_current_students_in_the_system_is_shown() throws Throwable {
		String o = "Please Input Student Info: 'student number'\nAvailable Student List: ";
		for (int i = 0; i < University.getInstance().Students().size(); i++) {
			o = o
					+ "\n"
					+ University.getInstance().Students().get(i)
							.toString();
		}
		assertThat(output, equalTo(o));
	}
	
	@Then("^the selected courses of student (\\d+), (.*) is shown$")
	public void the_selected_courses_of_student_isaac_is_shown(int studentnumber, String name) throws Throwable {
	    Student student = University.getInstance().GetStudent(studentnumber);
	    List<Course> availableCourses = new ArrayList<Course>(
				student.getSelectedCourses());
	    String o = "";
		if (availableCourses.size() > 0) {
			o = "Please Input Course Info: 'course code'\nAvailable Course List: ";
			for (int i = 0; i < availableCourses.size(); i++) {
				o = o + "\n"
						+ availableCourses.get(i).toString();
			}
		} else {
			o = "No Available Courses!";
		}
		assertThat(output, equalTo(o));
	}
	
	@Then("^the registered courses of student (\\d+), (.*) is shown$")
	public void the_registered_courses_of_student_isaac_is_shown(int studentnumber, String name) throws Throwable {
		Student student = University.getInstance().GetStudent(studentnumber);
		List<Course> availableCourses = new ArrayList<Course>(
				student.getRegisteredCourses());
		String o = "";
		if (availableCourses.size() > 0) {
			o = "Please Input Course Info: 'course code'\nAvailable Course List: ";
			for (int i = 0; i < availableCourses.size(); i++) {
				o = o + "\n"
						+ availableCourses.get(i).toString();
			}
		} else {
			o = "No Available Courses!";
		}
		assertThat(output, equalTo(o));
	}
	
	@Then("^student (\\d+) obtains mark for course (\\d+)$")
	public void student_obtains_mark_for_course(int studentnumber, int coursecode) throws Throwable {
		//System.out.println(mark);
		assertThat(mark, not(equalTo(0)));
		assertThat(mark, equalTo(University.getInstance().GetCourse(coursecode).getEnrollStudent().get(University.getInstance().GetStudent(studentnumber))));
	}
	
	@Then("^student (\\d+) cannot obtain mark for course (\\d+)$")
	public void student_cannot_obtain_mark_for_course(int studentnumber, int coursecode) throws Throwable {
		//System.out.println(mark);
		assertThat(mark, equalTo(0));
		assertThat(mark, equalTo(University.getInstance().GetCourse(coursecode).getEnrollStudent().get(University.getInstance().GetStudent(studentnumber))));
	}

}
