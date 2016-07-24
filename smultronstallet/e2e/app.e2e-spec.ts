import { SmultronstalletPage } from './app.po';

describe('smultronstallet App', function() {
  let page: SmultronstalletPage;

  beforeEach(() => {
    page = new SmultronstalletPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
