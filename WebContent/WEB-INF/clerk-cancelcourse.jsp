<%@page import="main.server.logic.model.University"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<script type="text/javascript">
	function goBack() {
		window.location.href = "ClerkHome";
	}
</script>
<body>
	<form action="CancelCourse" method=post>
		<%
			request.setAttribute("courses", University.getInstance().Courses());
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
						<div class="radio"></div>
						<input type="radio" name="radioButton" value="${course.myCode}">${course.myCode}</div>
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
		<input type=submit value="CancelCourse"> <input type="button"
			name="back" value="Back" onclick="goBack()">
	</form>
</body>
</html>