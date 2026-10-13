import LoginPage from "../pageObjects/login.page.ts";
import SearchPage from "../pageObjects/search.page.ts";
import testData from "../data/testData.ts";

/**
 * Logs in and runs a Salesforce Lightning global search, then verifies the
 * Search Results page lists a matching record. The keyword in
 * test/data/testData.ts must match an existing record in the org.
 *
 * EXPECTED RESULT: PASS (when valid credentials are supplied)
 */
describe("Search Page: [SEARCH, SMOKE]", function () {
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
