Feature: Tree Constructor

  Scenario Outline: simple case
    Given provide  "<input>"
    When run the program
    Then out is "<output>"

    Examples:
      | input                                       | output                              |
      | "(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)" | "(1,2)", "(3,2)", "(2,12)", "(5,2)" |

