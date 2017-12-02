<%@page import="main.server.logic.model.University"%>
<%@page import="main.server.logic.model.Student"%>
<%@page import="main.server.logic.model.Course"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%
	int currentStudentNumber = Integer.parseInt((String) session
			.getAttribute("currentStudentNumber"));
	Student currentStudent = University.getInstance().GetStudent(
			currentStudentNumber);

	List<Course> availableCourses = new ArrayList<Course>(
			currentStudent.getSelectedCourses());
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Academic Tracking System</title>
</head>
<script type="text/javascript">
function goBack()
{
	window.location.href="StudentHome";
}
</script>
<body>
	<form method=post action="DropCourse">
		<%
			request.setAttribute("courses", availableCourses);
		%>
		<table border="1">
			<tr>
				<th>Course Code</th>
				<th>Course Name</th>
				<th>Capsize</th>
				<th>PreRequisites ?</th>
				<th>Number_Of_Midterms</th>
				<th>Number_Of_Assignments</th>
				<th>hasFinal ?</th>
			</tr>
			<c:forEach items="${courses}" var="course">
				<tr>
					<td>
						<div class="radio"></div> <input type="radio" name="radioButton"
						value="${course.myCode}">${course.myCode}</div>
					</td>
					<td>${course.title}</td>
					<td>${course.capsize}</td>
					<td>${course.enforcePrereqs}</td>
					<td>${course.numberOfMidterms}</td>
					<td>${course.numberOfAssignments}</td>
					<td>${course.hasAFinal}</td>
				</tr>
			</c:forEach>
		</table>
		<input type=submit value="DropCourse">
		<input type=button name="back" value= "Back" onclick="goBack()">
	</form>
</body>
</html>