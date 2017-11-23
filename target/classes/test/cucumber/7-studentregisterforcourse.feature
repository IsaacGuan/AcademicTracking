Feature: Student Register For Course

  Scenario Outline: Student registers for selected course during registration time
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
    When the student registers for course by <course code>
    Then register for course successfully

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student registers for non-existing course during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And wait for 20 days
    And the user inputs register for course
    When the student registers for course by <course code>
    Then the course does not exist

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student registers for not selected course during registration time
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
    And the user inputs register for course
    When the student registers for course by <course code>
    Then unable to register for this course

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student registers for selected course before registration starts
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
    And the user inputs register for course
    When the student registers for course by <course code>
    Then registration has not started

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student registers for selected course after registration ends
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
    And wait for 35 days
    And the user inputs register for course
    When the student registers for course by <course code>
    Then registration has finished

    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student registers for selected course that is full during registration time
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
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, 2, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number 1> and <name 1>
    And the user inputs select course
    And the student selects course by <course code>
    And log out
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs select course
    And the student selects course by <course code>
    And log out
    And the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs select course
    And the student selects course by <course code>
    And log out
    And wait for 20 days
    And the user inputs student
    And the student logs in with <student number 1> and <name 1>
    And the user inputs register for course
    And the student registers for course by <course code>
    And log out
    And the user inputs student
    And the student logs in with <student number 2> and <name 2>
    And the user inputs register for course
    And the student registers for course by <course code>
    And log out
    When the user inputs student
    And the student logs in with <student number 3> and <name 3>
    And the user inputs register for course
    And the student registers for course by <course code>
    Then unable to register for this course

    Examples: 
      | student number 1 | name 1 | student number 2 | name 2 | student number 3 | name 3 | is fulltime(y/n) | title            | course code | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |        101075403 | mike   |        101075433 | isaac  |        101075404 | john   | y                | Graphical Models |      115007 | n                    |                  1 |                     3 | y                | n                      |

  Scenario Outline: Full time student registers for 5 courses during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and y
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 4>, <course code 4>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 5>, <course code 5>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
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
    And the user inputs select course
    And the student selects course by <course code 5>
    And wait for 20 days
    When the user inputs register for course
    And the student registers for course by <course code 1>
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And the user inputs register for course
    And the student registers for course by <course code 3>
    And the user inputs register for course
    And the student registers for course by <course code 4>
    And the user inputs register for course
    And the student registers for course by <course code 5>
    Then unable to register for this course

    Examples: 
      | student number | name | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | title 4            | course code 4 | title 5                      | course code 5 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 | Computer Animation |        115201 | Distributed Operating System |        105102 |      20 | n                    |                  1 |                     3 | y                | n                      |

  Scenario Outline: Part time student registers for 3 courses during registration time
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and n
    And the user inputs create course
    And the clerk creates course by <title 1>, <course code 1>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 2>, <course code 2>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs create course
    And the clerk creates course by <title 3>, <course code 3>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And log out
    And the user inputs student
    And the student logs in with <student number> and <name>
    And the user inputs select course
    And the student selects course by <course code 1>
    And the user inputs select course
    And the student selects course by <course code 2>
    And the user inputs select course
    And the student selects course by <course code 3>
    And wait for 20 days
    When the user inputs register for course
    And the student registers for course by <course code 1>
    And the user inputs register for course
    And the student registers for course by <course code 2>
    And the user inputs register for course
    And the student registers for course by <course code 3>
    Then unable to register for this course

    Examples: 
      | student number | name | title 1          | course code 1 | title 2              | course code 2 | title 3         | course code 3 | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike | Graphical Models |        115007 | Virtual Environments |        115205 | Fault Tolerance |        115004 |      20 | n                    |                  1 |                     3 | y                | n                      |