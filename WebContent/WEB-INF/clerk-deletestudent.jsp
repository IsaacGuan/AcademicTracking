<%@page import="main.server.logic.model.University"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Academic Tracking System</title>
</head>
<script type="text/javascript">
	function goBack() {
		window.location.href = "ClerkHome";
	}
</script>
<body>
	<form action="DeleteStudent" method=post>
		<%
			request.setAttribute("students", University.getInstance()
					.Students());
		%>
		<table border="1">
			<tr>
				<th>Student Number</th>
				<th>Name</th>
				<th>Full-time ?</th>
			</tr>
			<c:forEach items="${students}" var="student">
				<tr>

					<td>
						<div class="radio"></div>
						<input type="radio" name="radioButton"
						value="${student.studentNumber}">${student.studentNumber}</div>
					</td>
					<td>${student.studentName}</td>

				</tr>
			</c:forEach>
		</table>
		<input type=submit value="DeleteStudent"> <input
			type="button" name="back" value="Back" onclick="goBack()">
	</form>
</body>
</html>