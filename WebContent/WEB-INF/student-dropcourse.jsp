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
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>Academic Tracking System | Drop Course </title>
	<meta content="width=device-width, initial-scale=1.0" name="viewport" />
	<meta content="" name="description" />
	<meta content="" name="author" />
	<!-- BEGIN GLOBAL MANDATORY STYLES -->
	<link href="media/css/bootstrap.min.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/bootstrap-responsive.min.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/font-awesome.min.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/style-metro.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/style.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/style-responsive.css" rel="stylesheet" type="text/css"/>
	<link href="media/css/default.css" rel="stylesheet" type="text/css" id="style_color"/>
	<link href="media/css/uniform.default.css" rel="stylesheet" type="text/css"/>
	<!-- END GLOBAL MANDATORY STYLES -->
	<!-- BEGIN PAGE LEVEL STYLES -->
	<link rel="stylesheet" type="text/css" href="media/css/select2_metro.css" />
	<link rel="stylesheet" href="media/css/DT_bootstrap.css" />
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="media/image/favicon.ico" />
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="page-header-fixed">
	<!-- BEGIN HEADER -->
	<div class="header navbar navbar-inverse navbar-fixed-top">
		<!-- BEGIN TOP NAVIGATION BAR -->
		<div class="navbar-inner">
			<div class="container-fluid">
				<!-- BEGIN LOGO -->
				<a class="brand">
					&nbsp Academic Tracking
				</a>
				<!-- END LOGO -->
				<!-- BEGIN RESPONSIVE MENU TOGGLER -->
				<a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">
					<img src="media/image/menu-toggler.png" alt="" />
				</a>
				<!-- END RESPONSIVE MENU TOGGLER -->
				<!-- BEGIN TOP NAVIGATION MENU -->
				<ul class="nav pull-right">
					<!-- BEGIN USER LOGIN DROPDOWN -->
					<li class="dropdown user">
						<a href="#" id="studentmenu" class="dropdown-toggle" data-toggle="dropdown">
							<span class="username"><%out.print(currentStudent.StudentNumber()); %> <%out.print(currentStudent.Name()); %></span>
							<i class="icon-angle-down"></i>
						</a>
						<ul class="dropdown-menu">
							<li><a id="home" href="StudentHome"><i class="icon-user"></i> Home</a></li>
							<li><a id="logout" href="Logout"><i class="icon-key"></i> Log Out</a></li>
						</ul>
					</li>
					<!-- END USER LOGIN DROPDOWN -->
				</ul>
				<!-- END TOP NAVIGATION MENU -->
			</div>
		</div>
		<!-- END TOP NAVIGATION BAR -->
	</div>
	<!-- END HEADER -->
	<!-- BEGIN CONTAINER -->
	<div class="page-container row-fluid">
		<!-- BEGIN SIDEBAR -->
		<div class="page-sidebar nav-collapse collapse">
			<!-- BEGIN SIDEBAR MENU -->
			<ul class="page-sidebar-menu">
				<li>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
					<div class="sidebar-toggler hidden-phone"></div>
					<!-- BEGIN SIDEBAR TOGGLER BUTTON -->
				</li>
				<li>
					<!-- BEGIN RESPONSIVE QUICK SEARCH FORM -->
					<form class="sidebar-search">
						<div class="input-box">
							<a href="javascript:;" class="remove"></a>
							<input type="text" placeholder="Search..." />
							<input type="button" class="submit" value=" " />
						</div>
					</form>
					<!-- END RESPONSIVE QUICK SEARCH FORM -->
				</li>
				<li class="">
					<a id="studenthome" href="StudentHome">
					    <i class="icon-home"></i>
						<span class="title">Home</span>
					</a>
				</li>
				<li class="">
					<a id="selectcourse" href="SelectCourse">
					    <i class="icon-calendar"></i>
						<span class="title">Select Course</span>
					</a>
				</li>
				<li class="">
					<a id="registerforcourse" href="RegisterForCourse">
					    <i class="icon-table"></i>
						<span class="title">Register for Course</span>
					</a>
				</li>
				<li class="active ">
					<a href="javascript:;">
					    <i class="icon-coffee"></i>
						<span class="title">Drop Course</span>
						<span class="selected"></span>
					</a>
				</li>
				<li class="">
					<a id="deregistercourse" href="DeregisterCourse">
					    <i class="icon-briefcase"></i>
						<span class="title">Deregister Course</span>
					</a>
				</li>
			</ul>
			<!-- END SIDEBAR MENU -->
		</div>
		<!-- END SIDEBAR -->
		<!-- BEGIN PAGE -->
		<div class="page-content">
			<!-- BEGIN PAGE CONTAINER-->
			<div class="container-fluid">
				<!-- BEGIN PAGE HEADER-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN PAGE TITLE & BREADCRUMB-->
						<h3 class="page-title">
							Drop Course <small>Drop a course from the list</small>
						</h3>
						<ul class="breadcrumb">
						    <li>
						        <i class="icon-home"></i>
								<a href="ClerkHome">Home</a>
								<i class="icon-angle-right"></i>
							</li>
							<li>
								<a href="javascript:;">Drop Course</a>
								<i class="icon-angle-right"></i>
							</li>
						</ul>
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN COURSE TABLE PORTLET-->
						<div class="portlet box red">
							<div class="portlet-title">
								<div class="caption"><i class="icon-table"></i>Courses</div>
								<div class="tools">
									<a href="javascript:;" class="reload"></a>
								</div>
							</div>
							<div class="portlet-body form">
								<!-- BEGIN FORM-->
								<form method="post" action="DropCourse" class="form-horizontal" name="dropcourseform" id="dropcourseform">
									<%
									request.setAttribute("courses", availableCourses);
									%>
									<table class="table table-striped table-bordered table-hover table-full-width">
										<thead>
											<tr role="row">
												<th>Course Code</th>
												<th>Course Title</th>
												<th>Capacity</th>
												<th>PreRequisites</th>
												<th>Number Of Midterms</th>
												<th>Number Of Assignments</th>
												<th>Has a Final</th>
												<th>Has a Project</th>
											</tr>
										</thead>
										<tbody>
											<c:forEach items="${courses}" var="course">
												<tr>
													<td>
													<label class="radio">
														<input type="radio" name="radioButton" id="${course.Code()}" value="${course.Code()}">${course.Code()}
													</label>
													</td>
													<td>${course.Title()}</td>
													<td>${course.getCapsize()}</td>
													<td>${course.isEnforcePrereqs()}</td>
													<td>${course.getNumberOfMidterms()}</td>
													<td>${course.getNumberOfAssignments()}</td>
													<td>${course.isHasAFinal()}</td>
													<td>${course.HasProject()}</td>
												</tr>
											</c:forEach>
										</tbody>
									</table>
									<div class="form-actions">
										<button type="submit" name="dropcourse_btn" id="dropcourse_btn" value="DropCourse" class="btn red">Drop</button>
									</div>
								</form>
								<!-- END FORM-->
							</div>
						</div>
						<!-- END EXAMPLE TABLE PORTLET-->
					</div>
				</div>
				<!-- END PAGE CONTENT-->
			</div>
			<!-- END PAGE CONTAINER-->
		</div>
		<!-- END PAGE -->
	</div>
	<!-- END CONTAINER -->
	<!-- BEGIN FOOTER -->
	<div class="footer">
		<div class="footer-inner">
			2017 &copy; Academic Tracking System
		</div>
		<div class="footer-tools">
			<span class="go-top">
				<i class="icon-angle-up"></i>
			</span>
		</div>
	</div>
	<!-- END FOOTER -->
	<!-- BEGIN JAVASCRIPTS(Load javascripts at bottom, this will reduce page load time) -->
	<!-- BEGIN CORE PLUGINS -->
	<script src="media/js/jquery-1.10.1.min.js" type="text/javascript"></script>
	<script src="media/js/jquery-migrate-1.2.1.min.js" type="text/javascript"></script>
	<!-- IMPORTANT! Load jquery-ui-1.10.1.custom.min.js before bootstrap.min.js to fix bootstrap tooltip conflict with jquery ui tooltip -->
	<script src="media/js/jquery-ui-1.10.1.custom.min.js" type="text/javascript"></script>
	<script src="media/js/bootstrap.min.js" type="text/javascript"></script>
	<!--[if lt IE 9]>
	<script src="media/js/excanvas.min.js"></script>
	<script src="media/js/respond.min.js"></script>
	<![endif]-->
	<script src="media/js/jquery.slimscroll.min.js" type="text/javascript"></script>
	<script src="media/js/jquery.blockui.min.js" type="text/javascript"></script>
	<script src="media/js/jquery.cookie.min.js" type="text/javascript"></script>
	<script src="media/js/jquery.uniform.min.js" type="text/javascript" ></script>
	<!-- END CORE PLUGINS -->
	<!-- BEGIN PAGE LEVEL PLUGINS -->
	<script type="text/javascript" src="media/js/select2.min.js"></script>
	<script type="text/javascript" src="media/js/jquery.dataTables.min.js"></script>
	<script type="text/javascript" src="media/js/DT_bootstrap.js"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="media/js/app.js"></script>
	<script>
		jQuery(document).ready(function() {
			App.init();
		});
	</script>
</body>
<!-- END BODY -->
</html>