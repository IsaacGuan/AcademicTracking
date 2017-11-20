Feature: Login and Logout

  Scenario: Clerk logs in with valid password
    Given the university is initialized
    And the user inputs clerk
    When the clerk logs in with password admin
    Then the clerk is logged in

  Scenario Outline: Clerk logs in with invalid password
    Given the university is initialized
    And the user inputs clerk
    When the clerk logs in with password <password>
    Then the clerk is not logged in

    Examples: 
      | password |
      |   123456 |
      | abcdefgg |
      
  Scenario: Clerk logs out
    Given the university is initialized
    And the user inputs clerk
    And the clerk logs in with password admin
    When the user inputs log out
    Then the user is logged out

  Scenario Outline: Student logs in with valid number and name
    Given the university is initialized
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs log out
    And the user inputs start
    And the user inputs student
    When the student logs in with <student number> and <name>
    Then the student is logged in

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |

  Scenario Outline: Student logs in with invalid number and name
    Given the university is initialized
    And the user inputs student
    When the student logs in with <student number> and <name>
    Then the student is not logged in

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |
      
  Scenario Outline: Student logs out
    Given the university is initialized
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the user inputs log out
    And the user inputs start
    And the user inputs student
    And the student logs in with <student number> and <name>
    When the user inputs log out
    Then the user is logged out

    Examples: 
      | student number | name  | is fulltime(y/n) |
      |      101075403 | mike  | n                |
      |      101075433 | isaac | y                |
