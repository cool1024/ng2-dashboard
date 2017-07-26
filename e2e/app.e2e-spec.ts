import { DomTestPage } from './app.po';

describe('dom-test App', () => {
  let page: DomTestPage;

  beforeEach(() => {
    page = new DomTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
