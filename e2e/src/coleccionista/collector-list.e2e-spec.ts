import { AppPage } from './collector.po';
import { browser, logging } from 'protractor';

describe('Test collector list', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a title', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Collectors List');
  });

  it('should have a collector list', () => {
    page.getCollectorCards().then(function (items) {
      expect(items.length).toBeGreaterThan(0);
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
