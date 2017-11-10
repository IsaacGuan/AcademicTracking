Feature: Login

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
    | password   |
    | 123456     |
    | abcdefgg   |
    
  Scenario Outline: Student logs in with valid number and name
    Given the university is initialized
    And the user inputs student
    When the student logs in with <student number> and <name>
    Then the student is logged in
    
    Examples:
    | student number | name       |
    | 101075401      | tom        |
    | 101075402      | jack       |
    
  Scenario Outline: Student logs in with invalid number and name
    Given the university is initialized
    And the user inputs student
    When the student logs in with <student number> and <name>
    Then the student is not logged in
    
    Examples:
    | student number | name       |
    | 101075403      | mike       |
    | 101075433      | isaac      |