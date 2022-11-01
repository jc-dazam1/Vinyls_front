import { AppPage } from './collector.po';
import { browser, logging } from 'protractor';

describe('Test collector detail', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a Collectors List h1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Collectors List');
  });

  it('should have a collector list', () => {
    page.getCollectorCards().then((items) => {
      expect(items.length).toBeGreaterThan(0);
    });
    browser.driver.sleep(1000);
  });

  it('should have Personal Information h1', () => {
    page.getFirstCollector().click();
    expect(page.getTitleText()).toEqual('Personal Information');
    browser.driver.sleep(1000);
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
