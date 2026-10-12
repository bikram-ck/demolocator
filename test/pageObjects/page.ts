import { browser } from "@wdio/globals";
import { environment } from "../../wdio.conf.ts";
import urls from "../config/urls.ts";
import { AttributeName, ElementName } from "../enums/common.ts";

/**
 * Main page object containing all methods, selectors and functionality
 * that is shared across all page objects.
 */
export default class Page {
  public get baseUrl(): string {
    switch (environment) {
      case "sit":
        return urls.sit;
      case "sitPartial":
        return urls.sitPartial;
      default:
        throw new Error("Invalid environment");
    }
  }

  /**
   * Opens a url
   *
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public async open(path: string): Promise<void> {
    await browser.url(`${this.baseUrl}${path}`);
  }

  /**
   * Logs out of the current session.
   */
  public async logout(): Promise<void> {
    await browser.url(`${this.baseUrl}/secur/logout.jsp`);
  }

  /**
   * Clicks an element, waiting for it to be clickable first.
   *
   * @param element locator of the element to click
   */
  public async click(element: ChainablePromiseElement): Promise<void> {
    await (await element).waitForClickable();
    await (await element).click();
  }

  /**
   * Sets the value of an input element, waiting for it to be displayed first.
   *
   * @param element locator of the element
   * @param value value to enter
   */
  public async setValue(
    element: ChainablePromiseElement,
    value: string,
  ): Promise<void> {
    await (await element).waitForDisplayed();
    await (await element).setValue(value);
  }

  /**
   * Waits for an element to be displayed.
   *
   * @param element locator of the element
   * @param timeout timeout in milliseconds
   */
  public async waitForVisible(
    element: ChainablePromiseElement,
    timeout = 10000,
  ): Promise<void> {
    await (await element).waitForDisplayed({ timeout });
  }

  /**
   * Scrolls an element into view.
   *
   * @param element locator of the element
   */
  public async scrollIntoView(element: ChainablePromiseElement): Promise<void> {
    await (await element).scrollIntoView();
  }

  /**
   * Returns the visible text of an element.
   *
   * @param element locator of the element
   */
  public async getText(element: ChainablePromiseElement): Promise<string> {
    return (await element).getText();
  }

  /**
   * Returns a basic xpath for an element with the given attribute
   *
   * @param attributeName attribute name of the element
   * @param attributeValue attribute value of the element
   */
  public async getElementWithAttribute({
    elementName,
    attributeName,
    attributeValue,
  }: {
    elementName?: ElementName | "*";
    attributeName: AttributeName;
    attributeValue: string;
  }): Promise<WebdriverIO.Element> {
    elementName = elementName === undefined ? "*" : elementName;

    if (attributeName === AttributeName.text) {
      const el = await $(`//${elementName}[text() = "${attributeValue}"]`);
      return el;
    } else {
      const el = await $(
        `//${elementName}[@${attributeName} = "${attributeValue}"]`,
      );
      return el;
    }
  }
}
