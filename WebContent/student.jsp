<%@page import="main.server.logic.model.University"%>
<%@page import="main.server.logic.model.Student"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
int currentStudentNumber = Integer.parseInt((String)session.getAttribute("currentStudentNumber"));
Student currentStudent = University.getInstance().GetStudent(currentStudentNumber);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Academic Tracking System</title>
</head>
<body>
Welcome, <%out.print(currentStudent.StudentNumber()); %> <%out.print(currentStudent.Name()); %>!
</body>
</html>