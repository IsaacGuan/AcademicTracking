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

import main.server.logic.model.Student;
import main.server.logic.model.University;
import main.utilities.Config;

/**
 * Servlet implementation class delete_student
 */
@WebServlet("/DeleteStudent")
public class DeleteStudent extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public DeleteStudent() {
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
					.getRequestDispatcher("/WEB-INF/clerk-deletestudent.jsp");
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
		if (request.getParameter("radioButton") == null) {
			out.println("<script type='text/javascript'>");
			out.println("alert('Please select a student! ');");
			out.println("location='DeleteStudent';");
			out.println("</script>");
		} else {
			Integer s_no = (Integer.parseInt(request
					.getParameter("radioButton")));
			Student student = University.getInstance().GetStudent(s_no);
			if (Config.TERM_ENDS) {
				out.println("<script type='text/javascript'>");
				out.println("alert('Term has ended!');");
				out.println("location='DeleteStudent';");
				out.println("</script>");
			} else if (Config.REGISTRATION_STARTS) {
				out.println("<script type='text/javascript'>");
				out.println("alert('Student cannot be deleted after registration starts!!');");
				out.println("location='DeleteStudent';");
				out.println("</script>");
			} else {
				if (University.getInstance().DestroyStudent(student)) {
					out.println("<script type='text/javascript'>");
					out.println("alert('student successfully deleted!');");
					out.println("location='DeleteStudent';");
					out.println("</script>");
				} else {
					out.println("<script type='text/javascript'>");
					out.println("alert('Sorry !Could not be deleted!');");
					out.println("location='DeleteStudent';");
					out.println("</script>");
				}
			}
		}
	}

}
