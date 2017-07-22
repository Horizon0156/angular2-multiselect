import { Angular2MultiselectPage } from './app.po';

describe('angular2-multiselect App', () => {
  let page: Angular2MultiselectPage;

  beforeEach(() => {
    page = new Angular2MultiselectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
