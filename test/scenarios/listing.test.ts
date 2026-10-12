import LoginPage from "../pageObjects/login.page.ts";
import ListingPage from "../pageObjects/listing.page.ts";
import testData from "../data/testData.ts";

/**
 * These scenarios use intentionally dummy locators and are EXPECTED TO FAIL.
 * They demonstrate the Page Object Model structure without real selectors.
 *
 * EXPECTED RESULT: FAIL (element not found - dummy locators)
 */
describe("Listing Page: [LISTING, DUMMY_LOCATORS]", function () {
  before(async function () {
    await LoginPage.open();
    try {
      await LoginPage.loginAsAdminUser();
    } catch (err) {
      console.log("Login failed (expected without real credentials):", err);
    }
  });

  it("should display the listing title", async function () {
    await ListingPage.open(testData.listing.id);
    await expect(ListingPage.listingTitle).toBeDisplayed();
  });

  it("should add the listing to cart", async function () {
    await ListingPage.addToCart();
    await expect(ListingPage.addToCartButton).not.toBeDisplayed();
  });

  it("should display the listing price", async function () {
    const price = await ListingPage.getPrice();
    expect(price).not.toBe("");
  });
});
