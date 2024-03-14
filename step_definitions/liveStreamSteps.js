const { I } = inject();
const LiveStreamPage = require('../page_objects/liveStreamPage');
// Add in your custom step files

Given('Navigate to aljazeera live page', () => {
  LiveStreamPage.navigateToAljazeeraLivePage();
});

Then('Player should be visible in Livestream Player', () => {
  LiveStreamPage.verifyLiveStreamPlayer();
});

Then('Switch Player button should be visible in Livestream Player', () => {
  LiveStreamPage.verifySwitchPlayerButton();
});
