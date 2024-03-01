Feature: Most Read
  Verify the Most Read section

  Scenario: Most Read section is appearing
    Given Navigate to aljazeera homepage
    Then Most read section is appearing

  Scenario: Most Read section having 10 articles
    Given Navigate to aljazeera homepage
    Then Most read section is appearing
    Then Most read section has 10 articles

  Scenario: Most Read section is not appearing in mobile
    Given Navigate to aljazeera homepage
    Then Most read section is not appearing

  Scenario: Bypass block menu item for Most Read is working
    Given Navigate to aljazeera homepage
    Then Most read section is appearing
    Then Bypass block menu item for Most Read is working fine
