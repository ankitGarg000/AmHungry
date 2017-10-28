import { TieupnewPage } from './app.po';

describe('tieupnew App', () => {
  let page: TieupnewPage;

  beforeEach(() => {
    page = new TieupnewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
