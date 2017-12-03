<%@page import="main.server.logic.model.University"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%
University.getInstance();
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<!-- BEGIN HEAD -->
<head>
	<meta charset="utf-8" />
	<title>Academic Tracking System</title>
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
	<link href="media/css/login.css" rel="stylesheet" type="text/css"/>
	<!-- END PAGE LEVEL STYLES -->
	<link rel="shortcut icon" href="media/image/favicon.ico" />
</head>
<!-- END HEAD -->
<!-- BEGIN BODY -->
<body class="login">
	<!-- BEGIN LOGO -->
	<div class="logo"></div>
	<!-- END LOGO -->
	<!-- BEGIN LOGIN -->
	<div class="content">
		<!-- BEGIN STUDENT LOGIN FORM -->
		<form class="form-vertical student-login-form" method=post name="student-login-form" id="student-login-form" action="StudentLogin">
			<h3 class="form-title">Student Login</h3>
			<div class="alert alert-error hide">
				<button class="close" data-dismiss="alert"></button>
				<span>Enter student number and student name.</span>
			</div>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">Student Number</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-home"></i>
						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Student Number" name="studentnumber" id="studentnumber"/>
					</div>
				</div>
			</div>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">Student Name</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-user"></i>
						<input class="m-wrap placeholder-no-fix" type="text" placeholder="Student Name" name="studentname" id="studentname"/>
					</div>
				</div>
			</div>
			<div class="form-actions">
				<button name="studentlogin" id="studentlogin" type="submit" class="btn green pull-right" >
				Login <i class="m-icon-swapright m-icon-white"></i>
				</button>
			</div>
			<div class="create-account">
				<p>
					Are you a clerk ?&nbsp;
					<a href="javascript:;" id="clerk-btn" name="clerk-btn" class="">Clerk Login</a>
				</p>
			</div>
		</form>
		<!-- END STUDENT LOGIN FORM -->
		<!-- BEGIN CLERK LOGIN FORM -->
		<form class="form-vertical clerk-login-form" method=post name="clerk-login-form" id="clerk-login-form" action="ClerkLogin">
			<h3 class="">Clerk Login</h3>
			<p>Enter your password:</p>
			<div class="control-group">
				<label class="control-label visible-ie8 visible-ie9">Password</label>
				<div class="controls">
					<div class="input-icon left">
						<i class="icon-lock"></i>
						<input class="m-wrap placeholder-no-fix" type="password" placeholder="Password" name="password" id="password" />
					</div>
				</div>
			</div>
			<div class="form-actions">
				<button id="back-btn" name="back" id="back" type="button" class="btn">
				<i class="m-icon-swapleft"></i>  Back
				</button>
				<button type="submit" name="clerklogin" id="clerklogin" class="btn green pull-right">
				Login <i class="m-icon-swapright m-icon-white"></i>
				</button>
			</div>
		</form>
		<!-- END CLERK LOGIN FORM -->
	</div>
	<!-- END LOGIN -->
	<!-- BEGIN COPYRIGHT -->
	<div class="copyright">
		2017 &copy; Academic Tracking System
	</div>
	<!-- END COPYRIGHT -->
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
	<script src="media/js/jquery.validate.min.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL PLUGINS -->
	<!-- BEGIN PAGE LEVEL SCRIPTS -->
	<script src="media/js/app.js" type="text/javascript"></script>
	<script src="media/js/login.js" type="text/javascript"></script>
	<!-- END PAGE LEVEL SCRIPTS -->
	<script>
		jQuery(document).ready(function() {
		  App.init();
		  Login.init();
		});
	</script>
	<!-- END JAVASCRIPTS -->
</body>
<!-- END BODY -->
</html>