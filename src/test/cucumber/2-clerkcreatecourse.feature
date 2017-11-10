Feature: Clerk Create Course

  Scenario Outline: Clerk creates new course before registration starts
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create course
    When the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    Then create course successfully
    
    Examples:
    | title                | course code | capsize    | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
    | Graphical Models     | 115007      | 20         | n                    | 1                  | 3                     | y                | n                      |
    | Virtual Environments | 115205      | 15         | n                    | 0                  | 4                     | y                | y                      |
    
  Scenario Outline: Clerk creates redundant course before registration starts
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the clerk inputs create course
    When the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    Then the course already exists
    
    Examples:
    | title                | course code | capsize    | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
    | Graphical Models     | 115007      | 20         | n                    | 1                  | 3                     | y                | n                      |
    | Virtual Environments | 115205      | 15         | n                    | 0                  | 4                     | y                | y                      |
    
  Scenario Outline: Clerk creates new course after registration starts
    Given the university is initialized
    And wait for 21 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the clerk inputs create course
    When the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    Then it is overdue
    
    Examples:
    | title                | course code | capsize    | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
    | Graphical Models     | 115007      | 20         | n                    | 1                  | 3                     | y                | n                      |
    | Virtual Environments | 115205      | 15         | n                    | 0                  | 4                     | y                | y                      |