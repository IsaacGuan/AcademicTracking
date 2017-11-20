Feature: Clerk Delete Course

  Scenario Outline: Clerk deletes existing course before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And the user inputs delete course
    When the clerk deletes course by <course code>
    Then delete course successfully

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Clerk deletes non-existing course before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs delete course
    When the clerk deletes course by <course code>
    Then the course does not exist

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Clerk deletes existing course after term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And wait for 120 days
    And the user inputs delete course
    When the clerk deletes course by <course code>
    Then the term ends

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
