import { $ } from "@wdio/globals";
import Page from "./page.ts";
import { environment } from "../../wdio.conf.ts";
import users from "../config/users.ts";
import { getCallerParentDirectory } from "../utils/common.utils.ts";
import { TOTP } from "totp-generator";
import { AttributeName, ElementName } from "../enums/common.ts";

/**
 * REAL / FUNCTIONAL page object.
 * Kept identical to the original SFS-Test-Automation login.page.ts - same
 * locators, same TOTP/MFA handling, same login methods - so the login flow
 * genuinely works end to end against Salesforce when real credentials and
 * MFA secret are supplied.
 */
class LoginPage extends Page {
  /**
   * Define selectors using getter methods
   */
  public get inputUsername(): ChainablePromiseElement {
    return $("#username");
  }
  public get inputPassword(): ChainablePromiseElement {
    return $("#password");
  }
  public get btnSubmit(): ChainablePromiseElement {
    return $("#Login");
  }
  public get globalSearch(): ChainablePromiseElement {
    return $('//button[@aria-label="Search"]');
  }
  public get mfaInput(): ChainablePromiseElement {
    return $('//input[contains(@class, "input")]');
  }

  /**
   * Define functional methods
   */

  public open(): Promise<void> {
    return super.open("");
  }

  /**
   * Provides the Org credentials based on the environment value set in wdio.conf.ts
   */
  public get userCredentials(): typeof users.sit | typeof users.sitPartial {
    switch (environment) {
      case "sit":
        return users.sit;
      case "sitPartial":
        return users.sitPartial;
      default:
        throw new Error("Invalid environment");
    }
  }

  /**
   * Login with given credentials
   */
  public async login(loginCredential: {
    username: string;
    password: string;
    mfaSecret?: string;
  }): Promise<boolean> {
    try {
      await this.inputUsername.setValue(loginCredential.username);
      await this.btnSubmit.click();
      await this.inputPassword.setValue(loginCredential.password);
      await this.btnSubmit.click();
      await this.btnSubmit.waitForDisplayed({ reverse: true });
      await (
        await this.getElementWithAttribute({
          elementName: ElementName.h2,
          attributeName: AttributeName.text,
          attributeValue: "Verify Your Identity",
        })
      ).waitForDisplayed({ timeout: 10000 });

      let totp;
      try {
        totp = await this.getTOTP(loginCredential.mfaSecret!);
        await this.mfaInput.setValue(totp);
        const verifyButton = await this.getElementWithAttribute({
          elementName: ElementName.input,
          attributeName: AttributeName.title,
          attributeValue: "Verify",
        });
        await verifyButton.click();
        await verifyButton.waitForDisplayed({ reverse: true });
      } catch (err) {
        console.log(
          "Error while handling MFA, Showing wrong MFA code",
          err,
          "\nRetrying with new MFA code...",
        );
        totp = await this.getTOTP(loginCredential.mfaSecret!);
        await this.mfaInput.setValue(totp);
        const verifyButton = await this.getElementWithAttribute({
          elementName: ElementName.input,
          attributeName: AttributeName.title,
          attributeValue: "Verify",
        });
        await verifyButton.click();
        await verifyButton.waitForDisplayed({ reverse: true });
      }
      return true;
    } catch (err) {
      console.log("Error while logging in:", err);

      try {
        console.log("Checking if already logged in...");
        await browser.switchToFrame(null);

        const isLoggedIn = await this.globalSearch.isExisting();

        if (isLoggedIn) {
          console.log("User already logged in");
          return true;
        }
      } catch (e) {
        console.log("Error while checking existing session (ignored):", e);
      }

      console.log("User is NOT logged in");
      return false;
    }
  }

  /**
   * Login with Loan user. Used for Loan Servicing
   */
  public async loginAsLoanUser(): Promise<void> {
    console.log("Trying login with primary loan User...");

    const isPrimarySuccess = await this.login(this.userCredentials.loanUser);

    if (isPrimarySuccess) {
      console.log("Logged in with primary loan user");
      return;
    }

    await this.open(); // Open login page again before trying secondary admin

    console.log("Primary loan user failed, trying secondary loan user....");

    const isSecondarySuccess = await this.login(this.userCredentials.loanUser2);

    if (isSecondarySuccess) {
      console.log("Logged in with secondary loan user");
      return;
    } else {
      throw new Error("Primary loan user failed, trying second loan user....");
    }
  }

  /**
   * Login with Salescloud user. Used for Oppurtunity to Application Convertion
   */
  public loginAsSalescloudUser(): Promise<boolean> {
    const loginCredential = this.userCredentials.salescloudUser;
    return this.login(loginCredential);
  }

