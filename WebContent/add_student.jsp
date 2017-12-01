<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Academic Tracking System</title>
</head>
<script type="text/javascript">
function validate()
{
		var s_code=document.studentform.sno.value;
	    var s_name=document.studentform.Name.value;
	    var isfulltime=document.studentform.isfulltime.options[isfulltime.selectedIndex].value;
	    var regex=/^[a-zA-Z ]+$/;
		var reg=/^[0-9]*$/;
	    if(s_code==""||s_code < 100000000 || s_code > 999999999 ||reg.test(s_code)==false)
		{
		  alert("enter 9 digits student number!");
		  document.studentform.sno.focus();
		  return false;
		} 
	else if(s_name==""||regex.test(s_name)==false)
    	  {
          alert("name should only contain alphabets and spaces");
		  document.studentform.Name.focus();
		  return false;
    	  }
	else if (isfulltime==""||!(isfulltime.equalsIgnoreCase("true")) || !(isfulltime.equalsIgnoreCase("false")))
	{
	alert("should be either Y/y or N/n");
	  document.studentform.isfulltime.focus();
	  return false;
	}
	else return true;
}

</script>
<body>
Enter details of the student you want to hook to university <br><br>
<form name= "studentform" method="post" action="CreateStudent"  onsubmit="return validate();" >
Student Number : 
<input type ="text" name="sno" ><br>
Student name :
<input type= "text" name= "Name"><br>
Is Student full-time ?
<select name= "isfulltime">
  <option value="true">true</option>
    <option value="false">false</option> 
    </select><br>
<br><br>
<input type= "submit" name="create" value= "Create student"  > <br>
</form>


</body>
</html>