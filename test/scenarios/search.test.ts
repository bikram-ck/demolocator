import LoginPage from "../pageObjects/login.page.ts";
import SearchPage from "../pageObjects/search.page.ts";
import testData from "../data/testData.ts";

/**
 * These scenarios use intentionally dummy locators and are EXPECTED TO FAIL.
 * They demonstrate the Page Object Model structure without real selectors.
 *
 * EXPECTED RESULT: FAIL (element not found - dummy locators)
 */
describe("Search Page: [SEARCH, DUMMY_LOCATORS]", function () {
  before(async function () {
    await LoginPage.open();
    try {
      await LoginPage.loginAsAdminUser();
    } catch (err) {
      console.log("Login failed (expected without real credentials):", err);
    }
  });

  it("should search for a keyword", async function () {
    await SearchPage.open();
    await SearchPage.searchFor(testData.search.keyword);
    await expect(SearchPage.firstResult).toBeDisplayed();
  });

  it("should display the first result text", async function () {
    const resultText = await SearchPage.getFirstResultText();
    expect(resultText).toContain(testData.search.keyword);
  });
});
