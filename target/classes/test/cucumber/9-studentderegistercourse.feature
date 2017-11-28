Feature: Student Deregister Course

  Scenario Outline: Student deregisters registered course during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code>
    And wait for 20 days
    And the user inputs register for course
    And the student registers for course by <course code>
    And wait for 2 days
    And the user inputs deregister course
    When the student deregisters course by <course code>
    Then deregister course successfully

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
      
  Scenario Outline: Student deregisters non-existing course during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code>
    And wait for 20 days
    And the user inputs register for course
    And the student registers for course by <course code>
    And wait for 2 days
    And the user inputs deregister course
    When the student drops course by <course code>
    Then the course does not exist
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student deregisters selected but not registered course during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code>
    And wait for 20 days
    And the user inputs deregister course
    When the student deregisters course by <course code>
    Then unable to deregister from this course

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
      
  Scenario Outline: Student deregisters not selected course during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And wait for 20 days
    And the user inputs deregister course
    When the student deregisters course by <course code>
    Then unable to deregister from this course

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
      
  Scenario Outline: Student deregisters registered course after registration ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code>
    And wait for 20 days
    And the user inputs register for course
    And the student registers for course by <course code>
    And wait for 15 days
    And the user inputs deregister course
    When the student deregisters course by <course code>
    Then registration has finished

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student deregisters not registered course before registration starts
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code>
    And wait for 2 days
    And the user inputs deregister course
    When the student deregisters course by <course code>
    Then registration has not started

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |