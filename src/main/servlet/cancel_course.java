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
 * Servlet implementation class cancel_course
 */
@WebServlet("/cancel_course")
public class cancel_course extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public cancel_course() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		HttpSession session = request.getSession();
		if(session.getAttribute("password")==null)
		{
			/*RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/index.jsp" );
			dispatcher.forward( request, response );*/
			response.sendRedirect("index.jsp");
		}
		else
		{
			RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/cancel_course.jsp" );
			dispatcher.forward( request, response );
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		Integer code =(Integer.parseInt(request.getParameter("radioButton")));
	
		Course course=University.getInstance().GetCourse(code);
		
		if(Config.TERM_ENDS)
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Term has ended!');");
			out.println("location='clerk';");
			out.println("</script>");

		}
		else if(!Config.REGISTRATION_ENDS)
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Course cannot be canceled before registration ends!!');");
			out.println("location='clerk';");
			out.println("</script>");

		}
	else {
		if(University.getInstance().CancelCourse(course))
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('course successfully cancelled!');");
			out.println("location='clerk';");
			out.println("</script>");
		}
		else
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Sorry !Could not be cancelled!');");
			out.println("location='cancel_course';");
			out.println("</script>");
			
		}
	}
	}
	

}
