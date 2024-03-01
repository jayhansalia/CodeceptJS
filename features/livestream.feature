Feature: Livestream
  Verify the Livestream

  Scenario: Player is visible in Livestream Player
    Given Navigate to aljazeera live page
    Then Player should be visible in Livestream Player

  Scenario: Switch Player button is visible in Livestream Player
    Given Navigate to aljazeera live page
    Then Switch Player button should be visible in Livestream Player
