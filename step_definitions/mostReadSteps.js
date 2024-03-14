const { I } = inject();
const MostReadPage = require('../page_objects/mostReadPage');
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

Then('Most read section has {int} articles', async (num) => {
  MostReadPage.verifyMostReadSectionHas10Articles(num);
});

Then('Bypass block menu item for Most Read is working fine and {string} verify', async (value) => {
  MostReadPage.verifyBypassBlockMenuItemOption(value);
});