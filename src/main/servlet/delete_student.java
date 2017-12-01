package main.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.server.logic.model.Course;
import main.server.logic.model.Student;
import main.server.logic.model.University;

/**
 * Servlet implementation class delete_student
 */
@WebServlet("/delete_student")
public class delete_student extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public delete_student() {
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
		Integer s_no =(Integer.parseInt(request.getParameter("radioButton")));
	
		Student student=University.getInstance().GetStudent(s_no);
		if(University.getInstance().DestroyStudent(student))
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('student successfully deleted!');");
			out.println("location='clerk.jsp';");
			out.println("</script>");
		}
		else
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Sorry !Could not be deleted!');");
			out.println("location='delete_student.jsp';");
			out.println("</script>");
			
		}
	}

}
