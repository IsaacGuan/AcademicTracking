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
  "duration": 295380547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 2368579,
  "status": "passed"
});
formatter.match({
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
  "duration": 2517869,
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
  "duration": 6126956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 97971,
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
  "duration": 86775,
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
  "duration": 7529348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "abcdefgg",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 568702,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 29392,
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
  "duration": 5386104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 82576,
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
  "duration": 97039,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 60649,
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-valid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name"
      ],
      "line": 34,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;1"
    },
    {
      "cells": [
        "101075401",
        "tom"
      ],
      "line": 35,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;2"
    },
    {
      "cells": [
        "101075402",
        "jack"
      ],
      "line": 36,
      "id": "login-and-logout;student-logs-in-with-valid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the student logs in with 101075401 and tom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 7539612,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
      "val": "101075401",
      "offset": 25
    },
    {
      "val": "tom",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 1796146,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 37789,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "the student logs in with 101075402 and jack",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11058191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
      "val": "101075402",
      "offset": 25
    },
    {
      "val": "jack",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 861217,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 33590,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 38,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name"
      ],
      "line": 45,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;1"
    },
    {
      "cells": [
        "101075403",
        "mike"
      ],
      "line": 46,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac"
      ],
      "line": 47,
      "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5696813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 99371,
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
  "duration": 2613042,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 44787,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login-and-logout;student-logs-in-with-invalid-number-and-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "the university is initialized",
  "keyword": "Given "
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
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 7344602,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 794970,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 29858,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "login-and-logout;student-logs-out;",
  "rows": [
    {
      "cells": [
        "student number",
        "name"
      ],
      "line": 57,
      "id": "login-and-logout;student-logs-out;;1"
    },
    {
      "cells": [
        "101075401",
        "tom"
      ],
      "line": 58,
      "id": "login-and-logout;student-logs-out;;2"
    },
    {
      "cells": [
        "101075402",
        "jack"
      ],
      "line": 59,
      "id": "login-and-logout;student-logs-out;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 58,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the student logs in with 101075401 and tom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10995209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
      "val": "101075401",
      "offset": 25
    },
    {
      "val": "tom",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 2365780,
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
  "duration": 931196,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 41521,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Student logs out",
  "description": "",
  "id": "login-and-logout;student-logs-out;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the student logs in with 101075402 and jack",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the user inputs log out",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "the user is logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10378455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
      "val": "101075402",
      "offset": 25
    },
    {
      "val": "jack",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.the_student_logs_in_with(int,String)"
});
formatter.result({
  "duration": 1018437,
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
  "duration": 2931682,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_out()"
});
formatter.result({
  "duration": 46187,
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
  "duration": 8648090,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44102135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 90041,
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
  "duration": 2607444,
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
  "duration": 195010,
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
  "duration": 9097360,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47641241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 485659,
  "status": "passed"
});
formatter.match({
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
  "duration": 118032,
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
  "duration": 1298356,
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
  "duration": 69980,
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
  "duration": 7467766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49996757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 83042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 85841,
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
  "duration": 10913100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 9158942,
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
  "duration": 153489,
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
  "duration": 5673954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51566636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 84443,
  "status": "passed"
});
formatter.match({
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
  "duration": 4593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1585740,
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
  "duration": 95639,
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
  "duration": 6771701,
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
  "duration": 423145270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 107303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 319574,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 51785,
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
  "duration": 9925920,
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
  "duration": 430527661,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 233265,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 164219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 146958,
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
  "duration": 752048,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 68114,
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
  "duration": 13946952,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47100531,
  "status": "passed"
});
formatter.match({
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
  "duration": 43388,
  "status": "passed"
});
formatter.match({
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
  "duration": 1520892,
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
  "duration": 53184,
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
  "duration": 5931012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47757407,
  "status": "passed"
});
formatter.match({
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
  "duration": 57384,
  "status": "passed"
});
formatter.match({
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
  "duration": 989512,
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
  "duration": 48519,
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
  "duration": 5798517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45081850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
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
  "duration": 2102190,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 834624,
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
  "duration": 54584,
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
  "duration": 6443730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 56648561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 104037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 3127626,
  "status": "passed"
});
formatter.match({
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
  "duration": 1269432,
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
  "duration": 60649,
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
  "duration": 6934521,
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
  "duration": 422308312,
  "status": "passed"
});
formatter.match({
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
  "duration": 41988,
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
  "duration": 110102,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 56917,
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
  "duration": 5409430,
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
  "duration": 431569425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 891542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 160487,
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
  "duration": 355497,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 50385,
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
  "duration": 7270423,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48928867,
  "status": "passed"
});
formatter.match({
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
  "duration": 67647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 137160,
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
  "duration": 2577586,
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
  "location": "StepDefinitions.the_clerk_deletes_course_by(int)"
});
formatter.result({
  "duration": 19761332,
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
  "duration": 391420,
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
  "duration": 5562919,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 54239393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 65780,
  "status": "passed"
});
formatter.match({
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
  "duration": 2269208,
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
  "duration": 129229,
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
  "duration": 10123729,
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
  "duration": 58316,
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
  "duration": 18788614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43861404,
  "status": "passed"
});
formatter.match({
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
  "duration": 58783,
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
  "duration": 67647,
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
  "duration": 695598,
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
  "duration": 100771,
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
  "duration": 10701294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47324933,
  "status": "passed"
});
formatter.match({
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
  "duration": 30791,
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
  "duration": 45720,
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
  "duration": 500588,
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
  "duration": 4091946,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48504790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 142293,
  "status": "passed"
});
formatter.match({
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
  "duration": 1805476,
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
  "duration": 2404993937,
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
  "duration": 278985,
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
  "duration": 215071,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 69513,
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
  "duration": 13238758,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44336334,
  "status": "passed"
});
formatter.match({
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
  "duration": 51785,
  "status": "passed"
});
formatter.match({
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
  "duration": 1669249,
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
  "duration": 2403089090,
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
  "duration": 139493,
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
  "duration": 249595,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 75111,
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
  "duration": 6477321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44451100,
  "status": "passed"
});
formatter.match({
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
  "duration": 66714,
  "status": "passed"
});
formatter.match({
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
  "duration": 8728334,
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
  "duration": 221602,
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
  "duration": 10967217,
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
  "duration": 82109,
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
  "duration": 5304461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51273187,
  "status": "passed"
});
formatter.match({
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
  "duration": 69979,
  "status": "passed"
});
formatter.match({
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
  "duration": 1259634,
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
  "duration": 71379,
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
  "duration": 28986521,
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
  "duration": 68114,
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
  "duration": 5701479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47334264,
  "status": "passed"
});
formatter.match({
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
  "duration": 74178,
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
  "duration": 82576,
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
  "duration": 1350141,
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
  "duration": 75112,
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
  "duration": 33190435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51006798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "delete student",
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
      "val": "101075433",
      "offset": 29
    }
  ],
  "location": "StepDefinitions.the_clerk_deletes_student_by(int)"
});
formatter.result({
  "duration": 2763265,
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
  "duration": 90973,
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
  "duration": 5431824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 55142597,
  "status": "passed"
});
formatter.match({
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
  "duration": 72313,
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
  "duration": 2267809,
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
  "duration": 2401189841,
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
  "duration": 115699,
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
  "duration": 213205,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 40122,
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
  "duration": 11583506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47076272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 62981,
  "status": "passed"
});
formatter.match({
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
  "duration": 1035233,
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
  "duration": 2401500085,
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
  "duration": 641014,
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
  "duration": 189878,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 50385,
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
  "duration": 11990320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 54769839,
  "status": "passed"
});
formatter.match({
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
  "duration": 31257,
  "status": "passed"
});
formatter.match({
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
  "duration": 1359006,
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
  "duration": 803428445,
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
  "duration": 84908,
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
  "duration": 4437179,
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
  "duration": 60649,
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
  "duration": 5249410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43444793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 56450,
  "status": "passed"
});
formatter.match({
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
  "duration": 875679,
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
  "duration": 806367125,
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
  "duration": 238397,
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
  "duration": 13905431,
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
  "duration": 297647,
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
  "duration": 12782491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47915562,
  "status": "passed"
});
formatter.match({
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
  "duration": 57850,
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
  "duration": 808654528,
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
  "duration": 146024,
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
  "duration": 1297424,
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
  "duration": 113368,
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
  "duration": 10338333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43841810,
  "status": "passed"
});
formatter.match({
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
  "duration": 71846,
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
  "duration": 807669681,
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
  "duration": 152089,
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
  "duration": 1324016,
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
  "duration": 136694,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Clerk cancels existing course before registrarion ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends",
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
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;",
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
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;;1"
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
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;;2"
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
      "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Clerk cancels existing course before registrarion ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;;2",
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
  "duration": 13532673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 55383794,
  "status": "passed"
});
formatter.match({
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
  "duration": 905538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45128504,
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
  "duration": 201075,
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
  "duration": 211339,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 61582,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Clerk cancels existing course before registrarion ends",
  "description": "",
  "id": "clerk-cancel-course;clerk-cancels-existing-course-before-registrarion-ends;;3",
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
  "duration": 6443730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52635458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 144158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 136227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 3094968,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42127308,
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
  "duration": 80244,
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
  "duration": 119898,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 28925,
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
  "duration": 5188761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 39959804,
  "status": "passed"
});
formatter.match({
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
  "duration": 50385,
  "status": "passed"
});
formatter.match({
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
  "duration": 1791014,
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
  "duration": 2413339715,
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
  "duration": 198276,
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
  "duration": 224402,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 24259,
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
  "duration": 5797584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 42510330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 1386531,
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
  "duration": 2405553775,
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
  "duration": 138093,
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
  "duration": 205273,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 49919,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
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
      "line": 22,
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
      "line": 23,
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
      "line": 24,
      "id": "student-select-course;student-selects-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8810910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45190086,
  "status": "passed"
});
formatter.match({
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
  "duration": 69046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 466998,
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
  "duration": 5591377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 194543,
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
  "duration": 4416652,
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
  "duration": 198742,
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
  "duration": 105436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 45140633,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 393753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 390020,
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
  "duration": 2622839,
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
  "duration": 45720,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3694928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53707081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 1670649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1154664,
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
  "duration": 54584,
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
  "duration": 39189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52471239,
  "status": "passed"
});
formatter.match({
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
  "duration": 586430,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 464199,
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
  "duration": 2242149,
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
  "duration": 52252,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 26,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "wait for 2 days",
  "keyword": "And "
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
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the student selects course by \u003ccourse code\u003e",
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
      "line": 43,
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
      "line": 44,
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
      "line": 45,
      "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 44,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "wait for 2 days",
  "keyword": "And "
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
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
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
  "name": "the student selects course by 115007",
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
  "duration": 4464238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49210186,
  "status": "passed"
});
formatter.match({
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
  "duration": 73711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 1002109,
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
  "duration": 90041,
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
  "duration": 42396497,
  "status": "passed"
});
formatter.match({
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
  "duration": 878012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 968985,
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
  "duration": 777241,
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
  "duration": 69513,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Student selects non-existing course before term ends",
  "description": "",
  "id": "student-select-course;student-selects-non-existing-course-before-term-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "wait for 2 days",
  "keyword": "And "
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
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
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
  "name": "the student selects course by 115205",
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
  "duration": 19840176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46434792,
  "status": "passed"
});
formatter.match({
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
  "duration": 31258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 1241440,
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
  "duration": 34523,
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
  "duration": 25193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49796615,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 1120142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 820628,
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
  "duration": 879412,
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
  "duration": 98438,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends",
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "wait for 120 days",
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
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 65,
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
      "line": 66,
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
      "line": 67,
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
      "line": 68,
      "id": "student-select-course;student-selects-existing-course-after-term-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 67,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends;;2",
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "wait for 120 days",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the student logs in with 101075403 and mike",
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
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 22358979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48779111,
  "status": "passed"
});
formatter.match({
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
  "duration": 49452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 1108945,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1515760,
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
  "duration": 58783,
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
  "duration": 59716,
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
  "duration": 2400880065,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 34989,
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
  "duration": 427343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 335436,
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
  "duration": 76977,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 13996,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Student selects existing course after term ends",
  "description": "",
  "id": "student-select-course;student-selects-existing-course-after-term-ends;;3",
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "wait for 120 days",
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
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "the term ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2025212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44005096,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 62515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 3227930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 4483832,
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
  "duration": 78377,
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
  "duration": 111501,
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
  "duration": 2410997262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 1551216,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 1224644,
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
  "duration": 200609,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 54584,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
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
      "line": 24,
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
      "line": 25,
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
      "line": 26,
      "id": "student-register-for-course;student-registers-for-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 6387279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50295338,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 62982,
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
  "duration": 1512494,
  "status": "passed"
});
formatter.match({
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
  "duration": 1800810,
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
  "duration": 37322,
  "status": "passed"
});
formatter.match({
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
  "duration": 736653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 627951,
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
  "duration": 5705678,
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
  "duration": 406700509,
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
  "duration": 1221845,
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
  "duration": 10801132,
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
  "duration": 135294,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "register for course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5160769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50240754,
  "status": "passed"
});
formatter.match({
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
  "duration": 23327,
  "status": "passed"
});
formatter.match({
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
  "duration": 1082352,
  "status": "passed"
});
formatter.match({
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
  "duration": 712394,
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
  "duration": 24726,
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
  "duration": 328438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 277586,
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
  "duration": 1228844,
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
  "duration": 413588844,
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
  "duration": 1125274,
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
  "duration": 7232168,
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
  "duration": 103104,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
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
      "line": 45,
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
      "line": 46,
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
      "line": 47,
      "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4989552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 62200283,
  "status": "passed"
});
formatter.match({
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
  "duration": 31258,
  "status": "passed"
});
formatter.match({
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
  "duration": 803833,
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
  "duration": 30324,
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
  "duration": 18194,
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
  "duration": 359696,
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
  "duration": 409223043,
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
  "duration": 760446,
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
  "duration": 774909,
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
  "duration": 77911,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Student registers for non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-non-existing-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4926570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51136960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 20061,
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
  "duration": 2600912,
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
  "duration": 47586,
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
  "duration": 29858,
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
  "duration": 1005841,
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
  "duration": 409600933,
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
  "duration": 752048,
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
  "duration": 778175,
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
  "duration": 81643,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
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
      "line": 68,
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
      "line": 69,
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
      "line": 70,
      "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
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
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8013142,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46309761,
  "status": "passed"
});
formatter.match({
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
  "duration": 31724,
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
  "duration": 1303489,
  "status": "passed"
});
formatter.match({
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
  "duration": 2586916,
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
  "duration": 63448,
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
  "duration": 51785,
  "status": "passed"
});
formatter.match({
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
  "duration": 878945,
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
  "duration": 400401870,
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
  "duration": 1096815,
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
  "duration": 5581114,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 72312,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Student registers for not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-registers-for-not-selected-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
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
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to register for this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 6096164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53403369,
  "status": "passed"
});
formatter.match({
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
  "duration": 982048,
  "status": "passed"
});
formatter.match({
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
  "duration": 1269898,
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
  "duration": 42454,
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
  "duration": 27058,
  "status": "passed"
});
formatter.match({
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
  "duration": 783773,
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
  "duration": 413140973,
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
  "duration": 795436,
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
  "duration": 5248477,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_register_for_this_course()"
});
formatter.result({
  "duration": 62049,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
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
      "line": 93,
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
      "line": 94,
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
      "line": 95,
      "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 94,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
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
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5908619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 54553835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 948925,
  "status": "passed"
});
formatter.match({
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
  "duration": 2057403,
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
  "duration": 99372,
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
  "duration": 476795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 404483,
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
  "duration": 1905314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50959679,
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
  "duration": 468398,
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
  "duration": 91440,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 47586,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Student registers for selected course before registration starts",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
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
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3638011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 40432400,
  "status": "passed"
});
formatter.match({
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
  "duration": 34523,
  "status": "passed"
});
formatter.match({
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
  "duration": 892008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1088418,
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
  "duration": 67180,
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
  "duration": 50386,
  "status": "passed"
});
formatter.match({
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
  "duration": 700264,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 1983225,
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
  "duration": 2882697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48170754,
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
  "duration": 530912,
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
  "duration": 99838,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 31258,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 97,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.examples({
  "line": 117,
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
      "line": 118,
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
      "line": 119,
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
      "line": 120,
      "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 119,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
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
  "line": 106,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 9662796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53812050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 77910,
  "status": "passed"
});
formatter.match({
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
  "duration": 772576,
  "status": "passed"
});
formatter.match({
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
  "duration": 778174,
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
  "duration": 29858,
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
  "duration": 298113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 222536,
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
  "duration": 1123408,
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
  "duration": 712649855,
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
  "duration": 1070689,
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
  "duration": 154889,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 61115,
  "status": "passed"
});
formatter.scenario({
  "line": 120,
  "name": "Student registers for selected course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-registers-for-selected-course-after-registration-ends;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 100,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 105,
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
  "line": 106,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "wait for 35 days",
  "keyword": "And "
});
formatter.step({
  "line": 113,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 115,
  "name": "registration has finished",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11002673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48427813,
  "status": "passed"
});
formatter.match({
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
  "duration": 53651,
  "status": "passed"
});
formatter.match({
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
  "duration": 1193387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1442048,
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
  "duration": 51318,
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
  "duration": 28458,
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
  "duration": 617687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 447870,
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
  "duration": 1634259,
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
  "duration": 706714178,
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
  "duration": 748782,
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
  "duration": 143225,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 38255,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
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
      "line": 24,
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
      "line": 25,
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
      "line": 26,
      "id": "student-drop-course;student-drops-selected-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 2836043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53143045,
  "status": "passed"
});
formatter.match({
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
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 689067,
  "status": "passed"
});
formatter.match({
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
  "duration": 607890,
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
  "duration": 25660,
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
  "duration": 13062,
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
  "duration": 274321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 210872,
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
  "duration": 1046897,
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
  "duration": 400140146,
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
  "duration": 1080020,
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
  "duration": 3735050,
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
  "duration": 97038,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "drop course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 9232188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 49098685,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 54584,
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
  "duration": 1812941,
  "status": "passed"
});
formatter.match({
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
  "duration": 1330547,
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
  "duration": 51318,
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
  "duration": 563570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 466531,
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
  "duration": 2192230,
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
  "duration": 400509638,
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
  "duration": 754381,
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
  "duration": 3832088,
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
  "duration": 774442,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 44,
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
      "line": 45,
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
      "line": 46,
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
      "line": 47,
      "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 46,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 13263485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44426840,
  "status": "passed"
});
formatter.match({
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
  "duration": 35456,
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
  "duration": 1351074,
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
  "duration": 45254,
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
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 528114,
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
  "duration": 401387185,
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
  "duration": 738052,
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
  "duration": 738986,
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
  "duration": 83976,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Student drops non-existing course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-non-existing-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10045352,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41048221,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "create student",
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
  "duration": 1185456,
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
  "duration": 104970,
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
  "duration": 62515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 711460,
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
  "duration": 401547204,
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
  "duration": 1077688,
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
  "duration": 1229309,
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
  "duration": 128763,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 67,
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
      "line": 68,
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
      "line": 69,
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
      "line": 70,
      "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 69,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
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
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10019693,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43693920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 127829,
  "status": "passed"
});
formatter.match({
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
  "duration": 772576,
  "status": "passed"
});
formatter.match({
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
  "duration": 742252,
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
  "duration": 31724,
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
  "duration": 394219,
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
  "duration": 415229167,
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
      "val": "115007",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.the_student_drops_course_by(int)"
});
formatter.result({
  "duration": 939594,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 52718,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "Student drops not selected course after registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-not-selected-course-after-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 57,
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
  "line": 58,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "unable to drop this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3695860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53361848,
  "status": "passed"
});
formatter.match({
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
  "duration": 16795,
  "status": "passed"
});
formatter.match({
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
  "duration": 723123,
  "status": "passed"
});
formatter.match({
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
  "duration": 723590,
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
  "duration": 24726,
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
  "duration": 354564,
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
  "duration": 410955274,
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
  "duration": 908803,
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
  "duration": 2546328,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_drop_this_course()"
});
formatter.result({
  "duration": 32657,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 72,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.examples({
  "line": 92,
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
      "line": 93,
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
      "line": 94,
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
      "line": 95,
      "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 94,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
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
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 9183668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 40372217,
  "status": "passed"
});
formatter.match({
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
  "duration": 903671,
  "status": "passed"
});
formatter.match({
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
  "duration": 884077,
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
  "duration": 25659,
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
  "duration": 32191,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 418012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 310710,
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
  "duration": 1758822,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52890185,
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
  "duration": 424077,
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
  "duration": 76044,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 15862,
  "status": "passed"
});
formatter.scenario({
  "line": 95,
  "name": "Student drops selected course before registration starts",
  "description": "",
  "id": "student-drop-course;student-drops-selected-course-before-registration-starts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 73,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 74,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 80,
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
  "line": 81,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs drop course",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 90,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3125759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 46354081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 24726,
  "status": "passed"
});
formatter.match({
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
  "duration": 875679,
  "status": "passed"
});
formatter.match({
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
  "duration": 898073,
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
  "duration": 25192,
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
  "duration": 17261,
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
  "duration": 400284,
  "status": "passed"
});
formatter.match({
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
  "duration": 2036875,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 52968096,
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
  "duration": 362961,
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
  "duration": 90973,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 15862,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
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
      "line": 27,
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
      "line": 28,
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
      "line": 29,
      "id": "student-register-for-course;student-deregisters-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4789877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 55304018,
  "status": "passed"
});
formatter.match({
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
  "duration": 46653,
  "status": "passed"
});
formatter.match({
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
  "duration": 994178,
  "status": "passed"
});
formatter.match({
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
  "duration": 1061359,
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
  "duration": 32191,
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
  "duration": 71846,
  "status": "passed"
});
formatter.match({
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
  "duration": 349432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 324706,
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
  "duration": 1792413,
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
  "duration": 410932881,
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
  "duration": 381156,
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
  "duration": 7274622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53280671,
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
  "duration": 1122007,
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
  "duration": 5879227,
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
  "duration": 97039,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user inputs start",
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
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the user inputs register for course",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "the student registers for course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "deregister course successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 6659734,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47984142,
  "status": "passed"
});
formatter.match({
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
  "duration": 31258,
  "status": "passed"
});
formatter.match({
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
  "duration": 1041764,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1033367,
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
  "duration": 39188,
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
  "duration": 803367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 746450,
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
  "duration": 3841885,
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
  "duration": 401851849,
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
  "duration": 751115,
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
  "duration": 6040180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 40672664,
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
  "duration": 695598,
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
  "duration": 6128822,
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
  "duration": 54118,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user inputs start",
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
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student drops course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
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
      "line": 48,
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
      "line": 49,
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
      "line": 50,
      "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 49,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
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
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student drops course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 4699370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53507406,
  "status": "passed"
});
formatter.match({
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
  "duration": 1068357,
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
  "duration": 25659,
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
  "duration": 12130,
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
  "duration": 1212515,
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
  "duration": 408236796,
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
  "duration": 885942,
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
  "duration": 945193,
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
  "duration": 77910,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Student deregisters non-existing course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-non-existing-course-during-registration-time;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "the user inputs start",
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
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "the student drops course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the course does not exist",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5652959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44110066,
  "status": "passed"
});
formatter.match({
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
  "duration": 39189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 1250304,
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
  "duration": 44320,
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
  "duration": 27992,
  "status": "passed"
});
formatter.match({
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
  "duration": 1492434,
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
  "duration": 408984646,
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
  "duration": 299979,
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
  "duration": 244463,
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
  "duration": 24260,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 52,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
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
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 72,
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
      "line": 73,
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
      "line": 74,
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
      "line": 75,
      "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 74,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;2",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 60,
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
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 3600689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 53152842,
  "status": "passed"
});
formatter.match({
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
  "duration": 53651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
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
  "duration": 1421988,
  "status": "passed"
});
formatter.match({
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
  "duration": 1490567,
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
  "duration": 36389,
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
  "duration": 48053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "student",
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
  "duration": 705861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 586430,
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
  "duration": 6190870,
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
  "duration": 401294344,
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
  "duration": 513651,
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
  "duration": 2334056,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 43853,
  "status": "passed"
});
formatter.scenario({
  "line": 75,
  "name": "Student deregisters selected but not registered course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-selected-but-not-registered-course-during-registration-time;;3",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 60,
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
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5068862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44313474,
  "status": "passed"
});
formatter.match({
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
  "duration": 16329,
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
  "duration": 842555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
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
  "duration": 1527423,
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
  "duration": 49452,
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
  "duration": 23793,
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
  "duration": 628884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 543043,
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
  "duration": 2509005,
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
  "duration": 409221177,
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
  "duration": 974117,
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
  "duration": 4170789,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 40122,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 77,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.examples({
  "line": 95,
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
      "line": 96,
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
      "line": 97,
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
      "line": 98,
      "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 97,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;2",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
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
  "line": 86,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8686812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 43476050,
  "status": "passed"
});
formatter.match({
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
  "duration": 10263,
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
  "duration": 850953,
  "status": "passed"
});
formatter.match({
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
  "duration": 814097,
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
  "duration": 18195,
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
  "duration": 9797,
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
  "duration": 360628,
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
  "duration": 404654769,
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
  "duration": 1032900,
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
  "duration": 3433204,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 35923,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Student deregisters not selected course during registration time",
  "description": "",
  "id": "student-register-for-course;student-deregisters-not-selected-course-during-registration-time;;3",
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
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
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
  "line": 86,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "wait for 20 days",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 92,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 93,
  "name": "unable to deregister from this course",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 6444196,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 41851122,
  "status": "passed"
});
formatter.match({
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
  "duration": 62515,
  "status": "passed"
});
formatter.match({
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
  "duration": 1191988,
  "status": "passed"
});
formatter.match({
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
  "duration": 1049229,
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
  "duration": 26592,
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
  "duration": 14462,
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
  "duration": 493590,
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
  "duration": 414016653,
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
  "duration": 1092616,
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
  "duration": 3442068,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.unable_to_deregister_from_this_course()"
});
formatter.result({
  "duration": 35457,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 100,
  "name": "Student deregisters registered course after registration ends",
  "description": "",
  "id": "student-register-for-course;student-deregisters-registered-course-after-registration-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 101,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs start",
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
  "line": 101,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the clerk creates student by 101075403, mike and n",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 108,
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
  "line": 109,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs start",
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
  "duration": 9009185,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48235136,
  "status": "passed"
});
formatter.match({
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
      "val": "n",
      "offset": 49
    }
  ],
  "location": "StepDefinitions.the_clerk_creates_student_by(int,String,String)"
});
formatter.result({
  "duration": 1322150,
  "status": "passed"
});
formatter.match({
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
  "duration": 1093083,
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
  "duration": 28458,
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
  "duration": 16795,
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
  "duration": 508985,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 396551,
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
  "duration": 2561256,
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
  "duration": 411918661,
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
  "duration": 1096815,
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
  "duration": 7316610,
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
  "duration": 300679876,
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
  "duration": 587363,
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
  "duration": 104037,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 23793,
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
  "line": 101,
  "name": "the university is initialized",
  "keyword": "Given "
});
formatter.step({
  "line": 102,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "the user inputs clerk",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "the clerk logs in with password admin",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "the user inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 106,
  "name": "the clerk creates student by 101075433, isaac and y",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 107,
  "name": "the user inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 108,
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
  "line": 109,
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "the user inputs start",
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
  "duration": 4819269,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 50929354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 739452,
  "status": "passed"
});
formatter.match({
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
  "duration": 736653,
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
  "duration": 28925,
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
  "duration": 9797,
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
  "duration": 536978,
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
  "duration": 1366937,
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
  "duration": 406803146,
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
  "duration": 1248438,
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
  "duration": 7868050,
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
  "duration": 307742226,
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
  "duration": 758580,
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
  "duration": 111034,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_finished()"
});
formatter.result({
  "duration": 27058,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the student selects course by \u003ccourse code\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student deregisters course by \u003ccourse code\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.examples({
  "line": 148,
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
      "line": 149,
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
      "line": 150,
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
      "line": 151,
      "id": "student-register-for-course;student-deregisters-not-registered-course-before-registration-starts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 150,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the student selects course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student deregisters course by 115007",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 5380039,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 47806394,
  "status": "passed"
});
formatter.match({
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
  "duration": 928397,
  "status": "passed"
});
formatter.match({
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
  "duration": 1461176,
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
  "duration": 53651,
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
  "duration": 27991,
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
  "duration": 864949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 677870,
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
  "duration": 2437626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 48758584,
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
  "duration": 419412,
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
  "duration": 68114,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 16795,
  "status": "passed"
});
formatter.scenario({
  "line": 151,
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
  "name": "the user inputs log out",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "the user inputs start",
  "keyword": "And "
});
formatter.step({
  "line": 139,
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 140,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 141,
  "name": "the user inputs select course",
  "keyword": "And "
});
formatter.step({
  "line": 142,
  "name": "the student selects course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 143,
  "name": "wait for 2 days",
  "keyword": "And "
});
formatter.step({
  "line": 144,
  "name": "the user inputs deregister course",
  "keyword": "And "
});
formatter.step({
  "line": 145,
  "name": "the student deregisters course by 115205",
  "matchedColumns": [
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 146,
  "name": "registration has not started",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 8699409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 44803332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clerk",
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
  "duration": 857018,
  "status": "passed"
});
formatter.match({
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
  "duration": 812697,
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
  "duration": 20061,
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
  "duration": 9331,
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
  "duration": 352698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select course",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.the_user_inputs(String)"
});
formatter.result({
  "duration": 260791,
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
  "duration": 1403326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 51901604,
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
  "duration": 982048,
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
  "duration": 155355,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.registration_has_not_started()"
});
formatter.result({
  "duration": 34057,
  "status": "passed"
});
});