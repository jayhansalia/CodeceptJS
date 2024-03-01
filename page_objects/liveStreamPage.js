const { I } = inject();
class LiveStreamPage {
  constructor() {
    this.liveStreamPlayer = '[data-video-id="6319532268112"]';
    this.switchPlayerBtn = '.live-stream-player__audio-link';
  }

  navigateToAljazeeraLivePage() {
    I.amOnPage('/live');
  }

  verifyLiveStreamPlayer() {
    I.seeElement(this.liveStreamPlayer);
  }

  verifySwitchPlayerButton() {
    I.seeElement(this.switchPlayerBtn);
  }
}

module.exports = new LiveStreamPage();