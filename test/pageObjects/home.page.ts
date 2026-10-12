import Page from "./page.ts";

/**
 * DUMMY page object - every locator below is intentionally incorrect so
 * these tests fail to find elements. Only the structure/style mirrors the
 * original framework's home.page.ts.
 */
class HomePage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get welcomeBanner(): ChainablePromiseElement {
    return $('//div[@id="dummy-welcome-banner-1"]');
  }
  public get notificationIcon(): ChainablePromiseElement {
    return $('[data-test="fake-notification-icon"]');
  }

  public getPendingTaskButton(taskIndex: number): ChainablePromiseElement {
    return $(
      `(//button[contains(@class, "dummy-pending-task")])[${taskIndex}]`,
    );
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the Home Page of the demo app
   */
  public async open(): Promise<void> {
    await super.open("/lightning/page/home");
  }

  /**
   * Clicks the notification icon on the home page
   */
  public async openNotifications(): Promise<void> {
    await this.click(this.notificationIcon);
  }

  /**
   * Reads the welcome banner text on the home page
   */
  public async getWelcomeBannerText(): Promise<string> {
    return this.getText(this.welcomeBanner);
  }
}

export default new HomePage();
