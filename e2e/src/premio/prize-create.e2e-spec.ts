import { AppPage } from './prize.po';
import { browser, logging } from 'protractor';

describe('Test create a prize', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a Prizes List h1', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Prizes List');
  });

  it('should create a prize', () => {
    page.getButtonByText('Create prize').click();
    browser.driver.sleep(2000);
    const prizeName = 'My E2E test prize';
    page.setInputTextValue('name', prizeName);
    page.setInputTextValue('organization', 'A testing organization');
    page.setInputTextValue('description', 'The best of prizes in the World!!');
    page.getButtonById('create-prize-btn').click();
    browser.driver.sleep(2000);
    page.getByTagName('h2').then((el) => {
      el.forEach((el) => {
        if (prizeName == el.getText()) {
          expect(prizeName).toEqual(el.getText());
        }
      });
    });
    browser.driver.sleep(2000);
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
