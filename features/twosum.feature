Feature: two sum algo

  Scenario Outline: simple case
    Given provide an array "<list_num>" and <target>
    When do the algo
    Then get "<result>"

    Examples:
      | list_num      | target | result |
      | 1, 2, 3, 4, 5 | 4      | 0, 2   |
