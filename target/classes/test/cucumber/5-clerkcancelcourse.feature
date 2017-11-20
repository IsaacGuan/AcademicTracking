Feature: Clerk Cancel Course

  Scenario Outline: Clerk cancels existing course after registration ends and before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And wait for 40 days
    And the user inputs cancel course
    When the clerk cancels course by <course code>
    Then cancel course successfully

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Clerk cancels non-existing course after registration ends and before term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And wait for 40 days
    And the user inputs cancel course
    When the clerk cancels course by <course code>
    Then the course does not exist

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Clerk cancels existing course before registration ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And wait for 2 days
    And the user inputs cancel course
    When the clerk cancels course by <course code>
    Then the course cannot be canceled before registration ends

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |

  Scenario Outline: Clerk cancels existing course after term ends
    Given the university is initialized
    And wait for 2 days
    And the user inputs clerk
    And the clerk logs in with password admin
    And the user inputs create course
    And the clerk creates course by <title>, <course code>, <capsize>, <enforce prereqs(y/n)>, <number of midterms>, <number of assignments>, <has a final(y/n)> and <is project course(y/n)>
    And wait for 120 days
    And the user inputs cancel course
    When the clerk cancels course by <course code>
    Then the term ends

    Examples: 
      | title                | course code | capsize | enforce prereqs(y/n) | number of midterms | number of assignments | has a final(y/n) | is project course(y/n) |
      | Graphical Models     |      115007 |      20 | n                    |                  1 |                     3 | y                | n                      |
      | Virtual Environments |      115205 |      15 | n                    |                  0 |                     4 | y                | y                      |
