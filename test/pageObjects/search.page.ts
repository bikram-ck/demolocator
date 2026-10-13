import Page from "./page.ts";

/**
 * Salesforce Lightning global search (header search bar -> Search Results page).
 */
class SearchPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get globalSearchButton(): ChainablePromiseElement {
    return $('//button[contains(@class, "search-button") and starts-with(@aria-label, "Search")]');
  }
  // The search input lives inside a shadow root, so XPath cannot reach it -
  // the ">>>" deep selector pierces shadow DOM.
  public get searchInput(): ChainablePromiseElement {
    return $('>>>input[type="search"][placeholder="Search..."]');
  }
  public get searchResultsHeader(): ChainablePromiseElement {
    return $('//h1[normalize-space() = "Search Results"]');
  }
  public get firstResult(): ChainablePromiseElement {
    return $(
      '(//table[contains(@class, "forceRecordLayout")]//th//a[@data-refid="recordId"])[1]',
    );
  }

  public getResultByName(resultName: string): ChainablePromiseElement {
    return $(
      `//table[contains(@class, "forceRecordLayout")]//th//a[@data-refid="recordId"][normalize-space() = "${resultName}"]`,
    );
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the global search dialog from the Lightning header
   */
  public async open(): Promise<void> {
    await this.click(this.globalSearchButton);
  }

  /**
   * Searches for the given keyword and waits for the Search Results page
   */
  public async searchFor(keyword: string): Promise<void> {
    await this.setValue(this.searchInput, keyword);
    await browser.keys("Enter");
    await this.waitForVisible(this.searchResultsHeader, 20000);
  }

  /**
   * Returns the text of the first search result
   */
  public async getFirstResultText(): Promise<string> {
    return this.getText(this.firstResult);
  }
}

export default new SearchPage();
