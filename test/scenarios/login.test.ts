import LoginPage from "../pageObjects/login.page.ts";

/**
 * This scenario validates that the REAL login flow (incl. TOTP/MFA) works
 * end to end. Requires valid Salesforce credentials and an MFA secret in
 * the root ".env" file (copy ".env.example" to ".env" and fill in
 * USERNAME / PASSWORD / MFA_SECRET).
 *
 * EXPECTED RESULT: PASS (when valid credentials + MFA secret are supplied)
 */
describe("Login: [LOGIN, SMOKE]", function () {
  it("should open the login page", async function () {
    await LoginPage.open();
    await expect(LoginPage.inputUsername).toBeDisplayed();
  });

  it("should login with valid credentials", async function () {
    await LoginPage.loginAsAdminUser();
  });

  it("should land on the Salesforce home page after login", async function () {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain("lightning");
  });
});
