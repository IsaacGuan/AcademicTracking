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
		HttpSession session = request.getSession();
		if(session.getAttribute("password")==null)
		{
			/*RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/index.jsp" );
			dispatcher.forward( request, response );*/
			response.sendRedirect("index.jsp");
		}
		else
		{
			RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/add_student.jsp" );
			dispatcher.forward( request, response );
		}
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
		if(Config.TERM_ENDS)
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Term has ended!');");
			out.println("location='clerk';");
			out.println("</script>");
		}
		else if(Config.REGISTRATION_STARTS)
		{
			out.println("<script type='text/javascript'>");
			out.println("alert('Student cannot be created after registration starts!!');");
			out.println("location='clerk';");
			out.println("</script>");

		}
		else {
		Boolean result=University.getInstance().CreateStudent(sno, name, isfulltime);
				if(result==true)
				{	
					out.println("<script type='text/javascript'>");
					out.println("alert('student successfully created!');");
				out.println("location='clerk';");
					out.println("</script>");
				
				
				}
				else
				{
					out.println("<script type='text/javascript'>");
					out.println("alert('student not created! try again !');");
					out.println("location='Create_Student';");
					out.println("</script>");
					
				}
		}
	}
}
