import { AJS2OOExamplePage } from './app.po';

describe('ajs2-oo-example App', function() {
  let page: AJS2OOExamplePage;

  beforeEach(() => {
    page = new AJS2OOExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
