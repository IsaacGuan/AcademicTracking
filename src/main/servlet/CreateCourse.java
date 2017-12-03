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

import main.server.logic.model.University;
import main.utilities.Config;

/**
 * Servlet implementation class CreateCourse
 */
@WebServlet("/CreateCourse")
public class CreateCourse extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public CreateCourse() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		if (session.getAttribute("password") == null) {
			/*
			 * RequestDispatcher
			 * dispatcher=getServletContext().getRequestDispatcher(
			 * "/WEB-INF/index.jsp" ); dispatcher.forward( request, response );
			 */
			response.sendRedirect("index.jsp");
		} else {
			RequestDispatcher dispatcher = getServletContext()
					.getRequestDispatcher("/WEB-INF/clerk-createcourse.jsp");
			dispatcher.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub

		PrintWriter out = response.getWriter();

		Integer mycode = (Integer.parseInt(request.getParameter("code")));
		Integer cap = (Integer.parseInt(request.getParameter("Cap")));
		Integer numberofmidterms = (Integer.parseInt(request
				.getParameter("Midterms")));
		Integer numberofassignments = (Integer.parseInt(request
				.getParameter("assignments")));
		String title = request.getParameter("Name");
		Boolean enforcePrereqs = Boolean.parseBoolean(request
				.getParameter("EnforcePrerequites"));
		Boolean hasafinal = Boolean.parseBoolean(request
				.getParameter("hasFinal"));
		Boolean isprojectcourse = Boolean.parseBoolean(request
				.getParameter("project"));

		if (Config.TERM_ENDS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Term has ended!');");
			out.println("location='clerk';");
			out.println("</script>");
		} else if (Config.REGISTRATION_STARTS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Course cannot be created after registration starts!!');");
			out.println("location='clerk';");
			out.println("</script>");
		} else {
			Boolean result = University.getInstance().CreateCourse(title,
					mycode, cap, enforcePrereqs, numberofmidterms,
					numberofassignments, hasafinal, isprojectcourse);
			if (result == true) {
				out.println("<script type='text/javascript'>");
				out.println("alert('course successfully created!');");
				out.println("location='clerk';");
				out.println("</script>");
			} else {
				out.println("<script type='text/javascript'>");
				out.println("alert('course could not be created! Try with valid inputs');");
				out.println("location='CreateCourse';");
				out.println("</script>");
			}
		}
	}

}
