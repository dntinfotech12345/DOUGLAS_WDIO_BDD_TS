Feature: Verify the parfum page

  @dauglas @parfum
  Scenario Outline: Verify the filter option in Highlights dropdown
    Given User navigates to the application
    When User click on "PARFUM" tab
    Then Verify user on the parfum page
    When I select the "Highlights" dropdown
    Then I select the "<FilterOption>" filter option from the dropdown
    Then Verify the "<FilterOption>" filter is applied

    Examples:
      | FilterOption |
      | Sale         |
      | NEU          |

  @dauglas @negative
  Scenario: Verify the applied filter from Highlights dropdown is incorrect
    Given User navigates to the application
    When User click on "PARFUM" tab
    Then Verify user on the parfum page
    When I select the "Highlights" dropdown
    Then I select the "Sale" filter option from the dropdown
    Then Verify the "NEU" filter is applied
