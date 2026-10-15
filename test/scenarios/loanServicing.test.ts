import LoginPage from "../pageObjects/login.page.ts";
import LoanServicingPage from "../pageObjects/loanServicing.page.ts";
import testData from "../data/testData.ts";

/**
 * Logs in, switches to the Loan Servicing app, opens the CL Contracts tab and
 * opens each contract listed in test/data/testData.ts.
 *
 * EXPECTED RESULT: PASS (when valid credentials are supplied)
 */
describe("Loan Servicing: [LOAN_SERVICING, SMOKE]", function () {
  const { appName, tabName, contracts } = testData.loanServicing;

  before(async function () {
    await LoginPage.open();
    await LoginPage.loginAsAdminUser();
  });

  it(`should open the ${appName} app`, async function () {
    await LoanServicingPage.openHome();
    await LoanServicingPage.openApp(appName);
    await expect(LoanServicingPage.getAppName(appName)).toBeDisplayed();
  });

  for (const contract of contracts) {
    it(`should open CL Contract ${contract.number} from the ${tabName} tab`, async function () {
      await LoanServicingPage.openTab(tabName);
      await LoanServicingPage.openContract(contract.number);
      expect(await browser.getUrl()).toContain(
        `/lightning/r/loan__Loan_Account__c/${contract.id}/view`,
      );
      expect(await browser.getTitle()).toContain(contract.number);
    });
  }
});
