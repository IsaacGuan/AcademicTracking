package main.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.server.logic.model.Course;
import main.server.logic.model.University;

/**
 * Servlet implementation class delete_course
 */
@WebServlet("/delete_course")
public class delete_course extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public delete_course() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		Integer code =(Integer.parseInt(request.getParameter("radioButton")));
	
		Course course=University.getInstance().GetCourse(code);
		if(University.getInstance().DestroyCourse(course))
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('course successfully deleted!');");
			out.println("location='clerk.jsp';");
			out.println("</script>");
		}
		else
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Sorry !Could not be deleted!');");
			out.println("location='delete_course.jsp';");
			out.println("</script>");
			
		}
		
	}

}
