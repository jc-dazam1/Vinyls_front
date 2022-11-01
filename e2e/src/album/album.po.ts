import { browser, by, element } from 'protractor';

export class HeadTestingPage {
  navitateToListAalbum() {
    return browser.get('http://localhost:4200/albums/list');
  }

  getTitlePageAlbumText() {
    return element(by.css('#tituloAlbum')).getText();
  }

  getCardAlbumText() {
    return element(by.css('#nameAlbum')).getText();
  }

  navitateToDetailAlbum() {
    return browser.get('http://localhost:4200/albums/100');
  }

  getTitlePageDetailAlbumText() {
    return element(by.css('#nombreAlbum')).getText();
  }

  getCardDetailAlbumText() {
    return element(by.css('#titleArtista')).getText();
  }

  getSuccessCreate(){
    return element(by.css('.toast-bottom-right')).getText();
  }

  getButtonByText(buttonText: string) {
    return element(by.buttonText(buttonText));
  }

  setSelectOptionByIndex(idSelector: string, index: number) {
    var selectDropdownElement = element(by.id(idSelector));
    selectDropdownElement.all(by.tagName('option')).then(function (options) {
      options[index].click();
    });
  }

  getSelectedText(idSelector: string) {
    return element(by.id(idSelector))
      .element(by.css('option:checked'))
      .getText();
  }

  setInputTextValue(idSelector: string, value: any) {
    element(by.id(idSelector)).sendKeys(value);
  }

  getByTagName(tagName: string) {
    return element.all(by.tagName(tagName));
  }

  getButtonById(buttonId: string) {
    return element(by.id(buttonId));
  }
}
