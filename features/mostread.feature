Feature: Most Read
  Verify the Most Read section

  @Sanity
  Scenario: Most Read section is appearing
    Given Navigate to aljazeera homepage
    Then Most read section is appearing

  @Sanity
  Scenario Outline: Most Read section having 10 articles
    Given Navigate to aljazeera homepage
    Then Most read section is appearing
    Then Most read section has <Number of articles> articles
    Examples:
      | Number of articles |
      | 10                 |

  Scenario: Most Read section is not appearing in mobile
    Given Navigate to aljazeera homepage
    Then Most read section is not appearing

  Scenario: Bypass block menu item for Most Read is working
    Given Navigate to aljazeera homepage
    Then Most read section is appearing
    Then Bypass block menu item for Most Read is working fine and '#most-read-container' verify
