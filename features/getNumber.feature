Feature: Get Number

  Scenario: Get the 0th number
    When I provide a number input of 0
    Then I should receive the number 0

  Scenario: Get the 1st number
    When I provide a number input of 1
    Then I should receive the number 1

  Scenario: Get the 8th number
    When I provide a number input of 8
    Then I should receive the number 21