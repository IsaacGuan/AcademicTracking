<%@page import="main.server.logic.model.University"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
University.getInstance();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Academic Tracking System</title>
</head>
<body>
    <form method="post" action="ClerkLogin">
    Password:<input type="password" name="password"><br>
    <input type="submit" value="Clerk Login">
    </form>
    <form method="post" action="StudentLogin">
    Student Number:<input type="text" name="studentnumber"><br>
    Student Name:<input type="text" name="studentname"><br>
    <input type="submit" value="Student Login">
    </form>
</body>
</html>