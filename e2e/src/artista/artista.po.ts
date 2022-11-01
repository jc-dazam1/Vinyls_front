import { browser, by, element } from 'protractor';

export class HeadTestingPage {
  navitateToListArtist() {
    return browser.get('http://localhost:4200/artistas/list');
  }

  getTitlePageArtistText() {
    return element(by.css('#tituloLista')).getText();
  }

  getCardArtistText() {
    return element(by.css('.col-sm-12.col-md-6.col-lg-2.artista-list__item h2')).getText();
  }

  navitateToDetailArtist() {
    return browser.get('http://localhost:4200/artistas/100');
  }

  getTitlePageDetailArtistText() {
    return element(by.css('#nombreArtista')).getText();
  }

  getCardDetailArtistText() {
    return element(by.css('#titleAlbums')).getText();
  }

}
