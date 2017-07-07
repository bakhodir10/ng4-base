import { NgBasePage } from './app.po';

describe('ng-base App', () => {
  let page: NgBasePage;

  beforeEach(() => {
    page = new NgBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
