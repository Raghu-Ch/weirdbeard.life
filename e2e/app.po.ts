import { browser, by, element } from 'protractor';

export class Weirdbeard.LifePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wb-root h1')).getText();
  }
}
