<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Academic Tracking System</title>
</head>
<body>
<%
if(session.getAttribute("password")==null)
	response.sendRedirect("index.jsp");
%>
	
Welcome, clerk!<br><br>

Here is the list of options you can choose from :<br><br>

<a href="add_course.jsp">Add a Course</a><br>
<a href="delete_course.jsp"> Delete a Course </a><br>
<a href="add_student.jsp"> Add a Student  </a><br>
<a href="delete_student.jsp"> Delete Student </a><br>
<a href="cancel_course.jsp"> Cancel Course </a><br>
<a href="print_DEAN's_List .jsp"> Print DEAN's List </a><br>
</body>
</html>