import { Weirdbeard.LifePage } from './app.po';

describe('weirdbeard.life App', () => {
  let page: Weirdbeard.LifePage;

  beforeEach(() => {
    page = new Weirdbeard.LifePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('wb works!');
  });
});
