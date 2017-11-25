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
  "duration": 583697967,
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
  "duration": 7345549,
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
  "duration": 137627,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 5777068,
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
  "duration": 772577,
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
  "duration": 130163,
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
  "duration": 95639,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 55051,
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
  "duration": 1257304,
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
  "duration": 96573,
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
  "duration": 78844,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 36390,
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
  "duration": 465599,
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
  "duration": 117100,
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
  "duration": 92374,
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
  "duration": 100304,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 44321,
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
  "duration": 424544,
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
  "duration": 69047,
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
  "duration": 5713152,
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
  "duration": 84909,
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
  "duration": 75112,
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
  "duration": 89574,
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
  "duration": 1303024,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 42454,
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
  "duration": 436208,
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
  "duration": 303713,
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
  "duration": 103570,
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
  "duration": 90507,
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
  "duration": 4432988,
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
  "duration": 84442,
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
  "duration": 76978,
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
  "duration": 81176,
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
  "duration": 1036168,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 34057,
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
  "duration": 384422,
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
  "duration": 453003,
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
  "duration": 1064160,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 40122,
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
  "duration": 381157,
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
  "duration": 89574,
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
  "duration": 971787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 34990,
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
  "duration": 733388,
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
  "duration": 72313,
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
  "duration": 65782,
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
  "duration": 5366986,
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
  "duration": 72779,
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
  "duration": 85376,
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
  "duration": 95172,
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
  "duration": 1335215,
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
  "duration": 985316,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 34056,
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
  "duration": 2394710,
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
  "duration": 78844,
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
  "duration": 117566,
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
  "duration": 68113,
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
  "duration": 16280572,
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
  "arguments": [
    {
      "val": "start",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 104969,
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
  "duration": 84908,
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
  "duration": 1863796,
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
  "duration": 16380410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 31724,
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
  "duration": 463732,
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
  "duration": 44263637,
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
  "duration": 72779,
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
  "duration": 326106,
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
  "duration": 88641,
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
  "duration": 7172465,
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
  "duration": 130163,
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
  "duration": 635417,
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
  "duration": 56330025,
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
  "duration": 72313,
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
  "duration": 56917,
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
  "duration": 7752831,
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
  "duration": 522050,
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
  "duration": 495458,
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
  "duration": 65670465,
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
  "duration": 76511,
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
  "duration": 90974,
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
  "duration": 79777,
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
  "duration": 2451160,
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
  "duration": 90507,
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
  "duration": 2216961,
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
  "duration": 99838,
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
  "duration": 463267,
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
  "duration": 47150072,
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
  "duration": 76978,
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
  "duration": 201541,
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
  "duration": 3576902,
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
  "duration": 68580,
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
  "duration": 4367207,
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
  "duration": 83043,
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
  "duration": 731056,
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
  "duration": 429043959,
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
  "duration": 62515,
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
  "duration": 73246,
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
  "duration": 61116,
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
  "duration": 189412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 27059,
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
  "duration": 2453959,
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
  "duration": 423621922,
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
  "duration": 133429,
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
  "duration": 45253,
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
  "duration": 173084,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 25193,
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
  "duration": 836492,
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
  "duration": 37187744,
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
  "duration": 99837,
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
  "duration": 104503,
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
  "duration": 3626821,
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
  "duration": 91907,
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
  "duration": 1712173,
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
  "duration": 45535404,
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
  "duration": 67647,
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
  "duration": 569636,
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
  "duration": 94240,
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
  "duration": 1695845,
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
  "duration": 75111,
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
  "duration": 559372,
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
  "duration": 51474824,
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
  "duration": 72779,
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
  "duration": 88174,
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
  "duration": 65314,
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
  "duration": 2836516,
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
  "duration": 65315,
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
  "duration": 4245909,
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
  "duration": 94706,
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
  "duration": 640082,
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
  "duration": 47808349,
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
  "duration": 61582,
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
  "duration": 59716,
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
  "duration": 2073269,
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
  "duration": 1438785,
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
  "duration": 81643,
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
  "duration": 1046431,
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
  "duration": 430105320,
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
  "duration": 75111,
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
  "duration": 58316,
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
  "duration": 58316,
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
  "duration": 204808,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 26593,
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
  "duration": 1095884,
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
  "duration": 424749064,
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
  "duration": 67180,
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
  "duration": 41988,
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
  "duration": 38256,
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
  "duration": 94240,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 13530,
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
  "duration": 799636,
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
  "duration": 45358122,
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
  "duration": 48053,
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
  "duration": 46653,
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
  "duration": 1226979,
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
  "arguments": [
    {
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 2125054,
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
  "duration": 73246,
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
  "duration": 1104281,
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
  "duration": 33755467,
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
  "duration": 102637,
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
  "duration": 39189,
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
  "duration": 34056,
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
  "duration": 1830673,
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
  "duration": 63915,
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
  "duration": 1481707,
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
  "duration": 44321,
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
  "duration": 882679,
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
  "duration": 41509698,
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
  "duration": 47587,
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
      "val": "delete course",
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
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 775843,
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
  "duration": 63448,
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
  "duration": 1001178,
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
  "duration": 39158842,
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
  "duration": 83042,
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
  "duration": 47587,
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
  "duration": 71846,
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
  "duration": 845822,
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
  "duration": 78378,
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
  "duration": 1000245,
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
  "duration": 38441782,
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
  "duration": 66714,
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
  "duration": 143226,
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
  "duration": 3721527,
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
  "duration": 390770128,
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
  "duration": 130162,
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
  "duration": 256126,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 55984,
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
  "duration": 3067915,
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
  "duration": 43033858,
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
  "duration": 68581,
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
  "duration": 43388,
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
  "duration": 1430387,
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
  "duration": 410273038,
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
  "duration": 119899,
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
  "duration": 168885,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 39189,
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
  "duration": 1982295,
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
  "duration": 39619776,
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
  "duration": 57383,
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
  "duration": 39655,
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
  "duration": 1328683,
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
  "duration": 94239,
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
  "duration": 1765357,
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
  "duration": 64381,
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
  "duration": 973186,
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
  "duration": 37346831,
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
  "duration": 38255,
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
  "duration": 39655,
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
  "duration": 1396331,
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
  "duration": 174483,
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
  "duration": 2976942,
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
  "duration": 83043,
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
  "duration": 1535357,
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
  "duration": 31767574,
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
  "duration": 44321,
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
      "val": "delete student",
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
      "val": "101075403",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 792638,
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
  "duration": 58317,
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
  "duration": 1045499,
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
  "duration": 43504589,
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
  "duration": 62515,
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
  "duration": 111968,
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
  "duration": 50852,
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
  "duration": 463733,
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
  "duration": 100770,
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
  "duration": 1154201,
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
  "duration": 35912712,
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
  "duration": 69046,
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
  "duration": 68114,
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
  "duration": 69047,
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
  "duration": 3403352,
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
  "duration": 393310396,
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
  "duration": 117566,
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
  "duration": 171684,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 65314,
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
  "duration": 1676250,
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
  "duration": 41798948,
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
  "duration": 84909,
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
  "duration": 87708,
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
  "duration": 60182,
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
  "duration": 2716617,
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
  "duration": 392286358,
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
  "duration": 96572,
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
  "duration": 93773,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 20061,
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
  "duration": 403550,
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
  "duration": 39612312,
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
  "duration": 56450,
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
      "val": "create course",
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
  "duration": 1102415,
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
  "duration": 808081270,
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
  "duration": 133895,
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
  "duration": 3533981,
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
  "duration": 105903,
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
  "duration": 1201321,
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
  "duration": 40549574,
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
  "duration": 156755,
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
  "duration": 123164,
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
  "duration": 89108,
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
  "duration": 3212074,
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
  "duration": 798142269,
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
  "duration": 133428,
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
  "duration": 3072114,
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
  "duration": 110102,
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
  "duration": 1529759,
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
  "duration": 36194498,
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
  "duration": 58317,
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
  "duration": 798459511,
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
  "duration": 158621,
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
  "duration": 1112212,
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
  "duration": 102637,
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
  "duration": 2483817,
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
  "duration": 33949078,
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
  "duration": 55984,
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
  "duration": 41521,
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
  "duration": 799836714,
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
  "duration": 108235,
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
  "duration": 1140671,
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
  "duration": 110568,
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
  "duration": 1525560,
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
  "duration": 40305113,
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
  "duration": 46186,
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
  "duration": 39655,
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
  "duration": 1566615,
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
  "duration": 42941485,
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
  "duration": 413347,
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
  "duration": 218803,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 65781,
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
  "duration": 1396331,
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
  "duration": 43863353,
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
  "duration": 47120,
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
  "duration": 1632863,
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
  "duration": 42687226,
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
  "duration": 52719,
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
  "duration": 72779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 17728,
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
  "duration": 908805,
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
  "duration": 48505347,
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
  "duration": 65315,
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
  "duration": 55518,
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
  "duration": 46653,
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
  "duration": 2269212,
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
  "duration": 2395777884,
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
  "duration": 116166,
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
  "duration": 218337,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 62048,
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
  "duration": 1827407,
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
  "duration": 42232356,
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
  "duration": 51318,
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
  "duration": 47587,
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
  "duration": 48986,
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
  "duration": 2036879,
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
  "duration": 2407363277,
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
  "duration": 112434,
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
  "duration": 161420,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 39188,
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
  "duration": 2703554,
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
  "duration": 37251659,
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
  "duration": 63449,
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
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 543976,
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
  "duration": 1729901,
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
  "duration": 61116,
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
  "duration": 1813877,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 39656,
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
  "duration": 37667340,
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
  "duration": 60183,
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
  "duration": 493124,
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
  "duration": 351765,
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
  "duration": 1692578,
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
  "duration": 45721,
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
  "duration": 519251,
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
  "duration": 32604999,
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
  "duration": 44321,
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
  "duration": 31257,
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
  "duration": 51785,
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
  "duration": 1056229,
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
  "duration": 32190,
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
  "duration": 1038967,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 24259,
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
  "duration": 39608113,
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
  "duration": 76977,
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
  "duration": 982517,
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
  "duration": 822962,
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
  "duration": 4339682,
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
  "duration": 108702,
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
  "duration": 1483572,
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
  "duration": 48338796,
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
  "duration": 50386,
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
  "duration": 34990,
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
  "duration": 1218582,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 25659,
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
  "duration": 43238200,
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
  "duration": 46654,
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
  "duration": 539778,
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
  "duration": 453469,
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
  "duration": 459067,
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
  "duration": 44321,
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
  "duration": 641948,
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
  "duration": 47039037,
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
  "duration": 72312,
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
  "duration": 59716,
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
  "duration": 56451,
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
  "duration": 1596473,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 28459,
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
  "duration": 40367628,
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
  "duration": 60183,
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
  "duration": 539312,
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
  "duration": 380224,
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
  "duration": 516917,
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
  "duration": 108702,
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
  "duration": 428743,
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
  "duration": 51068009,
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
  "duration": 40588,
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
  "duration": 33590,
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
  "duration": 2058340,
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
  "duration": 56917,
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
  "duration": 1693045,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 34524,
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
  "duration": 792183720,
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
  "duration": 221603,
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
  "duration": 1147669,
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
  "duration": 982983,
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
  "duration": 165619,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 56917,
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
  "duration": 1788685,
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
  "duration": 55985724,
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
  "duration": 101704,
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
  "duration": 90507,
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
  "duration": 101238,
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
  "duration": 4164733,
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
  "duration": 98438,
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
  "duration": 4455382,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 62515,
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
  "duration": 792545749,
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
  "duration": 126430,
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
  "duration": 1205519,
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
  "duration": 884545,
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
  "duration": 182880,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 41988,
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
  "duration": 871948,
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
  "duration": 41480307,
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
  "duration": 44787,
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
  "duration": 48986,
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
  "duration": 45721,
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
  "duration": 1184525,
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
  "duration": 39189,
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
  "duration": 1329616,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 31258,
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
  "duration": 45254,
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
  "duration": 684869,
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
  "duration": 503389,
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
  "duration": 2498280,
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
  "duration": 409885350,
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
  "duration": 426410,
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
  "duration": 3719660,
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
  "duration": 47120,
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
  "duration": 807567,
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
  "duration": 45077269,
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
  "duration": 69980,
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
  "duration": 2655034,
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
  "duration": 1887589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 85376,
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
  "duration": 50852,
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
  "duration": 585497,
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
  "duration": 853754,
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
  "duration": 10277236,
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
  "duration": 422774700,
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
  "duration": 561238,
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
  "duration": 13683388,
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
  "duration": 54584,
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
  "duration": 1316087,
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
  "duration": 41551219,
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
  "duration": 981117,
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
  "duration": 66247,
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
  "duration": 24259,
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
  "duration": 3237266,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 27525,
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
  "duration": 42455,
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
  "duration": 697932,
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
  "duration": 406856623,
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
  "duration": 512253,
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
  "duration": 455802,
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
  "duration": 35923,
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
  "duration": 560305,
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
  "duration": 41257304,
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
  "duration": 31725,
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
  "duration": 55983,
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
  "duration": 2201099,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 27059,
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
  "duration": 1383735,
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
  "duration": 402323330,
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
  "duration": 547709,
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
  "duration": 2958747,
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
  "duration": 65314,
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
  "duration": 550042,
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
  "duration": 44060695,
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
  "duration": 59716,
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
  "duration": 52252,
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
  "duration": 1634262,
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
  "duration": 52718,
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
  "duration": 2733412,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 32190,
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
  "duration": 55517,
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
  "duration": 876147,
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
  "duration": 403907207,
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
  "duration": 459534,
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
  "duration": 2376981,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 39188,
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
  "duration": 648946,
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
  "duration": 45472888,
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
  "duration": 55984,
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
  "duration": 145558,
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
  "duration": 46187,
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
  "duration": 1419191,
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
  "duration": 37789,
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
  "duration": 1244241,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 25659,
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
  "duration": 34057,
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
  "duration": 559839,
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
  "duration": 407408531,
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
  "duration": 673206,
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
  "duration": 3008666,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 39655,
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
  "duration": 1044099,
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
  "duration": 39946815,
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
  "duration": 56451,
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
  "duration": 61116,
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
  "duration": 66247,
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
  "duration": 807100,
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
  "duration": 38256,
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
  "duration": 1449049,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 24259,
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
  "duration": 70447,
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
  "duration": 453003,
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
  "duration": 485194,
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
  "duration": 1665053,
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
  "duration": 38022837,
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
  "duration": 562638,
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
  "duration": 118966,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 32657,
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
  "duration": 1124809,
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
  "duration": 47326421,
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
  "duration": 62982,
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
  "duration": 1424322,
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
  "duration": 40122,
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
  "duration": 1116411,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 34990,
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
  "duration": 401684,
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
  "duration": 354098,
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
  "duration": 2024749,
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
  "duration": 36115653,
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
  "duration": 465599,
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
  "duration": 65314,
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
  "duration": 673206,
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
  "duration": 44864531,
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
  "duration": 20060,
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
  "duration": 1122943,
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
  "duration": 1003044,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 20994,
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
  "duration": 28925,
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
  "duration": 348499,
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
  "duration": 327972,
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
  "duration": 1447649,
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
  "duration": 691726286,
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
  "duration": 436674,
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
  "duration": 90973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 43388,
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
  "duration": 717060,
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
  "duration": 41196188,
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
  "duration": 27992,
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
  "duration": 934464,
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
  "duration": 33591,
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
  "duration": 1024038,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 344300,
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
  "duration": 38722,
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
  "duration": 491725,
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
  "duration": 327039,
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
  "duration": 1774222,
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
  "duration": 706349736,
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
  "duration": 802435,
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
  "duration": 135294,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 37322,
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
  "duration": 1317020,
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
  "duration": 36783727,
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
  "duration": 18194,
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
  "duration": 1173795,
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
  "duration": 44788,
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
  "duration": 969920,
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
  "duration": 1619333,
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
  "duration": 42454,
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
  "duration": 972253,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 39188,
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
  "duration": 28925,
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
  "duration": 516451,
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
  "duration": 371826,
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
  "duration": 1894121,
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
  "duration": 33591,
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
  "duration": 767912,
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
  "duration": 645214,
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
  "duration": 2588787,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 30325,
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
  "duration": 40588,
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
  "duration": 613956,
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
  "duration": 582232,
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
  "duration": 2592519,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 388079637,
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
  "duration": 424544,
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
  "duration": 292050,
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
  "duration": 10094822,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 15396,
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
  "duration": 52251,
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
  "duration": 386755,
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
  "duration": 291116,
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
  "duration": 2687225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 18661,
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
  "duration": 350366,
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
  "duration": 274787,
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
  "duration": 2132985,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 23793,
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
  "duration": 454403,
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
  "duration": 48151250,
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
  "duration": 41055,
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
  "duration": 40588,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 730589,
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
  "duration": 726857,
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
  "duration": 783308,
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
  "duration": 35457,
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
  "duration": 785640,
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
  "duration": 56450,
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
  "duration": 764646,
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
  "duration": 902273,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 84443,
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
  "duration": 72779,
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
  "duration": 515051,
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
  "duration": 530447,
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
  "duration": 3422014,
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
  "duration": 488926,
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
  "duration": 2207631,
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
  "duration": 410082,
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
  "duration": 2137651,
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
  "duration": 476329,
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
  "duration": 2308401,
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
  "duration": 424077,
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
  "duration": 2110591,
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
  "duration": 385260850,
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
  "duration": 479129,
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
  "duration": 3760715,
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
  "duration": 392821,
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
  "duration": 2388644,
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
  "duration": 292982,
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
  "duration": 2613046,
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
  "duration": 268723,
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
  "duration": 2160511,
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
  "duration": 498257,
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
  "duration": 4091021,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 25193,
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
  "duration": 431075,
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
  "duration": 55172559,
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
  "duration": 40122,
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
  "duration": 21927,
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
  "duration": 926533,
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
  "duration": 24726,
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
  "duration": 871016,
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
  "duration": 23326,
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
  "duration": 833226,
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
  "duration": 1233978,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11196,
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
  "duration": 26593,
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
  "duration": 449271,
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
  "duration": 363895,
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
  "duration": 1986960,
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
  "duration": 375559,
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
  "duration": 2013552,
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
  "duration": 574301,
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
  "duration": 2294405,
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
  "duration": 397444804,
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
  "duration": 314909,
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
  "duration": 1967367,
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
  "duration": 228134,
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
  "duration": 1913715,
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
  "duration": 259392,
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
  "duration": 1891321,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 18661,
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
  "duration": 1642193,
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
  "duration": 49415552,
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
  "duration": 42454,
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
  "duration": 40588,
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
  "duration": 34057,
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
  "duration": 1101016,
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
  "duration": 1425722,
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
  "duration": 28925,
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
  "duration": 478662,
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
  "duration": 434808,
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
  "duration": 2662499,
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
  "duration": 388799962,
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
  "duration": 1041299,
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
  "duration": 3844225,
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
  "duration": 59716,
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
  "duration": 978784,
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
  "duration": 33710680,
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
  "duration": 63915,
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
  "duration": 47586,
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
  "duration": 32657,
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
  "duration": 1782619,
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
  "duration": 38256,
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
  "duration": 3118768,
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
  "duration": 54584,
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
  "duration": 1333349,
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
  "duration": 998379,
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
  "duration": 6937800,
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
  "duration": 414703694,
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
  "duration": 564504,
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
  "duration": 2419902,
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
  "duration": 403084,
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
  "duration": 578967,
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
  "duration": 45309603,
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
  "duration": 30325,
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
  "duration": 23793,
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
  "duration": 1192456,
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
  "duration": 37322,
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
  "duration": 534179,
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
  "duration": 407118814,
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
  "duration": 1067892,
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
  "duration": 515984,
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
  "duration": 122698,
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
  "duration": 544443,
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
  "duration": 45709421,
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
  "duration": 54118,
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
  "duration": 45253,
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
  "duration": 11503750,
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
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 41987,
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
  "duration": 630752,
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
  "duration": 407996361,
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
  "duration": 498256,
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
  "duration": 831360,
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
  "duration": 48053,
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
  "duration": 621888,
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
  "duration": 33364980,
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
  "duration": 29858,
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
  "duration": 19128,
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
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 951726,
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
  "duration": 883145,
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
  "duration": 17729,
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
  "duration": 343367,
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
  "duration": 417459966,
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
  "duration": 379757,
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
  "duration": 1007709,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 21927,
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
  "duration": 662942,
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
  "duration": 45498548,
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
  "duration": 27525,
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
  "duration": 14929,
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
  "duration": 904140,
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
  "duration": 932131,
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
  "duration": 346633,
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
  "duration": 406835629,
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
  "duration": 403084,
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
  "duration": 1107080,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 19127,
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
  "duration": 582698,
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
  "duration": 46203478,
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
  "duration": 18662,
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
  "duration": 803368,
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
  "duration": 605092,
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
  "duration": 12596,
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
  "duration": 320508,
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
  "duration": 2072803,
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
  "duration": 39729878,
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
  "duration": 748784,
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
  "duration": 100304,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 43388,
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
  "duration": 1111746,
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
  "duration": 45088467,
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
  "duration": 31725,
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
  "duration": 19128,
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
  "duration": 10730,
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
  "duration": 1022172,
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
  "duration": 744585,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8864,
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
  "duration": 20061,
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
  "duration": 341502,
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
  "duration": 263124,
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
  "duration": 1351544,
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
  "duration": 39878235,
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
  "duration": 442272,
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
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 15396,
  "status": "passed"
});
formatter.uri("test/cucumber/9-studentderegistercourse.feature");
formatter.feature({
  "line": 1,
  "name": "Student Register For Course",
  "description": "",
  "id": "student-register-for-course",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time",
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
  "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;",
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
      "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;1"
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
      "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;2"
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
      "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;2",
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
  "duration": 637749,
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
  "duration": 48005225,
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
  "duration": 29391,
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
  "duration": 21461,
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
  "duration": 1079089,
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
  "duration": 1818076,
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
  "duration": 25660,
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
  "duration": 517850,
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
  "duration": 352698,
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
  "duration": 1410327,
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
  "duration": 390028342,
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
  "duration": 322374,
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
  "duration": 2055540,
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
  "duration": 43467733,
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
  "duration": 770244,
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
  "duration": 3085177,
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
  "duration": 48520,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Student deregisters registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;3",
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
  "duration": 478662,
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
  "duration": 45509744,
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
  "duration": 746918,
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
  "duration": 17262,
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
  "duration": 659210,
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
  "duration": 16328,
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
  "duration": 298581,
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
  "duration": 230000,
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
  "duration": 1621199,
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
  "duration": 393637435,
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
  "duration": 749717,
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
  "duration": 4621001,
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
  "duration": 40034057,
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
  "duration": 509920,
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
  "duration": 3094508,
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
  "duration": 25659,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time",
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
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;",
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
      "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;1"
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
      "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;2"
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
      "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 52,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;2",
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
  "duration": 643348,
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
  "duration": 44551021,
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
  "duration": 18662,
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
  "duration": 660610,
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
  "duration": 18661,
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
  "duration": 340102,
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
  "duration": 236532,
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
  "duration": 227668,
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
  "duration": 397156953,
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
  "duration": 177283,
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
  "duration": 381156,
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
  "duration": 45340394,
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
  "duration": 204341,
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
  "duration": 772111,
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
  "duration": 68581,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;3",
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
  "duration": 1234911,
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
  "duration": 44021973,
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
  "duration": 24726,
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
  "duration": 1858197,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 20994,
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
  "duration": 1135540,
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
  "duration": 948926,
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
  "duration": 1010042,
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
  "duration": 388964182,
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
  "duration": 108235,
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
  "duration": 399818,
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
  "duration": 45367452,
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
  "duration": 203408,
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
  "duration": 801036,
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
  "duration": 62049,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time",
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
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;",
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
      "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;1"
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
      "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;2"
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
      "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 76,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;2",
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
  "duration": 5123456,
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
  "duration": 47841006,
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
  "duration": 24260,
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
  "duration": 17261,
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
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 643348,
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
  "duration": 25193,
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
  "duration": 722192,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11196,
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
  "duration": 340101,
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
  "duration": 266857,
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
  "duration": 2006555,
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
  "duration": 393627170,
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
  "duration": 439473,
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
  "duration": 1659921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 30791,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3",
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
  "duration": 578967,
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
  "duration": 39725213,
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
  "duration": 21927,
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
  "duration": 12596,
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
  "duration": 897141,
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
  "duration": 894809,
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
  "duration": 369027,
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
  "duration": 329839,
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
  "duration": 1672051,
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
  "duration": 413995032,
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
  "duration": 334037,
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
  "duration": 1470976,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 20061,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 79,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time",
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
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;",
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
      "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;1"
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
      "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;2"
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
      "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 98,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;2",
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
  "duration": 575701,
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
  "duration": 45004957,
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
  "duration": 33590,
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
  "duration": 14929,
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
  "duration": 835092,
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
  "duration": 26592,
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
  "duration": 808967,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10263,
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
  "duration": 22860,
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
  "duration": 491258,
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
  "duration": 407213986,
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
  "duration": 508520,
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
  "duration": 1580611,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 16795,
  "status": "passed"
});
formatter.scenario({
  "line": 99,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;3",
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
  "duration": 551908,
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
  "duration": 47743034,
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
  "duration": 829960,
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
  "duration": 17262,
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
  "duration": 910671,
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
  "duration": 26126,
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
  "duration": 362496,
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
  "duration": 437331436,
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
  "duration": 397952,
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
  "duration": 2744609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 28925,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 101,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends",
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
  "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;",
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
      "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;;1"
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
      "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;;2"
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
      "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 125,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;;2",
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
  "duration": 410082,
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
  "duration": 41237710,
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
  "duration": 30325,
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
  "duration": 21460,
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
  "duration": 989048,
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
  "duration": 20994,
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
  "duration": 926067,
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
  "duration": 20994,
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
  "duration": 373693,
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
  "duration": 342901,
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
  "duration": 1758826,
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
  "duration": 411519611,
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
  "duration": 502922,
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
  "duration": 4987228,
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
  "duration": 313778327,
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
  "duration": 804768,
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
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.scenario({
  "line": 126,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends;;3",
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
  "duration": 2157711,
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
  "duration": 40666208,
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
  "duration": 18194,
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
  "duration": 782375,
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
  "duration": 851887,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7465,
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
  "duration": 306512,
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
  "duration": 238398,
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
  "duration": 1459312,
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
  "duration": 404656924,
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
  "duration": 421278,
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
  "duration": 3309112,
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
  "duration": 295125905,
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
  "duration": 1176128,
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
  "duration": 111968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 128,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts",
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
  "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;",
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
      "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;1"
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
      "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;2"
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
      "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 149,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;2",
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
  "duration": 1985561,
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
  "duration": 53404868,
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
  "duration": 21927,
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
  "duration": 678804,
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
  "duration": 24260,
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
  "duration": 704464,
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
  "duration": 14929,
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
  "duration": 317708,
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
  "duration": 255193,
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
  "duration": 1181726,
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
  "duration": 40418479,
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
  "duration": 341502,
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
  "duration": 46187,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 11663,
  "status": "passed"
});
formatter.scenario({
  "line": 150,
  "name": "Student deregisters not registered course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;3",
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
  "duration": 974119,
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
  "duration": 47449119,
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
  "duration": 26592,
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
  "duration": 681604,
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
  "duration": 695600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8397,
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
  "duration": 271522,
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
  "duration": 288783,
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
  "duration": 1190123,
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
  "duration": 40629819,
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
  "duration": 499656,
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
  "duration": 62982,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 15862,
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
  "name": "Student takes course: writes final after doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-doing-assignments-and-midterms",
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
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-doing-assignments-and-midterms;",
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
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-doing-assignments-and-midterms;;1"
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
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-doing-assignments-and-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Student takes course: writes final after doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-after-doing-assignments-and-midterms;;2",
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
  "duration": 738054,
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
  "duration": 45672098,
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
  "duration": 44787,
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
  "duration": 16795,
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
  "duration": 1058561,
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
  "duration": 29392,
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
  "duration": 1261970,
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
  "duration": 33591,
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
  "duration": 437141,
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
  "duration": 408682,
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
  "duration": 1928178,
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
  "duration": 391067776,
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
  "duration": 695133,
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
  "duration": 5690760,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
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
      "offset": 46
    }
  ],
  "location": "StepDefinitions.student_does_assginments_for_course(int,int)"
});
formatter.result({
  "duration": 1345479,
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
  "duration": 1073957,
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
  "duration": 1032436,
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
  "duration": 5846114,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Student takes project course: writes final after doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-doing-assignments,-midterms-and-projects",
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
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "student \u003cstudent number\u003e obtains mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 54,
  "name": "",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-doing-assignments,-midterms-and-projects;",
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
      "line": 55,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-doing-assignments,-midterms-and-projects;;1"
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
      "line": 56,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-doing-assignments,-midterms-and-projects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 56,
  "name": "Student takes project course: writes final after doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-after-doing-assignments,-midterms-and-projects;;2",
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
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
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
  "duration": 3960392,
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
  "duration": 34026055,
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
  "duration": 32657,
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
  "duration": 16795,
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
  "duration": 824829,
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
  "duration": 3325441,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 16328,
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
  "duration": 31724,
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
  "duration": 574767,
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
  "duration": 501056,
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
  "duration": 2672296,
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
  "duration": 387343916,
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
  "duration": 309778,
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
  "duration": 3785909,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 15396,
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
  "duration": 619555,
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
  "duration": 575234,
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
  "duration": 613956,
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
  "duration": 577567,
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
  "duration": 589231,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 58,
  "name": "Student takes course: writes final before doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "student \u003cstudent number\u003e cannot obtain mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 81,
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
      "line": 82,
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
      "line": 83,
      "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 83,
  "name": "Student takes course: writes final before doing assignments and midterms",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-course:-writes-final-before-doing-assignments-and-midterms;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 59,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
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
  "line": 67,
  "name": "log out",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "student starts to take course",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "student 101075433 does assginments for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "student 101075433 does midterms for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
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
  "duration": 662475,
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
  "duration": 32180921,
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
  "duration": 30791,
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
  "duration": 15862,
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
  "duration": 755315,
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
  "duration": 25192,
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
  "duration": 706796,
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
  "duration": 19128,
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
  "duration": 391887,
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
  "duration": 510386,
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
  "duration": 1747163,
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
  "duration": 407577882,
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
  "duration": 357364,
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
  "duration": 2029881,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 13063,
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
  "duration": 408215,
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
  "duration": 433409,
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
  "duration": 348033,
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
  "duration": 446005,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 85,
  "name": "Student takes project course: writes final before doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects",
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
  "name": "student \u003cstudent number\u003e writes final for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "student \u003cstudent number\u003e does assginments for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "student \u003cstudent number\u003e does midterms for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "student \u003cstudent number\u003e does project for course \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "student \u003cstudent number\u003e cannot obtain mark for course \u003ccourse code\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 109,
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
      "line": 110,
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
      "line": 111,
      "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 111,
  "name": "Student takes project course: writes final before doing assignments, midterms and projects",
  "description": "",
  "id": "hierarchical-use-cases---student-take-course;student-takes-project-course:-writes-final-before-doing-assignments,-midterms-and-projects;;2",
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
  "name": "student 101075433 writes final for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "student 101075433 does assginments for course 115205",
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
  "name": "student 101075433 does project for course 115205",
  "matchedColumns": [
    0,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
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
  "duration": 607891,
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
  "duration": 42822519,
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
  "duration": 41055,
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
  "duration": 17728,
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
  "duration": 650346,
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
  "duration": 17262,
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
  "duration": 771644,
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
  "duration": 14929,
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
  "duration": 302313,
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
  "duration": 247728,
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
  "duration": 1200854,
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
  "duration": 394251858,
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
  "duration": 743652,
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
  "duration": 6012199,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 30324,
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
  "duration": 1036168,
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
  "duration": 1049231,
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
  "duration": 1038967,
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
  "duration": 1038501,
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
  "duration": 1347811,
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
  "duration": 1543288,
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
  "duration": 39007686,
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
  "duration": 9798,
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
  "duration": 888743,
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
  "duration": 16795,
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
  "duration": 831827,
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
  "duration": 16795,
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
  "duration": 759980,
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
  "duration": 14930,
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
  "duration": 792172,
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
  "duration": 139027,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 63448,
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
  "duration": 472130,
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
  "duration": 32600800,
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
  "duration": 31257,
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
  "duration": 20061,
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
  "duration": 900874,
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
  "duration": 17261,
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
  "duration": 829027,
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
  "duration": 16796,
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
  "duration": 824362,
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
  "duration": 16328,
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
  "duration": 822030,
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
  "duration": 22860,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 29858,
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
  "duration": 657344,
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
  "duration": 36122185,
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
  "duration": 33590,
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
  "duration": 29858,
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
  "duration": 14929,
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
  "duration": 777709,
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
  "duration": 22393,
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
  "duration": 839291,
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
  "duration": 17261,
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
  "duration": 810367,
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
  "duration": 121298,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 49453,
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
  "duration": 612090,
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
  "duration": 45315201,
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
  "duration": 21460,
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
  "duration": 23793,
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
  "duration": 15396,
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
  "duration": 803835,
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
  "duration": 708196,
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
  "duration": 20527,
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
  "duration": 829961,
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
  "duration": 21460,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 29391,
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
  "duration": 489859,
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
  "duration": 37938394,
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
  "duration": 31724,
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
  "duration": 1048297,
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
  "duration": 25659,
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
  "duration": 1107081,
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
  "duration": 21927,
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
  "duration": 830428,
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
  "duration": 18194,
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
  "duration": 731989,
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
  "duration": 31258,
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
  "duration": 820630,
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
  "duration": 22860,
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
  "duration": 361563,
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
  "duration": 325639,
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
  "duration": 1113146,
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
  "duration": 224402,
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
  "duration": 1148136,
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
  "duration": 223935,
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
  "duration": 1174727,
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
  "duration": 203408,
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
  "duration": 1107547,
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
  "duration": 206207,
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
  "duration": 283185,
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
  "duration": 554707,
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
  "duration": 46932668,
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
  "duration": 22393,
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
  "duration": 26592,
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
  "duration": 1136939,
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
  "duration": 22393,
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
  "duration": 1072558,
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
  "duration": 21927,
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
  "duration": 1147203,
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
  "duration": 19595,
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
  "duration": 747851,
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
  "duration": 21461,
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
  "duration": 717060,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7465,
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
  "duration": 362496,
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
  "duration": 442739,
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
  "duration": 1716372,
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
  "duration": 247728,
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
  "duration": 1475175,
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
  "duration": 392820,
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
  "duration": 1335215,
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
  "duration": 233732,
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
  "duration": 1311888,
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
  "duration": 263124,
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
  "duration": 304645,
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
  "duration": 676472,
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
  "duration": 41917447,
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
  "duration": 20528,
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
  "duration": 808501,
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
  "duration": 16795,
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
  "duration": 832293,
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
  "duration": 28925,
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
  "duration": 1074424,
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
  "duration": 60650,
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
  "duration": 741319,
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
  "duration": 774910,
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
  "duration": 14929,
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
  "duration": 362496,
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
  "duration": 311177,
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
  "duration": 1323552,
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
  "duration": 245862,
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
  "duration": 1448116,
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
  "duration": 317242,
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
  "duration": 1451848,
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
  "duration": 284585,
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
  "duration": 1320753,
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
  "duration": 398226244,
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
  "duration": 578033,
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
  "duration": 2085398,
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
  "duration": 401684,
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
  "duration": 3537246,
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
  "duration": 278520,
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
  "duration": 2052275,
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
  "duration": 215071,
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
  "duration": 2004222,
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
  "duration": 258925,
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
  "duration": 264991,
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
  "duration": 545843,
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
  "duration": 49631089,
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
  "duration": 20994,
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
  "duration": 18194,
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
  "duration": 1388866,
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
  "duration": 1396330,
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
  "duration": 34057,
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
  "duration": 1517629,
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
  "duration": 1614201,
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
  "duration": 29858,
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
  "duration": 1356675,
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
  "duration": 28925,
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
  "duration": 446004,
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
  "duration": 419412,
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
  "duration": 6196946,
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
  "duration": 414747,
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
  "duration": 7363743,
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
  "duration": 462333,
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
  "duration": 1939841,
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
  "duration": 363895,
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
  "duration": 1904385,
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
  "duration": 388472457,
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
  "duration": 328438,
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
  "duration": 1976697,
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
  "duration": 213671,
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
  "duration": 1902518,
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
  "duration": 221137,
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
  "duration": 1796615,
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
  "duration": 215538,
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
  "duration": 1753694,
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
  "duration": 203875,
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
  "duration": 269656,
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
  "duration": 421279,
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
  "duration": 46593965,
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
  "duration": 33591,
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
  "duration": 24727,
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
  "duration": 777709,
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
  "duration": 16795,
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
  "duration": 631684,
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
  "duration": 20994,
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
  "duration": 665275,
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
  "duration": 14463,
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
  "duration": 707263,
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
  "duration": 588297,
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
  "duration": 22394,
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
  "duration": 680204,
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
  "duration": 15395,
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
  "duration": 611624,
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
  "duration": 20994,
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
  "duration": 267323,
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
  "duration": 235132,
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
  "duration": 1157000,
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
  "duration": 236065,
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
  "duration": 1213451,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8864,
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
  "duration": 296714,
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
  "duration": 208073,
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
  "duration": 1539090,
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
  "duration": 234199,
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
  "duration": 1385134,
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
  "duration": 393287,
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
  "duration": 297647,
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
  "duration": 1399597,
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
  "duration": 236999,
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
  "duration": 1525560,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 390987066,
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
  "duration": 406350,
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
  "duration": 252394,
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
  "duration": 2254750,
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
  "duration": 239798,
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
  "duration": 2099394,
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
  "duration": 22394,
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
  "duration": 471198,
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
  "duration": 389555,
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
  "duration": 2087265,
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
  "duration": 222069,
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
  "duration": 1984628,
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
  "duration": 15862,
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
  "duration": 415214,
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
  "duration": 292516,
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
  "duration": 3241465,
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
  "duration": 283185,
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
  "duration": 2194101,
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
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1994996909,
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
  "duration": 35923,
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
      "val": "dean\u0027s list",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 229067,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 64848,
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
  "duration": 1758826,
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
  "duration": 40447404,
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
  "duration": 84909,
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
  "duration": 114767,
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
  "duration": 141825,
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
  "duration": 4458181,
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
  "duration": 123631,
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
  "duration": 2940552,
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
  "duration": 90040,
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
  "duration": 1819009,
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
  "duration": 125963,
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
  "duration": 2055540,
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
  "duration": 2552398,
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
      "val": "n",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 2617245,
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
  "duration": 27526,
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
  "duration": 1537223,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 52252,
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
  "duration": 33124,
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
  "duration": 897141,
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
  "duration": 656877,
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
  "duration": 3570370,
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
  "duration": 1437853,
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
  "duration": 2580856,
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
  "duration": 464666,
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
  "duration": 381157,
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
  "duration": 2024283,
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
  "duration": 2142782,
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
  "duration": 2488482,
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
  "duration": 32657,
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
  "duration": 599493,
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
  "duration": 492192,
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
  "duration": 2256616,
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
  "duration": 521583,
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
  "duration": 2130186,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 412633224,
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
  "duration": 32658,
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
  "duration": 424544,
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
  "duration": 333104,
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
  "duration": 1994424,
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
  "duration": 258925,
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
  "duration": 1944040,
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
  "duration": 23326,
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
  "duration": 348033,
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
  "duration": 256593,
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
  "duration": 1934242,
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
  "duration": 255660,
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
  "duration": 1999557,
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
  "duration": 14463,
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
  "duration": 248662,
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
  "duration": 184747,
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
  "duration": 2356920,
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
  "duration": 207607,
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
  "duration": 1903917,
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
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2003135563,
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
  "duration": 59716,
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
  "duration": 46653,
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
  "duration": 111968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 106836,
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
  "duration": 920468,
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
  "duration": 43429945,
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
  "duration": 25660,
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
  "duration": 22393,
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
  "duration": 1129941,
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
  "duration": 34990,
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
  "duration": 14463,
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
  "duration": 1092618,
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
  "duration": 28925,
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
  "duration": 1042233,
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
  "duration": 30791,
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
  "duration": 14463,
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
  "duration": 1033835,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1084688,
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
  "duration": 41054,
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
  "duration": 924667,
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
  "duration": 20994,
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
  "duration": 928865,
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
  "duration": 532313,
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
  "duration": 38256,
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
  "duration": 6327109,
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
  "duration": 35923,
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
  "duration": 18661,
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
  "duration": 4237511,
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
  "duration": 45720,
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
  "duration": 435274,
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
  "duration": 384889,
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
  "duration": 1732234,
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
  "duration": 32658,
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
  "duration": 348500,
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
  "duration": 1854932,
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
  "duration": 29858,
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
  "duration": 565904,
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
  "duration": 389088,
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
  "duration": 1779820,
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
  "duration": 28458,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396858839,
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
  "duration": 22860,
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
  "duration": 333104,
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
  "duration": 257526,
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
  "duration": 1151868,
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
  "duration": 27059,
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
  "duration": 242597,
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
  "duration": 1971564,
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
  "duration": 25660,
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
  "duration": 248662,
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
  "duration": 2105926,
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
  "duration": 27992,
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
  "duration": 254260,
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
  "duration": 2000023,
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
  "duration": 47586,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8864,
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
  "duration": 26592,
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
  "duration": 452070,
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
  "duration": 263124,
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
  "duration": 1511565,
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
  "duration": 44320,
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
  "duration": 351299,
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
  "duration": 1733634,
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
  "duration": 45254,
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
  "duration": 374625,
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
  "duration": 3457936,
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
  "duration": 41055,
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
  "duration": 400751,
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
  "duration": 5461692,
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
  "duration": 55517,
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
  "duration": 301846,
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
  "duration": 2240287,
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
  "duration": 30792,
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
  "duration": 280386,
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
  "duration": 1393999,
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
  "duration": 31258,
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
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 293619939,
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
  "duration": 31257,
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
  "duration": 438540,
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
  "duration": 312576,
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
  "duration": 1746697,
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
  "duration": 29391,
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
  "duration": 21460,
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
  "duration": 118500,
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
  "duration": 3451871,
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
  "duration": 35923,
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
  "duration": 1990695949,
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
  "duration": 152089,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 79311,
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
  "duration": 1450448,
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
  "duration": 43983718,
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
  "duration": 31257,
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
  "duration": 47586,
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
  "duration": 27992,
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
  "duration": 1199921,
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
  "duration": 30325,
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
  "duration": 1764425,
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
  "duration": 41988,
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
  "duration": 16795,
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
  "duration": 1063227,
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
  "duration": 26593,
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
  "duration": 1039900,
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
  "duration": 40588,
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
  "duration": 17262,
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
  "duration": 954992,
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
  "duration": 23326,
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
  "duration": 13529,
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
  "duration": 946594,
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
  "duration": 25193,
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
  "duration": 15395,
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
  "duration": 1499901,
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
  "duration": 36389,
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
  "duration": 6281855,
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
  "duration": 41055,
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
  "duration": 31724,
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
  "duration": 3175684,
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
  "duration": 27992,
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
  "duration": 20061,
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
  "duration": 330305,
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
  "duration": 251461,
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
  "duration": 1219982,
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
  "duration": 285051,
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
  "duration": 1214383,
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
  "duration": 27525,
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
  "duration": 14929,
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
  "duration": 306046,
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
  "duration": 241664,
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
  "duration": 1185459,
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
  "duration": 26592,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 394103033,
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
  "duration": 35457,
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
  "duration": 699798,
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
  "duration": 534179,
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
  "duration": 1496635,
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
  "duration": 30324,
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
  "duration": 236065,
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
  "duration": 1989293,
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
  "duration": 26592,
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
  "duration": 267323,
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
  "duration": 1919313,
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
  "duration": 23327,
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
  "duration": 231400,
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
  "duration": 1967366,
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
  "duration": 23326,
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
  "duration": 9331,
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
  "duration": 983917,
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
  "duration": 271522,
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
  "duration": 1404262,
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
  "duration": 24726,
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
  "duration": 236531,
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
  "duration": 1319819,
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
  "duration": 28458,
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
  "duration": 242597,
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
  "duration": 2095196,
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
  "duration": 24260,
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
  "duration": 216471,
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
  "duration": 2132985,
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
  "duration": 26592,
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
  "duration": 229067,
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
  "duration": 2105460,
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
  "duration": 25193,
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
  "duration": 501055,
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
  "duration": 1579211,
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
  "duration": 24260,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 7465,
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
  "duration": 297084874,
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
  "duration": 449271,
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
  "duration": 338236,
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
  "duration": 1372537,
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
  "duration": 35923,
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
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 12597,
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
  "duration": 12130,
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
  "duration": 3393555,
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
  "duration": 29391,
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
  "duration": 1992875121,
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
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 54117,
  "status": "passed"
});
});