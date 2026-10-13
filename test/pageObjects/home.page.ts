import Page from "./page.ts";

/**
 * Salesforce Lightning Home page (Loan Servicing app).
 */
class HomePage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get recentRecordsCard(): ChainablePromiseElement {
    return $(
      '//h2[contains(@class, "header-title-container")][normalize-space() = "Recent Records"]',
    );
  }
  // The button text includes the unread counter (e.g. "0Notifications"), so
  // match on the counter container rather than exact text.
  public get notificationIcon(): ChainablePromiseElement {
    return $('//div[contains(@class, "unsNotificationsCounter")]//button');
  }
  public get notificationsPanelHeader(): ChainablePromiseElement {
    return $(
      '//div[contains(@class, "unsNotificationsPanel")]//h2[contains(@class, "titleName")][normalize-space() = "Notifications"]',
    );
  }

  public getHomeCardHeader(cardTitle: string): ChainablePromiseElement {
    return $(
      `//h2[contains(@class, "header-title-container")][normalize-space() = "${cardTitle}"]`,
    );
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the Lightning Home page on the current (logged-in) domain, since
   * baseUrl points at the login domain and only applies before login.
   */
  public async open(): Promise<void> {
    const origin = new URL(await browser.getUrl()).origin;
    await browser.url(`${origin}/lightning/page/home`);
  }

  /**
   * Clicks the notifications bell in the global header
   */
  public async openNotifications(): Promise<void> {
    await this.click(this.notificationIcon);
  }

  /**
   * Reads the "Recent Records" card header text on the home page
   */
  public async getRecentRecordsCardText(): Promise<string> {
    return this.getText(this.recentRecordsCard);
  }
}

export default new HomePage();
