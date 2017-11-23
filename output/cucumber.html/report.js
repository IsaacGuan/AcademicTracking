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
  "duration": 182770035,
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
  "duration": 2314466,
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
  "duration": 118499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 2965745,
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
  "duration": 589696,
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
  "duration": 97972,
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
  "duration": 93772,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 36856,
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
  "duration": 549109,
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
      "val": "abcdefgg",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 79311,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 29858,
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
  "duration": 399351,
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
  "duration": 88175,
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
  "duration": 97505,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 34523,
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
  "duration": 409615,
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
  "duration": 73245,
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
  "duration": 73245,
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
  "duration": 5043679,
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
  "duration": 83510,
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
  "duration": 101704,
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
  "duration": 83043,
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
  "duration": 1391199,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 39655,
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
  "duration": 372292,
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
  "duration": 82109,
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
  "duration": 98438,
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
  "duration": 2705420,
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
  "duration": 86775,
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
  "duration": 77911,
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
  "duration": 86309,
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
  "duration": 939596,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 31724,
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
  "duration": 400751,
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
  "duration": 1124809,
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
  "duration": 1050630,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 42454,
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
  "duration": 1034301,
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
  "duration": 90507,
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
  "duration": 815964,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 30791,
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
  "duration": 505254,
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
  "duration": 1368339,
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
  "duration": 50852,
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
  "duration": 41055,
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
  "duration": 36389,
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
  "duration": 598560,
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
  "duration": 887810,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 77911,
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
  "duration": 536045,
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
  "duration": 34523,
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
  "duration": 2198766,
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
  "duration": 81176,
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
  "duration": 63448,
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
  "duration": 864484,
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
  "duration": 716127,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 38723,
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
  "duration": 931198,
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
  "duration": 45709887,
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
  "duration": 177749,
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
  "duration": 57383,
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
  "duration": 5659035,
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
  "duration": 183813,
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
  "duration": 749250,
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
  "duration": 38554217,
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
  "duration": 53651,
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
  "duration": 111968,
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
  "duration": 4177329,
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
  "duration": 100304,
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
  "duration": 465600,
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
  "duration": 52864157,
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
  "duration": 69980,
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
  "duration": 2299537,
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
  "duration": 55050,
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
  "duration": 1470043,
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
  "duration": 81643,
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
  "duration": 733389,
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
  "duration": 32194451,
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
  "duration": 40588,
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
  "duration": 41055,
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
  "duration": 2145581,
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
  "duration": 44321,
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
  "duration": 858886,
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
  "duration": 45720,
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
  "duration": 607424,
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
  "duration": 420252161,
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
  "duration": 173550,
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
  "duration": 223469,
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
  "duration": 208073,
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
  "duration": 1235377,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 213206,
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
  "duration": 4093353,
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
  "duration": 424810179,
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
  "duration": 104970,
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
  "duration": 98438,
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
  "duration": 81176,
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
  "duration": 424544,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 66714,
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
  "duration": 1300691,
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
  "duration": 48280012,
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
  "duration": 85375,
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
  "duration": 1870794,
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
  "duration": 76045,
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
  "duration": 439007,
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
  "duration": 37113099,
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
  "duration": 414747,
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
  "duration": 1086087,
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
  "duration": 43854,
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
  "duration": 467465,
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
  "duration": 40678337,
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
  "duration": 35457,
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
  "duration": 1168196,
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
  "duration": 2075135,
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
  "duration": 89108,
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
  "duration": 2761404,
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
  "duration": 45733214,
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
  "duration": 67181,
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
  "duration": 65781,
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
  "duration": 1966433,
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
  "duration": 1245641,
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
  "duration": 105903,
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
  "duration": 840691,
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
  "duration": 421826707,
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
  "duration": 111968,
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
  "duration": 130629,
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
  "duration": 280386,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 45720,
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
  "duration": 1560083,
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
  "duration": 431182076,
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
  "duration": 108702,
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
  "duration": 79777,
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
  "duration": 76044,
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
  "duration": 241197,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 38722,
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
  "name": "Clerk deletes existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends",
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
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;",
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;;1"
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;;2"
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Clerk deletes existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;;2",
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
  "duration": 1505033,
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
  "duration": 31855748,
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
  "duration": 55050,
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
  "duration": 75578,
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
  "duration": 34523,
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
  "duration": 1174262,
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
  "duration": 103570,
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
  "duration": 1352010,
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
  "duration": 51785,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk deletes existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-before-term-ends;;3",
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
  "duration": 593429,
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
  "duration": 33744737,
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
  "duration": 42454,
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
  "duration": 37323,
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
  "duration": 8221229,
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
  "duration": 51785,
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
  "duration": 1025904,
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
  "duration": 39656,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Clerk deletes non-existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends",
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
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;",
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
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;;1"
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
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;;2"
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
      "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk deletes non-existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;;2",
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
  "duration": 604159,
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
  "duration": 51139388,
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
  "duration": 58317,
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
      "val": "delete course",
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
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 748784,
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
  "duration": 85842,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk deletes non-existing course before term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-non-existing-course-before-term-ends;;3",
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
  "duration": 710995,
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
  "duration": 38464642,
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
  "duration": 89574,
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
  "duration": 44787,
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
  "duration": 62048,
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
  "duration": 680204,
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
  "duration": 127830,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk deletes existing course after term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;",
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;;1"
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;;2"
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
      "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Clerk deletes existing course after term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;;2",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 617688,
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
  "duration": 43553576,
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
  "duration": 43388,
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
  "duration": 79311,
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
  "duration": 2312600,
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
  "duration": 2394138957,
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
  "duration": 110102,
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
  "duration": 183347,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 62049,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Clerk deletes existing course after term ends",
  "description": "",
  "id": "clerk-delete-course;clerk-deletes-existing-course-after-term-ends;;3",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2556129,
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
  "duration": 41031036,
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
  "duration": 42921,
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
  "duration": 1268500,
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
  "duration": 2405926824,
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
  "duration": 54118,
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
  "duration": 79311,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 18195,
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
  "name": "Clerk deletes existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends",
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
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 15,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 16,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 17,
      "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Clerk deletes existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;;2",
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
  "duration": 1027770,
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
  "duration": 46900011,
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
  "duration": 115233,
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
  "duration": 97038,
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
  "duration": 89107,
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
  "duration": 3332439,
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
  "duration": 274787,
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
  "duration": 5535404,
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
  "duration": 104970,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk deletes existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-before-term-ends;;3",
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
  "duration": 2553797,
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
  "duration": 45513944,
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
  "duration": 82577,
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
  "duration": 74645,
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
  "duration": 3103372,
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
  "duration": 177749,
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
  "duration": 3902074,
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
  "duration": 92840,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Clerk deletes non-existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends",
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
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 29,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 30,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 31,
      "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 30,
  "name": "Clerk deletes non-existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;;2",
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
  "duration": 1256371,
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
  "duration": 43819033,
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
  "duration": 103570,
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
  "duration": 69047,
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
  "duration": 921401,
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
  "duration": 114301,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Clerk deletes non-existing student before term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-non-existing-student-before-term-ends;;3",
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
  "duration": 2004222,
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
  "duration": 43772846,
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
  "duration": 65781,
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
  "duration": 74645,
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
  "duration": 61582,
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
  "duration": 1723837,
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
  "duration": 82110,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Clerk deletes existing student after term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 45,
  "name": "",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;",
  "rows": [
    {
      "cells": [
        "student number",
        "name",
        "is fulltime(y/n)"
      ],
      "line": 46,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;;1"
    },
    {
      "cells": [
        "101075403",
        "mike",
        "n"
      ],
      "line": 47,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac",
        "y"
      ],
      "line": 48,
      "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 47,
  "name": "Clerk deletes existing student after term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;;2",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1450449,
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
  "duration": 34677801,
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
  "duration": 69979,
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
  "duration": 59717,
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
  "duration": 4773557,
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
  "duration": 2392112341,
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
  "duration": 111968,
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
  "duration": 167485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 37789,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Clerk deletes existing student after term ends",
  "description": "",
  "id": "clerk-delete-student;clerk-deletes-existing-student-after-term-ends;;3",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4565017,
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
  "duration": 40220670,
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
  "duration": 54117,
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
  "duration": 46653,
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
  "duration": 2502478,
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
  "duration": 2394635813,
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
  "duration": 116166,
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
  "duration": 231867,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 45720,
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
  "duration": 2118056,
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
  "duration": 31921996,
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
  "duration": 39188,
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
  "duration": 1495235,
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
  "duration": 806614959,
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
  "duration": 124564,
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
  "duration": 3918403,
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
  "duration": 113367,
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
  "duration": 3361831,
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
  "duration": 37945859,
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
  "duration": 71380,
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
  "duration": 1975297,
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
  "duration": 795359871,
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
  "duration": 117100,
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
  "duration": 3375360,
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
  "duration": 109168,
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
  "duration": 3947796,
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
  "duration": 45276012,
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
  "duration": 49919,
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
  "duration": 798593872,
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
  "duration": 1107547,
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
  "duration": 99838,
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
  "duration": 3308179,
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
  "duration": 45889968,
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
  "duration": 39189,
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
  "duration": 798675515,
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
  "duration": 104037,
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
  "duration": 1074424,
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
  "duration": 99372,
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
  "duration": 2920025,
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
  "duration": 53418398,
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
  "duration": 33590,
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
  "duration": 1178460,
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
  "duration": 43098706,
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
  "duration": 209007,
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
  "duration": 133894,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 34990,
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
  "duration": 1217649,
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
  "duration": 46552444,
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
  "duration": 80710,
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
  "duration": 2229557,
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
  "duration": 41951037,
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
  "duration": 111034,
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
  "duration": 184747,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 42920,
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
  "duration": 3023129,
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
  "duration": 33980335,
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
  "duration": 1336614,
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
  "duration": 2396694154,
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
  "duration": 111501,
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
  "duration": 216005,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 47587,
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
  "duration": 6192282,
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
  "duration": 46039725,
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
  "duration": 27526,
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
  "duration": 937729,
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
  "duration": 2398835070,
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
  "duration": 112901,
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
  "duration": 161887,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 60183,
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
  "name": "Student selects existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-term-ends",
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
  "id": "student-select-course;student-selects-existing-course-before-term-ends;",
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
      "id": "student-select-course;student-selects-existing-course-before-term-ends;;1"
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
      "id": "student-select-course;student-selects-existing-course-before-term-ends;;2"
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
      "id": "student-select-course;student-selects-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Student selects existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-term-ends;;2",
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
  "duration": 1495236,
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
  "duration": 36052672,
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
  "duration": 68114,
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
  "duration": 58783,
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
  "duration": 49452,
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
  "duration": 1564749,
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
  "duration": 76045,
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
  "duration": 1663654,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 38255,
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
  "duration": 39671095,
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
  "duration": 91441,
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
  "duration": 1124809,
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
  "duration": 977851,
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
  "duration": 6589300,
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
  "duration": 119899,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Student selects existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-before-term-ends;;3",
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
  "duration": 1225113,
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
  "duration": 45259217,
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
  "duration": 81176,
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
  "duration": 74645,
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
  "duration": 66714,
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
  "duration": 2321464,
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
  "duration": 78844,
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
  "duration": 2765136,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 43387,
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
  "duration": 35678512,
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
  "duration": 82576,
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
  "duration": 559372,
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
  "duration": 356897,
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
  "duration": 3345036,
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
  "duration": 76512,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends",
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
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends;",
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
      "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;1"
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
      "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;2"
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
      "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 42,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;2",
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
  "duration": 616755,
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
  "duration": 50609407,
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
  "duration": 913936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 20527,
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
  "duration": 43687937,
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
  "duration": 582699,
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
  "duration": 347100,
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
  "duration": 396085,
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
  "duration": 46187,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;3",
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
  "duration": 1425256,
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
  "duration": 45222361,
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
  "duration": 39189,
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
  "duration": 1025438,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 26125,
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
  "duration": 43581100,
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
  "duration": 102171,
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
  "duration": 1117344,
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
  "duration": 796371,
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
  "duration": 1151401,
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
  "duration": 146024,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 45,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends;",
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
      "id": "student-select-course;student-selects-existing-course-after-term-ends;;1"
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
      "id": "student-select-course;student-selects-existing-course-after-term-ends;;2"
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
      "id": "student-select-course;student-selects-existing-course-after-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 64,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends;;2",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1336614,
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
  "duration": 45876439,
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
  "duration": 126896,
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
  "duration": 66248,
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
  "duration": 57850,
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
  "duration": 2312133,
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
  "duration": 94706,
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
  "duration": 3925402,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 58783,
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
  "duration": 2388064242,
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
  "duration": 90507,
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
  "duration": 1310489,
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
  "duration": 1279231,
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
  "duration": 201542,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 56450,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends;;3",
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
  "name": "wait for 120 days",
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
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1412193,
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
  "duration": 51117461,
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
  "duration": 117566,
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
  "duration": 1159332,
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
  "duration": 82110,
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
  "duration": 7819546,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 31725,
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
  "duration": 2386086612,
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
  "duration": 113833,
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
  "duration": 1051097,
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
  "duration": 765579,
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
  "duration": 190345,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 40589,
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
  "duration": 1208785,
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
  "duration": 33722810,
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
  "duration": 28459,
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
  "duration": 1089819,
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
  "duration": 1119678,
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
  "duration": 34056,
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
  "duration": 526715,
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
  "duration": 418480,
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
  "duration": 1972031,
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
  "duration": 398863994,
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
  "duration": 690934,
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
  "duration": 5156113,
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
  "duration": 72779,
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
  "duration": 1546087,
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
  "duration": 49974924,
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
  "duration": 40589,
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
      "val": "create student",
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
  "duration": 1159799,
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
  "duration": 1194789,
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
  "duration": 33590,
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
  "duration": 508520,
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
  "duration": 381624,
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
  "duration": 1880591,
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
  "duration": 406048589,
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
  "duration": 870549,
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
  "duration": 6546379,
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
  "duration": 86309,
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
  "duration": 1261503,
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
  "duration": 46541714,
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
  "duration": 68580,
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
  "duration": 52718,
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
  "duration": 109168,
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
  "duration": 1247507,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 46653,
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
  "duration": 737588,
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
  "duration": 391197471,
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
  "duration": 477263,
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
  "duration": 431542,
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
  "duration": 555640,
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
  "duration": 52206814,
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
  "duration": 67181,
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
  "duration": 69513,
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
  "duration": 3265258,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 56917,
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
  "duration": 1210651,
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
  "duration": 412971460,
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
  "duration": 1057162,
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
  "duration": 931664,
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
  "duration": 78377,
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
  "duration": 1374404,
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
  "duration": 45861044,
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
  "duration": 51319,
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
  "duration": 1478907,
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
  "duration": 49453,
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
  "duration": 992780,
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
  "duration": 34990,
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
  "duration": 467465,
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
  "duration": 392935771,
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
  "duration": 962922,
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
  "duration": 3753251,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 63915,
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
  "duration": 1344546,
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
  "duration": 39422900,
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
  "duration": 69980,
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
  "duration": 47586,
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
  "duration": 1955703,
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
  "duration": 67647,
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
  "duration": 1986027,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 36389,
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
  "duration": 69513,
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
  "duration": 988115,
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
  "duration": 403518119,
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
  "duration": 1506432,
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
  "duration": 6430679,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 53185,
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
  "duration": 1321686,
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
  "duration": 48278613,
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
  "duration": 86775,
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
  "duration": 94240,
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
  "duration": 59250,
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
  "duration": 1428055,
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
  "duration": 48519,
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
  "duration": 2472154,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 34056,
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
  "duration": 68581,
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
  "duration": 691867,
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
  "duration": 726390,
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
  "duration": 2441363,
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
  "duration": 34098835,
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
  "duration": 730589,
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
  "duration": 180548,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 42921,
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
  "duration": 858419,
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
  "duration": 45392179,
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
  "duration": 80244,
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
  "duration": 55517,
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
  "duration": 48053,
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
  "duration": 2002823,
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
  "duration": 69514,
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
  "duration": 2474020,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 62049,
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
  "duration": 90507,
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
  "duration": 1366006,
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
  "duration": 1216249,
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
  "duration": 4254306,
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
  "duration": 42148847,
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
  "duration": 565904,
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
  "duration": 93773,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 26126,
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
  "duration": 833693,
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
  "duration": 43658545,
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
  "duration": 43388,
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
  "duration": 865884,
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
  "duration": 38722,
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
  "duration": 872415,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 30792,
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
  "duration": 31258,
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
  "duration": 385356,
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
  "duration": 305579,
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
  "duration": 1328217,
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
  "duration": 708231726,
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
  "duration": 1002111,
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
  "duration": 168418,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 58317,
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
  "duration": 2044344,
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
  "duration": 52386895,
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
  "duration": 23793,
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
  "duration": 720326,
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
  "duration": 887810,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 438073,
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
  "duration": 121298,
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
  "duration": 537912,
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
  "duration": 543044,
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
  "duration": 2693291,
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
  "duration": 686588834,
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
  "duration": 828561,
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
  "duration": 132495,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 37789,
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
  "keyword": "And "
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
  "keyword": "When "
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
  "keyword": "And "
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
  "keyword": "When "
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
  "duration": 1202720,
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
  "duration": 43750452,
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
  "duration": 27059,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1040366,
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
  "duration": 963855,
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
  "duration": 39189,
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
  "duration": 1044099,
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
  "duration": 41988,
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
  "duration": 1011908,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 50852,
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
  "duration": 45720,
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
  "duration": 455335,
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
  "duration": 389555,
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
  "duration": 2284141,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 16795,
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
  "duration": 30325,
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
  "duration": 469797,
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
  "duration": 357830,
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
  "duration": 3227936,
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
  "duration": 34990,
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
  "duration": 506654,
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
  "duration": 343368,
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
  "duration": 1747163,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 42454,
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
  "duration": 409560177,
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
  "duration": 73246,
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
  "duration": 965255,
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
  "duration": 657811,
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
  "duration": 5890901,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 29392,
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
  "duration": 54585,
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
  "duration": 771178,
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
  "duration": 685802,
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
  "duration": 6550112,
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
  "duration": 59716,
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
  "duration": 791705,
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
  "duration": 620021,
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
  "duration": 5851246,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 47120,
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
  "duration": 666674,
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
  "duration": 48007092,
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
  "duration": 57850,
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
  "duration": 39655,
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
  "duration": 62515,
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
  "duration": 1171462,
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
  "duration": 50385,
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
  "duration": 1301158,
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
  "duration": 74179,
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
  "duration": 1309556,
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
  "duration": 45253,
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
  "duration": 1326817,
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
  "duration": 108702,
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
  "duration": 1263836,
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
  "duration": 55984,
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
  "duration": 1542355,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 91440,
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
  "duration": 105903,
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
  "duration": 647547,
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
  "duration": 463733,
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
  "duration": 3759782,
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
  "duration": 473063,
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
  "duration": 2549598,
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
  "duration": 501522,
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
  "duration": 2494547,
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
  "duration": 446937,
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
  "duration": 2436231,
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
  "duration": 507121,
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
  "duration": 2734811,
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
  "duration": 388762640,
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
  "duration": 1595540,
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
  "duration": 44557552,
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
  "duration": 2370450,
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
  "duration": 9666546,
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
  "duration": 1116412,
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
  "duration": 7911452,
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
  "duration": 1514363,
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
  "duration": 12876287,
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
  "duration": 1622132,
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
  "duration": 9096444,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 246796,
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
  "duration": 2266879,
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
  "duration": 38443182,
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
  "duration": 65314,
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
  "duration": 150690,
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
  "duration": 45254,
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
  "duration": 1350144,
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
  "duration": 47120,
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
  "duration": 725458,
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
  "duration": 717526,
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
  "duration": 23327,
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
  "duration": 675538,
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
  "duration": 26592,
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
  "duration": 770245,
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
      "val": "115007",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 1099149,
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
  "duration": 193144,
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
  "duration": 1058562,
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
  "duration": 187546,
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
  "duration": 1051564,
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
  "duration": 400089108,
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
  "duration": 371359,
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
  "duration": 2070470,
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
  "duration": 254260,
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
  "duration": 1924446,
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
  "duration": 257525,
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
  "duration": 1877791,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 57850,
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
  "duration": 771644,
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
  "duration": 44704510,
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
  "duration": 28925,
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
  "duration": 1073957,
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
  "duration": 1679049,
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
  "duration": 44320,
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
  "duration": 647080,
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
  "duration": 498256,
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
  "duration": 2732945,
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
  "duration": 411397847,
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
  "duration": 1038501,
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
  "duration": 3870817,
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
  "duration": 72313,
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
  "duration": 1257304,
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
  "duration": 33335588,
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
  "duration": 27058,
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
  "duration": 1763958,
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
  "duration": 3106638,
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
  "duration": 1311888,
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
  "duration": 972253,
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
  "duration": 5091732,
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
  "duration": 410661193,
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
  "duration": 371359,
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
  "duration": 3145359,
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
  "duration": 514585,
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
  "duration": 521583,
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
  "duration": 43760249,
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
  "duration": 27526,
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
  "duration": 17262,
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
  "duration": 844890,
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
  "duration": 19128,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 411079672,
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
  "duration": 1187791,
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
  "duration": 1113612,
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
  "duration": 99371,
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
  "duration": 1285762,
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
  "duration": 41093085,
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
  "duration": 111035,
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
      "val": "y",
      "offset": 50
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1862863,
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
  "duration": 41521,
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
  "duration": 831827,
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
  "duration": 407775225,
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
  "duration": 718926,
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
  "duration": 661076,
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
  "duration": 58317,
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
  "duration": 1181259,
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
  "duration": 34730053,
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
  "duration": 1091685,
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
  "duration": 1000245,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 8865,
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
  "duration": 469798,
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
  "duration": 395157863,
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
  "duration": 713328,
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
  "duration": 2870572,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 86775,
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
  "duration": 1177060,
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
  "duration": 42201565,
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
  "duration": 78377,
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
  "duration": 64848,
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
  "duration": 2992804,
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
  "duration": 2955015,
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
  "duration": 55051,
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
  "duration": 1094484,
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
  "duration": 414510083,
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
  "duration": 717993,
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
  "duration": 2484284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 33124,
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
  "name": "registration has not started",
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
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 1200854,
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
  "duration": 38198253,
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
  "duration": 36856,
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
  "duration": 48053,
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
  "duration": 1124809,
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
  "duration": 54118,
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
  "duration": 1005377,
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
  "duration": 1663187,
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
  "duration": 37753181,
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
  "duration": 391421,
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
  "duration": 52252,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 14929,
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
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 913470,
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
  "duration": 48038816,
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
  "duration": 72779,
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
  "duration": 67181,
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
  "duration": 2882236,
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
  "duration": 66714,
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
  "duration": 2139983,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 17729,
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
  "duration": 38255,
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
  "duration": 741786,
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
  "duration": 669474,
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
  "duration": 3756050,
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
  "duration": 43236801,
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
  "duration": 535579,
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
  "duration": 57383,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 11197,
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
  "duration": 411481,
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
  "duration": 47536827,
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
  "duration": 27992,
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
  "duration": 1385601,
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
  "duration": 701664,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 13529,
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
  "duration": 118033,
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
  "duration": 353165,
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
  "duration": 276187,
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
  "duration": 1357608,
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
  "duration": 390730006,
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
  "duration": 7093621,
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
  "duration": 1931910,
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
  "duration": 36875167,
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
  "duration": 523915,
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
  "duration": 2404974,
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
  "duration": 67647,
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
  "duration": 2152113,
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
  "duration": 43677207,
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
  "duration": 48519,
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
  "duration": 30325,
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
  "duration": 1370205,
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
  "duration": 2939619,
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
  "duration": 523449,
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
  "duration": 454403,
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
  "duration": 2274344,
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
  "duration": 401867994,
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
  "duration": 849555,
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
  "duration": 5492950,
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
  "duration": 38450181,
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
  "duration": 738054,
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
  "duration": 5680029,
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
  "duration": 69513,
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
  "duration": 1248440,
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
  "duration": 34988045,
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
  "duration": 39655,
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
  "duration": 1736433,
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
  "duration": 736654,
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
  "duration": 959656,
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
  "duration": 1048298,
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
  "duration": 405406641,
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
  "duration": 271988,
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
  "duration": 834159,
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
  "duration": 50359813,
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
  "duration": 197810,
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
  "duration": 789839,
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
  "duration": 71846,
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
  "duration": 1793350,
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
  "duration": 42725947,
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
  "duration": 22393,
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
  "duration": 752049,
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
  "duration": 301846,
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
  "duration": 229534,
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
  "duration": 251927,
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
  "duration": 405183639,
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
  "duration": 131096,
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
  "duration": 770245,
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
  "duration": 50144742,
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
  "duration": 80243,
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
  "duration": 780508,
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
  "duration": 1212517,
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
  "duration": 32828001,
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
  "duration": 42921,
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
  "duration": 36857,
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
  "duration": 20528,
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
  "duration": 1643126,
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
  "duration": 1801747,
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
  "duration": 36856,
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
  "duration": 738987,
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
  "duration": 501055,
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
  "duration": 2820654,
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
  "duration": 386781278,
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
  "duration": 337303,
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
  "duration": 1233045,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 21927,
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
  "duration": 522516,
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
  "duration": 47000781,
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
  "duration": 59249,
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
  "duration": 56451,
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
  "duration": 1721970,
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
  "duration": 1770490,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 16795,
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
  "duration": 739454,
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
  "duration": 644281,
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
  "duration": 3234467,
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
  "duration": 412723731,
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
  "duration": 730590,
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
  "duration": 3316577,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 37789,
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
  "duration": 1272700,
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
  "duration": 38807077,
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
  "duration": 26593,
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
  "duration": 957324,
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
  "duration": 910204,
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
  "duration": 21460,
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
  "duration": 376957,
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
  "duration": 395294090,
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
  "duration": 873814,
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
  "duration": 4766093,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 48053,
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
  "duration": 1809678,
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
  "duration": 44939642,
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
  "duration": 36390,
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
  "duration": 85842,
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
  "duration": 19594,
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
  "duration": 1545154,
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
  "duration": 34990,
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
  "duration": 1902985,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 67181,
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
  "duration": 486593,
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
  "duration": 405519542,
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
  "duration": 841624,
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
  "duration": 3457936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 35923,
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
  "duration": 1141604,
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
  "duration": 37508718,
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
  "duration": 26593,
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
  "duration": 955924,
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
  "duration": 20527,
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
  "duration": 954058,
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
  "duration": 30325,
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
  "duration": 459534,
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
  "duration": 326106,
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
  "duration": 1693978,
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
  "duration": 407282567,
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
  "duration": 831826,
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
  "duration": 5589521,
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
  "duration": 291846185,
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
  "duration": 592962,
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
  "duration": 29392,
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
  "duration": 989048,
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
  "duration": 41533025,
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
  "duration": 813165,
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
  "duration": 724524,
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
  "duration": 386289,
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
  "duration": 421279,
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
  "duration": 1603938,
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
  "duration": 407480377,
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
  "duration": 759514,
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
  "duration": 5402909,
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
  "duration": 292262331,
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
  "duration": 1281564,
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
  "duration": 101237,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 27059,
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
  "duration": 1271300,
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
  "duration": 45587655,
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
  "duration": 34056,
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
  "duration": 981584,
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
  "duration": 975052,
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
  "duration": 31725,
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
  "duration": 465132,
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
  "duration": 396086,
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
  "duration": 1775622,
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
  "duration": 43811101,
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
  "duration": 555173,
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
  "duration": 74645,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 22393,
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
  "duration": 1961768,
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
  "duration": 38684380,
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
  "duration": 35456,
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
  "duration": 37790,
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
  "duration": 1392132,
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
  "duration": 1385134,
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
  "duration": 27525,
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
  "duration": 599960,
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
  "duration": 467931,
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
  "duration": 4568283,
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
  "duration": 39915558,
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
  "duration": 960589,
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
  "duration": 137161,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 45254,
  "status": "passed"
});
});