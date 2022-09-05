Feature: calcultor

  Scenario Outline: positive cases
    Given the number <x> and <y>
    When they are added together
    Then the result should be <z>

    Examples:
      | x | y | z |
      | 1 | 2 | 3 |
      | 2 | 3 | 5 |

  Scenario Outline: position + negative cases
    Given the number <x> and <y>
    When they are added together
    Then the result should be <z>

    Examples:
      | x | y  | z  |
      | 1 | -2 | -1 |
      | 2 | -3 | -1 |


  Scenario Outline: negative cases
    Given the number <x> and <y>
    When they are added together
    Then the result should be <z>

    Examples:
      | x  | y  | z  |
      | -1 | -2 | -3 |
      | -2 | -3 | -5 |
