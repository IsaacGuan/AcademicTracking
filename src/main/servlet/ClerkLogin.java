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

import main.utilities.Config;

/**
 * Servlet implementation class ClientLogin
 */
@WebServlet("/ClerkLogin")
public class ClerkLogin extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ClerkLogin() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/index.jsp" );
		dispatcher.forward( request, response );
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session = request.getSession();
		String password = request.getParameter("password");
		if (password.equalsIgnoreCase(Config.CLERK_PASSWORD)) {
			session.setAttribute("password", "hello");
			RequestDispatcher dispatcher=getServletContext().getRequestDispatcher( "/WEB-INF/clerk.jsp" );
			dispatcher.forward( request, response );
		
		} else {
			PrintWriter out = response.getWriter();
			out.println("<script type=\"text/javascript\">");
			out.println("alert('Wrong Password!');");
			out.println("location='index.jsp';");
			out.println("</script>");
		}
		
	}

}
