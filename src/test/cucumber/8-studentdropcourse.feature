Feature: Student Drop Course

  Scenario Outline: Student drops selected course after registration starts
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
    And the user inputs drop course
    When the student drops course by <course code>
    Then drop course successfully
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student drops non-existing course after registration starts
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
    And the user inputs drop course
    When the student drops course by <course code>
    Then the course does not exist
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Student drops not selected course after registration starts
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
    And the user inputs drop course
    When the student drops course by <course code>
    Then unable to drop this course
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
      
  Scenario Outline: Student drops selected course before registration starts
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
    And the user inputs drop course
    When the student drops course by <course code>
    Then the course cannot be dropped before registration starts
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075403 | mike  | n                | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |