import LoginPage from "../pageObjects/login.page.ts";
import HomePage from "../pageObjects/home.page.ts";

/**
 * These scenarios use intentionally dummy locators and are EXPECTED TO FAIL.
 * They demonstrate the Page Object Model structure without real selectors.
 *
 * EXPECTED RESULT: FAIL (element not found - dummy locators)
 */
describe("Home Page: [HOME, DUMMY_LOCATORS]", function () {
  before(async function () {
    await LoginPage.open();
    try {
      await LoginPage.loginAsAdminUser();
    } catch (err) {
      console.log("Login failed (expected without real credentials):", err);
    }
  });

  it("should display the welcome banner", async function () {
    await HomePage.open();
    await expect(HomePage.welcomeBanner).toBeDisplayed();
  });

  it("should open notifications from the home page", async function () {
    await HomePage.openNotifications();
    await expect(HomePage.notificationIcon).toBeDisplayed();
  });
});
