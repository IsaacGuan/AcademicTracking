$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/cucumber/1-login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Clerk logs in with valid password",
  "description": "",
  "id": "login;clerk-logs-in-with-valid-password",
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
  "duration": 224000747,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 2106859,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_logged_in()"
});
formatter.result({
  "duration": 3924002,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login;clerk-logs-in-with-invalid-password",
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
  "id": "login;clerk-logs-in-with-invalid-password;",
  "rows": [
    {
      "cells": [
        "password"
      ],
      "line": 16,
      "id": "login;clerk-logs-in-with-invalid-password;;1"
    },
    {
      "cells": [
        "123456"
      ],
      "line": 17,
      "id": "login;clerk-logs-in-with-invalid-password;;2"
    },
    {
      "cells": [
        "abcdefgg"
      ],
      "line": 18,
      "id": "login;clerk-logs-in-with-invalid-password;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login;clerk-logs-in-with-invalid-password;;2",
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
  "duration": 11049814,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 38256,
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
  "duration": 107303,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 49453,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Clerk logs in with invalid password",
  "description": "",
  "id": "login;clerk-logs-in-with-invalid-password;;3",
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
  "duration": 6534249,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 33123,
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
  "duration": 75112,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_clerk_is_not_logged_in()"
});
formatter.result({
  "duration": 33591,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login;student-logs-in-with-valid-number-and-name",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "login;student-logs-in-with-valid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name"
      ],
      "line": 27,
      "id": "login;student-logs-in-with-valid-number-and-name;;1"
    },
    {
      "cells": [
        "101075401",
        "tom"
      ],
      "line": 28,
      "id": "login;student-logs-in-with-valid-number-and-name;;2"
    },
    {
      "cells": [
        "101075402",
        "jack"
      ],
      "line": 29,
      "id": "login;student-logs-in-with-valid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login;student-logs-in-with-valid-number-and-name;;2",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student logs in with 101075401 and tom",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 17236497,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "duration": 44320,
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
  "duration": 1947772,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_logged_in()"
});
formatter.result({
  "duration": 72313,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Student logs in with valid number and name",
  "description": "",
  "id": "login;student-logs-in-with-valid-number-and-name;;3",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the student logs in with 101075402 and jack",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the student is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 10435858,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "duration": 41987,
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
  "duration": 923267,
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
  "line": 31,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login;student-logs-in-with-invalid-number-and-name",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the student logs in with \u003cstudent number\u003e and \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "login;student-logs-in-with-invalid-number-and-name;",
  "rows": [
    {
      "cells": [
        "student number",
        "name"
      ],
      "line": 38,
      "id": "login;student-logs-in-with-invalid-number-and-name;;1"
    },
    {
      "cells": [
        "101075403",
        "mike"
      ],
      "line": 39,
      "id": "login;student-logs-in-with-invalid-number-and-name;;2"
    },
    {
      "cells": [
        "101075433",
        "isaac"
      ],
      "line": 40,
      "id": "login;student-logs-in-with-invalid-number-and-name;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login;student-logs-in-with-invalid-number-and-name;;2",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the student logs in with 101075403 and mike",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 12125637,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_student()"
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
  "duration": 3799438,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Student logs in with invalid number and name",
  "description": "",
  "id": "login;student-logs-in-with-invalid-number-and-name;;3",
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
  "name": "the user inputs student",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "the student logs in with 101075433 and isaac",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "the student is not logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_university_is_initialized()"
});
formatter.result({
  "duration": 11622249,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_student()"
});
formatter.result({
  "duration": 31258,
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
  "duration": 1083754,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_student_is_not_logged_in()"
});
formatter.result({
  "duration": 34990,
  "status": "passed"
});
formatter.uri("test/cucumber/2-clerkcreatecourse.feature");
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs create course",
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
  "duration": 8546869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 415577975,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 63448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 241197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 174017,
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
  "duration": 5857311,
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
  "duration": 312110,
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
  "name": "the clerk inputs create course",
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
  "duration": 17258424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 399526937,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 48052,
  "status": "passed"
});
formatter.match({
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
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 89575,
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
  "duration": 2231890,
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
  "duration": 80710,
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
  "name": "the clerk inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs create course",
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
  "duration": 5082867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396252813,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 190345,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 175416,
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
  "duration": 6997049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 197810,
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
  "duration": 5166377,
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
  "duration": 112434,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs create course",
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
  "duration": 5772869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 400665275,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 37322,
  "status": "passed"
});
formatter.match({
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
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 58783,
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
  "duration": 2214162,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 132961,
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
  "duration": 1404728,
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
  "duration": 62982,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs create course",
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
  "duration": 12265130,
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
  "duration": 4186905842,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 191745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 170284,
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
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 73246,
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
  "name": "the clerk inputs create course",
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
  "duration": 16295968,
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
  "duration": 4198217847,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 122698,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 109635,
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
  "duration": 463267,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 48519,
  "status": "passed"
});
formatter.uri("test/cucumber/3-clerkcreatestudent.feature");
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs create student",
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
  "duration": 12389694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396696953,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 84442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 61116,
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
  "duration": 1669719,
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
  "duration": 49919,
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
  "name": "the clerk inputs create student",
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
  "duration": 6432545,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 400276187,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 71379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 1477973,
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
  "duration": 71380,
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
  "name": "the clerk inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs create student",
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
  "duration": 7282101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 402139516,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 65781,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 56917,
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
  "duration": 1380469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 76045,
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
  "duration": 1632396,
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
  "duration": 83509,
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs create student",
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
  "duration": 5864309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396766932,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 91441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 120832,
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
  "duration": 2990005,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 118499,
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
  "duration": 1986027,
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
  "duration": 135294,
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs create student",
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
  "duration": 9027397,
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
  "duration": 4201994425,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 128763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 181015,
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
  "duration": 390488,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 58317,
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
  "name": "the clerk inputs create student",
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
  "duration": 27650895,
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
  "duration": 4206489462,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 152556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 881745,
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
  "duration": 289717,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.it_is_overdue()"
});
formatter.result({
  "duration": 42921,
  "status": "passed"
});
formatter.uri("test/cucumber/4-clerkdeletecourse.feature");
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
  "name": "the clerk inputs create course",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates course by \u003ctitle\u003e, \u003ccourse code\u003e, \u003ccapsize\u003e, \u003cenforce prereqs(y/n)\u003e, \u003cnumber of midterms\u003e, \u003cnumber of assignments\u003e, \u003chas a final(y/n)\u003e and \u003cis project course(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the clerk inputs delete course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs delete course",
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
  "duration": 10629469,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 401834405,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 487993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 511786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 69980,
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
  "duration": 1695845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 128297,
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
  "duration": 5270880,
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
  "duration": 78377,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs delete course",
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
  "duration": 5529339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 391533374,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 149291,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 97971,
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
  "duration": 3864752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 143691,
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
  "duration": 22067904,
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
  "duration": 76978,
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
  "name": "the clerk inputs delete course",
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
  "name": "the clerk inputs delete course",
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
  "duration": 6839361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406146095,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 89574,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 900407,
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
  "duration": 111501,
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
  "name": "the clerk inputs delete course",
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
  "duration": 9201880,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 397511517,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 107302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 133895,
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
  "duration": 1076756,
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
  "duration": 164686,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs delete course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs delete course",
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
  "duration": 12050526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 388816292,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 25660,
  "status": "passed"
});
formatter.match({
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
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 63449,
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
  "duration": 2191768,
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
  "duration": 24004185260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 160487,
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
  "duration": 190812,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 63915,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs delete course",
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
  "duration": 11687097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 409519588,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 66714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 72779,
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
  "duration": 1286229,
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
  "duration": 24006325243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 196410,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 44788,
  "status": "passed"
});
formatter.uri("test/cucumber/5-clerkdeletestudent.feature");
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
  "name": "the clerk inputs create student",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the clerk creates student by \u003cstudent number\u003e, \u003cname\u003e and \u003cis fulltime(y/n)\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "the clerk inputs delete student",
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs delete student",
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
  "duration": 13979169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406625690,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 17729,
  "status": "passed"
});
formatter.match({
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
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 41055,
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
  "duration": 1115012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 76978,
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
  "duration": 4609338,
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
  "duration": 49452,
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs delete student",
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
  "duration": 4724104,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 399370182,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 1399596,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 7773359,
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
  "duration": 56917,
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
  "name": "the clerk inputs delete student",
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
  "name": "the clerk inputs delete student",
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
  "duration": 4929845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 407616604,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 102638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 127830,
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
  "duration": 1083754,
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
  "duration": 117100,
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
  "name": "the clerk inputs delete student",
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
  "duration": 7742101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 395763888,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 59249,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 63448,
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
  "duration": 497323,
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
  "duration": 50852,
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs delete student",
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs delete student",
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
  "duration": 4303759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 388028319,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 30324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 116166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 87241,
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
  "duration": 2474953,
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
  "duration": 24005526540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 763713,
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
  "duration": 303712,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 69514,
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
  "name": "the clerk inputs create student",
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
  "name": "the clerk inputs delete student",
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
  "duration": 14155986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 406642952,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 60183,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 41988,
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
  "duration": 876147,
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
  "duration": 24007785488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete student",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 127830,
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
  "duration": 188479,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 45254,
  "status": "passed"
});
formatter.uri("test/cucumber/6-clerkcancelcourse.feature");
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 12376165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 405835851,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 46653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 36856,
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
  "duration": 993713,
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
  "duration": 8000199209,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 166085,
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
  "duration": 6837029,
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
  "duration": 109635,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 9891414,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 391806296,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 18195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.the_clerk_logs_in_with_password(String)"
});
formatter.result({
  "duration": 48053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 2040145,
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
  "duration": 7998555150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 127829,
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
  "duration": 18859562,
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
  "duration": 139026,
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
  "name": "the clerk inputs cancel course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 21564049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 415567245,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 93773,
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
  "duration": 8000939129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 124098,
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
  "duration": 1359008,
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
  "duration": 151623,
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
  "name": "the clerk inputs cancel course",
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
  "duration": 10556224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 399641237,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 102637,
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
  "duration": 8000286451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 129696,
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
  "duration": 1026371,
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
  "duration": 104037,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 7572750,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 414832457,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 44787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 47586,
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
  "duration": 1292294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 411605921,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 166552,
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
  "duration": 184280,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 63449,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 10344417,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 397943993,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 50386,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 1966900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 396252347,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 190346,
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
  "duration": 170284,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_course_cannot_be_canceled_before_registration_ends()"
});
formatter.result({
  "duration": 38255,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 10392003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 407814414,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
});
formatter.result({
  "duration": 19594,
  "status": "passed"
});
formatter.match({
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
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 973186,
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
  "duration": 24009433280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
});
formatter.result({
  "duration": 127364,
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
  "duration": 164219,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 38722,
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
  "name": "the clerk inputs create course",
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
  "name": "the clerk inputs cancel course",
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
  "duration": 11820525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "StepDefinitions.wait_for_days(int)"
});
formatter.result({
  "duration": 417001832,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_user_inputs_clerk()"
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
  "duration": 45720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "create course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 944727,
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
  "duration": 24007946442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cancel course",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.the_clerk_inputs(String)"
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
  "duration": 214605,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.the_term_ends()"
});
formatter.result({
  "duration": 51785,
  "status": "passed"
});
});