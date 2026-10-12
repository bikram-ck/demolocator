# demo-wdio-framework

A small, lightweight **demo** of the `SFS-Test-Automation` WebdriverIO + TypeScript
framework. It mirrors the original's architecture, naming conventions, POM
pattern, and coding style, but with far fewer files and dummy locators for
everything except login.

> This is a standalone sibling project. The original `SFS-Test-Automation`
> framework was **not** modified.

## Structure

```
demo-wdio-framework/
├── wdio.conf.ts              # WDIO config (reporters, capabilities, hooks)
├── package.json
├── tsconfig.json
├── .env.example               # copy to .env and fill in credentials
├── test/
│   ├── config/
│   │   ├── urls.ts            # base URL per environment
│   │   └── users.ts           # credential sets per environment
│   ├── data/
│   │   └── testData.ts        # static dummy test data
│   ├── enums/
│   │   └── common.ts          # ElementName / AttributeName enums
│   ├── pageObjects/
│   │   ├── page.ts            # base Page class (shared helpers)
│   │   ├── login.page.ts      # REAL - functional login
│   │   ├── home.page.ts       # DUMMY locators
│   │   ├── search.page.ts     # DUMMY locators
│   │   └── listing.page.ts    # DUMMY locators
│   ├── utils/
│   │   └── common.utils.ts    # small helper functions
│   └── scenarios/
│       ├── login.test.ts      # REAL - expected to PASS
│       ├── home.test.ts       # DUMMY - expected to FAIL
│       ├── search.test.ts     # DUMMY - expected to FAIL
│       └── listing.test.ts    # DUMMY - expected to FAIL
```

## What's real vs. dummy

| Area                                  | Status                | Notes                                                                                                                                                                                                                                         |
| ------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `login.page.ts` / `login.test.ts`     | **Real & functional** | Exact copy of the original's locators, TOTP/MFA handling, and login methods (`#username`, `#password`, `#Login`, TOTP via `totp-generator`) against `https://login.salesforce.com`. Logs in successfully with valid credentials + MFA secret. |
| `home.page.ts` / `home.test.ts`       | Dummy                 | All locators are fake (e.g. `#dummy-welcome-banner-1`). Expected to **fail** with element-not-found/timeout errors.                                                                                                                           |
| `search.page.ts` / `search.test.ts`   | Dummy                 | All locators are fake (e.g. `#dummy-search-box-1`). Expected to **fail**.                                                                                                                                                                     |
| `listing.page.ts` / `listing.test.ts` | Dummy                 | All locators are fake (e.g. `#dummy-listing-title`). Expected to **fail**.                                                                                                                                                                    |

## Where to enter credentials

1. Copy `.env.example` to `.env` in this folder.
2. Fill in `USERNAME`, `PASSWORD`, and `MFA_SECRET` (base32 TOTP secret) with
   real Salesforce credentials.
3. Credentials are read in [wdio.conf.ts](wdio.conf.ts) at the clearly marked
   `CREDENTIALS ARE READ HERE` comment block, then flow through
   [test/config/users.ts](test/config/users.ts) into
   [test/pageObjects/login.page.ts](test/pageObjects/login.page.ts) (same
   method names as the original: `loginAsAdminUser()`, `loginAsLoanUser()`,
   `loginAsSalescloudUser()`, etc. - all roles share the one placeholder
   credential in this demo).

```env
ORG=sit
USERNAME=<your-username-here>
PASSWORD=<your-password-here>
MFA_SECRET=<your-mfa-secret-here>
HEADLESS=true
```

`.env` is git-ignored - never commit real credentials.

## Running tests

```bash
npm install
npx wdio run wdio.conf.ts
```

Run just the (real, passing) login spec:

```bash
npm run test:login
```

Run a specific dummy spec (expected to fail):

```bash
npx wdio run wdio.conf.ts --spec test/scenarios/home.test.ts
```

## Reporting

Allure results are written to `allure-results/`:

```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```
