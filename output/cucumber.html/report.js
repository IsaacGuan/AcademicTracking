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
  "duration": 191163971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 4662525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 212273,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 4404998,
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
  "duration": 1019374,
  "status": "passed"
});
formatter.match({
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
      "val": "123456",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 151623,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 43388,
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
  "duration": 648480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 148357,
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
  "duration": 126430,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 50852,
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
  "duration": 13472522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 172150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 110568,
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
  "duration": 125031,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 50852,
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
  "duration": 824363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 83043,
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
  "duration": 98904,
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
  "duration": 1470977,
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
  "duration": 131096,
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
  "duration": 134361,
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
  "duration": 145092,
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
  "duration": 963390,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 59716,
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
  "duration": 1246108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 106836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 117100,
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
  "duration": 95172,
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
  "duration": 293448,
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
  "duration": 106836,
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
  "duration": 94239,
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
  "duration": 141359,
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
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 48519,
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
  "duration": 630751,
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
  "duration": 836026,
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
  "duration": 224869,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 70446,
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
  "duration": 1437386,
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
  "duration": 132495,
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
  "duration": 229067,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 32658,
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
  "duration": 425944,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 78378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 91907,
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
  "duration": 70913,
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
  "duration": 358297,
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
  "duration": 78378,
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
  "duration": 71380,
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
  "duration": 220203,
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
  "duration": 131095,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 41055,
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
  "duration": 1177061,
  "status": "passed"
});
formatter.match({
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
  "duration": 91907,
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
  "duration": 98905,
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
  "duration": 293916,
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
  "duration": 154888,
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
  "duration": 95172,
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
  "duration": 94706,
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
  "duration": 229068,
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
  "duration": 39655,
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
  "duration": 828095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001845602,
  "status": "passed"
});
formatter.match({
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
  "duration": 223935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 204808,
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
  "duration": 1288096,
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
  "duration": 178215,
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
  "duration": 2019619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000001400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 169818,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 121298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 149291,
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
  "duration": 1095418,
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
  "duration": 172617,
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
  "duration": 3127166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000147890,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 149290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 214138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 604626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 814565,
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
  "duration": 143692,
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
  "duration": 5309138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000362495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 87242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 76512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 582699,
  "status": "passed"
});
formatter.match({
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
  "duration": 673672,
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
  "duration": 82576,
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
  "duration": 2397043,
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
  "duration": 21000061116,
  "status": "passed"
});
formatter.match({
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
  "duration": 31724,
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
  "duration": 167485,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 40122,
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
  "duration": 2364386,
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
  "duration": 21000455802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 237465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 47119,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 171217,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 21461,
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
  "duration": 1629131,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999739675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 66248,
  "status": "passed"
});
formatter.match({
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
  "duration": 73246,
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
  "duration": 200142,
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
  "duration": 66248,
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
  "duration": 2122722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000549109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 840225,
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
  "duration": 95173,
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
  "duration": 456736,
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
  "duration": 133429,
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
  "duration": 2566861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999967342,
  "status": "passed"
});
formatter.match({
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 146958,
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
  "duration": 140893,
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
  "duration": 439007,
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
  "duration": 105436,
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
  "duration": 578967,
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
  "duration": 131562,
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
  "duration": 2301871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000616755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 99371,
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
  "duration": 100771,
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
  "duration": 270122,
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
  "duration": 110568,
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
  "duration": 393287,
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
  "duration": 250062,
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
  "duration": 2314001,
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
  "duration": 20999895030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 90041,
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
  "duration": 93307,
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
  "duration": 277587,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 46653,
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
  "duration": 2986273,
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
  "duration": 20999999067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 97972,
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
  "duration": 76045,
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
  "duration": 263591,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 40588,
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
  "duration": 3005868,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000182414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 174950,
  "status": "passed"
});
formatter.match({
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
  "duration": 892943,
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
  "duration": 957324,
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
  "duration": 355498,
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
  "duration": 120832,
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
  "duration": 4762363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000003733,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 144625,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 100771,
  "status": "passed"
});
formatter.match({
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
  "duration": 895742,
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
  "duration": 137628,
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
  "duration": 260325,
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
  "duration": 135295,
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
  "duration": 3265260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000778643,
  "status": "passed"
});
formatter.match({
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
  "duration": 79311,
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
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 267789,
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
  "duration": 149757,
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
  "duration": 2616314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001388400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 154889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 94707,
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
  "duration": 165619,
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
  "duration": 293449,
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
  "duration": 145092,
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
  "duration": 5011957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2013313434,
  "status": "passed"
});
formatter.match({
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
  "duration": 67180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 86308,
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
  "duration": 3058120,
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
  "duration": 20000456269,
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
  "duration": 113834,
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
  "duration": 181481,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 53652,
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
  "duration": 2733413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000733855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 82576,
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
  "duration": 575234,
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
  "duration": 20000390954,
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
  "duration": 83043,
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
  "duration": 107769,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 37323,
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
  "duration": 3225605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000195943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 77444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 81177,
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
  "duration": 237932,
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
  "duration": 230934,
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
  "duration": 236999,
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
  "duration": 85842,
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
  "duration": 7332023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000127364,
  "status": "passed"
});
formatter.match({
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
  "duration": 30791,
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
  "duration": 116633,
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
  "duration": 86775,
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
  "duration": 473996,
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
  "duration": 80710,
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
  "duration": 1406595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999954280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 119899,
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
  "duration": 161887,
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
  "duration": 404950,
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
  "duration": 145558,
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
  "duration": 5616584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999583853,
  "status": "passed"
});
formatter.match({
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
  "duration": 109635,
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
  "duration": 76045,
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
  "duration": 172150,
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
  "duration": 84443,
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
  "duration": 2612581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000560305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 69513,
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
  "duration": 262191,
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
  "duration": 19999929087,
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
  "duration": 114301,
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
  "duration": 179615,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 39188,
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
  "duration": 2578058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999927221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 104504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 87241,
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
  "duration": 81177,
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
  "duration": 1424789,
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
  "duration": 20000274321,
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
  "duration": 132495,
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
  "duration": 222536,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 40121,
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
  "duration": 2886902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000035923,
  "status": "passed"
});
formatter.match({
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
  "duration": 40122,
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
  "duration": 240731,
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
  "duration": 39999370647,
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
  "duration": 61115,
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
  "duration": 133895,
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
  "duration": 65781,
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
  "duration": 853754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000381623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 159554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 133428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 118499,
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
  "duration": 965722,
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
  "duration": 40000750651,
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
  "duration": 131562,
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
  "duration": 283651,
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
  "duration": 112901,
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
  "duration": 4294431,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999748539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 97506,
  "status": "passed"
});
formatter.match({
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
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39999892698,
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
  "duration": 188946,
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
  "duration": 250061,
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
  "duration": 105903,
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
  "duration": 2376515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000027059,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 83043,
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
  "duration": 39999588052,
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
  "duration": 134361,
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
  "duration": 218337,
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
  "duration": 90508,
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
  "duration": 2544934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000348033,
  "status": "passed"
});
formatter.match({
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
  "duration": 134362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 135761,
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
  "duration": 984850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000443205,
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
  "duration": 207607,
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
  "duration": 122698,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 36856,
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
  "duration": 1470043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000266857,
  "status": "passed"
});
formatter.match({
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
  "duration": 39655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1504567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000264990,
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
  "duration": 56450,
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
  "duration": 160487,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 36856,
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
  "duration": 5309605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000037322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 128296,
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
  "duration": 9354907,
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
  "duration": 120000599494,
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
  "duration": 96105,
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
  "duration": 184281,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 44320,
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
  "duration": 1349678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999943083,
  "status": "passed"
});
formatter.match({
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
  "duration": 73245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 75578,
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
  "duration": 436208,
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
  "duration": 120000631218,
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
  "duration": 116633,
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
  "duration": 190812,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 49452,
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
  "duration": 6006604,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000241197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 100304,
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
  "duration": 87708,
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
  "duration": 313976,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 453936,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 80710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000536046,
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
  "duration": 73245,
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
  "duration": 160954,
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
  "duration": 150690,
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
  "duration": 167952,
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
  "duration": 53184,
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
  "duration": 2720817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000078377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 95173,
  "status": "passed"
});
formatter.match({
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
  "duration": 62516,
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
  "duration": 427344,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 42455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000307912,
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
  "duration": 125031,
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
  "duration": 382090,
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
  "duration": 378357,
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
  "duration": 288317,
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
  "duration": 105903,
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
  "duration": 1828807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000305113,
  "status": "passed"
});
formatter.match({
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
  "duration": 283185,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 41521,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000440406,
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
  "duration": 98439,
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
  "duration": 276654,
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
  "duration": 226269,
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
  "duration": 198277,
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
  "duration": 135761,
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
  "duration": 2843981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999624442,
  "status": "passed"
});
formatter.match({
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
  "duration": 108702,
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
  "duration": 85842,
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
  "duration": 232799,
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
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001036169,
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
  "duration": 114767,
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
  "duration": 254727,
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
  "duration": 87242,
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
  "duration": 411949,
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
  "duration": 4116216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999977607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 72312,
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
  "duration": 64382,
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
  "duration": 487992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 619088,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 57384,
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
  "duration": 40000793572,
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
  "duration": 73245,
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
  "duration": 211806,
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
  "duration": 71846,
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
  "duration": 93773,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 32657,
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
  "duration": 1266169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000144158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 146025,
  "status": "passed"
});
formatter.match({
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
  "duration": 207140,
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
      "val": "40",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 40000006532,
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
  "duration": 118966,
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
  "duration": 264524,
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
  "duration": 102170,
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
  "duration": 169351,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.course_cannot_be_selected_after_registration_ends()"
});
formatter.result({
  "duration": 44787,
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
  "duration": 2132986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000863551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
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
  "duration": 62049,
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
  "duration": 210873,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 357363,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 41988,
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
  "duration": 56450,
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
  "duration": 196876,
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
  "duration": 103104,
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
  "duration": 155355,
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
  "duration": 19999722413,
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
  "duration": 142292,
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
  "duration": 382557,
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
  "duration": 83509,
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
  "duration": 2735279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000125497,
  "status": "passed"
});
formatter.match({
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
  "duration": 56917,
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
  "duration": 57384,
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
  "duration": 138560,
  "status": "passed"
});
formatter.match({
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
  "duration": 227668,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 37789,
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
  "duration": 385823,
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
  "duration": 720326,
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
  "duration": 76044,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 19999563792,
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
  "duration": 109635,
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
  "duration": 254726,
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
  "duration": 79777,
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
  "duration": 3352968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000529047,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 138094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 93773,
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
  "duration": 139493,
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
  "duration": 310244,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 55983,
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
  "duration": 168419,
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
  "duration": 295781,
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
  "duration": 20000145558,
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
  "duration": 81177,
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
  "duration": 139027,
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
  "duration": 55984,
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
  "duration": 3531184,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000204808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 84443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 63448,
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
  "duration": 53652,
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
  "duration": 255660,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 42921,
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
  "duration": 1191524,
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
  "duration": 20000149290,
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
  "duration": 145092,
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
  "duration": 204341,
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
  "duration": 80243,
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
  "duration": 3561042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000683936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 27059,
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
  "duration": 125031,
  "status": "passed"
});
formatter.match({
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
  "duration": 156755,
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
  "duration": 93307,
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
  "duration": 19999951015,
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
  "duration": 57850,
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
  "duration": 83976,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 29392,
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
  "duration": 1038035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999551196,
  "status": "passed"
});
formatter.match({
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
  "duration": 132029,
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
  "duration": 591097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 66715,
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
  "duration": 278986,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 29858,
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
  "duration": 49452,
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
  "duration": 157688,
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
  "duration": 20007265309,
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
  "duration": 288317,
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
  "duration": 245396,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 44787,
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
  "duration": 1520429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001836272,
  "status": "passed"
});
formatter.match({
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
  "duration": 89108,
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
  "duration": 287850,
  "status": "passed"
});
formatter.match({
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
  "duration": 5333864,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 35923,
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
  "duration": 81643,
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
  "duration": 180082,
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
  "duration": 320975,
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
  "duration": 306979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000743653,
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
  "duration": 163287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 58783,
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
  "duration": 2408240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999623975,
  "status": "passed"
});
formatter.match({
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
  "duration": 70446,
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
  "duration": 47119,
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
  "duration": 237931,
  "status": "passed"
});
formatter.match({
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
  "duration": 227668,
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
  "duration": 37789,
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
  "duration": 116633,
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
  "duration": 61583,
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
  "duration": 176349,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999965010,
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
  "duration": 93307,
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
  "duration": 231867,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 69047,
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
  "duration": 1365074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999462088,
  "status": "passed"
});
formatter.match({
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
  "duration": 163287,
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
  "duration": 218337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 271056,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 40589,
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
  "duration": 56917,
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
  "duration": 163286,
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
  "duration": 76512,
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
  "duration": 140426,
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
  "duration": 35000564504,
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
  "duration": 68581,
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
  "duration": 523916,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 74645,
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
  "duration": 1508766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000192678,
  "status": "passed"
});
formatter.match({
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
  "duration": 38722,
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
  "duration": 37323,
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
  "duration": 115700,
  "status": "passed"
});
formatter.match({
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
  "duration": 182880,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 419879,
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
  "duration": 46187,
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
  "duration": 125030,
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
  "duration": 131562,
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
  "duration": 136227,
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
  "duration": 35021413369,
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
  "duration": 527182,
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
  "duration": 138560,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 336836,
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
  "duration": 24624978,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2002167042,
  "status": "passed"
});
formatter.match({
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
  "duration": 34524,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
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
  "duration": 27525,
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
  "duration": 30324,
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
  "duration": 98905,
  "status": "passed"
});
formatter.match({
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
  "duration": 222536,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 175883,
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
  "duration": 66248,
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
  "duration": 139959,
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
  "duration": 87708,
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
  "duration": 219737,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 23327,
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
  "duration": 57383,
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
  "duration": 108702,
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
  "duration": 68113,
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
  "duration": 86775,
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
  "duration": 46653,
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
  "duration": 148357,
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
  "duration": 63915,
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
  "duration": 113834,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 19999764868,
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
  "duration": 112434,
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
  "duration": 449270,
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
  "duration": 117566,
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
  "duration": 200142,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 36856,
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
  "duration": 67647,
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
  "duration": 254260,
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
  "duration": 76511,
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
  "duration": 277120,
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
  "duration": 61116,
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
  "duration": 252860,
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
  "duration": 74179,
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
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 39189,
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
  "duration": 2713819,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000591097,
  "status": "passed"
});
formatter.match({
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
  "duration": 32191,
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
  "duration": 127830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 230001,
  "status": "passed"
});
formatter.match({
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
  "duration": 197809,
  "status": "passed"
});
formatter.match({
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
  "duration": 197343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 237465,
  "status": "passed"
});
formatter.match({
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
  "duration": 206207,
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
  "duration": 104037,
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
  "duration": 61582,
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
  "duration": 706330,
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
  "duration": 230933,
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
  "duration": 134827,
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
  "duration": 62982,
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
  "duration": 123631,
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
  "duration": 51319,
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
  "duration": 114300,
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
  "duration": 20000044320,
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
  "duration": 246795,
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
  "duration": 226735,
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
  "duration": 85842,
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
  "duration": 253793,
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
  "duration": 71846,
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
  "duration": 1229313,
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
  "duration": 235132,
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
  "duration": 248195,
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
      "val": "105102",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 352231,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 57850,
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
  "duration": 2195968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999934219,
  "status": "passed"
});
formatter.match({
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
  "duration": 16329,
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
  "duration": 16329,
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
  "duration": 65315,
  "status": "passed"
});
formatter.match({
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
  "duration": 106836,
  "status": "passed"
});
formatter.match({
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
  "duration": 13063,
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
  "duration": 194077,
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
  "duration": 47586,
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
  "duration": 23794,
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
  "duration": 31258,
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
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 32658,
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
  "duration": 20000200142,
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
  "duration": 91441,
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
  "duration": 176349,
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
  "duration": 81177,
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
  "duration": 215538,
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
  "duration": 73712,
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
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 35923,
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
  "duration": 1728502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000505721,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 160953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 312110,
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
  "duration": 201076,
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
  "duration": 102171,
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
  "duration": 181481,
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
  "duration": 20000707263,
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
  "duration": 407282,
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
  "duration": 337770,
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
  "duration": 60650,
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
  "duration": 2454894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999405171,
  "status": "passed"
});
formatter.match({
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
  "duration": 29391,
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
  "duration": 163753,
  "status": "passed"
});
formatter.match({
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
  "duration": 377425,
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
  "duration": 39189,
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
  "duration": 150224,
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
  "duration": 75112,
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
  "duration": 125963,
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
  "duration": 19999550263,
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
  "duration": 90507,
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
  "duration": 232800,
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
  "duration": 1009576,
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
  "duration": 2118057,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000239331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 77445,
  "status": "passed"
});
formatter.match({
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
      "val": "create student",
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
  "duration": 304180,
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
  "duration": 41054,
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
  "duration": 270589,
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
  "duration": 20000371827,
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
  "duration": 75578,
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
  "duration": 103570,
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
  "duration": 53185,
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
  "duration": 1917448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999726146,
  "status": "passed"
});
formatter.match({
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 45721,
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
  "duration": 138094,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 15395,
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
  "duration": 29859,
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
  "duration": 141359,
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
  "duration": 20000581766,
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
  "duration": 66714,
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
  "duration": 112901,
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
  "duration": 180081,
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
  "duration": 5752344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000123165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 29391,
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
  "duration": 117567,
  "status": "passed"
});
formatter.match({
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
  "duration": 197810,
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
  "duration": 104037,
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
  "duration": 19999914158,
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
  "duration": 39656,
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
  "duration": 90507,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 46654,
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
  "duration": 1039434,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000844423,
  "status": "passed"
});
formatter.match({
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
  "duration": 74179,
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
  "duration": 36390,
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
  "duration": 187079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 306979,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 19595,
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
  "duration": 46187,
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
  "duration": 174950,
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
  "duration": 19999783063,
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
  "duration": 32658,
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
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 27992,
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
  "duration": 843957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001033836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 54584,
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
  "duration": 98439,
  "status": "passed"
});
formatter.match({
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
  "duration": 161420,
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
  "duration": 99371,
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
  "duration": 61115,
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
  "duration": 73246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999506875,
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
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 118499,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 77911,
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
  "duration": 2975544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000054584,
  "status": "passed"
});
formatter.match({
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
  "duration": 23327,
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
  "duration": 125963,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 208074,
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
  "duration": 97038,
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
  "duration": 64848,
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
  "duration": 99371,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000250994,
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
  "duration": 77911,
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
  "duration": 334037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_dropped_before_registration_starts()"
});
formatter.result({
  "duration": 64382,
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
  "duration": 989049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000107303,
  "status": "passed"
});
formatter.match({
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
  "duration": 45720,
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
  "duration": 32191,
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
  "duration": 28925,
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
  "duration": 239797,
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
  "duration": 35457,
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
  "duration": 194078,
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
  "duration": 143692,
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
  "duration": 172617,
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
  "duration": 19999856774,
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
  "duration": 84442,
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
  "duration": 82110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000282252,
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
  "duration": 426410,
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
  "duration": 433409,
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
  "duration": 80243,
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
  "duration": 27035551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999743407,
  "status": "passed"
});
formatter.match({
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
  "duration": 42921,
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
  "duration": 25192,
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
  "duration": 120365,
  "status": "passed"
});
formatter.match({
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
  "duration": 207607,
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
  "duration": 26592,
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
  "duration": 109168,
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
  "duration": 75578,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 20000162354,
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
  "duration": 92374,
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
  "duration": 138094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000005132,
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
  "duration": 102637,
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
  "duration": 157221,
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
  "duration": 43388,
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
  "duration": 2883170,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000090041,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 30324,
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
  "duration": 146958,
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
  "duration": 95640,
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
  "duration": 19999551663,
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
  "duration": 247262,
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
  "duration": 91907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999896897,
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
  "duration": 200142,
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
  "duration": 122231,
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
  "duration": 67181,
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
  "duration": 2914894,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000373226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 98438,
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
  "duration": 15396,
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
  "duration": 23327,
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
  "duration": 36390,
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
  "duration": 20000449737,
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
  "duration": 114300,
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
  "duration": 60182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000142292,
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
  "duration": 253328,
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
  "duration": 167485,
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
  "duration": 92840,
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
  "duration": 2593453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999849310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 30792,
  "status": "passed"
});
formatter.match({
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
  "duration": 73712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 6532,
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
  "duration": 34990,
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
  "duration": 53185,
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
  "duration": 20000348966,
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
  "duration": 50852,
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
  "duration": 111967,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 39656,
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
  "duration": 2279943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000723591,
  "status": "passed"
});
formatter.match({
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
  "duration": 41521,
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
  "duration": 25193,
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
  "duration": 145091,
  "status": "passed"
});
formatter.match({
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
  "duration": 288784,
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
  "duration": 36856,
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
  "duration": 117100,
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
  "duration": 112434,
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
  "duration": 147890,
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
  "duration": 20000069047,
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
  "duration": 83509,
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
  "duration": 122231,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 34990,
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
  "duration": 2650370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2001771890,
  "status": "passed"
});
formatter.match({
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
  "duration": 60649,
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
  "duration": 128297,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 209940,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 19595,
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
  "duration": 36857,
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
  "duration": 118032,
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
  "duration": 20000094706,
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
  "duration": 33591,
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
  "duration": 97039,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 12130,
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
  "duration": 1131341,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999847444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 84443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 69047,
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
  "duration": 29391,
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
  "duration": 145091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 271056,
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
  "duration": 36390,
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
  "duration": 164219,
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
  "duration": 20000993714,
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
  "duration": 85842,
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
  "duration": 136228,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 36389,
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
  "duration": 7327358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000271988,
  "status": "passed"
});
formatter.match({
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
  "duration": 129696,
  "status": "passed"
});
formatter.match({
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
  "duration": 243530,
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
  "duration": 33590,
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
  "duration": 128763,
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
  "duration": 168418,
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
  "duration": 19999526936,
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
  "duration": 118965,
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
  "duration": 210873,
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
  "duration": 15000505721,
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
  "duration": 94239,
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
  "duration": 110101,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 32657,
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
  "duration": 2858444,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000708197,
  "status": "passed"
});
formatter.match({
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
  "duration": 138560,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 29859,
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
  "duration": 315843,
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
  "duration": 36856,
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
  "duration": 117566,
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
  "duration": 48520,
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
  "duration": 99838,
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
  "duration": 20000574301,
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
  "duration": 37789,
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
  "duration": 76511,
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
  "duration": 15000561705,
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
  "duration": 69046,
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
  "duration": 91907,
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
  "duration": 2006089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000443206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 172151,
  "status": "passed"
});
formatter.match({
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
  "duration": 211339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 17262,
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
  "duration": 53184,
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
  "duration": 188013,
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
  "duration": 77444,
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
  "duration": 107302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999950081,
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
  "duration": 58783,
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
  "duration": 89107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 29858,
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
  "duration": 4502037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000292983,
  "status": "passed"
});
formatter.match({
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
  "duration": 27525,
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
  "duration": 118966,
  "status": "passed"
});
formatter.match({
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
  "duration": 226735,
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
  "duration": 25193,
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
  "duration": 94240,
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
      "val": "115205",
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
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999447626,
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
  "duration": 53184,
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
  "duration": 80243,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 25192,
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
  "duration": 2044811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000229068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 81177,
  "status": "passed"
});
formatter.match({
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
  "duration": 44787,
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
  "duration": 155355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 232334,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 36856,
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
  "duration": 39189,
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
  "duration": 118032,
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
  "duration": 47120,
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
  "duration": 87708,
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
  "duration": 19999413102,
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
  "duration": 29858,
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
  "duration": 58783,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 38722,
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
  "duration": 95173,
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
  "duration": 36856,
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
  "duration": 2522540,
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
  "duration": 3066050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000417547,
  "status": "passed"
});
formatter.match({
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
  "duration": 110568,
  "status": "passed"
});
formatter.match({
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
  "duration": 144159,
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
  "duration": 68581,
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
  "duration": 26592,
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
  "duration": 83509,
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
  "duration": 19999924888,
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
  "duration": 95172,
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
  "duration": 253327,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 64382,
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
  "duration": 185680,
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
  "duration": 175416,
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
  "duration": 132495,
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
  "duration": 128296,
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
  "duration": 3512056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999962677,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 43388,
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
  "duration": 134828,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 401684,
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
  "duration": 165152,
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
  "duration": 75112,
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
  "duration": 139493,
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
  "duration": 20000324240,
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
  "duration": 524382,
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
  "duration": 160021,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 33124,
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
  "duration": 125031,
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
  "duration": 108235,
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
  "duration": 382556,
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
  "duration": 156288,
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
  "duration": 126897,
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
  "duration": 2046211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000420812,
  "status": "passed"
});
formatter.match({
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
  "duration": 11664,
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
  "duration": 57384,
  "status": "passed"
});
formatter.match({
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
  "duration": 108236,
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
  "duration": 58783,
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
  "duration": 34523,
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
  "duration": 20000195944,
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
  "duration": 57850,
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
  "duration": 149290,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 27526,
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
  "duration": 106836,
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
  "duration": 76512,
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
  "duration": 73245,
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
  "duration": 69513,
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
  "duration": 77445,
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
  "duration": 2997937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000432942,
  "status": "passed"
});
formatter.match({
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
  "duration": 42921,
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
  "duration": 116167,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 204807,
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
  "duration": 22393,
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
  "duration": 96105,
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
  "duration": 44787,
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
  "duration": 82576,
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
  "duration": 19999187301,
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
  "duration": 59716,
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
  "duration": 613956,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 57384,
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
  "duration": 164219,
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
  "duration": 94240,
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
  "duration": 83509,
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
  "duration": 70913,
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
  "duration": 5804595,
  "error_message": "java.lang.AssertionError: \nExpected: not \u003c0\u003e\n     but: was \u003c0\u003e\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:20)\r\n\tat org.hamcrest.MatcherAssert.assertThat(MatcherAssert.java:8)\r\n\tat test.cucumber.StepDefinitions.student_obtains_mark_for_course(StepDefinitions.java:335)\r\n\tat ✽.Then student 101075433 obtains mark for course 115205(test/cucumber/hierachicalusecaces-studenttakecourse.feature:135)\r\n",
  "status": "failed"
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
  "duration": 824362,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000311177,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 122231,
  "status": "passed"
});
formatter.match({
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
  "duration": 231400,
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
  "duration": 37789,
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
  "duration": 103104,
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
  "duration": 86309,
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
  "duration": 20000338236,
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
  "duration": 77911,
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
  "duration": 145559,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 26126,
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
  "duration": 107769,
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
  "duration": 86775,
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
  "duration": 76045,
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
  "duration": 83043,
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
  "duration": 3285321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000142292,
  "status": "passed"
});
formatter.match({
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
  "duration": 30324,
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
  "duration": 118033,
  "status": "passed"
});
formatter.match({
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
  "duration": 244463,
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
  "duration": 37790,
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
  "duration": 111501,
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
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 92840,
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
  "duration": 19999596916,
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
  "duration": 38723,
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
  "duration": 149290,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 15395,
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
  "duration": 70447,
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
  "duration": 49452,
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
  "duration": 40588,
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
  "duration": 35457,
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
  "duration": 33124,
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
  "duration": 1529760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000501055,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 172151,
  "status": "passed"
});
formatter.match({
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
  "duration": 394220,
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
  "duration": 165619,
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
  "duration": 70913,
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
  "duration": 148824,
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
  "duration": 20000161887,
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
  "duration": 61115,
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
  "duration": 160954,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
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
      "offset": 42
    }
  ],
  "location": "StepDefinitions.student_does_project_for_course(int,int)"
});
formatter.result({
  "duration": 120832,
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
  "duration": 83975,
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
  "duration": 81177,
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
  "duration": 73246,
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
  "duration": 74179,
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
  "duration": 2508544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000763247,
  "status": "passed"
});
formatter.match({
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
  "duration": 10730,
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
  "duration": 224868,
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
  "duration": 90507,
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
  "duration": 20000632151,
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
  "duration": 41522,
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
  "duration": 111968,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 17261,
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
  "duration": 68114,
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
  "duration": 46653,
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
  "duration": 40589,
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
  "duration": 78377,
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
  "duration": 2197834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999424299,
  "status": "passed"
});
formatter.match({
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
  "duration": 23327,
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
  "duration": 110101,
  "status": "passed"
});
formatter.match({
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
  "duration": 203874,
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
  "duration": 24727,
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
  "duration": 91907,
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
  "duration": 39188,
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
  "duration": 20000694200,
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
  "duration": 66247,
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
  "duration": 195477,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.student_starts_to_take_course()"
});
formatter.result({
  "duration": 38256,
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
  "duration": 121765,
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
  "duration": 99371,
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
  "duration": 87241,
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
  "duration": 60649,
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
  "duration": 73245,
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
  "duration": 4865466,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999902029,
  "status": "passed"
});
formatter.match({
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
  "duration": 36389,
  "status": "passed"
});
formatter.match({
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
  "duration": 21460,
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
  "duration": 207607,
  "status": "passed"
});
formatter.match({
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
  "duration": 20061,
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
  "duration": 176349,
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
  "duration": 305579,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 131096,
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
  "duration": 2002824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999618376,
  "status": "passed"
});
formatter.match({
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
  "duration": 16329,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 326573,
  "status": "passed"
});
formatter.match({
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
  "duration": 157221,
  "status": "passed"
});
formatter.match({
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
  "duration": 150690,
  "status": "passed"
});
formatter.match({
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
  "duration": 231867,
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
  "duration": 36856,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_courses_in_the_system_is_shown()"
});
formatter.result({
  "duration": 41988,
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
  "duration": 2124122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000548176,
  "status": "passed"
});
formatter.match({
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
  "duration": 15862,
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
  "duration": 81176,
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
  "duration": 14463,
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
  "duration": 72312,
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
  "duration": 160020,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 73245,
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
  "duration": 1999636104,
  "status": "passed"
});
formatter.match({
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
  "duration": 89107,
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
  "duration": 44787,
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
  "duration": 164219,
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
  "duration": 33124,
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
  "duration": 112434,
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
  "duration": 117566,
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
  "duration": 55984,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_current_students_in_the_system_is_shown()"
});
formatter.result({
  "duration": 76978,
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
  "duration": 1934710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999756003,
  "status": "passed"
});
formatter.match({
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
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 209939,
  "status": "passed"
});
formatter.match({
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
  "duration": 194544,
  "status": "passed"
});
formatter.match({
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
  "duration": 161420,
  "status": "passed"
});
formatter.match({
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
  "duration": 348966,
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
  "duration": 32191,
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
  "duration": 117567,
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
  "duration": 77911,
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
  "duration": 137161,
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
  "duration": 127830,
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
  "duration": 84909,
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
  "duration": 140426,
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
  "duration": 75112,
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
  "duration": 130629,
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
  "duration": 63915,
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
  "duration": 172151,
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
  "duration": 61115,
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
  "duration": 245863,
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
  "duration": 3289053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999943083,
  "status": "passed"
});
formatter.match({
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
  "duration": 36390,
  "status": "passed"
});
formatter.match({
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
  "duration": 198277,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 18662,
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
  "duration": 161887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 188946,
  "status": "passed"
});
formatter.match({
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
  "duration": 28459,
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
  "duration": 108702,
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
  "duration": 25193,
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
  "duration": 55983,
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
  "duration": 121298,
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
  "duration": 50385,
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
  "duration": 119899,
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
  "duration": 107769,
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
  "duration": 49453,
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
  "duration": 43388,
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
  "duration": 118033,
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
  "duration": 2953616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000235599,
  "status": "passed"
});
formatter.match({
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
  "duration": 57384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 212739,
  "status": "passed"
});
formatter.match({
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
  "duration": 190811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 179149,
  "status": "passed"
});
formatter.match({
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
  "duration": 283652,
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
  "duration": 141359,
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
  "duration": 34523,
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
  "duration": 194544,
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
  "duration": 118033,
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
  "duration": 162820,
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
  "duration": 107303,
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
  "duration": 123631,
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
  "duration": 83509,
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
  "duration": 109635,
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
  "duration": 53185,
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
  "duration": 104037,
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
  "duration": 20000591096,
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
  "duration": 75578,
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
  "duration": 157222,
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
  "duration": 49452,
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
  "duration": 102638,
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
  "duration": 34523,
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
  "duration": 119433,
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
  "duration": 46654,
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
  "duration": 135761,
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
  "duration": 69047,
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
  "duration": 109636,
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
  "duration": 1358543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999858641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 196410,
  "status": "passed"
});
formatter.match({
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
  "duration": 235599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 169352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 171684,
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
  "duration": 18662,
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
  "duration": 121765,
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
  "duration": 56917,
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
  "duration": 85842,
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
  "duration": 40589,
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
  "duration": 69980,
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
  "duration": 36857,
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
  "duration": 66248,
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
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 76978,
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
  "duration": 20000424545,
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
  "duration": 128297,
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
  "duration": 225801,
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
  "duration": 47120,
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
  "duration": 155355,
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
  "duration": 57850,
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
  "duration": 139026,
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
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 229533,
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
  "duration": 56917,
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
  "duration": 106836,
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
  "duration": 2929357,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 1999176570,
  "status": "passed"
});
formatter.match({
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
  "duration": 46653,
  "status": "passed"
});
formatter.match({
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
      "val": "n",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 248662,
  "status": "passed"
});
formatter.match({
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
  "duration": 339169,
  "status": "passed"
});
formatter.match({
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
  "duration": 296248,
  "status": "passed"
});
formatter.match({
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
  "duration": 318642,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 134828,
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
  "duration": 115700,
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
      "val": "y",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 112901,
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
  "duration": 30791,
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
  "duration": 70446,
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
  "duration": 113834,
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
  "duration": 52718,
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
  "duration": 34523,
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
  "duration": 102637,
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
  "duration": 48053,
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
  "duration": 139493,
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
  "duration": 69513,
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
  "duration": 94239,
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
  "duration": 27059,
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
  "duration": 101238,
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
  "duration": 45254,
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
  "duration": 41521,
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
  "duration": 81643,
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
      "val": "20",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 20000333105,
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
  "duration": 58317,
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
  "duration": 173084,
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
  "duration": 45720,
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
  "duration": 231866,
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
  "duration": 56917,
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
  "duration": 138560,
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
  "duration": 29391,
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
      "val": "register for course",
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
      "val": "115004",
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
      "val": "115201",
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
  "duration": 36390,
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
  "duration": 162820,
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
  "duration": 53651,
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
  "duration": 153489,
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
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 119898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 12129,
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
  "duration": 100000046187,
  "status": "passed"
});
formatter.match({
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
  "duration": 446938,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 110102,
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
  "duration": 2737145,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000578034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 57384,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 62981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 348500,
  "status": "passed"
});
formatter.match({
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
  "duration": 331238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 342901,
  "status": "passed"
});
formatter.match({
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
  "duration": 352232,
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
  "duration": 176816,
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
  "duration": 155822,
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
  "duration": 171217,
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
      "val": "student",
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
  "duration": 172151,
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
  "duration": 78844,
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
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 78378,
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
  "duration": 162820,
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
  "duration": 37323,
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
  "duration": 116633,
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
  "duration": 39655,
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
  "duration": 64848,
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
      "val": "115201",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 63915,
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
  "duration": 20061,
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
  "duration": 159554,
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
  "duration": 83510,
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
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 98904,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 10731,
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
  "duration": 19999844178,
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
  "duration": 102638,
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
  "duration": 31258,
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
  "duration": 106836,
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
  "duration": 24726,
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
  "duration": 97971,
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
  "duration": 20060,
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
  "duration": 91440,
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
  "duration": 27525,
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
  "duration": 90974,
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
  "duration": 23326,
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
  "duration": 112434,
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
  "duration": 22860,
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
  "duration": 93773,
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
  "duration": 35457,
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
  "duration": 99371,
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
  "duration": 24727,
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
  "duration": 144625,
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
      "val": "100",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 100000251461,
  "status": "passed"
});
formatter.match({
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
  "duration": 39655,
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
  "duration": 114767,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 93773,
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
  "duration": 2336394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000252860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 38722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 203875,
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
  "duration": 34524,
  "status": "passed"
});
formatter.match({
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
  "duration": 162820,
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
  "duration": 19128,
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
  "duration": 160954,
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
  "duration": 29858,
  "status": "passed"
});
formatter.match({
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
      "val": "n",
      "offset": 75
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 191279,
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
  "duration": 62982,
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
  "duration": 37789,
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
  "duration": 135295,
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
  "duration": 26593,
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
  "duration": 109168,
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
  "duration": 23327,
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
  "duration": 190812,
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
  "duration": 43388,
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
  "duration": 44320,
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
  "duration": 312110,
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
  "duration": 43387,
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
  "duration": 38256,
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
  "duration": 289250,
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
  "duration": 41521,
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
  "duration": 56917,
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
  "duration": 133428,
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
  "duration": 79310,
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
  "duration": 144625,
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
  "duration": 73712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 26126,
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
  "duration": 170751,
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
  "duration": 78844,
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
  "duration": 145092,
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
  "duration": 67181,
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
  "duration": 20000067647,
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
  "duration": 44787,
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
  "duration": 127830,
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
  "duration": 46653,
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
  "duration": 80710,
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
  "duration": 37323,
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
      "val": "115004",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 183814,
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
  "duration": 43854,
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
  "duration": 42454,
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
  "duration": 113834,
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
  "duration": 34990,
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
  "duration": 32657,
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
  "duration": 110568,
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
  "duration": 33591,
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
  "duration": 91907,
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
  "duration": 42455,
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
  "duration": 88175,
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
      "val": "115004",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 94239,
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
  "duration": 59250,
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
  "duration": 31724,
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
  "duration": 110568,
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
  "duration": 28925,
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
  "duration": 27058,
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
  "duration": 100305,
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
  "duration": 29392,
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
  "duration": 29391,
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
  "arguments": [
    {
      "val": "deregister course",
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
      "val": "drop course",
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
      "val": "115201",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 96572,
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
  "duration": 11196,
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
  "duration": 14999902962,
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
  "duration": 114301,
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
  "duration": 30791,
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
  "duration": 111968,
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
  "duration": 34990,
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
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 26593,
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
  "duration": 310711,
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
  "duration": 468398,
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
  "duration": 66714,
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
  "duration": 100000186147,
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
  "duration": 210873,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 70913,
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
  "duration": 3328242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 2000551908,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "y",
      "offset": 73
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_course_by(String,int,int,String,int,int,String,String)"
});
formatter.result({
  "duration": 113834,
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
  "duration": 14463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8398,
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
  "duration": 71846,
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
  "duration": 12597,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 8398,
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
  "duration": 70446,
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
  "duration": 11663,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 6531,
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
  "duration": 76511,
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
  "duration": 11663,
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
  "duration": 7465,
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
  "duration": 35923,
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
  "duration": 11197,
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
  "duration": 6531,
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
  "duration": 38255,
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
  "duration": 12129,
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
  "duration": 6998,
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
  "duration": 34523,
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
  "duration": 10730,
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
  "duration": 13063,
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
  "duration": 49919,
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
  "duration": 12130,
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
  "duration": 10731,
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
  "duration": 43387,
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
  "duration": 13062,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 5599,
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
  "duration": 8864,
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
  "duration": 39655,
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
  "duration": 18195,
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
  "duration": 30325,
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
  "duration": 11196,
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
      "val": "115201",
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
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11664,
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
  "duration": 29391,
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
  "duration": 90041,
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
  "duration": 40589,
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
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 33124,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.log_out()"
});
formatter.result({
  "duration": 11664,
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
  "duration": 19999650568,
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
  "duration": 37789,
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
  "duration": 103104,
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
      "val": "115205",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.the_student_selects_course_by(int)"
});
formatter.result({
  "duration": 73712,
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
  "arguments": [
    {
      "val": "register for course",
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
      "val": "115004",
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
  "arguments": [
    {
      "val": "register for course",
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
      "val": "115201",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.the_student_registers_for_course_by(int)"
});
formatter.result({
  "duration": 90507,
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
      "val": "deregister course",
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
      "offset": 34
    }
  ],
  "location": "StepDefinitions.the_student_deregisters_course_by(int)"
});
formatter.result({
  "duration": 94240,
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
  "duration": 26126,
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
  "duration": 105903,
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
  "duration": 68114,
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
      "val": "select course",
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
      "val": "115004",
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
      "val": "select course",
      "offset": 0
    }
  ],
  "location": "StepDefinitions.success(String)"
});
formatter.result({
  "duration": 36856,
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
  "duration": 27992,
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
  "duration": 110101,
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
  "duration": 23793,
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
  "duration": 22394,
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
  "duration": 84443,
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
  "duration": 24726,
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
  "duration": 23327,
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
  "duration": 89574,
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
  "duration": 23793,
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
  "duration": 21927,
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
  "duration": 98438,
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
  "duration": 34990,
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
      "val": "15",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 14999808721,
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
  "duration": 46653,
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
  "duration": 118965,
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
  "duration": 48519,
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
  "duration": 189879,
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
  "duration": 76977,
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
  "duration": 57384,
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
  "duration": 59716,
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
  "duration": 162819,
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
  "duration": 79777,
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
  "duration": 100000766046,
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
  "duration": 202009,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_dean_s_list_is_generated()"
});
formatter.result({
  "duration": 62049,
  "status": "passed"
});
});