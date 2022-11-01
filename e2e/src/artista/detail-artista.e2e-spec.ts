import { browser } from 'protractor';
import { HeadTestingPage } from './artista.po';

describe('e2e detail of artists', () => {
    let page: HeadTestingPage;
    beforeEach(() => {
        page = new HeadTestingPage();
    });

    it('navigate page list of artist', () => {
        page.navitateToDetailArtist();
    });

    it('should display page content detail artist correctly', () => {
        expect(page.getTitlePageDetailArtistText()).not.toBe(null);
    });

    it('should display page title album of detail', () => {
        expect(page.getCardDetailArtistText()).not.toBe(null);
    });
});
