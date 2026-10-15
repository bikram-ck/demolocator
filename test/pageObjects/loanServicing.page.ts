import Page from "./page.ts";

/**
 * Salesforce Lightning navigation for the Loan Servicing app:
 * App Launcher -> app -> nav tab (e.g. CL Contracts) -> contract record.
 */
class LoanServicingPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get appLauncherButton(): ChainablePromiseElement {
    return $('//button[@title="App Launcher"]');
  }
  public get appLauncherSearch(): ChainablePromiseElement {
    return $('//input[contains(@placeholder, "Search apps")]');
  }
  public get listSearchInput(): ChainablePromiseElement {
    return $('//input[contains(@placeholder, "Search this list")]');
  }

  public getAppLauncherItem(appName: string): ChainablePromiseElement {
    return $(`//one-app-launcher-menu-item//a[@data-label="${appName}"]`);
  }
  public getAppName(appName: string): ChainablePromiseElement {
    return $(`//h1[contains(@class, "appName")]//span[@title="${appName}"]`);
  }
  public getNavTab(tabName: string): ChainablePromiseElement {
    return $(`//one-app-nav-bar-item-root//a[@title="${tabName}"]`);
  }
  public getContractLink(contractNumber: string): ChainablePromiseElement {
    return $(`//table//th//a[@title="${contractNumber}"]`);
  }

  /**
   * Define functional methods
   */

  /**
   * Opens the Lightning Home page on the current (logged-in) domain, since
   * baseUrl points at the login domain and only applies before login.
   */
  public async openHome(): Promise<void> {
    const origin = new URL(await browser.getUrl()).origin;
    await browser.url(`${origin}/lightning/page/home`);
  }

  /**
   * Switches to the given app through the App Launcher
   */
  public async openApp(appName: string): Promise<void> {
    await this.click(this.appLauncherButton);
    await this.setValue(this.appLauncherSearch, appName);
    await this.waitForVisible(this.getAppLauncherItem(appName));
    // A regular click on the launcher item fails inside Salesforce's shadow
    // DOM ("reading 'defaultView'"); Enter selects the highlighted match.
    await browser.keys("Enter");
    await this.waitForVisible(this.getAppName(appName), 30000);
  }

  /**
   * Opens a tab from the app's navigation bar
   */
  public async openTab(tabName: string): Promise<void> {
    const tab = this.getNavTab(tabName);
    await this.waitForVisible(tab);
    // Same shadow DOM click issue as the launcher item, so click via JS.
    await browser.execute((el) => (el as unknown as HTMLElement).click(), await tab);
    await this.waitForVisible(this.listSearchInput, 30000);
  }

  /**
   * Searches the current list view for the contract and opens it
   */
  public async openContract(contractNumber: string): Promise<void> {
    await this.setValue(this.listSearchInput, contractNumber);
    await browser.keys("Enter");
    await this.click(this.getContractLink(contractNumber));
    await browser.waitUntil(
      async () => (await browser.getTitle()).includes(contractNumber),
      {
        timeout: 30000,
        timeoutMsg: `Contract page for ${contractNumber} did not load`,
      },
    );
  }
}

export default new LoanServicingPage();
