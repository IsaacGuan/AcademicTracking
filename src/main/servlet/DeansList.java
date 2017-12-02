package main.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class print_DEAN_List
 */
@WebServlet("/DeansList")
public class DeansList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeansList() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		if(session.getAttribute("password")==null)
		{
			/*RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/index.jsp" );
			dispatcher.forward( request, response );*/
			response.sendRedirect("index.jsp");
		}
		else
		{
			RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/clerk-deanslist.jsp" );
			dispatcher.forward( request, response );
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
