import { browser } from 'protractor';
import { HeadTestingPage } from './album.po';

describe('e2e detail of albums', () => {
    let page: HeadTestingPage;
    beforeEach(() => {
        page = new HeadTestingPage();
    });

    it('navigate page list of albums', () => {
        page.navitateToDetailAlbum();
    });

    it('should display page content detail album correctly', () => {
        expect(page.getTitlePageDetailAlbumText()).not.toBe(null);
    });

    it('should display page title album of detail', () => {
        expect(page.getCardDetailAlbumText()).not.toBe(null);
    });

    it('should add track to album', () => {
      page.getButtonByText('Add Track').click();
      browser.driver.sleep(2000);
      page.setInputTextValue('name', 'track1');
      page.setInputTextValue('duration', '05:40');
      browser.driver.sleep(2000);
      page.getButtonByText('Create').click();
      browser.driver.sleep(2000);
      expect(page.getSuccessCreate()).toEqual('The album is created successfully');
      browser.driver.sleep(2000);
      page.getButtonByText('Cancel').click();
      browser.driver.sleep(2000);
    });
});
