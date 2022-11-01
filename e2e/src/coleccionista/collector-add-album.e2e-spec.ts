import { AppPage } from './collector.po';
import { browser, logging } from 'protractor';

describe('Test add album to collector', () => {
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

  it('should add an album', () => {
    page.getButtonByText('Add Album').click();
    browser.driver.sleep(2000);
    page.setSelectOptionByIndex('album', 1);
    let selectedAlbum = '';
    page.getSelectedText('album').then((text) => {
      selectedAlbum = text;
      console.log(selectedAlbum);
      page.setInputTextValue('price', 50);
      page.setSelectOptionByIndex('status', 1);
      browser.driver.sleep(2000);
      page.getButtonById('add-album-btn').click();
      browser.driver.sleep(2000);
      page.getByTagName('h2').then((el) => {
        el.forEach((el) => {
          if (selectedAlbum.startsWith(el.getText())) {
            expect(selectedAlbum).toContain(el.getText());
          }
        });
      });
      browser.driver.sleep(2000);
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
