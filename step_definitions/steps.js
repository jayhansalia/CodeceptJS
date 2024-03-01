const { I } = inject();
const MostReadPage = require('../page_objects/mostReadPage');
const LiveStreamPage = require('../page_objects/liveStreamPage');
// Add in your custom step files

Given('Navigate to aljazeera homepage', () => {
  I.amOnPage('/');
});

Then('Most read section is appearing', () => {
  MostReadPage.verifyMostReadSectionDisplay();
});

Then('Most read section is not appearing', () => {
  MostReadPage.verifyMostReadSectionIsNotDisplay();
});

Then('Most read section has 10 articles', async () => {
  MostReadPage.verifyMostReadSectionHas10Articles();
});

Then('Bypass block menu item for Most Read is working fine', async () => {
  MostReadPage.verifyBypassBlockMenuItemOption();
});

Given('Navigate to aljazeera live page', () => {
  LiveStreamPage.navigateToAljazeeraLivePage();
});

Then('Player should be visible in Livestream Player', () => {
  LiveStreamPage.verifyLiveStreamPlayer();
});

Then('Switch Player button should be visible in Livestream Player', () => {
  LiveStreamPage.verifySwitchPlayerButton();
});
