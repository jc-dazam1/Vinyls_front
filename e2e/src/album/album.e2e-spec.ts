import { browser } from 'protractor';
import { HeadTestingPage } from './album.po';


describe('e2e list of album', () => {
    let page: HeadTestingPage;
    beforeEach(() => {
        page = new HeadTestingPage();
    });

    it('navigate page list of album', () => {
        page.navitateToListAalbum();
    });

    it('should display page content list album correctly', () => {
        expect(page.getTitlePageAlbumText()).toEqual('Album');
    });

    it('should display page one album', () => {
        expect(page.getCardAlbumText()).not.toBe(null);
    });

    it('should add album', () => {
      page.getButtonByText('Add Album').click();
      browser.driver.sleep(2000);
      page.setInputTextValue('name', 'prueba1');
      page.setInputTextValue('cover', '..///');
      page.setInputTextValue('releaseDate', '03/09/2021');
      page.setInputTextValue('description', 'prueba');
      page.setInputTextValue('genre', 'Rock');
      page.setInputTextValue('recordLabel', 'Sony Music');
      browser.driver.sleep(2000);
      page.getButtonByText('Create').click();
      browser.driver.sleep(2000);
      expect(page.getSuccessCreate()).toEqual('The album is created successfully');
      browser.driver.sleep(2000);
    });
});
