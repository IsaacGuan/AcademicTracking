Feature: Clerk Create Student

  Scenario Outline: Clerk creates new student before registration starts
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create student
    When the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    Then create student successfully
    
    Examples:
    | student number | name       | is fulltime(y/n) |
    | 101075403      | mike       | n                |
    | 101075433      | isaac      | y                |
    
  Scenario Outline: Clerk creates redundant student before registration starts
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create student
    And the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    And the clerk inputs create student
    When the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    Then the student already exists
    
    Examples:
    | student number | name       | is fulltime(y/n) |
    | 101075403      | mike       | n                |
    | 101075433      | isaac      | y                |
  
  Scenario Outline: Clerk creates new student after registration starts
    Given the university is initialized
    And wait for 21 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create student
    When the clerk creates student by <student number>, <name> and <is fulltime(y/n)>
    Then it is overdue
    
    Examples:
    | student number | name       | is fulltime(y/n) |
    | 101075403      | mike       | n                |
    | 101075433      | isaac      | y                |