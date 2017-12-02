<%@page import="main.utilities.Config"%>
<%@page import="main.server.logic.model.University"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Academic Tracking System</title>
<%
request.setAttribute("dean_students",University.getInstance().DeansList());
request.setAttribute("state", Config.TERM_ENDS);
%>
</head>
<body>
<c:if test="${state==true}"> <!--  if term has ended... -->
<c:forEach items="${dean_students}" var="student">
    ${student}<br>
</c:forEach>
</c:if>
<c:if test="${state==false}">
You cannot view the Dean's List before term ends!
</c:if>

</body>
</html>