/**
 * Base URLs per environment.
 * These point at real Salesforce login endpoints so the login flow in
 * test/pageObjects/login.page.ts is genuinely functional (unlike every other
 * page object in this demo, which intentionally uses dummy locators).
 */
export default {
  sit: "https://login.salesforce.com",
  sitPartial: "https://test.salesforce.com",
};
