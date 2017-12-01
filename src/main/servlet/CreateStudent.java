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
 * Servlet implementation class CreateStudent
 */
@WebServlet("/CreateStudent")
public class CreateStudent extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CreateStudent() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	   
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out=response.getWriter();
		Integer sno = (Integer.parseInt(request.getParameter("sno")));
		String name  = request.getParameter("Name");
		Boolean isfulltime=Boolean.parseBoolean(request.getParameter("isfulltime"));
		Boolean result=University.getInstance().CreateStudent(sno, name, isfulltime);
				if(result==true)
				{	
				out.println("<script type='text/javascript'>");
				out.println("alert('student successfully created!');");
				out.println("location='clerk.jsp';");
				out.println("</script>");
				}
				else
				{
					out.println("<script type='text/javascript'>");
					out.println("alert('student not created! try again !');");
					out.println("location='add_student.jsp';");
					out.println("</script>");
					
				}
	}
}
