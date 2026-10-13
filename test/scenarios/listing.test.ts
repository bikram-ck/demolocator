import LoginPage from "../pageObjects/login.page.ts";
import ListingPage from "../pageObjects/listing.page.ts";
import testData from "../data/testData.ts";

/**
 * Logs in, opens the Accounts list view, opens a record from it and verifies
 * the record page. The record name in test/data/testData.ts must exist in
 * the org.
 *
 * EXPECTED RESULT: PASS (when valid credentials are supplied)
 */
describe("Listing Page: [LISTING, SMOKE]", function () {
  before(async function () {
    await LoginPage.open();
    try {
      await LoginPage.loginAsAdminUser();
    } catch (err) {
      console.log("Login failed (expected without real credentials):", err);
    }
  });

  it("should display the record in the list view", async function () {
    await ListingPage.open(testData.listing.objectApiName);
    await expect(
      ListingPage.getRecordLinkInList(testData.listing.itemName),
    ).toBeDisplayed();
  });

  it("should open the record from the list view", async function () {
    await ListingPage.openRecord(testData.listing.itemName);
    await expect(ListingPage.recordEntityLabel).toHaveText(
      testData.listing.objectLabel,
    );
  });

  it("should display the record title", async function () {
    const title = await ListingPage.getRecordTitle();
    expect(title).toBe(testData.listing.itemName);
  });
});
