Feature: Clerk Delete Student

  Scenario Outline: Clerk deletes existing student before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs delete student
    When the clerk deletes student by <student number>
    Then delete student successfully

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |

  Scenario Outline: Clerk deletes non-existing student before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs delete student
    When the clerk deletes student by <student number>
    Then the student does not exist

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |

  Scenario Outline: Clerk deletes existing student after term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And wait for 120 days
    And the user inputs delete student
    When the clerk deletes student by <student number>
    Then the term ends

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |
