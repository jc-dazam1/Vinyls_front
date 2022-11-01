import { browser, by, element, ElementArrayFinder } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(`${browser.baseUrl}premios/list`) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText() as Promise<string>;
  }

  getButtonByText(buttonText: string) {
    return element(by.buttonText(buttonText));
  }

  getButtonById(buttonId: string) {
    return element(by.id(buttonId));
  }

  setInputTextValue(idSelector: string, value: any) {
    element(by.id(idSelector)).sendKeys(value);
  }

  getByTagName(tagName: string) {
    return element.all(by.tagName(tagName));
  }
}
