import { browser } from 'protractor';
import { HeadTestingPage } from './artista.po';


describe('e2e list of artists', () => {
    let page: HeadTestingPage;
    beforeEach(() => {
        page = new HeadTestingPage();
    });

    it('navigate page list of artist', () => {
        page.navitateToListArtist();
    });

    it('should display page content list artist correctly', () => {
        expect(page.getTitlePageArtistText()).toEqual('List of artists');
    });

    it('should display page one artist', () => {
        expect(page.getCardArtistText()).not.toBe(null);
    });
});
