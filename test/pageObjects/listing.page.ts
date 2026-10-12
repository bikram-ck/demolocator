import Page from "./page.ts";

/**
 * DUMMY page object - every locator below is intentionally incorrect so
 * these tests fail to find elements. Only the structure/style mirrors the
 * original framework's page objects.
 */
class ListingPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get listingTitle(): ChainablePromiseElement {
    return $('//h1[@id="dummy-listing-title"]');
  }
  public get addToCartButton(): ChainablePromiseElement {
    return $('[data-test="fake-add-to-cart"]');
  }
  public get priceLabel(): ChainablePromiseElement {
    return $('//span[@class="dummy-price-label"]');
  }

  /**
   * Define functional methods
   */

  /**
   * Opens a specific listing details page by id
   */
  public async open(listingId: string): Promise<void> {
    await super.open(`/lightning/r/Listing/${listingId}/view`);
  }

  /**
   * Adds the current listing to the cart
   */
  public async addToCart(): Promise<void> {
    await this.click(this.addToCartButton);
  }

  /**
   * Returns the displayed price of the listing
   */
  public async getPrice(): Promise<string> {
    return this.getText(this.priceLabel);
  }
}

export default new ListingPage();