  /**
   * Login with Originate user for Application scripts. Used for Application to Loan Convertion
   */
  public async loginAsOriginateUser(): Promise<void> {
    console.log("Trying login with primary originate User...");

    const isPrimarySuccess = await this.login(
      this.userCredentials.originateUser,
    );

    if (isPrimarySuccess) {
      console.log("Logged in with primary originate user");
      return;
    }

    await this.open(); // Open login page again before trying secondary admin

    console.log(
      "Primary originate user failed, trying secondary originate user....",
    );

    const isSecondarySuccess = await this.login(
      this.userCredentials.originateUser2,
    );

    if (isSecondarySuccess) {
      console.log("Logged in with secondary originate user");
      return;
    } else {
      throw new Error("Both originate user login failed....");
    }
  }

  public loginAsOriginateUserForCase1(): Promise<boolean> {
    const loginCredential = this.userCredentials.originateUserForCase;
    return this.login(loginCredential);
  }

  /**
   * Login with Originate user for Loan Scripts. Used for Application to Loan Convertion
   */
  public loginAsOriginateUserForLoan(): Promise<boolean> {
    const scriptDirectory = getCallerParentDirectory();
    let loginCredential;
    switch (scriptDirectory) {
      case "loanServicing_1":
        loginCredential = this.userCredentials.originateUserForLoan1;
        break;
      case "loanServicing_2":
        loginCredential = this.userCredentials.originateUserForLoan2;
        break;
      case "loanServicing_3":
        loginCredential = this.userCredentials.originateUserForLoan3;
        break;
      default:
        loginCredential = this.userCredentials.originateUserForLoanDefault;
    }
    return this.login(loginCredential);
  }

  /**
   * Login with Originate user for Service Cloud Scripts. Used for Application to Loan Convertion
   */
  public loginAsOriginateUserForCase(): Promise<boolean> {
    const scriptDirectory = getCallerParentDirectory();
    console.log("Script Directory: ", scriptDirectory);
    let loginCredential;
    switch (scriptDirectory) {
      case "serviceCloudDailyScenarios1":
        loginCredential = this.userCredentials.originateUserForCase1;
        break;
      case "serviceCloudDailyScenarios2":
        loginCredential = this.userCredentials.originateUserForCase2;
        break;
      case "serviceCloudDailyScenarios3":
        loginCredential = this.userCredentials.originateUserForCase3;
        break;
      default:
        loginCredential = this.userCredentials.originateUserForCase;
    }
    return this.login(loginCredential);
  }

  /**
   * Login with Originate user for Amend Scripts. Used for Application to Loan Convertion
   */
  public loginAsOriginateUserForAmend(): Promise<boolean> {
    const loginCredential = this.userCredentials.originateUserForAmend;
    return this.login(loginCredential);
  }

  /**
   * Login with Originate user for Balance Transfer scripts. Used for Application to Loan Convertion
   */
  public loginAsOriginateUserForBalanceTransfer(): Promise<boolean> {
    const loginCredential =
      this.userCredentials.originateUserForBalanceTransfer;
    return this.login(loginCredential);
  }

  /**
   * Login with Admin user, falling back to secondary/third admin on failure.
   */
  public async loginAsAdminUser(): Promise<void> {
    console.log("Trying login with primary admin...");

    const isPrimarySuccess = await this.login(this.userCredentials.admin);

    if (isPrimarySuccess) {
      console.log("Logged in with primary admin");
      return;
    }

    await this.open(); // Open login page again before trying secondary admin

    console.log("Primary admin failed, trying secondary admin....");

    const isSecondarySuccess = await this.login(
      this.userCredentials.secondAdmin,
    );

    if (isSecondarySuccess) {
      console.log("Logged in with secondary admin");
      return;
    }

    await this.open(); // Open login page again before trying secondary admin

    console.log("Secondary admin failed, trying third admin....");

    const isThirdAdminSuccess = await this.login(
      this.userCredentials.thirdAdmin,
    );

    if (!isThirdAdminSuccess) {
      throw new Error("All the admin logins failed ❌");
    }

    console.log("Logged in with third admin ✅");
  }

  public loginAsServiceCloudUser(): Promise<boolean> {
    const loginCredential = this.userCredentials.serviceCloudUser;
    return this.login(loginCredential);
  }

  public loginAsNonLegalUser(): Promise<boolean> {
    const loginCredential = this.userCredentials.nonLegalUser;
    return this.login(loginCredential);
  }

  public async getTOTP(mfaSecret: string): Promise<string> {
    /**
     * The totp-generator package may export a function or an object with a `generate` method.
     * Normalize the call and always return the OTP string.
     */

    /* eslint-disable @typescript-eslint/no-explicit-any */
    const generator = (TOTP as any).generate
      ? (TOTP as any).generate
      : (TOTP as any);
    const res = await generator(mfaSecret, { period: 30, digits: 6 });
    if (typeof res === "string") return res;
    if (res && typeof res.otp === "string") return res.otp;
    return String(res);
  }
}

export default new LoginPage();
