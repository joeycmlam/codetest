Feature: Greeting

  Scenario: say hello
    When the greeter say hello
    Then I should have heard "hello"
