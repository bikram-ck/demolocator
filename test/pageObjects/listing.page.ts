import Page from "./page.ts";

/**
 * Salesforce Lightning object list view (e.g. Accounts) and the record page
 * opened from it.
 */
class ListingPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get recordTitle(): ChainablePromiseElement {
    return $('//lightning-formatted-text[@slot="primaryField"]');
  }
  public get recordEntityLabel(): ChainablePromiseElement {
    return $("//records-entity-label");
  }

  public getRecordLinkInList(recordName: string): ChainablePromiseElement {
    return $(`//table//th//a[@title="${recordName}"]`);
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the "All" list view of the given object (e.g. "Account").
   * Uses the current Lightning domain, since baseUrl points at the login
   * domain and only applies before login.
   */
  public async open(objectApiName: string): Promise<void> {
    const origin = new URL(await browser.getUrl()).origin;
    await browser.url(
      `${origin}/lightning/o/${objectApiName}/list?filterName=All${objectApiName}s`,
    );
  }

  /**
   * Opens a record from the list view by its name
   */
  public async openRecord(recordName: string): Promise<void> {
    await this.click(this.getRecordLinkInList(recordName));
    await this.waitForVisible(this.recordTitle, 20000);
  }

  /**
   * Returns the record name shown in the record page header
   */
  public async getRecordTitle(): Promise<string> {
    return this.getText(this.recordTitle);
  }
}

export default new ListingPage();
