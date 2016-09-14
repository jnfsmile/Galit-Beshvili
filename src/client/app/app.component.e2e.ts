describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'בשבילי - למצוא את החיים שבתוכך';
    expect(subject).toEqual(result);
  });

  it('should have <md-toolbar>', () => {
    let subject = element(by.css('app md-toolbar')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have <md-content>', () => {
    let subject = element(by.css('app md-content')).isPresent();
    let result  = true;
    expect(subject).toEqual(result);
  });

  it('should have text in footer', () => {
    let subject = element(by.css('app #footerText')).getText();
    let result  = 'בשבילי - למצוא את החיים שבתוכך';
    expect(subject).toEqual(result);
  });

});
