import LoginPage from "../pageObjects/login.page.ts";
import HomePage from "../pageObjects/home.page.ts";

/**
 * Logs in and verifies the Salesforce Lightning Home page loads and the
 * global header notifications button works.
 *
 * EXPECTED RESULT: PASS (when valid credentials are supplied)
 */
describe("Home Page: [HOME, SMOKE]", function () {
  before(async function () {
    await LoginPage.open();
    try {
      await LoginPage.loginAsAdminUser();
    } catch (err) {
      console.log("Login failed (expected without real credentials):", err);
    }
  });

  it("should display the Recent Records card", async function () {
    await HomePage.open();
    await expect(HomePage.recentRecordsCard).toBeDisplayed();
  });

  it("should open notifications from the home page", async function () {
    await HomePage.openNotifications();
    await expect(HomePage.notificationsPanelHeader).toBeDisplayed();
  });
});
