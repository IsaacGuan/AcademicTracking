<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>Academic Tracking System | Create Student </title>
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
						<a id= "clerk" href="#" class="dropdown-toggle" data-toggle="dropdown">
							<span class="username"><%out.print("Clerk"); %></span>
							<i class="icon-angle-down"></i>
						</a>
						<ul class="dropdown-menu">
							<li><a id= "home" href="ClerkHome"><i class="icon-user"></i> Home</a></li>
							<li><a id= "logout" href="Logout"><i class="icon-key"></i> Log Out</a></li>
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
					<a id= "clerkhome" href="ClerkHome">
					    <i class="icon-home"></i>
						<span class="title">Home</span>
						<span class="selected"></span>
					</a>
				</li>
				<li class="active ">
					<a href="" id="student">
						<i class="icon-user"></i>
						<span class="title">Student</span>
						<span class="arrow open"></span>
						<span class="selected"></span>
					</a>
					<ul class="sub-menu">
						<li class="active">
							<a href="javascript:;">
							Create Student</a>
						</li>
						<li >
							<a id= "deletestudent" href="DeleteStudent">
							Delete Student</a>
						</li>
					</ul>
				</li>
				<li class="">
					<a href="" id= "course">
						<i class="icon-table"></i>
						<span class="title">Course</span>
						<span class="arrow"></span>
					</a>
					<ul class="sub-menu">
						<li >
							<a id= "createcourse" href="CreateCourse">
							Create Course</a>
						</li>
						<li >
							<a id= "deletecourse" href="DeleteCourse">
							Delete Course</a>
						</li>
						<li >
							<a id= "cancelcourse" href="CancelCourse">
							Cancel Course</a>
						</li>
					</ul>
				</li>
				<li class="">
					<a id= "deanlist" href="DeansList">
					    <i class="icon-th"></i>
						<span class="title">Dean's List</span>
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
							Create Student <small>Enter the details of the student</small>
						</h3>
						<ul class="breadcrumb">
						    <li>
						        <i class="icon-home"></i>
								<a href="ClerkHome">Home</a>
								<i class="icon-angle-right"></i>
							</li>
							<li>
								<a href="javascript:;">Student</a>
								<i class="icon-angle-right"></i>
							</li>
							<li>
								<a href="javascript:;">Create Student</a>
								<i class="icon-angle-right"></i>
							</li>
						</ul>
					</div>
				</div>
				<!-- END PAGE HEADER-->
				<!-- BEGIN PAGE CONTENT-->
				<div class="row-fluid">
					<div class="span12">
						<!-- BEGIN DESCRIPTION FORM PORTLET-->
						<div class="portlet box green">
							<div class="portlet-title">
								<div class="caption"><i class="icon-reorder"></i>Create a Student</div>
							</div>
							<div class="portlet-body form">
								<!-- BEGIN FORM-->
								<form name="createstudentform" id="createstudentform" method="post" action="CreateStudent" class="form-horizontal">
								    <div class="alert alert-error hide">
										<button class="close" data-dismiss="alert"></button>
										You have some form errors. Please check below.
									</div>
									<div class="alert alert-success hide">
										<button class="close" data-dismiss="alert"></button>
										Your form validation is successful!
									</div>
									<div class="control-group">
										<label class="control-label">Student Number<span class="required">*</span></label>
										<div class="controls">
											<input type="text" class="span3 m-wrap popovers" name="sno" id="sno">
										</div>
									</div>
									<div class="control-group">
										<label class="control-label">Student Name<span class="required">*</span></label>
										<div class="controls">
											<input type="text" class="span3 m-wrap popovers" name="name" id="name">
										</div>
									</div>
									<div class="control-group">
										<label class="control-label">Student Full-time? <span class="required">*</span></label>
										<div class="controls">
											<select name="isfulltime" class="span3 m-wrap popovers" id="isfulltime">
											<option value="true">true</option>
											<option value="false">false</option>
											</select>
										</div>
									</div>
									<div class="form-actions">
										<button type="submit" name="createstudent_btn" id="createstudent_btn" value="CreateStudent" class="btn green">Create</button>
									</div>
								</form>
								<!-- END FORM-->
							</div>
						</div>
						<!-- END DESCRIPTION FORM PORTLET-->
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
	<script type="text/javascript" src="media/js/DT_bootstrap.js"></script>
	<script type="text/javascript" src="media/js/jquery.validate.min.js"></script>
	<script type="text/javascript" src="media/js/additional-methods.min.js"></script>
	<script type="text/javascript" src="media/js/chosen.jquery.min.js"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="media/js/app.js"></script>
	<script src="media/js/form-validation.js"></script>
	<script>
		jQuery(document).ready(function() {
			App.init();
			FormValidation.init();
		});
	</script>
</body>
<!-- END BODY -->
</html>