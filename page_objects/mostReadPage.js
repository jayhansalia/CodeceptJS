const { I } = inject();
class MostReadPage {
  constructor() {
    this.mostReadSectionElement = '.trending-articles';
    this.numberOfArticles = '.article-trending__title'
    this.siteLogo = '.site-logo';
    this.menuItem = '.bypass-block-link.hidden--mobile';
  }

  verifyMostReadSectionDisplay() {
    I.seeElement(this.mostReadSectionElement);
  }

  verifyMostReadSectionIsNotDisplay() {
    I.resizeWindow(375, 667)
    I.dontSeeElement(this.mostReadSectionElement);
  }

  async verifyMostReadSectionHas10Articles(number) {
    let numOfElements = await I.grabNumberOfVisibleElements(this.numberOfArticles);
    I.assert(numOfElements, number);
  }

  verifyBypassBlockMenuItemOption(value) {
    I.click(this.siteLogo);
    I.pressKey('Tab')
    I.waitForElement(this.menuItem);
    I.click(this.menuItem);
    I.seeInCurrentUrl(value);
  }
}

module.exports = new MostReadPage();