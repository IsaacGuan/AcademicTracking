Feature: Hierarchical Use Cases - System Offer Information

  Scenario Outline: System shows current courses
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    When the user inputs delete course
    Then the current courses in the system is shown

    Examples: 
      | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | y                      |

  Scenario Outline: System shows current students
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number 1>, <name 1> and <is fulltime(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number 2>, <name 2> and <is fulltime(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number 3>, <name 3> and <is fulltime(y/n)>
    When the user inputs delete student
    Then the current students in the system is shown

    Examples: 
      | student number 1 | name 1 | student number 2 | name 2 | student number 3 | name 3 | is fulltime(y/n) |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | y                |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | n                |

  Scenario Outline: System shows selected courses of a student
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code 1>
    And the user inputs select course
    And the student selects course by <course code 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And the user inputs select course
    And the student selects course by <course code 4>
    When the user inputs register for course
    Then the selected courses of student <student number>, <name> is shown

    Examples: 
      | student number | name  | is fulltime(y/n) | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | n                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | y                      |

  Scenario Outline: System shows registered courses of a student
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code 1>
    And the user inputs select course
    And the student selects course by <course code 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And the user inputs select course
    And the student selects course by <course code 4>
    And wait for 20 days
    And the user inputs register for course
    And the student registers for course by <course code 1>
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And the user inputs register for course
    And the student registers for course by <course code 4>
    When the user inputs deregister course
    Then the registered courses of student <student number>, <name> is shown

    Examples: 
      | student number | name  | is fulltime(y/n) | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | n                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | y                      |
      
  Scenario Outline: System shows dean's list
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number 1>, <name 1> and <is fulltime(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number 2>, <name 2> and <is fulltime(y/n)>
    And the user inputs create student
    And the clerk creates student by <student number 3>, <name 3> and <is fulltime(y/n)>
    And log out
    When the user inputs student
    And the student logs in with <student number 1> and <name 1>
    And the user inputs select course
    And the student selects course by <course code 1>
    And the user inputs select course
    And the student selects course by <course code 2>
    And log out
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And the user inputs select course
    And the student selects course by <course code 4>
    And log out
    And the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs select course
    And the student selects course by <course code 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And log out
    And wait for 20 days
    And the user inputs student
    And the student logs in with <student number 1> and <name 1>
    And the user inputs register for course
    And the student registers for course by <course code 1>
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And log out
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And the user inputs register for course
    And the student registers for course by <course code 4>
    And log out
    And the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And log out
    And wait for 100 days
    And the user inputs clerk
    And the clerk logs in with password admin
    When the user inputs dean's list
    Then the dean's list is generated

    Examples: 
      | student number 1 | name 1 | student number 2 | name 2 | student number 3 | name 3 | is fulltime(y/n) | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | y                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | n                | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 |      20 | n                    |                  1 |                     3 | y                | y                      |