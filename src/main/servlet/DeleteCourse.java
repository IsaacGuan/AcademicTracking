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
import main.server.logic.model.University;
import main.utilities.Config;

/**
 * Servlet implementation class delete_course
 */
@WebServlet("/DeleteCourse")
public class DeleteCourse extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DeleteCourse() {
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
		if (session.getAttribute("password") == null) {
			/*
			 * RequestDispatcher
			 * dispatcher=getServletContext().getRequestDispatcher(
			 * "/WEB-INF/index.jsp" ); dispatcher.forward( request, response );
			 */
			response.sendRedirect("index.jsp");
		} else {
			RequestDispatcher dispatcher = getServletContext()
					.getRequestDispatcher("/WEB-INF/clerk-deletecourse.jsp");
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
		Integer code = (Integer.parseInt(request.getParameter("radioButton")));
		if (Config.TERM_ENDS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Term has ended! ');");
			out.println("location='ClerkHome';");
			out.println("</script>");
		} else if (Config.REGISTRATION_STARTS) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Course cannot be deleted after registration starts!!');");
			out.println("location='ClerkHome';");
			out.println("</script>");
		} else {
			Course course = University.getInstance().GetCourse(code);
			if (University.getInstance().DestroyCourse(course)) {
				out.println("<script type='text/javascript'>");
				out.println("alert('course successfully deleted! ');");
				out.println("location='DeleteCourse';");
				out.println("</script>");
			} else {
				out.println("<script type='text/javascript'>");
				out.println("alert('Sorry! Could not be deleted! ');");
				out.println("location='DeleteCourse';");
				out.println("</script>");
			}
		}
	}

}
