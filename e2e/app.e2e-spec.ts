import { RouterRedirectIssuePage } from './app.po';

describe('router-redirect-issue App', () => {
  let page: RouterRedirectIssuePage;

  beforeEach(() => {
    page = new RouterRedirectIssuePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
