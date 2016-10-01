import { Angular2showcasePage } from './app.po';

describe('angular2showcase App', function() {
  let page: Angular2showcasePage;

  beforeEach(() => {
    page = new Angular2showcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
