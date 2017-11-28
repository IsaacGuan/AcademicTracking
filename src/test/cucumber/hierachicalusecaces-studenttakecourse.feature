Feature: Hierarchical Use Cases - Student Take Course

  Scenario Outline: Student takes course: writes final after first doing assignments and then midterms
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
    When student starts to take course
    And student <student number> does assginments for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples:
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | n                      |

  Scenario Outline: Student takes course: writes final after first doing midterms and then assignments
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
    When student starts to take course
    And student <student number> does midterms for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples:
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | n                      |

  Scenario Outline: Student takes project course: writes final after first doing assignments, then midterms and then projects
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
    When student starts to take course
    And student <student number> does assginments for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> does project for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |

  Scenario Outline: Student takes project course: writes final after first doing assignments, then projects and then midterms
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
    When student starts to take course
    And student <student number> does assginments for course <course code>
    And student <student number> does project for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |
      
  Scenario Outline: Student takes project course: writes final after first doing midterms, then assignments and then projects
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
    When student starts to take course
    And student <student number> does midterms for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> does project for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |
      
  Scenario Outline: Student takes project course: writes final after first doing midterms, then projects and then assignments
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
    When student starts to take course
    And student <student number> does midterms for course <course code>
    And student <student number> does project for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |
      
  Scenario Outline: Student takes project course: writes final after first doing projects, then assignments and then midterms
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
    When student starts to take course
    And student <student number> does project for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |
      
  Scenario Outline: Student takes project course: writes final after first doing projects, then midterms and then assignments
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
    When student starts to take course
    And student <student number> does project for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> writes final for course <course code>
    Then student <student number> obtains mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |
      
  Scenario Outline: Student takes course: writes final before doing assignments and midterms
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
    When student starts to take course
    And student <student number> writes final for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> does midterms for course <course code>
    Then student <student number> cannot obtain mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | n                      |

  Scenario Outline: Student takes project course: writes final before doing assignments, midterms and projects
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
    When student starts to take course
    And student <student number> writes final for course <course code>
    And student <student number> does assginments for course <course code>
    And student <student number> does midterms for course <course code>
    And student <student number> does project for course <course code>
    Then student <student number> cannot obtain mark for course <course code>
    
    Examples: 
      | student number | name  | is fulltime(y/n) | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      |      101075433 | isaac | y                | Virtual Environments |      115205 |      15 | n                    |                  1 |                     4 | y                | y                      |