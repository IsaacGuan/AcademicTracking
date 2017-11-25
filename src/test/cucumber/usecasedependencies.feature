Feature: Use Case Dependencies

  Scenario Outline: Use case dependencies
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And create course successfully
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And create course successfully
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And create course successfully
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And create course successfully
    And the user inputs create student
    And the clerk creates student by <student number 1>, <name 1> and <is fulltime(y/n)>
    And create student successfully
    And the user inputs create student
    And the clerk creates student by <student number 2>, <name 2> and <is fulltime(y/n)>
    And create student successfully
    And the user inputs create student
    And the clerk creates student by <student number 3>, <name 3> and <is fulltime(y/n)>
    And create student successfully
    And the user inputs delete course
    And the clerk deletes course by <course code 1>
    And delete student successfully
    And the user inputs delete student
    And the clerk deletes student by <student number 1>
    And delete student successfully
    And log out
    When the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And select course successfully
    And the user inputs select course
    And the student selects course by <course code 4>
    And select course successfully
    And log out
    And the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs select course
    And the student selects course by <course code 4>
    And select course successfully
    And log out
    And wait for 20 days
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs select course
    And the student selects course by <course code 2>
    And select course successfully
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And register for course successfully
    And the user inputs register for course
    And the student registers for course by <course code 4>
    And register for course successfully
    And the user inputs deregister course
    And the student deregisters course by <course code 4>
    And deregister course successfully
    And log out
    And the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs select course
    And the student selects course by <course code 2>
    And select course successfully
    And the user inputs select course
    And the student selects course by <course code 3>
    And select course successfully
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And register for course successfully
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And register for course successfully
    And the user inputs deregister course
    And the student deregisters course by <course code 2>
    And deregister course successfully
    And the user inputs drop course
    And the student drops course by <course code 4>
    And drop course successfully
    And log out
    And wait for 15 days
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs drop course
    And the student drops course by <course code 2>
    And drop course successfully
    And log out
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs cancel course
    And the clerk cancels course by <course code 2>
    And cancel course successfully
    And wait for 100 days
    And the user inputs dean's list
    Then the dean's list is generated

    Examples: 
      | student number 1 | name 1 | student number 2 | name 2 | student number 3 | name 3 | is fulltime(y/n) | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | y                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | n                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | y                      |