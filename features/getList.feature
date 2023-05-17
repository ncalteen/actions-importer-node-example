Feature: Get List

  Scenario: Get the 0-length sequence
    When I provide a list input of 0
    Then I should receive the list [0]

  Scenario: Get the 1-length sequence
    When I provide a list input of 1
    Then I should receive the list [0, 1]

  Scenario: Get the 8-length sequence
    When I provide a list input of 8
    Then I should receive the list [0, 1, 1, 2, 3, 5, 8, 13, 21]
