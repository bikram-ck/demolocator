import type { Options } from "@wdio/types";

/**
 * Will only work if the execution is not in Headless mode
 */
const debuggerOnFailure = false;

/**
 * Environment and Execution details
 */
export const isHeadless =
  process.env.HEADLESS === "true" ? "headless" : "disable-infobars";

/**
 * Target environment: "sit" | "sitPartial" (mirrors the original framework's
 * environment naming, pointed here at real Salesforce login domains).
 */
export const environment = process.env.ORG ?? "sit";

/**
 * ---------------------------------------------------------------------------
 * CREDENTIALS ARE READ HERE.
 * They come from environment variables, which are populated from the root
 * ".env" file (copy ".env.example" to ".env" and fill in real values).
 * Never hard-code real credentials in this file.
 * ---------------------------------------------------------------------------
 */
export const demoUsername = process.env.USERNAME ?? "<your-username-here>";
export const demoPassword = process.env.PASSWORD ?? "<your-password-here>";
export const demoMfaSecret = process.env.MFA_SECRET ?? "<your-mfa-secret-here>";

const customReporters: Options.Testrunner["reporters"] = [
  "spec",
  [
    "allure",
    {
      outputDir: "allure-results",
      disableWebdriverStepsReporting: true,
      disableWebdriverScreenshotsReporting: false,
      addConsoleLogs: true,
    },
  ],
];

export const config: Options.Testrunner = {
  /**
   * ====================
   * Runner Configuration
   * ====================
   */
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },

  /**
   * ==================
   * Specify Test Files
   * ==================
   */
  specs: ["./test/scenarios/**/*.ts"],
  exclude: [],

  /**
   * ============
   * Capabilities
   * ============
   */
  maxInstances: 1,

  capabilities: [
    {
      browserName: "chrome",
      "goog:chromeOptions": {
        args: [
          "disable-popup-blocking",
          "disable-notifications",
          isHeadless,
          "--window-size=1920,1080",
        ],
      },
    },
  ],

  /**
   * ===================
   * Test Configurations
   * ===================
   */
  logLevel: "error",
  logLevels: {
    webdriver: "error",
    "@wdio/cli": "error",
    "@wdio/local-runner": "error",
  },

  bail: 0,

  /**
   * Not used directly for navigation - each Page object resolves its own
   * absolute URL via `baseUrl` getter (see test/pageObjects/page.ts and
   * test/config/urls.ts), same pattern as the original framework.
   */
  baseUrl: "http://localhost",

  waitforTimeout: 15000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",

  reporters: customReporters,

  mochaOpts: {
    ui: "bdd",
    timeout: 120000,
  },

  /**
   * =====
   * Hooks
   * =====
   */
  before: async function (/* capabilities, specs */) {
    /**
     * await browser.setWindowSize(1920, 1080)
     */
  },

  /* eslint-disable @typescript-eslint/no-unused-vars */
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries },
  ) {
    if (!passed) {
      await browser.takeScreenshot();
      if (error && debuggerOnFailure && isHeadless !== "headless") {
        console.log(
          "------------------------------- Error ---------------------------------",
        );
        console.log(error);
        console.log(
          "------------------------------- Error ---------------------------------",
        );
        await browser.debug();
      }
    }
  },
  /* eslint-enable @typescript-eslint/no-unused-vars */
};
