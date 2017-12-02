package main.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Config;

/**
 * Servlet implementation class DropCourse
 */
@WebServlet("/DropCourse")
public class DropCourse extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DropCourse() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		if (session.getAttribute("currentStudentNumber") == null) {
			response.sendRedirect("index.jsp");
		} else {
			RequestDispatcher dispatcher = getServletContext()
					.getRequestDispatcher("/WEB-INF/student-dropcourse.jsp");
			dispatcher.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		int currentStudentNumber = Integer.parseInt((String) session
				.getAttribute("currentStudentNumber"));
		Integer code = (Integer.parseInt(request.getParameter("radioButton")));
		Student currentStudent = University.getInstance().GetStudent(
				currentStudentNumber);
		Course course = University.getInstance().GetCourse(code);
		if (Config.TERM_ENDS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Term ends! ');");
			out.println("location.href='StudentHome';");
			out.println("</script>");
		} else if (!Config.REGISTRATION_STARTS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Course cannot be dropped before registration starts! ');");
			out.println("location.href='StudentHome';");
			out.println("</script>");
		} else {
			boolean result = currentStudent.DropCourse(course);
			if (result) {
				out.println("<script type='text/javascript'>");
				out.println("alert('Course successfully Droped! ');");
				out.println("location.href='DropCourse';");
				out.println("</script>");
			} else {
				out.println("<script type='text/javascript'>");
				out.println("alert('Sorry! Could not be Droped! ');");
				out.println("location.href='DropCourse';");
				out.println("</script>");
			}
		}
	}

}
