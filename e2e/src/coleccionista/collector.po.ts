import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(
      `${browser.baseUrl}coleccionistas/list`
    ) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getCollectorCards(): ElementArrayFinder {
    return element.all(by.css('.col.mb-4'));
  }

  getFirstCollector() {
    return element.all(by.css('.col.mb-4')).get(0);
  }

  getButtonByText(buttonText: string) {
    return element(by.buttonText(buttonText));
  }

  getButtonById(buttonId: string) {
    return element(by.id(buttonId));
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
}
