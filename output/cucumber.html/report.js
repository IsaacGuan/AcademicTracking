$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/cucumber/0-loginlogout.feature");
formatter.feature({
  "line": 1,
  "name": "Login and Logout",
  "description": "",
  "id": "login-and-logout",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Clerk logs in with valid password",
  "description": "",
  "id": "login-and-logout;clerk-logs-in-with-valid-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the clerk logs in with password admin",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the clerk is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 290580407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 3339898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 172150,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 4530952,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login-and-logout;clerk-logs-in-with-invalid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk logs in with password \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-and-logout;clerk-logs-in-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 16,
      "id": "login-and-logout;clerk-logs-in-with-invalid-password;;1"
    },
    {
      "cells": [
        "123456"
      ],
      "line": 17,
      "id": "login-and-logout;clerk-logs-in-with-invalid-password;;2"
    },
    {
      "cells": [
        "abcdefgg"
      ],
      "line": 18,
      "id": "login-and-logout;clerk-logs-in-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login-and-logout;clerk-logs-in-with-invalid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk logs in with password 123456",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 821095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 105903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 121764,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login-and-logout;clerk-logs-in-with-invalid-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk logs in with password abcdefgg",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the clerk is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 477261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 94706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdefgg",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 119898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Clerk logs out",
  "description": "",
  "id": "login-and-logout;clerk-logs-out",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 861683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 596693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 86309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 125497,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-valid-number-and-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-valid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 40,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 41,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 42,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 41,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 559371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 151157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 86774,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 107769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1574076,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 103104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 90974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 123631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 766044,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 46653,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1139736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 114300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 93306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 92373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 380223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 102637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 119898,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 318175,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 44,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 51,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 52,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 53,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 642880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 651744,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 251461,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 47119,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 45,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 557972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 111501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 250061,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 33123,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-out;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 69,
      "id": "login-and-logout;student-logs-out;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 70,
      "id": "login-and-logout;student-logs-out;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 71,
      "id": "login-and-logout;student-logs-out;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 70,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1425253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 62048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 209006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 146490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 923265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 81643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 108236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 444604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 331237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "start",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 84909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 550041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 258459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "log out",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 93306,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 66248,
  "status": "passed"
});
formatter.uri("test/cucumber/1-clerkcreatecourse.feature");
formatter.feature({
  "line": 1,
  "name": "Clerk Create Course",
  "description": "",
  "id": "clerk-create-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk creates new course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 13,
      "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 14,
      "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 15,
      "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Clerk creates new course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2001419,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53234484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 530446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 1093083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 554706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 185680,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Clerk creates new course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4140931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 87845974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 79310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 70446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 2604177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 81643,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Clerk creates redundant course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course already exists",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 29,
      "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 30,
      "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 31,
      "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk creates redundant course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1050162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 92080678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 581298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 1073489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 353165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 75112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 435740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_already_exists(String)"
});
formatter.result({
  "duration": 126430,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk creates redundant course before registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-redundant-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 717525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49677650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 86775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 83509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 382556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 116633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 3514847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_already_exists(String)"
});
formatter.result({
  "duration": 159554,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk creates new course after registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 43,
      "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 44,
      "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 45,
      "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Clerk creates new course after registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 798235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 430693746,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 106369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 166551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 152089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 558438,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 100304,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Clerk creates new course after registration starts",
  "description": "",
  "id": "clerk-create-course;clerk-creates-new-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4367199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 427593179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 55984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 198276,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 23326,
  "status": "passed"
});
formatter.uri("test/cucumber/2-clerkcreatestudent.feature");
formatter.feature({
  "line": 1,
  "name": "Clerk Create Student",
  "description": "",
  "id": "clerk-create-student",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk creates new student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create student successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 13,
      "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 14,
      "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 15,
      "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Clerk creates new student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create student successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 867281,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 27236563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 160020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 44321,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Clerk creates new student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "create student successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 583164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39378972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 401683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 113368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 48052,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Clerk creates redundant student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student already exists",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 29,
      "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 30,
      "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 31,
      "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk creates redundant student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 911602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35558547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 70446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 47120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 131562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 70447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 205741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_already_exists(String)"
});
formatter.result({
  "duration": 88641,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk creates redundant student before registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-redundant-student-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 18,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student already exists",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 864949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39245078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 53185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 96106,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 172616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 215537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_already_exists(String)"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk creates new student after registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 43,
      "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 44,
      "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 45,
      "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Clerk creates new student after registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 952657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406832071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 74178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 78844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Clerk creates new student after registration starts",
  "description": "",
  "id": "clerk-create-student;clerk-creates-new-student-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 21 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 799168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 423212450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 195943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 140425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 214605,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 40589,
  "status": "passed"
});
formatter.uri("test/cucumber/3-clerkdeletecourse.feature");
formatter.feature({
  "line": 1,
  "name": "Clerk Delete Course",
  "description": "",
  "id": "clerk-delete-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk deletes existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 15,
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 16,
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 17,
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Clerk deletes existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2399371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41125666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 92373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 1349675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 120832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 128762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk deletes existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1538154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53856371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 130162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 88175,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 494990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 92840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 178215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 92840,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Clerk deletes non-existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 29,
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 30,
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 31,
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk deletes non-existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2462352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46204791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 144158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk deletes non-existing course before registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4145597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35909845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 51319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 143692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk deletes existing course after registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 46,
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 47,
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 48,
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Clerk deletes existing course after registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4215110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39353313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 108236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 78377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 1557748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 393815848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 256125,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 34524,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Clerk deletes existing course after registration starts",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3015192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 37151285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 214604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 412896510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 119432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 169818,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.uri("test/cucumber/4-clerkdeletestudent.feature");
formatter.feature({
  "line": 1,
  "name": "Clerk Delete Student",
  "description": "",
  "id": "clerk-delete-student",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk deletes existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes student by \u003cstudent number\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete student successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 15,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 16,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 17,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Clerk deletes existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes student by 101075403",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete student successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2688620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51410814,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 141825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 101704,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 119432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk deletes existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk deletes student by 101075433",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "delete student successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1600668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36877431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 132495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Clerk deletes non-existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes student by \u003cstudent number\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 29,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 30,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 31,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk deletes non-existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes student by 101075403",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1137870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43876800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 86308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk deletes non-existing student before registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "the clerk deletes student by 101075433",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "the student does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 986247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41724225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 83509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk deletes existing student after registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes student by \u003cstudent number\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 46,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 47,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 48,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Clerk deletes existing student after registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes student by 101075403",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1192454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41692967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 119432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 398121931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 111501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 165153,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 37789,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Clerk deletes existing student after registration starts",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the clerk deletes student by 101075433",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "it is overdue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2013549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52098481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 146491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 138560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 132495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1056693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 387458893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 196876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 164685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.uri("test/cucumber/5-clerkcancelcourse.feature");
formatter.feature({
  "line": 1,
  "name": "Clerk Cancel Course",
  "description": "",
  "id": "clerk-cancel-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Clerk cancels existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk cancels course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "cancel course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 16,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 17,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 18,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk cancels existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk cancels course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "cancel course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1874056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44450634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 70912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 79776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 319107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 804626964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 129229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 248195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 126430,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Clerk cancels existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-registration-ends-and-before-term-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "cancel course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3415476,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52430185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 78377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 73712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 368093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 809274082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 126430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 215071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 83042,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Clerk cancels non-existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk cancels course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 31,
      "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 32,
      "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 33,
      "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "Clerk cancels non-existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk cancels course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2394705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36199561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 40122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 819495316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 173084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 214605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 95639,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Clerk cancels non-existing course after registration ends and before term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-non-existing-course-after-registration-ends-and-before-term-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1626328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36180900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 47586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 799701327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 103103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 181481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 84442,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Clerk cancels existing course before registration ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk cancels course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course cannot be canceled before registration ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 48,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 49,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 50,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Clerk cancels existing course before registration ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk cancels course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course cannot be canceled before registration ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2146511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 37198405,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 64382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 59716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 486592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42976861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 160020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 127363,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 34056,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Clerk cancels existing course before registration ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course cannot be canceled before registration ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 636815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48351302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 47586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 13491152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45448544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 118966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 111967,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 34524,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Clerk cancels existing course after term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 120 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk cancels course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;",
  "rows": [
    {
      "cells": [
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 65,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 66,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;;2"
    },
    {
      "cells": [
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 67,
      "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Clerk cancels existing course after term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 120 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk cancels course by 115007",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 986714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51289516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 65314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 396085,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2402428482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 120365,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 253793,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 86308,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Clerk cancels existing course after term ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-after-term-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 53,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 120 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5690748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51907203,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 43387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 198276,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2398601059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 111035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 165152,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 40589,
  "status": "passed"
});
formatter.uri("test/cucumber/6-studentselectcourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student Select Course",
  "description": "",
  "id": "student-select-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student selects existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-registration-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 21,
      "id": "student-select-course;student-selects-existing-course-before-registration-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 22,
      "id": "student-select-course;student-selects-existing-course-before-registration-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 23,
      "id": "student-select-course;student-selects-existing-course-before-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Student selects existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 6000059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44602256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 64382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 72313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 202008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 292982,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 42920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35517959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 114301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 98439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 111968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Student selects existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 611623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41372460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 94239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 127830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42949337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 244462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 108235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 181481,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Student selects non-existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 41,
      "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 42,
      "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 43,
      "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Student selects non-existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1669716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44494488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 125497,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 23326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50231423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 100304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 70912,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Student selects non-existing course before registration ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 514117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42226213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 81643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 73712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 470730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 178215,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47846048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 107769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 84442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 260324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 79311,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Student selects existing course after registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the course cannot be selected after registration ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-registration-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 63,
      "id": "student-select-course;student-selects-existing-course-after-registration-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 64,
      "id": "student-select-course;student-selects-existing-course-after-registration-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 65,
      "id": "student-select-course;student-selects-existing-course-after-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Student selects existing course after registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the course cannot be selected after registration ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1035233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 34695464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 70913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 54118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 173083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 73246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 319107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 792965548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 190811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 332170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 130629,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 154422,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 70446,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Student selects existing course after registration ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 46,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "wait for 40 days",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 60,
  "name": "the course cannot be selected after registration ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1228844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41497024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 84909,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 82576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 317708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 101237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 583631,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 796528447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 273388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 130162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 220202,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.uri("test/cucumber/7-studentregisterforcourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student Register For Course",
  "description": "",
  "id": "student-register-for-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student registers for selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 23,
      "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 24,
      "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 25,
      "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Student registers for selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1224645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 55212111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 100304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 267322,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 100305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 328905,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 71380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 86308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 394648606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 176816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Student registers for selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1090284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 32997757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 1159330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 77911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 246329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 283184,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 168884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 2051338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 134361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396538992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 82109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 459533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 70913,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 43,
      "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 44,
      "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 45,
      "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 569634,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47574060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 936328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 75112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 127363,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 90973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 402075785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 85375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 181480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 66247,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1329147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36270008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 231867,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 40122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 972251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 416272798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 126430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 212738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 69979,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 65,
      "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 66,
      "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 67,
      "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2669492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35074288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 31257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 104037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 89574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 170284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 209006,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 405523451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 104036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 179148,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 57850,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1132271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43316497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 383022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 198742,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 337769,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 34523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 174016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 391502786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 346633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 360628,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 72312,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 69,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 89,
      "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 90,
      "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 91,
      "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1420587,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46034974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 267789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 116633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 79776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 237464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 2113854,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 103570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 245862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 471196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 275253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36312463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 114766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 93773,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 25660,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 480994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52238907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 39189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 146491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 106835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 570101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 26593,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 191278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 58316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 425010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39391568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 93,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.examples({
  "line": 112,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 113,
      "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 114,
      "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 115,
      "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 114,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 608356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43138748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 66247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 77910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 118499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 71845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 65314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 696457022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 140426,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 58316,
  "status": "passed"
});
formatter.scenario({
  "line": 115,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 94,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 110,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1562414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35925708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 37323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 91907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 239331,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 352231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 85375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 711097240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 91907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 157221,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 45254,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 117,
  "name": "Student registers for selected course that is full during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-that-is-full-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 118,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the clerk creates student by \u003cstudent number 1\u003e, \u003cname 1\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the clerk creates student by \u003cstudent number 2\u003e, \u003cname 2\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the clerk creates student by \u003cstudent number 3\u003e, \u003cname 3\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, 2, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the student logs in with \u003cstudent number 1\u003e and \u003cname 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the student logs in with \u003cstudent number 1\u003e and \u003cname 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 163,
  "name": "",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-that-is-full-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number 1",
        "name 1",
        "student number 2",
        "name 2",
        "student number 3",
        "name 3",
        "is fulltime(y/n)",
        "title",
        "course code",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 164,
      "id": "student-register-for-course;student-registers-for-selected-course-that-is-full-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "y",
        "Graphical Models",
        "115007",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 165,
      "id": "student-register-for-course;student-registers-for-selected-course-that-is-full-during-registration-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 165,
  "name": "Student registers for selected course that is full during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-that-is-full-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 118,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 119,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the clerk creates student by 101075403, mike and y",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the clerk creates student by 101075404, john and y",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the clerk creates course by Graphical Models, 115007, 2, n, 1, 3, y and n",
  "matchedColumns": [
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 158,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1352007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 38308749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 138560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 145092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 132028,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "2",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 206207,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 93773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 77444,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 85375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 75112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 86308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 39189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 75111,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 394311771,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 85842,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 105902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 101238,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 59716,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 167,
  "name": "Full time student registers for 5 courses during registration time",
  "description": "",
  "id": "student-register-for-course;full-time-student-registers-for-5-courses-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and y",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "the clerk creates course by \u003ctitle 5\u003e, \u003ccourse code 5\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the student selects course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "the student selects course by \u003ccourse code 5\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "the student registers for course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "the student registers for course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "the student registers for course by \u003ccourse code 5\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 210,
  "name": "",
  "description": "",
  "id": "student-register-for-course;full-time-student-registers-for-5-courses-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "title 5",
        "course code 5",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 211,
      "id": "student-register-for-course;full-time-student-registers-for-5-courses-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "Distributed Operating System",
        "105102",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 212,
      "id": "student-register-for-course;full-time-student-registers-for-5-courses-during-registration-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 212,
  "name": "Full time student registers for 5 courses during registration time",
  "description": "",
  "id": "student-register-for-course;full-time-student-registers-for-5-courses-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 168,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 169,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the clerk creates student by 101075403, mike and y",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    2,
    3,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    4,
    5,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    6,
    7,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    8,
    9,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "the clerk creates course by Distributed Operating System, 105102, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 187,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 192,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 193,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 195,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 196,
  "name": "the student selects course by 105102",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 197,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 198,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 199,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "the student registers for course by 105102",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 741784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 130536385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 39656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 144158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 64381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 411947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 221136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 1553549,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 5407564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 395618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 77911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Distributed Operating System",
      "offset": 28
    },
    {
      "val": "105102",
      "offset": 58
    },
    {
      "val": "20",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 70
    },
    {
      "val": "1",
      "offset": 73
    },
    {
      "val": "3",
      "offset": 76
    },
    {
      "val": "y",
      "offset": 79
    },
    {
      "val": "n",
      "offset": 85
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 242130,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 115233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 538377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 73712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 152556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 100305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 153955,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 76511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105102",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 77910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406937507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 139493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 456268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 185213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 408215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 218337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 1568945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 322373,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 160954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "105102",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 388621,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 134828,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 214,
  "name": "Part time student registers for 3 courses during registration time",
  "description": "",
  "id": "student-register-for-course;part-time-student-registers-for-3-courses-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 215,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 216,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and n",
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the student selects course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "the student registers for course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 245,
  "name": "",
  "description": "",
  "id": "student-register-for-course;part-time-student-registers-for-3-courses-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 246,
      "id": "student-register-for-course;part-time-student-registers-for-3-courses-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 247,
      "id": "student-register-for-course;part-time-student-registers-for-3-courses-during-registration-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 247,
  "name": "Part time student registers for 3 courses during registration time",
  "description": "",
  "id": "student-register-for-course;part-time-student-registers-for-3-courses-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 215,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 216,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 220,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 221,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    2,
    3,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 223,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 224,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    4,
    5,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 226,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 227,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 238,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 243,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1433184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43953311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 434341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 171684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 102637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 90973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 76511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 48986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 408661340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 105903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 163753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 125497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 44321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 142292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.uri("test/cucumber/8-studentdropcourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student Drop Course",
  "description": "",
  "id": "student-drop-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student drops selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 23,
      "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 24,
      "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 25,
      "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Student drops selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4482899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42766922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 106835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25660,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 159087,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 395755685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 395618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 328904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 55517,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Student drops selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1270831,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36685220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 130628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 200142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 434341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 146958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 135760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 210872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 391071244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 157221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 303245,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 42,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 43,
      "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 44,
      "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 45,
      "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 853752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46374143,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 215070,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 140426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396225948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 111501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 63449,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 28,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1375334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 54141421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 90974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 165152,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 131095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 404472356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 113834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 64,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 65,
      "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 66,
      "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 67,
      "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 66,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1736896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45645420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 37789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 176349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 223469,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 129229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 395057288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 138093,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 48,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1244239,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 37970048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 42455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 172617,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 246328,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 110102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 416575577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 121298,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 69,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "the course cannot be dropped before registration starts",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 89,
      "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 90,
      "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 91,
      "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "the course cannot be dropped before registration starts",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1296957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 28625426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 69047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 110101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 131561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 214138,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 82576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 55517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50416169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 70446,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 59250,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 70,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 86,
  "name": "the course cannot be dropped before registration starts",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 483793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43210127,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 20993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 112901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 65315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 55050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48942397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 47120,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.uri("test/cucumber/9-studentderegistercourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student Deregister Course",
  "description": "",
  "id": "student-deregister-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 26,
      "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 27,
      "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 28,
      "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 602759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42288728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 22394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 102171,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 63914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 77444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 410580650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 114301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 149290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52670915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 409615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 398417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5720140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 37431204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 96571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 97039,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 62515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406402395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 63914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52023836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 51,
      "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 52,
      "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 53,
      "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 473995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41609925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23794,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 7931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 56450,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 4666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 25193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 420892390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 595760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 60649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42646091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 403083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 326572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 93306,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-non-existing-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 610223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42147368,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 190811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 162819,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 89574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 392999885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44407713,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 311177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 457667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "course",
      "offset": 4
    }
  ],
  "location": "StepDefinitions.the_does_not_be_exist(String)"
});
formatter.result({
  "duration": 43387,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 75,
      "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 76,
      "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 77,
      "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 76,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3271784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47993005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 393286,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 131095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 131096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 800568,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 171217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 307444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 247262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 204807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 393065199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 139026,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 49452,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 56,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1697708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43049640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 47120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 147424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 436207,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 26592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 196410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 108702,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 138560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 405467933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 125497,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 79,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 96,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 97,
      "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 98,
      "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 99,
      "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1508762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 33282342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 78377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 109635,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406658987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 59250,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 127830,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-selected-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 80,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 81,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 94,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1318884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50732944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 70913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 137160,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7931,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 105902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 397224326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 72779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 143226,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 29391,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.examples({
  "line": 123,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 124,
      "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 125,
      "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 126,
      "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 125,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4979755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 32632464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 108701,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 69513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 397919924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 111968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 209939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 313060684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 64847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 114300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-deregister-course;student-deregisters-registered-course-after-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 102,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 103,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 121,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1141135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 38680575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6064,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 412650648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 138093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 307644255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 67181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 111501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 128,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.examples({
  "line": 147,
  "name": "",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 148,
      "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n",
        "Graphical Models",
        "115007",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 149,
      "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "0",
        "4",
        "y",
        "y"
      ],
      "line": 150,
      "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 149,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 927464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49370673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 83043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 117566,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 126896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42660087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 72313,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-deregister-course;student-deregisters-not-registered-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 129,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 0, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 145,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3908133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43753636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 31724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 108235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "0",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 233732,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42917146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 96106,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.uri("test/cucumber/hierachicalusecaces-studenttakecourse.feature");
formatter.feature({
  "line": 1,
  "name": "Hierarchical Use Cases - Student Take Course",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student takes course: writes final after first doing assignments and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-assignments-and-then-midterms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-assignments-and-then-midterms;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 27,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-assignments-and-then-midterms;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "n"
      ],
      "line": 28,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-assignments-and-then-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Student takes course: writes final after first doing assignments and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-assignments-and-then-midterms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 786105,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44382520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 37323,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 125964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 60649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 172617,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 62982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 393814915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 282251,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 83043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 195010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 139026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 4882717,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Student takes course: writes final after first doing midterms and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-midterms-and-then-assignments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-midterms-and-then-assignments;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 54,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-midterms-and-then-assignments;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "n"
      ],
      "line": 55,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-midterms-and-then-assignments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 55,
  "name": "Student takes course: writes final after first doing midterms and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-first-doing-midterms-and-then-assignments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 31,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2490810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44845786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 80243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 169817,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 88640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 410168703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 103103,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 58783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 60182,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 57,
  "name": "Student takes project course: writes final after first doing assignments, then midterms and then projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-midterms-and-then-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-midterms-and-then-projects;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 82,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-midterms-and-then-projects;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 83,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-midterms-and-then-projects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Student takes project course: writes final after first doing assignments, then midterms and then projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-midterms-and-then-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 58,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 59,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 468398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43510573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 157221,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 92374,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 407974140,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 140892,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 107302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 140893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 221602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 102171,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 175416,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Student takes project course: writes final after first doing assignments, then projects and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-projects-and-then-midterms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-projects-and-then-midterms;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 110,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-projects-and-then-midterms;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 111,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-projects-and-then-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 111,
  "name": "Student takes project course: writes final after first doing assignments, then projects and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-assignments,-then-projects-and-then-midterms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 103,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1457444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36967472,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 19595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 100305,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 47119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 412603529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 67181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 151156,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 27525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 101237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 76511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 75578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 111967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 123631,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 113,
  "name": "Student takes project course: writes final after first doing midterms, then assignments and then projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-assignments-and-then-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 137,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-assignments-and-then-projects;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 138,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-assignments-and-then-projects;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 139,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-assignments-and-then-projects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 139,
  "name": "Student takes project course: writes final after first doing midterms, then assignments and then projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-assignments-and-then-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 114,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 115,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 116,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 117,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 120,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 122,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1431785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 38036296,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 90040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 136228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 50386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 411691927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 94239,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 51319,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 141,
  "name": "Student takes project course: writes final after first doing midterms, then projects and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-projects-and-then-assignments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 142,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 165,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-projects-and-then-assignments;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 166,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-projects-and-then-assignments;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 167,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-projects-and-then-assignments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 167,
  "name": "Student takes project course: writes final after first doing midterms, then projects and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-midterms,-then-projects-and-then-assignments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 142,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 143,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 159,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 404016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39183029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 112901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 49453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 186146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 300912,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 118499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 88174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 398621121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 64848,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 41987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 47586,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 169,
  "name": "Student takes project course: writes final after first doing projects, then assignments and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-assignments-and-then-midterms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 170,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 171,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 193,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-assignments-and-then-midterms;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 194,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-assignments-and-then-midterms;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 195,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-assignments-and-then-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 195,
  "name": "Student takes project course: writes final after first doing projects, then assignments and then midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-assignments-and-then-midterms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 170,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 171,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 188,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 189,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 190,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 474462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53981868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 35457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 96571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 216471,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 129229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 89574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 394193271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 189878,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 102636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 76511,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 71379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 111035,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 197,
  "name": "Student takes project course: writes final after first doing projects, then midterms and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-midterms-and-then-assignments",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 198,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 199,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 221,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-midterms-and-then-assignments;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 222,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-midterms-and-then-assignments;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 223,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-midterms-and-then-assignments;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 223,
  "name": "Student takes project course: writes final after first doing projects, then midterms and then assignments",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-first-doing-projects,-then-midterms-and-then-assignments;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 198,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 199,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 200,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 201,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 202,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 203,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 204,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 205,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 206,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 208,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 209,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 211,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 212,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 213,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 214,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 215,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 216,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 217,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 218,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 219,
  "name": "student 101075433 obtains mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 937261,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 33374248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 135761,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 43388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 400567022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 72312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 66714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_obtains_mark_for_course(int,int)"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 225,
  "name": "Student takes course: writes final before doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 226,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 227,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "student \u003cstudent number\u003e cannot obtain mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 248,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 249,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "n"
      ],
      "line": 250,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 250,
  "name": "Student takes course: writes final before doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 226,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 227,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 228,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 229,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 230,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 231,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 232,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 233,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and n",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 234,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 235,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 237,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 238,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 240,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 241,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 242,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 243,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 244,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 245,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 246,
  "name": "student 101075433 cannot obtain mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 464665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47804993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 63915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 179148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 31724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 418012,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 112434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 77445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 391627350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 84442,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 47586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 48
    }
  ],
  "location": "StepDefinitions.student_cannot_obtain_mark_for_course(int,int)"
});
formatter.result({
  "duration": 62048,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 252,
  "name": "Student takes project course: writes final before doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 253,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "student \u003cstudent number\u003e cannot obtain mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 276,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title",
        "course code",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 277,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Virtual Environments",
        "115205",
        "15",
        "n",
        "1",
        "4",
        "y",
        "y"
      ],
      "line": 278,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 278,
  "name": "Student takes project course: writes final before doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 253,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 254,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 255,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 256,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 257,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 258,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 259,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 260,
  "name": "the clerk creates course by Virtual Environments, 115205, 15, n, 1, 4, y and y",
  "matchedColumns": [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 261,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 262,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 263,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 264,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 265,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 266,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 268,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 269,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 270,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 271,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 272,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 273,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 274,
  "name": "student 101075433 cannot obtain mark for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 920466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 54753977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 149757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "15",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "4",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 216471,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 119432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 56917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 89108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 393004083,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 78844,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_writes_final_for_course(int,int)"
});
formatter.result({
  "duration": 57850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.student_does_midterms_for_course(int,int)"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 8
    },
    {
      "val": "115205",
      "offset": 48
    }
  ],
  "location": "StepDefinitions.student_cannot_obtain_mark_for_course(int,int)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.uri("test/cucumber/hierachicalusecaces-systemofferinformation.feature");
formatter.feature({
  "line": 1,
  "name": "Hierarchical Use Cases - System Offer Information",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "System shows current courses",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs delete course",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the current courses in the system is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;",
  "rows": [
    {
      "cells": [
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 20,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;;1"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 21,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;;2"
    },
    {
      "cells": [
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "y"
      ],
      "line": 22,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "System shows current courses",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    0,
    1,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    2,
    3,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    4,
    5,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs delete course",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the current courses in the system is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 657342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39608506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 16328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 7464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 97972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 68114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 7932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 6998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 100771,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "System shows current courses",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-courses;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and y",
  "matchedColumns": [
    0,
    1,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and y",
  "matchedColumns": [
    2,
    3,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and y",
  "matchedColumns": [
    4,
    5,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and y",
  "matchedColumns": [
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the user inputs delete course",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the current courses in the system is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 519249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35446113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 147890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 204808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 107768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "y",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 129229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 24,
  "name": "System shows current students",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk creates student by \u003cstudent number 1\u003e, \u003cname 1\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by \u003cstudent number 2\u003e, \u003cname 2\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by \u003cstudent number 3\u003e, \u003cname 3\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs delete student",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the current students in the system is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;",
  "rows": [
    {
      "cells": [
        "student number 1",
        "name 1",
        "student number 2",
        "name 2",
        "student number 3",
        "name 3",
        "is fulltime(y/n)"
      ],
      "line": 39,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "y"
      ],
      "line": 40,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;;2"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "n"
      ],
      "line": 41,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 40,
  "name": "System shows current students",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk creates student by 101075403, mike and y",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075404, john and y",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs delete student",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the current students in the system is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 886409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45313716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 124563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 87707,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 116166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 252860,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 95639,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "System shows current students",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-current-students;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk creates student by 101075433, isaac and n",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075404, john and n",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs delete student",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "the current students in the system is shown",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 981116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50891098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 24260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 70913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 55518,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "System shows selected courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the student selects course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the selected courses of student \u003cstudent number\u003e, \u003cname\u003e is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 73,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 74,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "n",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "y"
      ],
      "line": 75,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "System shows selected courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    3,
    4,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    5,
    6,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    7,
    8,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the selected courses of student 101075433, isaac is shown",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 801967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 38758019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 17729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 78377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 77911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 43387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 41521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 41054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 32
    },
    {
      "val": "isaac",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.the_selected_courses_of_student_isaac_is_shown(int,String)"
});
formatter.result({
  "duration": 78377,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "System shows selected courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-selected-courses-of-a-student;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 44,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    3,
    4,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    5,
    6,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    7,
    8,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk creates student by 101075433, isaac and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs register for course",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "the selected courses of student 101075433, isaac is shown",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 602758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44057815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 97972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 79311,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 82576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "y",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 80709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 41055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 74178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 36390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 32
    },
    {
      "val": "isaac",
      "offset": 43
    }
  ],
  "location": "StepDefinitions.the_selected_courses_of_student_isaac_is_shown(int,String)"
});
formatter.result({
  "duration": 44321,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "System shows registered courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the student selects course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the student registers for course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student registers for course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the user inputs deregister course",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "the registered courses of student \u003cstudent number\u003e, \u003cname\u003e is shown",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 116,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;;1"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 117,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "n",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "y"
      ],
      "line": 118,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 117,
  "name": "System shows registered courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    3,
    4,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    5,
    6,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    7,
    8,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the user inputs deregister course",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "the registered courses of student 101075433, isaac is shown",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 578032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 35262766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 90040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 69513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 68114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 65315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 42920,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 53651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 35457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 34524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 395824266,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 66248,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 56917,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 34
    },
    {
      "val": "isaac",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.the_registered_courses_of_student_isaac_is_shown(int,String)"
});
formatter.result({
  "duration": 51318,
  "status": "passed"
});
formatter.scenario({
  "line": 118,
  "name": "System shows registered courses of a student",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-registered-courses-of-a-student;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 78,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    3,
    4,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    5,
    6,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    7,
    8,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    9,
    10,
    11,
    12,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the clerk creates student by 101075433, isaac and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "the user inputs deregister course",
  "keyword": "When "
});
formatter.step({
  "line": 113,
  "name": "the registered courses of student 101075433, isaac is shown",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 369959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46099355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 101703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 88174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "y",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 77910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 33591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 72779,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 394446598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 161420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 171217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 174949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 160020,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 34
    },
    {
      "val": "isaac",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.the_registered_courses_of_student_isaac_is_shown(int,String)"
});
formatter.result({
  "duration": 104503,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 120,
  "name": "System shows dean\u0027s list",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by \u003cstudent number 1\u003e, \u003cname 1\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates student by \u003cstudent number 2\u003e, \u003cname 2\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the clerk creates student by \u003cstudent number 3\u003e, \u003cname 3\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the student logs in with \u003cstudent number 1\u003e and \u003cname 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the student selects course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the student logs in with \u003cstudent number 1\u003e and \u003cname 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "the student registers for course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the student registers for course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the user inputs dean\u0027s list",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 189,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;",
  "rows": [
    {
      "cells": [
        "student number 1",
        "name 1",
        "student number 2",
        "name 2",
        "student number 3",
        "name 3",
        "is fulltime(y/n)",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 190,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "y",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 191,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;;2"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "n",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "y"
      ],
      "line": 192,
      "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 191,
  "name": "System shows dean\u0027s list",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    7,
    8,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    9,
    10,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    11,
    12,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by 101075403, mike and y",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the clerk creates student by 101075404, john and y",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the user inputs dean\u0027s list",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1559614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53208359,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29857,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 321440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 251460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 231400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 475862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 110102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 282252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 232333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40588,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 136227,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 110101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 92839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 52251,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 91907,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 108235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 87241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 45721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 79777,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 175416,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 106369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 155821,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 400539031,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 97038,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 78844,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 75111,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 75578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 19594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 71846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 88174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 67181,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1993699495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 40121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 39188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dean\u0027s list",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 948458,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 345233,
  "status": "passed"
});
formatter.scenario({
  "line": 192,
  "name": "System shows dean\u0027s list",
  "description": "",
  "id": "hierarchical-use-cases---system-offer-information;system-shows-dean\u0027s-list;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 121,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 123,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    7,
    8,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 128,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    9,
    10,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 129,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 130,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    11,
    12,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 131,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 132,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 133,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 135,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 136,
  "name": "the clerk creates student by 101075433, isaac and n",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the clerk creates student by 101075404, john and n",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 141,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 146,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 147,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 148,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 150,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 151,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 154,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 156,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 157,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 158,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 159,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 160,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 161,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 162,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 164,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 165,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 167,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 168,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 169,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 170,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 171,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 172,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 173,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 174,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 175,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 176,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 178,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 179,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 181,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 182,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 183,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 184,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 185,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 186,
  "name": "the user inputs dean\u0027s list",
  "keyword": "When "
});
formatter.step({
  "line": 187,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1125740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36360982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 334036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 283651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 268722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "y",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 193611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 111034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 101237,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 96572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 94706,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 148823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 82109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 75578,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 24260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 92839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 55517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 87708,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 48052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 32658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 409586938,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 25
    },
    {
      "val": "mike",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 55517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 4199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 6998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 29392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 33591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 39188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 4199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1997497993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dean\u0027s list",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 509452,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 421744,
  "status": "passed"
});
formatter.uri("test/cucumber/usecasedependencies.feature");
formatter.feature({
  "line": 1,
  "name": "Use Case Dependencies",
  "description": "",
  "id": "use-case-dependencies",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Use case dependencies",
  "description": "",
  "id": "use-case-dependencies;use-case-dependencies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle 1\u003e, \u003ccourse code 1\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk creates course by \u003ctitle 2\u003e, \u003ccourse code 2\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by \u003ctitle 3\u003e, \u003ccourse code 3\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the clerk creates course by \u003ctitle 4\u003e, \u003ccourse code 4\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk creates student by \u003cstudent number 1\u003e, \u003cname 1\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk creates student by \u003cstudent number 2\u003e, \u003cname 2\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk creates student by \u003cstudent number 3\u003e, \u003cname 3\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk deletes course by \u003ccourse code 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk deletes student by \u003cstudent number 1\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the student selects course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student deregisters course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student logs in with \u003cstudent number 3\u003e and \u003cname 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the student selects course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the student selects course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the student registers for course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the student registers for course by \u003ccourse code 3\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student deregisters course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by \u003ccourse code 4\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with \u003cstudent number 2\u003e and \u003cname 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student drops course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the clerk cancels course by \u003ccourse code 2\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "cancel course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs dean\u0027s list",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 104,
  "name": "",
  "description": "",
  "id": "use-case-dependencies;use-case-dependencies;",
  "rows": [
    {
      "cells": [
        "student number 1",
        "name 1",
        "student number 2",
        "name 2",
        "student number 3",
        "name 3",
        "is fulltime(y/n)",
        "title 1",
        "course code 1",
        "title 2",
        "course code 2",
        "title 3",
        "course code 3",
        "title 4",
        "course code 4",
        "capsize",
        "enforce prereqs(y/n)",
        "number of midterms",
        "number of assignments",
        "has a final(y/n)",
        "is project course(y/n)"
      ],
      "line": 105,
      "id": "use-case-dependencies;use-case-dependencies;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "y",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "n"
      ],
      "line": 106,
      "id": "use-case-dependencies;use-case-dependencies;;2"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "101075433",
        "isaac",
        "101075404",
        "john",
        "n",
        "Graphical Models",
        "115007",
        "Virtual Environments",
        "115205",
        "Fault Tolerance",
        "115004",
        "Computer Animation",
        "115201",
        "20",
        "n",
        "1",
        "3",
        "y",
        "y"
      ],
      "line": 107,
      "id": "use-case-dependencies;use-case-dependencies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 106,
  "name": "Use case dependencies",
  "description": "",
  "id": "use-case-dependencies;use-case-dependencies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    7,
    8,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    9,
    10,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    11,
    12,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and n",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk creates student by 101075403, mike and y",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk creates student by 101075404, john and y",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk deletes course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk deletes student by 101075403",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student deregisters course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "cancel course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs dean\u0027s list",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1122474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 36832644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 153956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 19594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "n",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 90507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "n",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 82109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 83043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 15396,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 46186,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 9330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 164686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 140893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 25659,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 63915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 55051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 82576,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 36389,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 401537407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 93306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 201541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 63915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 17262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 58783,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 18194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 62515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5598,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 54585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 21927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 27059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 17729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 54118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 10731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 54118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 13529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 54584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 17729,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5132,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 291068865,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 42454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 127363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 110568,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 37789,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 20993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50385,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 67180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 336835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 558438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 69513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2003194339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dean\u0027s list",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 319107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 188479,
  "status": "passed"
});
formatter.scenario({
  "line": 107,
  "name": "Use case dependencies",
  "description": "",
  "id": "use-case-dependencies;use-case-dependencies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by Graphical Models, 115007, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    7,
    8,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "the clerk creates course by Virtual Environments, 115205, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    9,
    10,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the clerk creates course by Fault Tolerance, 115004, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    11,
    12,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the clerk creates course by Computer Animation, 115201, 20, n, 1, 3, y and y",
  "matchedColumns": [
    16,
    17,
    18,
    19,
    20,
    13,
    14,
    15
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "create course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk creates student by 101075433, isaac and n",
  "matchedColumns": [
    2,
    3,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "the clerk creates student by 101075404, john and n",
  "matchedColumns": [
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "create student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "the user inputs delete course",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the clerk deletes course by 115007",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the user inputs delete student",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the clerk deletes student by 101075403",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "delete student successfully",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "the student selects course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student registers for course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student deregisters course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the student logs in with 101075404 and john",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the student selects course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "select course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the student registers for course by 115004",
  "matchedColumns": [
    12
  ],
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "register for course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "deregister course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the student drops course by 115201",
  "matchedColumns": [
    14
  ],
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "wait for 15 days",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 93,
  "name": "drop course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "the user inputs cancel course",
  "keyword": "And "
});
formatter.step({
  "line": 98,
  "name": "the clerk cancels course by 115205",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "cancel course successfully",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "wait for 100 days",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the user inputs dean\u0027s list",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the dean\u0027s list is generated",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 620953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45919274,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 33123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Graphical Models",
      "offset": 28
    },
    {
      "val": "115007",
      "offset": 46
    },
    {
      "val": "20",
      "offset": 54
    },
    {
      "val": "n",
      "offset": 58
    },
    {
      "val": "1",
      "offset": 61
    },
    {
      "val": "3",
      "offset": 64
    },
    {
      "val": "y",
      "offset": 67
    },
    {
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 166552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 26592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Environments",
      "offset": 28
    },
    {
      "val": "115205",
      "offset": 50
    },
    {
      "val": "20",
      "offset": 58
    },
    {
      "val": "n",
      "offset": 62
    },
    {
      "val": "1",
      "offset": 65
    },
    {
      "val": "3",
      "offset": 68
    },
    {
      "val": "y",
      "offset": 71
    },
    {
      "val": "y",
      "offset": 77
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 148357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 23793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fault Tolerance",
      "offset": 28
    },
    {
      "val": "115004",
      "offset": 45
    },
    {
      "val": "20",
      "offset": 53
    },
    {
      "val": "n",
      "offset": 57
    },
    {
      "val": "1",
      "offset": 60
    },
    {
      "val": "3",
      "offset": 63
    },
    {
      "val": "y",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 72
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 140426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer Animation",
      "offset": 28
    },
    {
      "val": "115201",
      "offset": 48
    },
    {
      "val": "20",
      "offset": 56
    },
    {
      "val": "n",
      "offset": 60
    },
    {
      "val": "1",
      "offset": 63
    },
    {
      "val": "3",
      "offset": 66
    },
    {
      "val": "y",
      "offset": 69
    },
    {
      "val": "y",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 133895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    },
    {
      "val": "mike",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 67647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 29
    },
    {
      "val": "isaac",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 61116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 14462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 29
    },
    {
      "val": "john",
      "offset": 40
    },
    {
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 68113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 19128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 22393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 70913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 21460,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 6998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 75112,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 49452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 22394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 50852,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 26126,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 9797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 23327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 80244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 50851,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 415031824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 49919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 158155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 102170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 59249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 130628,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 35456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 98904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 110101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075404",
      "offset": 25
    },
    {
      "val": "john",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 93772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 68580,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 67181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 27992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 98438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 29391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 26592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 96572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register for course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 76045,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 193610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "deregister course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 75578,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 53184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115201",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 134828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 41988,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 317053724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 20527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "101075433",
      "offset": 25
    },
    {
      "val": "isaac",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 57850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 44320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "drop course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 4665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 11197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 13529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "115205",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_cancels_course_by(int)"
});
formatter.result({
  "duration": 39655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 19595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1998256573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dean\u0027s list",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 283185,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 157221,
  "status": "passed"
});
});