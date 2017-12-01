package main.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import main.server.logic.model.University;

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
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request,response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		PrintWriter out = response.getWriter();
		
		Integer mycode = (Integer.parseInt(request.getParameter("code")));
		Integer cap = (Integer.parseInt(request.getParameter("Cap")));
		Integer numberofmidterms = (Integer.parseInt(request.getParameter("Midterms")));
		Integer numberofassignments = (Integer.parseInt(request.getParameter("assignments")));
		String title  = request.getParameter("Name");
		Boolean enforcePrereqs=Boolean.parseBoolean(request.getParameter("EnforcePrerequites"));
		Boolean hasafinal=Boolean.parseBoolean(request.getParameter("hasFinal"));
		Boolean isprojectcourse=Boolean.parseBoolean(request.getParameter("project"));
		Boolean result=University.getInstance().CreateCourse(title, mycode, cap, enforcePrereqs, numberofmidterms, numberofassignments, hasafinal, isprojectcourse);
		if(result==true)
		{	
		out.println("<script type='text/javascript'>");
		out.println("alert('course successfully created!');");
		out.println("location='clerk.jsp';");
		out.println("</script>");
		//response.sendRedirect("clerk.jsp");
		}
		else
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('course could not be created! Try with valid inputs');");
			out.println("location='add_course.jsp';");
			out.println("</script>");	 
		}
		
	}

}
