import LoginPage from "../pageObjects/login.page.ts";
import ClContractDetailPage, {
  alertColumns,
  buttons,
  fields,
  headerTileLabels,
  headerTileValues,
  pageBlockHeaders,
  parameterFields,
  parameterSections,
  sections,
  tabs,
  type InnerFrame,
  type Locator,
} from "../pageObjects/clContractDetail.page.ts";
import testData from "../data/testData.ts";

/**
 * Locator health check for test/pageObjects/clContractDetail.page.ts.
 *
 * Opens the CL Contract from test/data/testData.ts and, for every locator,
 * checks in the correct frame that the XPath matches exactly ONE element.
 * Each group is its own test, and a failure lists every broken key with how
 * many elements its XPath matched (0 = not found, 2+ = ambiguous).
 *
 * Alternates are skipped by default to keep the run short; set
 * CHECK_ALTERNATES=true to check them too.
 *
 * EXPECTED RESULT: PASS (when valid credentials are supplied)
 */
const checkAlternates = process.env.CHECK_ALTERNATES === "true";

type Group = {
  name: string;
  frame: "contract" | InnerFrame;
  locators: Record<string, Locator>;
};

const groups: Group[] = [
  { name: "tabs", frame: "contract", locators: tabs },
  { name: "buttons", frame: "contract", locators: buttons },
  { name: "pageBlockHeaders", frame: "contract", locators: pageBlockHeaders },
  { name: "sections", frame: "contract", locators: sections },
  { name: "fields", frame: "contract", locators: fields },
  { name: "headerTileLabels", frame: "loanHeader", locators: headerTileLabels },
  { name: "headerTileValues", frame: "loanHeader", locators: headerTileValues },
  { name: "alertColumns", frame: "loanAlert", locators: alertColumns },
  { name: "parameterSections", frame: "loanParametersContractInlinePage", locators: parameterSections },
  { name: "parameterFields", frame: "loanParametersContractInlinePage", locators: parameterFields },
];

describe("CL Contract Detail locators: [LOCATORS, CL_CONTRACT]", function () {
  const contract = testData.loanServicing.contracts[0];

  before(async function () {
    await LoginPage.open();
    await LoginPage.loginAsAdminUser();
    const origin = new URL(await browser.getUrl()).origin;
    await browser.url(
      `${origin}/lightning/r/loan__Loan_Account__c/${contract.id}/view`,
    );
  });

  for (const group of groups) {
    it(`${group.name} (${Object.keys(group.locators).length}) should each match exactly one element`, async function () {
      this.timeout(600000);
      if (group.frame === "contract") {
        await ClContractDetailPage.switchToContractFrame();
      } else {
        await ClContractDetailPage.switchToInnerFrame(group.frame);
      }

      const broken: string[] = [];
      for (const [key, locator] of Object.entries(group.locators)) {
        const xpaths = checkAlternates
          ? [locator.xpath, ...locator.alternates]
          : [locator.xpath];
        for (const [i, xpath] of xpaths.entries()) {
          const count = (await $$(xpath)).length;
          if (count !== 1) {
            const which = i === 0 ? "xpath" : `alternates[${i - 1}]`;
            broken.push(`${key}.${which} matched ${count}: ${xpath}`);
          }
        }
      }

      console.log(
        `[${group.name}] ${Object.keys(group.locators).length} checked, ${broken.length} broken`,
      );
      expect(broken).toEqual([]);
    });
  }

  after(async function () {
    await ClContractDetailPage.switchToMainPage();
  });
});
