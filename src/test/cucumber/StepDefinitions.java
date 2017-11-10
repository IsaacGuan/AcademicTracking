package test.cucumber;

import main.server.logic.handler.InputHandler;
import main.server.logic.handler.OutputHandler;
import main.server.logic.handler.model.ServerOutput;
import main.server.logic.model.University;
import main.utilities.Config;
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

	@Given("^the university is initialized$")
	public void the_university_is_initialized() throws Throwable {
		University.getInstance();
		University.TimeReset();
		serverOutput = inputHandler.processInput("", InputHandler.WAITING);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^wait for (\\d+) days$")
	public void wait_for_days(int days) throws Throwable {
		Thread.sleep(Config.SIMULATED_DAY * days);
	}

	@Given("^the user inputs clerk$")
	public void the_user_inputs_clerk() throws Throwable {
		serverOutput = inputHandler.processInput("clerk", state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^the user inputs student$")
	public void the_user_inputs_student() throws Throwable {
		serverOutput = inputHandler.processInput("student", state);
		state = serverOutput.getState();
		output = serverOutput.getOutput();
	}

	@Given("^the clerk inputs (.*)$")
	public void the_clerk_inputs(String action) throws Throwable {
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

	@Then("^the clerk is logged in$")
	public void the_clerk_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERK));
	}

	@Then("^the clerk is not logged in$")
	public void the_clerk_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.CLERKLOGIN));
		
	}

	@Then("^the student is logged in$")
	public void the_student_is_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENT));
	}

	@Then("^the student is not logged in$")
	public void the_student_is_not_logged_in() throws Throwable {
		assertThat(state, equalTo(OutputHandler.STUDENTLOGIN));
	}
	
	@Then("^the course is created$")
	public void the_course_can_be_created() throws Throwable {
		assertThat(output, equalTo("Success!"));
	}
	
	@Then("^the course cannot be created$")
	public void the_course_cannot_be_created() throws Throwable {
		assertThat(output, equalTo("The course already exists!"));
	}
	
	@Then("^it is overdue$")
	public void it_is_overdue() throws Throwable {
		assertThat(output, equalTo("Overdue!"));
	}
	
	@Then("^the student is created$")
	public void the_student_can_be_created() throws Throwable {
		assertThat(output, equalTo("Success!"));
	}

	@Then("^the student cannot be created$")
	public void the_student_cannot_be_created() throws Throwable {
		assertThat(output, equalTo("The student already exists!"));
	}
	
	@Then("^the course is deleted$")
	public void the_course_is_deleted() throws Throwable {
		assertThat(output, equalTo("Success!"));
	}
	
	@Then("^the course cannot be deleted$")
	public void the_course_cannot_be_deleted() throws Throwable {
		assertThat(output, equalTo("The course does not exist!"));
	}
	
	@Then("^the term ends$")
	public void the_term_ends() throws Throwable {
		assertThat(output, equalTo("Term ends!"));
	}
	
	@Then("^the student is deleted$")
	public void the_student_is_deleted() throws Throwable {
		assertThat(output, equalTo("Success!"));
	}
	
	@Then("^the student cannot be deleted$")
	public void the_student_cannot_be_deleted() throws Throwable {
		assertThat(output, equalTo("The student does not exist!"));
	}

}
