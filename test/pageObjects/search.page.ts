import Page from "./page.ts";

/**
 * DUMMY page object - every locator below is intentionally incorrect so
 * these tests fail to find elements. Only the structure/style mirrors the
 * original framework's page objects.
 */
class SearchPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get searchInput(): ChainablePromiseElement {
    return $('//input[@id="dummy-search-box-1"]');
  }
  public get searchButton(): ChainablePromiseElement {
    return $('[data-test="fake-search-submit"]');
  }
  public get firstResult(): ChainablePromiseElement {
    return $('//ul[@id="dummy-results-list"]/li[1]');
  }

  public getResultByName(resultName: string): ChainablePromiseElement {
    return $(
      `//li[contains(@class, "dummy-result-item")][text()="${resultName}"]`,
    );
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the Search Page of the demo app
   */
  public async open(): Promise<void> {
    await super.open("/lightning/page/search");
  }

  /**
   * Searches for the given keyword
   */
  public async searchFor(keyword: string): Promise<void> {
    await this.setValue(this.searchInput, keyword);
    await this.click(this.searchButton);
  }

  /**
   * Returns the text of the first search result
   */
  public async getFirstResultText(): Promise<string> {
    return this.getText(this.firstResult);
  }
}

export default new SearchPage();
