Feature: Get Sequence

  Scenario: Get the generator starting at 0
    When I provide a generator input of 0
    Then I should receive the generator starting at position 0

  Scenario: Get the generator starting at 3
    When I provide a generator input of 3
    Then I should receive the generator starting at position 3

  Scenario: Get the generator starting at 8
    When I provide a generator input of 8
    Then I should receive the generator starting at position 8