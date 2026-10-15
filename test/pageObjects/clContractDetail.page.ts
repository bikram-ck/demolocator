import Page from "./page.ts";

/**
 * CL Contract (loan__Loan_Account__c) detail page - XPath repository.
 *
 * Collected from contract LAI-00000000 (org cl1791526993857). Every primary
 * `xpath` and every entry in `alternates` matched exactly ONE element in that
 * page's HTML. Alternates use ancestor / contains / id-based strategies so
 * you can fall back if the primary ever breaks.
 *
 * FRAME STRUCTURE - every locator below lives inside an iframe:
 *
 *   Lightning page
 *   └─ force-aloha-page > iframe[name^="vfFrameId"]        <- frames.contract
 *       ├─ tabs, buttons, sections, fields (CL Contract Detail)
 *       ├─ iframe[title="loanHeader"]                       <- summary tiles
 *       ├─ iframe[title="loanAlert"]                        <- alerts table
 *       └─ iframe[title="loanParametersContractInlinePage"] <- parameters
 *
 * Switch into the right frame first (see switchToContractFrame /
 * switchToInnerFrame), then use the XPath.
 *
 * Inside these Visualforce frames, anything WebdriverIO runs as page
 * JavaScript fails with "this.each is not a function" (the page's old JS
 * library overrides built-ins). That includes browser.execute(),
 * isDisplayed(), waitForDisplayed(), waitForClickable() and the base Page
 * helpers click() / setValue() / waitForVisible() that use them. Use
 * waitForExist() to wait, and plain element.click() / getText() / setValue().
 *
 * 370 elements.
 */

export type Locator = { xpath: string; alternates: readonly string[] };

/** Frames. The outer frame name has a timestamp suffix, so match its prefix. */
export const frames = {
  contract: '//force-aloha-page//iframe[starts-with(@name, "vfFrameId")]',
  // Inner frames, inside frames.contract:
  loanHeader: '//iframe[@title="loanHeader"]',
  loanAlert: '//iframe[@title="loanAlert"]',
  loanParametersContractInlinePage: '//iframe[@title="loanParametersContractInlinePage"]',
  mintNoLightningWrapperIndicator: '//iframe[@title="mintNoLightningWrapperIndicator"]',
  mfiflexIframeView: '//iframe[@id="mfiflexIframeView"]',
  loanDetailsHelpPage: '//iframe[@title="LoanDetailsHelpPage"]',
  contractHelpPage: '//iframe[@title="ContractHelpPage"]',
  protectHelpPage: '//iframe[@title="ProtectHelpPage"]',
  fundingHelpPage: '//iframe[@title="FundingHelpPage"]',
  activityHelpPage: '//iframe[@title="ActivityHelpPage"]',
  accountBalanceHelpPage: '//iframe[@title="AccountBalanceHelpPage"]',
  delinquentDuesHelpPage: '//iframe[@title="DelinquentDuesHelpPage"]',
  paymentToleranceAndGracePeriodHelpPage: '//iframe[@title="PaymentToleranceAndGracePeriodHelpPage"]',
} as const;

export type InnerFrame = Exclude<keyof typeof frames, "contract">;

/** Tabs across the top of the contract page (RichFaces tab headers). */
export const tabs = {
  // Details
  details: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Details"]',
    alternates: [
      '//td[@id="j_id0:tabdetails_lbl"]',
      '//td[contains(@id, "tabdetails_lbl")]',
    ],
  },
  // Repayment Schedule
  repaymentSchedule: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Repayment Schedule"]',
    alternates: [
      '//td[@id="j_id0:tabContact_lbl"]',
      '//td[contains(@id, "tabContact_lbl")]',
    ],
  },
  // Balance
  balance: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Balance"]',
    alternates: [
      '//td[@id="j_id0:tabBalance_lbl"]',
      '//td[contains(@id, "tabBalance_lbl")]',
    ],
  },
  // Suspended Fees
  suspendedFees: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Suspended Fees"]',
    alternates: [
      '//td[@id="j_id0:tabSuspendedfees_lbl"]',
      '//td[contains(@id, "tabSuspendedfees_lbl")]',
    ],
  },
  // Schedules
  schedules: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Schedules"]',
    alternates: [
      '//td[@id="j_id0:tabSchedule_lbl"]',
      '//td[contains(@id, "tabSchedule_lbl")]',
    ],
  },
  // Collateral
  collateral: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Collateral"]',
    alternates: [
      '//td[@id="j_id0:tabCollateral_lbl"]',
      '//td[contains(@id, "tabCollateral_lbl")]',
    ],
  },
  // Transactions
  transactions: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Transactions"]',
    alternates: [
      '//td[@id="j_id0:tabOtherTransaction_lbl"]',
      '//td[contains(@id, "tabOtherTransaction_lbl")]',
    ],
  },
  // Notes and Attachments
  notesAndAttachments: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Notes and Attachments"]',
    alternates: [
      '//td[@id="j_id0:tabNotes_lbl"]',
      '//td[contains(@id, "tabNotes_lbl")]',
    ],
  },
  // Amortize Balances
  amortizeBalances: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Amortize Balances"]',
    alternates: [
      '//td[@id="j_id0:tabAmortize_lbl"]',
      '//td[contains(@id, "tabAmortize_lbl")]',
    ],
  },
  // Broker
  broker: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Broker"]',
    alternates: [
      '//td[@id="j_id0:tabBrokers_lbl"]',
      '//td[contains(@id, "tabBrokers_lbl")]',
    ],
  },
  // Broker Transaction
  brokerTransaction: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Broker Transaction"]',
    alternates: [
      '//td[@id="j_id0:tabBrokersTransaction_lbl"]',
      '//td[contains(@id, "tabBrokersTransaction_lbl")]',
    ],
  },
  // Contingency Status Codes
  contingencyStatusCodes: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Contingency Status Codes"]',
    alternates: [
      '//td[@id="j_id0:tabBlockCode_lbl"]',
      '//td[contains(@id, "tabBlockCode_lbl")]',
    ],
  },
  // CollateralLiens
  collateralLiens: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="CollateralLiens"]',
    alternates: [
      '//td[@id="j_id0:CollateralLiens_lbl"]',
      '//td[contains(@id, "CollateralLiens_lbl")]',
    ],
  },
  // Protect
  protect: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Protect"]',
    alternates: [
      '//td[@id="j_id0:tabProtectSplits_lbl"]',
      '//td[contains(@id, "tabProtectSplits_lbl")]',
    ],
  },
  // Parties
  parties: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Parties"]',
    alternates: [
      '//td[@id="j_id0:tabParties_lbl"]',
      '//td[contains(@id, "tabParties_lbl")]',
    ],
  },
  // Pre Paid Fee
  prePaidFee: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Pre Paid Fee"]',
    alternates: [
      '//td[@id="j_id0:tabPrePaidFee_lbl"]',
      '//td[contains(@id, "tabPrePaidFee_lbl")]',
    ],
  },
  // Refinance Transactions
  refinanceTransactions: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Refinance Transactions"]',
    alternates: [
      '//td[@id="j_id0:tabRefinanceTxns_lbl"]',
      '//td[contains(@id, "tabRefinanceTxns_lbl")]',
    ],
  },
  // Disbursement Schedule
  disbursementSchedule: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Disbursement Schedule"]',
    alternates: [
      '//td[@id="j_id0:tabDisbSchedule_lbl"]',
      '//td[contains(@id, "tabDisbSchedule_lbl")]',
    ],
  },
  // Payoff Quotes
  payoffQuotes: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Payoff Quotes"]',
    alternates: [
      '//td[@id="j_id0:tabPayOffQuote_lbl"]',
      '//td[contains(@id, "tabPayOffQuote_lbl")]',
    ],
  },
  // Automated Payment Setups
  automatedPaymentSetups: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Automated Payment Setups"]',
    alternates: [
      '//td[@id="j_id0:tabAutmatedPaymentSetup_lbl"]',
      '//td[contains(@id, "tabAutmatedPaymentSetup_lbl")]',
    ],
  },
  // Spread Setup
  spreadSetup: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Spread Setup"]',
    alternates: [
      '//td[@id="j_id0:tabSpread_lbl"]',
      '//td[contains(@id, "tabSpread_lbl")]',
    ],
  },
  // Periodic Fee Setup
  periodicFeeSetup: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Periodic Fee Setup"]',
    alternates: [
      '//td[@id="j_id0:feeSetup_lbl"]',
      '//td[contains(@id, "feeSetup_lbl")]',
    ],
  },
  // Deposit Details
  depositDetails: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Deposit Details"]',
    alternates: [
      '//td[@id="j_id0:tabDepositDetail_lbl"]',
      '//td[contains(@id, "tabDepositDetail_lbl")]',
    ],
  },
  // Prepayment Penalty Details
  prepaymentPenaltyDetails: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Prepayment Penalty Details"]',
    alternates: [
      '//td[@id="j_id0:tabPrepaymentPenalty_lbl"]',
      '//td[contains(@id, "tabPrepaymentPenalty_lbl")]',
    ],
  },
  // Rate Schedule
  rateSchedule: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Rate Schedule"]',
    alternates: [
      '//td[@id="j_id0:tabMultiStepLoanSetup_lbl"]',
      '//td[contains(@id, "tabMultiStepLoanSetup_lbl")]',
    ],
  },
  // Repayment Plan
  repaymentPlan: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Repayment Plan"]',
    alternates: [
      '//td[@id="j_id0:tabRepaymentPlan_lbl"]',
      '//td[contains(@id, "tabRepaymentPlan_lbl")]',
    ],
  },
  // Disbursement Plan
  disbursementPlan: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Disbursement Plan"]',
    alternates: [
      '//td[@id="j_id0:tabDisbursementPlan_lbl"]',
      '//td[contains(@id, "tabDisbursementPlan_lbl")]',
    ],
  },
  // Forecast Stream Configuration
  forecastStreamConfiguration: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Forecast Stream Configuration"]',
    alternates: [
      '//td[@id="j_id0:tabforecast_lbl"]',
      '//td[contains(@id, "tabforecast_lbl")]',
    ],
  },
  // Holiday Schedule
  holidaySchedule: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Holiday Schedule"]',
    alternates: [
      '//td[@id="j_id0:tabHolidaySetup_lbl"]',
      '//td[contains(@id, "tabHolidaySetup_lbl")]',
    ],
  },
  // StepUp Schedule
  stepUpSchedule: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="StepUp Schedule"]',
    alternates: [
      '//td[@id="j_id0:tabstepUp_lbl"]',
      '//td[contains(@id, "tabstepUp_lbl")]',
    ],
  },
  // Funding
  funding: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Funding"]',
    alternates: [
      '//td[@id="j_id0:tabDisbursal_lbl"]',
      '//td[contains(@id, "tabDisbursal_lbl")]',
    ],
  },
  // Charges
  charges: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Charges"]',
    alternates: [
      '//td[@id="j_id0:tabCharge_lbl"]',
      '//td[contains(@id, "tabCharge_lbl")]',
    ],
  },
  // Payment(s)
  paymentS: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Payment(s)"]',
    alternates: [
      '//td[@id="j_id0:tabPayment_lbl"]',
      '//td[contains(@id, "tabPayment_lbl")]',
    ],
  },
  // Interest Postings
  interestPostings: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Interest Postings"]',
    alternates: [
      '//td[@id="j_id0:tabIPT_lbl"]',
      '//td[contains(@id, "tabIPT_lbl")]',
    ],
  },
  // Other(s)
  otherS: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Other(s)"]',
    alternates: [
      '//td[@id="j_id0:tabOthTxn_lbl"]',
      '//td[contains(@id, "tabOthTxn_lbl")]',
    ],
  },
  // Bill(s)
  billS: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Bill(s)"]',
    alternates: [
      '//td[@id="j_id0:tabDue_lbl"]',
      '//td[contains(@id, "tabDue_lbl")]',
    ],
  },
  // Accruals
  accruals: {
    xpath: '//td[contains(@class, "rich-tab-header")][normalize-space()="Accruals"]',
    alternates: [
      '//td[@id="j_id0:tabAccrual_lbl"]',
      '//td[contains(@id, "tabAccrual_lbl")]',
    ],
  },
} as const;

/** Action buttons. Detail-page buttons are scoped to the top button row (they repeat in the bottom row). */
export const buttons = {
  // Regenerate Schedule
  regenerateSchedule: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__regenerate_schedule"]',
    alternates: [
      '(//input[@name="loan__regenerate_schedule"])[1]',
      '//input[@title="Regenerate Schedule"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Regenerate Schedule"]',
    ],
  },
  // Edit Additional Parameters
  editAdditionalParameters: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__edit_additional_parameters"]',
    alternates: [
      '(//input[@name="loan__edit_additional_parameters"])[1]',
      '//input[@title="Edit Additional Parameters"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Edit Additional Parameters"]',
    ],
  },
  // Manage Excess Amount
  manageExcessAmount: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__refund"]',
    alternates: [
      '(//input[@name="loan__refund"])[1]',
      '//input[@title="Manage Excess Amount"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Manage Excess Amount"]',
    ],
  },
  // Reschedule
  reschedule: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__reschedule_loan"]',
    alternates: [
      '(//input[@name="loan__reschedule_loan"])[1]',
      '//input[@title="Reschedule"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Reschedule"]',
    ],
  },
  // Change Payment Amount
  changePaymentAmount: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__change_payment_amount"]',
    alternates: [
      '(//input[@name="loan__change_payment_amount"])[1]',
      '//input[@title="Change Payment Amount"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Change Payment Amount"]',
    ],
  },
  // Set Up Automated Payment
  setUpAutomatedPayment: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__setup_automated_payment"]',
    alternates: [
      '(//input[@name="loan__setup_automated_payment"])[1]',
      '//input[@title="Set Up Automated Payment"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Set Up Automated Payment"]',
    ],
  },
  // Payment Plan
  paymentPlan: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__delinquent_payment_plan"]',
    alternates: [
      '(//input[@name="loan__delinquent_payment_plan"])[1]',
      '//input[@title="Payment Plan"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Payment Plan"]',
    ],
  },
  // Principal Adjustment
  principalAdjustment: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__principal_adjustment"]',
    alternates: [
      '(//input[@name="loan__principal_adjustment"])[1]',
      '//input[@title="Principal Adjustment"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Principal Adjustment"]',
    ],
  },
  // Payment Tolerance Change
  paymentToleranceChange: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__payment_tolerance_change"]',
    alternates: [
      '(//input[@name="loan__payment_tolerance_change"])[1]',
      '//input[@title="Payment Tolerance Change"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Payment Tolerance Change"]',
    ],
  },
  // One Time ACH
  oneTimeACH: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__one_time_ach"]',
    alternates: [
      '(//input[@name="loan__one_time_ach"])[1]',
      '//input[@title="One Time ACH"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="One Time ACH"]',
    ],
  },
  // Recurring ACH
  recurringACH: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__recurring_ach"]',
    alternates: [
      '(//input[@name="loan__recurring_ach"])[1]',
      '//input[@title="Recurring ACH"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Recurring ACH"]',
    ],
  },
  // Suspend Fees
  suspendFees: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__suspend_fees"]',
    alternates: [
      '(//input[@name="loan__suspend_fees"])[1]',
      '//input[@title="Suspend Fees"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Suspend Fees"]',
    ],
  },
  // Transaction Summary
  transactionSummary: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__transaction_summary"]',
    alternates: [
      '(//input[@name="loan__transaction_summary"])[1]',
      '//input[@title="Transaction Summary"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Transaction Summary"]',
    ],
  },
  // Event Reversal
  eventReversal: {
    xpath: '//td[starts-with(@id, "topButtonRow")]//input[@name="loan__event_reversal"]',
    alternates: [
      '(//input[@name="loan__event_reversal"])[1]',
      '//input[@title="Event Reversal"]/ancestor::td[starts-with(@id, "topButtonRow")]//input[@title="Event Reversal"]',
    ],
  },
  // New Contract Party
  newContractParty: {
    xpath: '//input[@type="button"][@value="New Contract Party"]',
    alternates: [
      '//input[@name="new00NgK00004xytYh"]',
      '//input[@title="New Contract Party"]',
      '//input[contains(@value, "New Contract Party")]',
    ],
  },
  // Populate Fees
  populateFees: {
    xpath: '//input[@type="button"][@value="Populate Fees"]',
    alternates: [
      '//input[@name="loan__populate_fees"]',
      '//input[@title="Populate Fees"]',
      '//input[contains(@value, "Populate Fees")]',
    ],
  },
  // New Disbursement Schedule
  newDisbursementSchedule: {
    xpath: '//input[@type="button"][@value="New Disbursement Schedule"]',
    alternates: [
      '//input[@name="new00NgK00004xyt5x"]',
      '//input[@title="New Disbursement Schedule"]',
      '//input[contains(@value, "New Disbursement Schedule")]',
    ],
  },
  // New Payoff Quote
  newPayoffQuote: {
    xpath: '//input[@type="button"][@value="New Payoff Quote"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6Y"]',
      '//input[@title="New Payoff Quote"]',
      '//input[contains(@value, "New Payoff Quote")]',
    ],
  },
  // New Contract Condition
  newContractCondition: {
    xpath: '//input[@type="button"][@value="New Contract Condition"]',
    alternates: [
      '//input[@name="new00NgK00004xyt5s"]',
      '//input[@title="New Contract Condition"]',
      '//input[contains(@value, "New Contract Condition")]',
    ],
  },
  // Add
  add: {
    xpath: '//input[@type="submit"][@value="Add"]',
    alternates: [],
  },
  // Clear
  clear: {
    xpath: '//input[@type="submit"][@value="Clear"]',
    alternates: [],
  },
  // Validate
  validate: {
    xpath: '//input[@type="submit"][@value="Validate"]',
    alternates: [
      '//input[contains(@value, "Validate")]',
    ],
  },
  // Deposit Adjustment
  depositAdjustment: {
    xpath: '//input[@type="submit"][@value="Deposit Adjustment"]',
    alternates: [
      '//input[contains(@value, "Deposit Adjustment")]',
    ],
  },
  // Submit for Approval
  submitForApproval: {
    xpath: '//input[@type="button"][@value="Submit for Approval"]',
    alternates: [
      '//input[@name="piSubmit"]',
      '//input[@title="Submit for Approval"]',
      '//input[contains(@value, "Submit for Approval")]',
    ],
  },
  // Extension
  extension: {
    xpath: '//input[@type="submit"][@value="Extension"]',
    alternates: [
      '//input[@name="loan__extensions"]',
      '//input[@title="Extension"]',
      '//input[contains(@value, "Extension")]',
    ],
  },
  // Regenerate Principal and Interest Payment
  regeneratePrincipalAndInterestPayment: {
    xpath: '//input[@type="submit"][@value="Regenerate Principal and Interest Payment"]',
    alternates: [
      '//input[@name="loan__generate_principal_and_interest_payment"]',
      '//input[@title="Regenerate Principal and Interest Payment"]',
      '//input[contains(@value, "Regenerate Principal and Interest Payment")]',
    ],
  },
  // View All
  viewAll: {
    xpath: '//input[@type="submit"][@value="View All"]',
    alternates: [
      '//input[@name="loan__view_all"]',
      '//input[@title="View All"]',
      '//input[contains(@value, "View All")]',
    ],
  },
  // New Loan Disbursal Transaction
  newLoanDisbursalTransaction: {
    xpath: '//input[@type="button"][@value="New Loan Disbursal Transaction"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6I"]',
      '//input[@title="New Loan Disbursal Transaction"]',
      '//input[contains(@value, "New Loan Disbursal Transaction")]',
    ],
  },
  // Create New Charge
  createNewCharge: {
    xpath: '//input[@type="submit"][@value="Create New Charge"]',
    alternates: [
      '//input[contains(@value, "Create New Charge")]',
    ],
  },
  // Save & New
  saveAndNew: {
    xpath: '//input[@type="submit"][@value="Save & New"]',
    alternates: [
      '//input[contains(@value, "Save & New")]',
    ],
  },
  // New Loan Payment Transaction
  newLoanPaymentTransaction: {
    xpath: '//input[@type="button"][@value="New Loan Payment Transaction"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6L"]',
      '//input[@title="New Loan Payment Transaction"]',
      '//input[contains(@value, "New Loan Payment Transaction")]',
    ],
  },
  // Loan Pay Off
  loanPayOff: {
    xpath: '//input[@type="button"][@value="Loan Pay Off"]',
    alternates: [
      '//input[@name="loan__loan_pay_off"]',
      '//input[@title="Loan Pay Off"]',
      '//input[contains(@value, "Loan Pay Off")]',
    ],
  },
  // Upload Files
  uploadFiles: {
    xpath: '//input[@type="button"][@value="Upload Files"]',
    alternates: [
      '//input[@name="NewFile"]',
      '//input[@title="Upload Files"]',
      '//input[contains(@value, "Upload Files")]',
    ],
  },
  // New Broker
  newBroker: {
    xpath: '//input[@type="button"][@value="New Broker"]',
    alternates: [
      '//input[@name="new00NgK00004xyt5j"]',
      '//input[@title="New Broker"]',
    ],
  },
  // New Broker Transaction
  newBrokerTransaction: {
    xpath: '//input[@type="button"][@value="New Broker Transaction"]',
    alternates: [
      '//input[@name="new00NgK00004xytOu"]',
      '//input[@title="New Broker Transaction"]',
      '//input[contains(@value, "New Broker Transaction")]',
    ],
  },
  // New Contingency Status Code
  newContingencyStatusCode: {
    xpath: '//input[@type="button"][@value="New Contingency Status Code"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6H"]',
      '//input[@title="New Contingency Status Code"]',
      '//input[contains(@value, "New Contingency Status Code")]',
    ],
  },
  // New Collateral Lien
  newCollateralLien: {
    xpath: '//input[@type="button"][@value="New Collateral Lien"]',
    alternates: [
      '//input[@name="new00NgK00004xyvGR"]',
      '//input[@title="New Collateral Lien"]',
      '//input[contains(@value, "New Collateral Lien")]',
    ],
  },
  // New Loan Protect Split
  newLoanProtectSplit: {
    xpath: '//input[@type="button"][@value="New Loan Protect Split"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6O"]',
      '//input[@title="New Loan Protect Split"]',
      '//input[contains(@value, "New Loan Protect Split")]',
    ],
  },
  // New Protect Claim
  newProtectClaim: {
    xpath: '//input[@type="button"][@value="New Protect Claim"]',
    alternates: [
      '//input[@name="new00NgK00004xyt6d"]',
      '//input[@title="New Protect Claim"]',
      '//input[contains(@value, "New Protect Claim")]',
    ],
  },
  // OK
  oK: {
    xpath: '//input[@type="button"][@value="OK"]',
    alternates: [],
  },
  // Fee Setup Save
  feeSetupSave: {
    xpath: '//div[contains(@id, ":feeSetupTable")]//input[@type="submit"][@value="Save"]',
    alternates: [
      '//input[contains(@id, ":feeSetupTable:")][@value="Save"]',
    ],
  },
  // Charge Form Save
  chargeFormSave: {
    xpath: '//form[contains(@id, ":chargeForm")]//input[@type="submit"][@value="Save"]',
    alternates: [],
  },
  // Charge Form Cancel
  chargeFormCancel: {
    xpath: '//form[contains(@id, ":chargeForm")]//input[@type="submit"][@value="Cancel"]',
    alternates: [
      '//form[contains(@id, ":chargeForm")]//input[contains(@id, ":cBtn")]',
    ],
  },
  // Inline Edit Dialog Cancel
  inlineEditDialogCancel: {
    xpath: '//div[@id="InlineEditDialog_buttons"]//input[@value="Cancel"]',
    alternates: [
      '//div[@id="InlineEditDialog"]//input[@type="button"][@value="Cancel"]',
    ],
  },
} as const;

/** Page block titles (h2) inside the tabs. */
export const pageBlockHeaders = {
  // CL Contract Detail
  cLContractDetail: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="CL Contract Detail"]',
    alternates: [],
  },
  // Periodic Fee Setup
  periodicFeeSetup: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Periodic Fee Setup"]',
    alternates: [],
  },
  // Deposit Details
  depositDetails: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Deposit Details"]',
    alternates: [],
  },
  // Prepayment Penalty Details
  prepaymentPenaltyDetails: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Prepayment Penalty Details"]',
    alternates: [],
  },
  // Prepayment Penalty Fees
  prepaymentPenaltyFees: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Prepayment Penalty Fees"]',
    alternates: [],
  },
  // CL Contract History
  cLContractHistory: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="CL Contract History"]',
    alternates: [],
  },
  // Suspended Fees Config
  suspendedFeesConfig: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Suspended Fees Config"]',
    alternates: [],
  },
  // Flexible Rate Schedule
  flexibleRateSchedule: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Flexible Rate Schedule"]',
    alternates: [],
  },
  // Flexible Repayment Plan
  flexibleRepaymentPlan: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Flexible Repayment Plan"]',
    alternates: [],
  },
  // Flexible Disbursement Plan
  flexibleDisbursementPlan: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Flexible Disbursement Plan"]',
    alternates: [],
  },
  // Forecast Stream Configuration
  forecastStreamConfiguration: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Forecast Stream Configuration"]',
    alternates: [],
  },
  // Holiday Schedule
  holidaySchedule: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="Holiday Schedule"]',
    alternates: [],
  },
  // StepUp Schedule
  stepUpSchedule: {
    xpath: '//h2[contains(@class, "mainTitle")][normalize-space()="StepUp Schedule"]',
    alternates: [],
  },
} as const;

/** Collapsible sections on the Details tab (click to expand/collapse). */
export const sections = {
  // Notices:
  notices: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Notices:"]',
    alternates: [
      '//h3[normalize-space()="Notices:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Loan Details:
  loanDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Loan Details:"]',
    alternates: [
      '//h3[normalize-space()="Loan Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Additional Parameters:
  additionalParameters: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Additional Parameters:"]',
    alternates: [
      '//h3[normalize-space()="Additional Parameters:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Contract:
  contract: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Contract:"]',
    alternates: [
      '//h3[normalize-space()="Contract:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Protect:
  protect: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Protect:"]',
    alternates: [
      '//h3[normalize-space()="Protect:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Funding:
  funding: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Funding:"]',
    alternates: [
      '//h3[normalize-space()="Funding:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Activity:
  activity: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Activity:"]',
    alternates: [
      '//h3[normalize-space()="Activity:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Account Balance Details:
  accountBalanceDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Account Balance Details:"]',
    alternates: [
      '//h3[normalize-space()="Account Balance Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Posting and Capitalization Details:
  postingAndCapitalizationDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Posting and Capitalization Details:"]',
    alternates: [
      '//h3[normalize-space()="Posting and Capitalization Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Delinquent Dues:
  delinquentDues: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Delinquent Dues:"]',
    alternates: [
      '//h3[normalize-space()="Delinquent Dues:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Payment Tolerance and Grace Period:
  paymentToleranceAndGracePeriod: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Payment Tolerance and Grace Period:"]',
    alternates: [
      '//h3[normalize-space()="Payment Tolerance and Grace Period:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Deposit Details:
  depositDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Deposit Details:"]',
    alternates: [
      '//h3[normalize-space()="Deposit Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Charge Off Details:
  chargeOffDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Charge Off Details:"]',
    alternates: [
      '//h3[normalize-space()="Charge Off Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Diagnostic Status:
  diagnosticStatus: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Diagnostic Status:"]',
    alternates: [
      '//h3[normalize-space()="Diagnostic Status:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Refinance:
  refinance: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Refinance:"]',
    alternates: [
      '//h3[normalize-space()="Refinance:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Amortization:
  amortization: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Amortization:"]',
    alternates: [
      '//h3[normalize-space()="Amortization:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Recurring ACH Details:
  recurringACHDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Recurring ACH Details:"]',
    alternates: [
      '//h3[normalize-space()="Recurring ACH Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // One time ACH Details:
  oneTimeACHDetails: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="One time ACH Details:"]',
    alternates: [
      '//h3[normalize-space()="One time ACH Details:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Credit Bureau Reporting:
  creditBureauReporting: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Credit Bureau Reporting:"]',
    alternates: [
      '//h3[normalize-space()="Credit Bureau Reporting:"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Disbursal Transaction Distributions
  disbursalTransactionDistributions: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Disbursal Transaction Distributions"]',
    alternates: [
      '//h3[normalize-space()="Disbursal Transaction Distributions"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Information
  information: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Information"]',
    alternates: [
      '//h3[normalize-space()="Information"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Interest & Amount
  interestAndAmount: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Interest & Amount"]',
    alternates: [
      '//h3[normalize-space()="Interest & Amount"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
} as const;

/** Field VALUE cells, located from their label: //td[label]/following-sibling::td[1]. */
export const fields = {
  // Account (section: Loan Details:)
  account: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account"]]/following-sibling::td[1]',
    ],
  },
  // CL Contract ID (section: Loan Details:)
  cLContractID: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="CL Contract ID"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="CL Contract ID"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="CL Contract ID"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "Namej_id0_j_id5")][contains(@id, "_ileinner")]',
    ],
  },
  // Contact (section: Loan Details:)
  contact: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contact"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contact"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contact"]]/following-sibling::td[1]',
    ],
  },
  // Product (section: Loan Details:)
  product: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product"]]/following-sibling::td[1]',
    ],
  },
  // Record Type (section: Loan Details:)
  recordType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Record Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Record Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Record Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "RecordTypej_id0")][contains(@id, "_ileinner")]',
    ],
  },
  // Master Facility (section: Loan Details:)
  masterFacility: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Master Facility"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Master Facility"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Master Facility"]]/following-sibling::td[1]',
    ],
  },
  // Purpose (section: Loan Details:)
  purpose: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Purpose"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Purpose"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Purpose"]]/following-sibling::td[1]',
    ],
  },
  // Product Type (section: Loan Details:)
  productType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Product Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJa")][contains(@id, "_ileinner")]',
    ],
  },
  // Branch (section: Loan Details:)
  branch: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Branch"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Branch"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Branch"]]/following-sibling::td[1]',
    ],
  },
  // Interest Type (section: Loan Details:)
  interestType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFZ")][contains(@id, "_ileinner")]',
    ],
  },
  // Fee Set (section: Loan Details:)
  feeSet: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fee Set"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fee Set"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fee Set"]]/following-sibling::td[1]',
    ],
  },
  // Application Date (section: Loan Details:)
  applicationDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Application Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Application Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Application Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDI")][contains(@id, "_ileinner")]',
    ],
  },
  // Active Investor (section: Loan Details:)
  activeInvestor: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Active Investor"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Active Investor"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Active Investor"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD1")][contains(@id, "_ileinner")]',
    ],
  },
  // Approval Date (section: Loan Details:)
  approvalDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Approval Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Approval Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Approval Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDJ")][contains(@id, "_ileinner")]',
    ],
  },
  // Invalid Data (section: Loan Details:)
  invalidData: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Invalid Data"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Invalid Data"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Invalid Data"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFc")][contains(@id, "_ileinner")]',
    ],
  },
  // Rescheduled (section: Loan Details:)
  rescheduled: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Rescheduled"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Rescheduled"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Rescheduled"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFh")][contains(@id, "_ileinner")]',
    ],
  },
  // Delinquent (section: Loan Details:)
  delinquent: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKX")][contains(@id, "_ileinner")]',
    ],
  },
  // Refinanced (section: Loan Details:)
  refinanced: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Refinanced"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Refinanced"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Refinanced"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJo")][contains(@id, "_ileinner")]',
    ],
  },
  // Change Recurring ACH Terms (section: Loan Details:)
  changeRecurringACHTerms: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Change Recurring ACH Terms"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Change Recurring ACH Terms"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Change Recurring ACH Terms"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDc")][contains(@id, "_ileinner")]',
    ],
  },
  // Matured (section: Loan Details:)
  matured: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Matured"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Matured"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Matured"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKY")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Transaction Type (section: Loan Details:)
  lastTransactionType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuG0")][contains(@id, "_ileinner")]',
    ],
  },
  // Expected Disbursal Date (section: Loan Details:)
  expectedDisbursalDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Expected Disbursal Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Expected Disbursal Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Expected Disbursal Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEW")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Transaction Timestamp (section: Loan Details:)
  lastTransactionTimestamp: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Timestamp"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Timestamp"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Transaction Timestamp"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFz")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Start Date (section: Loan Details:)
  paymentStartDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Start Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Start Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Start Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEX")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Application Order (section: Loan Details:)
  paymentApplicationOrder: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Order"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Order"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Order"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ0")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Application Mode (section: Loan Details:)
  paymentApplicationMode: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Mode"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Mode"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Application Mode"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIz")][contains(@id, "_ileinner")]',
    ],
  },
  // Reschedule Option On Excess Payment (section: Loan Details:)
  rescheduleOptionOnExcessPayment: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Option On Excess Payment"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Option On Excess Payment"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Option On Excess Payment"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJw")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Mode (section: Loan Details:)
  paymentMode: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Mode"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Mode"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Mode"]]/following-sibling::td[1]',
    ],
  },
  // Interest Rate Change Method (section: Loan Details:)
  interestRateChangeMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate Change Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate Change Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate Change Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFO")][contains(@id, "_ileinner")]',
    ],
  },
  // Move Across Months (section: Loan Details:)
  moveAcrossMonths: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Move Across Months"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Move Across Months"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Move Across Months"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIK")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Period Calculation (section: Loan Details:)
  interestPeriodCalculation: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Period Calculation"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Period Calculation"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Period Calculation"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFK")][contains(@id, "_ileinner")]',
    ],
  },
  // Schedule Adjustment Method (section: Loan Details:)
  scheduleAdjustmentMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Schedule Adjustment Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Schedule Adjustment Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Schedule Adjustment Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuK4")][contains(@id, "_ileinner")]',
    ],
  },
  // Contract Tenure (section: Loan Details:)
  contractTenure: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Tenure"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Tenure"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Tenure"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDu")][contains(@id, "_ileinner")]',
    ],
  },
  // Add Fee Amount To Bill (section: Loan Details:)
  addFeeAmountToBill: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Add Fee Amount To Bill"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Add Fee Amount To Bill"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Add Fee Amount To Bill"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD5")][contains(@id, "_ileinner")]',
    ],
  },
  // Tenure Period (section: Loan Details:)
  tenurePeriod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Tenure Period"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Tenure Period"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Tenure Period"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJB")][contains(@id, "_ileinner")]',
    ],
  },
  // Threshold (section: Loan Details:)
  threshold: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEb")][contains(@id, "_ileinner")]',
    ],
  },
  // Threshold Type (section: Loan Details:)
  thresholdType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Threshold Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEa")][contains(@id, "_ileinner")]',
    ],
  },
  // Delinquency Basis (section: Loan Details:)
  delinquencyBasis: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Basis"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Basis"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Basis"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuE8")][contains(@id, "_ileinner")]',
    ],
  },
  // Revolving (section: Loan Details:)
  revolving: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Revolving"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Revolving"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Revolving"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuK0")][contains(@id, "_ileinner")]',
    ],
  },
  // Provision Amount (section: Loan Details:)
  provisionAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Provision Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Provision Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Loan Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Provision Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJi")][contains(@id, "_ileinner")]',
    ],
  },
  // Contract Type (section: Contract:)
  contractType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDv")][contains(@id, "_ileinner")]',
    ],
  },
  // Loan Amount (section: Contract:)
  loanAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Loan Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Loan Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Loan Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuG3")][contains(@id, "_ileinner")]',
    ],
  },
  // Floating Rate Index (section: Contract:)
  floatingRateIndex: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Floating Rate Index"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Floating Rate Index"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Floating Rate Index"]]/following-sibling::td[1]',
    ],
  },
  // Contract Date (section: Contract:)
  contractDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Contract Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEH")][contains(@id, "_ileinner")]',
    ],
  },
  // Index Rate (section: Contract:)
  indexRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Index Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Index Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Index Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDx")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Term (section: Contract:)
  paymentTerm: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Term"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Term"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Term"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIY")][contains(@id, "_ileinner")]',
    ],
  },
  // Margin Rate (section: Contract:)
  marginRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Margin Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Margin Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Margin Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuHr")][contains(@id, "_ileinner")]',
    ],
  },
  // Amortization Term (section: Contract:)
  amortizationTerm: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Term"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Term"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Term"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDF")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Calculation Method (section: Contract:)
  interestCalculationMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Calculation Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Calculation Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Calculation Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuF8")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Only Period (section: Contract:)
  interestOnlyPeriod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Only Period"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Only Period"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Only Period"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFG")][contains(@id, "_ileinner")]',
    ],
  },
  // Time Counting Method (section: Contract:)
  timeCountingMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Time Counting Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Time Counting Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Time Counting Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKJ")][contains(@id, "_ileinner")]',
    ],
  },
  // Actual Interest Only Payments (section: Contract:)
  actualInterestOnlyPayments: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Actual Interest Only Payments"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Actual Interest Only Payments"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Actual Interest Only Payments"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD2")][contains(@id, "_ileinner")]',
    ],
  },
  // Payoff Fee (section: Contract:)
  payoffFee: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Fee"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Fee"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Fee"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ8")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Rate (section: Contract:)
  interestRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDy")][contains(@id, "_ileinner")]',
    ],
  },
  // Pre Bill Days (section: Contract:)
  preBillDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Pre Bill Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Pre Bill Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Pre Bill Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJF")][contains(@id, "_ileinner")]',
    ],
  },
  // Due Day (section: Contract:)
  dueDay: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Due Day"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Due Day"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Due Day"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDw")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Due Days (section: Contract:)
  paymentDueDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Due Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Due Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Due Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ1")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Frequency (section: Contract:)
  paymentFrequency: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Frequency"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Frequency"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Frequency"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEp")][contains(@id, "_ileinner")]',
    ],
  },
  // Accrual Start Date (section: Contract:)
  accrualStartDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCw")][contains(@id, "_ileinner")]',
    ],
  },
  // First Payment Date (section: Contract:)
  firstPaymentDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="First Payment Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="First Payment Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="First Payment Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEh")][contains(@id, "_ileinner")]',
    ],
  },
  // Accrual Start Days (section: Contract:)
  accrualStartDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Start Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCx")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Amount (section: Contract:)
  paymentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIy")][contains(@id, "_ileinner")]',
    ],
  },
  // Accrual Entry Stop Indicator (section: Contract:)
  accrualEntryStopIndicator: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Entry Stop Indicator"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Entry Stop Indicator"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Entry Stop Indicator"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCv")][contains(@id, "_ileinner")]',
    ],
  },
  // Maturity Date (section: Contract:)
  maturityDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Maturity Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Maturity Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Maturity Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFt")][contains(@id, "_ileinner")]',
    ],
  },
  // Accrual Stop Indicator (section: Contract:)
  accrualStopIndicator: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Stop Indicator"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Stop Indicator"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Accrual Stop Indicator"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCy")][contains(@id, "_ileinner")]',
    ],
  },
  // Balloon Payment (section: Contract:)
  balloonPayment: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Payment"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Payment"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Payment"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDO")][contains(@id, "_ileinner")]',
    ],
  },
  // Annualized Effective Interest Rate (section: Contract:)
  annualizedEffectiveInterestRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Annualized Effective Interest Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Annualized Effective Interest Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Annualized Effective Interest Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDH")][contains(@id, "_ileinner")]',
    ],
  },
  // Estimated Interest (section: Contract:)
  estimatedInterest: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Estimated Interest"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Estimated Interest"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Estimated Interest"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFb")][contains(@id, "_ileinner")]',
    ],
  },
  // Migration Date (section: Contract:)
  migrationDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Migration Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Migration Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Migration Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuID")][contains(@id, "_ileinner")]',
    ],
  },
  // Cancellation Tolerance Amount (section: Contract:)
  cancellationToleranceAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Cancellation Tolerance Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Cancellation Tolerance Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Contract:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Cancellation Tolerance Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDX")][contains(@id, "_ileinner")]',
    ],
  },
  // Ignore Waiver For Rebate (section: Protect:)
  ignoreWaiverForRebate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Ignore Waiver For Rebate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Ignore Waiver For Rebate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Ignore Waiver For Rebate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuF1")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Enabled (section: Protect:)
  protectEnabled: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Enabled"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Enabled"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Enabled"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJc")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Borrower Rebate (section: Protect:)
  protectBorrowerRebate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Borrower Rebate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Borrower Rebate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Borrower Rebate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJb")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Type (section: Protect:)
  protectType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJf")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Fee Amount (section: Protect:)
  protectFeeAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJh")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Waiver Type (section: Protect:)
  protectWaiverType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Waiver Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Waiver Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Waiver Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJg")][contains(@id, "_ileinner")]',
    ],
  },
  // Protect Fee Percent (section: Protect:)
  protectFeePercent: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Percent"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Percent"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Protect:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Protect Fee Percent"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJd")][contains(@id, "_ileinner")]',
    ],
  },
  // Funding in Tranches (section: Funding:)
  fundingInTranches: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding in Tranches"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding in Tranches"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding in Tranches"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEr")][contains(@id, "_ileinner")]',
    ],
  },
  // Financed Amount (section: Funding:)
  financedAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Financed Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Financed Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Financed Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEF")][contains(@id, "_ileinner")]',
    ],
  },
  // Draw Billing Method (section: Funding:)
  drawBillingMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Billing Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Billing Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Billing Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJi")][contains(@id, "_ileinner")]',
    ],
  },
  // Amount Funded (section: Funding:)
  amountFunded: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Funded"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Funded"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Funded"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEI")][contains(@id, "_ileinner")]',
    ],
  },
  // Draw Period End Date (section: Funding:)
  drawPeriodEndDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Period End Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Period End Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Draw Period End Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEO")][contains(@id, "_ileinner")]',
    ],
  },
  // Remaining Amount for Funding (section: Funding:)
  remainingAmountForFunding: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Remaining Amount for Funding"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Remaining Amount for Funding"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Remaining Amount for Funding"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJr")][contains(@id, "_ileinner")]',
    ],
  },
  // Repayment Start Basis (section: Funding:)
  repaymentStartBasis: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Repayment Start Basis"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Repayment Start Basis"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Repayment Start Basis"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJt")][contains(@id, "_ileinner")]',
    ],
  },
  // Total Pre-Paid Fees (section: Funding:)
  totalPrePaidFees: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Pre-Paid Fees"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Pre-Paid Fees"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Pre-Paid Fees"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvIO")][contains(@id, "_ileinner")]',
    ],
  },
  // Funding Stop Basis (section: Funding:)
  fundingStopBasis: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding Stop Basis"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding Stop Basis"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Funding Stop Basis"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJl")][contains(@id, "_ileinner")]',
    ],
  },
  // Total Refinance Amount (Actual) (section: Funding:)
  totalRefinanceAmountActual: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Actual)"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Actual)"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Actual)"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKM")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Disbursal Transaction Amount (section: Funding:)
  lastDisbursalTransactionAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFr")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Credit Limit (section: Funding:)
  currentCreditLimit: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Credit Limit"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Credit Limit"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Credit Limit"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuE0")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Disbursal Transaction Date (section: Funding:)
  lastDisbursalTransactionDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Disbursal Transaction Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFs")][contains(@id, "_ileinner")]',
    ],
  },
  // Disbursal Status (section: Funding:)
  disbursalStatus: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Disbursal Status"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Disbursal Status"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Funding:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Disbursal Status"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJh")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Due Date (section: Activity:)
  lastDueDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Due Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Due Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Due Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJO")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Term (section: Activity:)
  currentTerm: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Term"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Term"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Term"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKH")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Interest Rate (section: Activity:)
  lastInterestRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFP")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Due Day (section: Activity:)
  currentDueDay: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Due Day"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Due Day"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Due Day"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEQ")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Accrual Date (section: Activity:)
  lastAccrualDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Accrual Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Accrual Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Accrual Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFn")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Payment Amount (section: Activity:)
  currentPaymentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Payment Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Payment Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Payment Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJE")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Rate Change Date (section: Activity:)
  nextRateChangeDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Rate Change Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Rate Change Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Rate Change Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJk")][contains(@id, "_ileinner")]',
    ],
  },
  // Second Payment Date (section: Activity:)
  secondPaymentDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Second Payment Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Second Payment Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Second Payment Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuK8")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Rate Change Date (section: Activity:)
  lastRateChangeDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Rate Change Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Rate Change Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Rate Change Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJj")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Index Rate (section: Activity:)
  currentIndexRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Index Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Index Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Index Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuF5")][contains(@id, "_ileinner")]',
    ],
  },
  // Paid Off Date (section: Activity:)
  paidOffDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Paid Off Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Paid Off Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Paid Off Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDm")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Interest Rate (section: Activity:)
  currentInterestRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Interest Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Interest Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Interest Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFR")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Payment Amount (section: Activity:)
  lastPaymentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFw")][contains(@id, "_ileinner")]',
    ],
  },
  // Oldest Unpaid Due Date (section: Activity:)
  oldestUnpaidDueDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Oldest Unpaid Due Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Oldest Unpaid Due Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Oldest Unpaid Due Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIo")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Payment Date (section: Activity:)
  lastPaymentDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Payment Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFx")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Due Date (section: Activity:)
  nextDueDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIU")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Commission Payment Date (section: Activity:)
  nextCommissionPaymentDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Commission Payment Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Commission Payment Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Commission Payment Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIP")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Due Generation Date (section: Activity:)
  nextDueGenerationDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Generation Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Generation Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Due Generation Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIT")][contains(@id, "_ileinner")]',
    ],
  },
  // Periodic Fee (section: Activity:)
  periodicFee: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Periodic Fee"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Periodic Fee"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Periodic Fee"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJD")][contains(@id, "_ileinner")]',
    ],
  },
  // Current Maturity Date (section: Activity:)
  currentMaturityDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Maturity Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Maturity Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Current Maturity Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuHw")][contains(@id, "_ileinner")]',
    ],
  },
  // Reschedule Status (section: Activity:)
  rescheduleStatus: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Status"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Status"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Activity:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reschedule Status"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJx")][contains(@id, "_ileinner")]',
    ],
  },
  // Principal/Advance Paid (section: Account Balance Details:)
  principalAdvancePaid: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Paid"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Paid"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Paid"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJV")][contains(@id, "_ileinner")]',
    ],
  },
  // Principal/Advance Remaining (section: Account Balance Details:)
  principalAdvanceRemaining: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Remaining"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Remaining"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Remaining"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJZ")][contains(@id, "_ileinner")]',
    ],
  },
  // Principal Adjustment - Sub (section: Account Balance Details:)
  principalAdjustmentSub: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Sub"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Sub"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Sub"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJR")][contains(@id, "_ileinner")]',
    ],
  },
  // Principal Adjustment - Add (section: Account Balance Details:)
  principalAdjustmentAdd: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Add"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Add"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal Adjustment - Add"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJS")][contains(@id, "_ileinner")]',
    ],
  },
  // Fees Paid (section: Account Balance Details:)
  feesPaid: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Paid"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Paid"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Paid"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEd")][contains(@id, "_ileinner")]',
    ],
  },
  // Fees Remaining (section: Account Balance Details:)
  feesRemaining: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Remaining"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Remaining"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Remaining"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEe")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Paid (section: Account Balance Details:)
  interestPaid: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Paid"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Paid"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Paid"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFH")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Remaining (section: Account Balance Details:)
  interestRemaining: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Remaining"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Remaining"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Remaining"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFV")][contains(@id, "_ileinner")]',
    ],
  },
  // Total Amount Paid (section: Account Balance Details:)
  totalAmountPaid: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Amount Paid"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Amount Paid"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Amount Paid"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyvJx")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Accrued (section: Account Balance Details:)
  interestAccrued: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Accrued"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Accrued"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Accrued"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuF6")][contains(@id, "_ileinner")]',
    ],
  },
  // Excess (section: Account Balance Details:)
  excess: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Excess"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Excess"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Excess"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEV")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Waived (section: Account Balance Details:)
  interestWaived: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Waived"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Waived"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Waived"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFa")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Repayment Amount As Of Today (section: Account Balance Details:)
  nextRepaymentAmountAsOfToday: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Repayment Amount As Of Today"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Repayment Amount As Of Today"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Repayment Amount As Of Today"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIW")][contains(@id, "_ileinner")]',
    ],
  },
  // Reserve Amount for Next Due (section: Account Balance Details:)
  reserveAmountForNextDue: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reserve Amount for Next Due"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reserve Amount for Next Due"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Reserve Amount for Next Due"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJy")][contains(@id, "_ileinner")]',
    ],
  },
  // Uncleared Payment Amount (section: Account Balance Details:)
  unclearedPaymentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Uncleared Payment Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Uncleared Payment Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Account Balance Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Uncleared Payment Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKR")][contains(@id, "_ileinner")]',
    ],
  },
  // Is Interest Posting (section: Posting and Capitalization Details:)
  isInterestPosting: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Interest Posting"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Interest Posting"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Interest Posting"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFg")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Posted (section: Posting and Capitalization Details:)
  interestPosted: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posted"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posted"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posted"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFL")][contains(@id, "_ileinner")]',
    ],
  },
  // Is Capitalization Enabled (section: Posting and Capitalization Details:)
  isCapitalizationEnabled: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Capitalization Enabled"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Capitalization Enabled"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Is Capitalization Enabled"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFf")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Capitalized (section: Posting and Capitalization Details:)
  interestCapitalized: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Capitalized"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Capitalized"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Capitalized"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDb")][contains(@id, "_ileinner")]',
    ],
  },
  // Enable Interest Posting for IO (section: Posting and Capitalization Details:)
  enableInterestPostingForIO: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Posting for IO"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Posting for IO"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Posting for IO"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEU")][contains(@id, "_ileinner")]',
    ],
  },
  // Fees Capitalized (section: Posting and Capitalization Details:)
  feesCapitalized: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Capitalized"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Capitalized"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Fees Capitalized"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDa")][contains(@id, "_ileinner")]',
    ],
  },
  // Enable Interest Capitalization for IO (section: Posting and Capitalization Details:)
  enableInterestCapitalizationForIO: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Capitalization for IO"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Capitalization for IO"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Interest Capitalization for IO"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuET")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Posting Frequency (section: Posting and Capitalization Details:)
  interestPostingFrequency: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Frequency"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Frequency"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Frequency"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFN")][contains(@id, "_ileinner")]',
    ],
  },
  // Enable Fee Capitalization for IO (section: Posting and Capitalization Details:)
  enableFeeCapitalizationForIO: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Fee Capitalization for IO"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Fee Capitalization for IO"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Fee Capitalization for IO"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuES")][contains(@id, "_ileinner")]',
    ],
  },
  // Interest Posting Day (section: Posting and Capitalization Details:)
  interestPostingDay: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Day"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Day"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Posting Day"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFM")][contains(@id, "_ileinner")]',
    ],
  },
  // Principal/Advance Posted (section: Posting and Capitalization Details:)
  principalAdvancePosted: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Posted"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Posted"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Principal/Advance Posted"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJX")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Interest Posting Date (section: Posting and Capitalization Details:)
  nextInterestPostingDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Interest Posting Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Interest Posting Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Interest Posting Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIV")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Interest Posting Date (section: Posting and Capitalization Details:)
  lastInterestPostingDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Posting Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Posting Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Posting and Capitalization Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Interest Posting Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFu")][contains(@id, "_ileinner")]',
    ],
  },
  // Delinquent Amount (section: Delinquent Dues:)
  delinquentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquent Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEA")][contains(@id, "_ileinner")]',
    ],
  },
  // Days Past Due (section: Delinquent Dues:)
  daysPastDue: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Days Past Due"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Days Past Due"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Days Past Due"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIX")][contains(@id, "_ileinner")]',
    ],
  },
  // Delinquency Aging Interval (section: Delinquent Dues:)
  delinquencyAgingInterval: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Aging Interval"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Aging Interval"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Aging Interval"]]/following-sibling::td[1]',
    ],
  },
  // Amount Due Till Current (section: Delinquent Dues:)
  amountDueTillCurrent: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Due Till Current"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Due Till Current"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amount Due Till Current"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDG")][contains(@id, "_ileinner")]',
    ],
  },
  // Total Due Charges (section: Delinquent Dues:)
  totalDueCharges: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Due Charges"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Due Charges"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Due Charges"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKL")][contains(@id, "_ileinner")]',
    ],
  },
  // Status (section: Delinquent Dues:)
  status: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Status"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Status"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Delinquent Dues:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Status"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuGA")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Tolerance End Date (section: Payment Tolerance and Grace Period:)
  paymentToleranceEndDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance End Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance End Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance End Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ4")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Tolerance Start Date (section: Payment Tolerance and Grace Period:)
  paymentToleranceStartDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Start Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Start Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Start Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ7")][contains(@id, "_ileinner")]',
    ],
  },
  // Payoff Tolerance Amount (section: Payment Tolerance and Grace Period:)
  payoffToleranceAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Tolerance Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Tolerance Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payoff Tolerance Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKV")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Tolerance Rate (section: Payment Tolerance and Grace Period:)
  paymentToleranceRate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Rate"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Rate"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ6")][contains(@id, "_ileinner")]',
    ],
  },
  // Delinquency Grace Days (section: Payment Tolerance and Grace Period:)
  delinquencyGraceDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuE9")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Tolerance Fixed Amount (section: Payment Tolerance and Grace Period:)
  paymentToleranceFixedAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Fixed Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Fixed Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Tolerance Fixed Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuJ5")][contains(@id, "_ileinner")]',
    ],
  },
  // Minimum Amount Due (section: Payment Tolerance and Grace Period:)
  minimumAmountDue: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIG")][contains(@id, "_ileinner")]',
    ],
  },
  // Late Charge Grace Days (section: Payment Tolerance and Grace Period:)
  lateChargeGraceDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Late Charge Grace Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Late Charge Grace Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Late Charge Grace Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEs")][contains(@id, "_ileinner")]',
    ],
  },
  // Minimum Amount Due Type (section: Payment Tolerance and Grace Period:)
  minimumAmountDueType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Payment Tolerance and Grace Period:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Amount Due Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIF")][contains(@id, "_ileinner")]',
    ],
  },
  // Deposit Interest Accrued (section: Deposit Details:)
  depositInterestAccrued: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Accrued"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Accrued"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Accrued"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEB")][contains(@id, "_ileinner")]',
    ],
  },
  // Adjust Deposit Amount In Payoff (section: Deposit Details:)
  adjustDepositAmountInPayoff: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Adjust Deposit Amount In Payoff"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Adjust Deposit Amount In Payoff"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Adjust Deposit Amount In Payoff"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD9")][contains(@id, "_ileinner")]',
    ],
  },
  // Deposit Interest Remaining (section: Deposit Details:)
  depositInterestRemaining: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Remaining"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Remaining"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Remaining"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuED")][contains(@id, "_ileinner")]',
    ],
  },
  // Deposit Payment Offset Days (section: Deposit Details:)
  depositPaymentOffsetDays: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Payment Offset Days"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Payment Offset Days"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Payment Offset Days"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEE")][contains(@id, "_ileinner")]',
    ],
  },
  // Deposit Interest Posted (section: Deposit Details:)
  depositInterestPosted: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Posted"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Posted"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Deposit Interest Posted"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuEC")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Deposit Payment Date (section: Deposit Details:)
  nextDepositPaymentDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Deposit Payment Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Deposit Payment Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Deposit Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Deposit Payment Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIS")][contains(@id, "_ileinner")]',
    ],
  },
  // Charged Off Principal (section: Charge Off Details:)
  chargedOffPrincipal: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Principal"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Principal"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Charge Off Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Principal"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDk")][contains(@id, "_ileinner")]',
    ],
  },
  // Charged Off Interest (section: Charge Off Details:)
  chargedOffInterest: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Interest"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Interest"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Charge Off Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Interest"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDj")][contains(@id, "_ileinner")]',
    ],
  },
  // Charged Off Fees (section: Charge Off Details:)
  chargedOffFees: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Fees"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Fees"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Charge Off Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Fees"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDi")][contains(@id, "_ileinner")]',
    ],
  },
  // Charged off Additional Interest (section: Charge Off Details:)
  chargedOffAdditionalInterest: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged off Additional Interest"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged off Additional Interest"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Charge Off Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged off Additional Interest"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDd")][contains(@id, "_ileinner")]',
    ],
  },
  // Charged Off Date (section: Charge Off Details:)
  chargedOffDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Charge Off Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Charged Off Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuDh")][contains(@id, "_ileinner")]',
    ],
  },
  // Total Refinance Amount (Expected) (section: Refinance:)
  totalRefinanceAmountExpected: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Expected)"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Expected)"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Refinance:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Total Refinance Amount (Expected)"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKN")][contains(@id, "_ileinner")]',
    ],
  },
  // Additional Loan Amount (section: Refinance:)
  additionalLoanAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Additional Loan Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Additional Loan Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Refinance:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Additional Loan Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD8")][contains(@id, "_ileinner")]',
    ],
  },
  // Enabled (section: Amortization:)
  enabled: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enabled"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enabled"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Amortization:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Enabled"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFj")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Amortization Date (section: Amortization:)
  nextAmortizationDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Amortization Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Amortization Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Amortization:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Amortization Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuKZ")][contains(@id, "_ileinner")]',
    ],
  },
  // Amortization Method (section: Amortization:)
  amortizationMethod: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Method"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Method"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Amortization:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Method"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFi")][contains(@id, "_ileinner")]',
    ],
  },
  // Amortize Balance Type (section: Amortization:)
  amortizeBalanceType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortize Balance Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortize Balance Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Amortization:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortize Balance Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFl")][contains(@id, "_ileinner")]',
    ],
  },
  // Amortization Frequency (section: Amortization:)
  amortizationFrequency: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Frequency"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Frequency"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Amortization:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Amortization Frequency"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuFk")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Bank (section: Recurring ACH Details:)
  aCHBank: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank"]]/following-sibling::td[1]',
    ],
  },
  // ACH (section: Recurring ACH Details:)
  aCH: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCm")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Routing Number (section: Recurring ACH Details:)
  aCHRoutingNumber: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Routing Number"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Routing Number"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Routing Number"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCo")][contains(@id, "_ileinner")]',
    ],
  },
  // Borrower ACH (section: Recurring ACH Details:)
  borrowerACH: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Borrower ACH"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Borrower ACH"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Borrower ACH"]]/following-sibling::td[1]',
    ],
  },
  // ACH Account Number (section: Recurring ACH Details:)
  aCHAccountNumber: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Number"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Number"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Number"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCc")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Account Type (section: Recurring ACH Details:)
  aCHAccountType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Account Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCd")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Frequency (section: Recurring ACH Details:)
  aCHFrequency: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Frequency"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Frequency"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Frequency"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCk")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Drawer Name (section: Recurring ACH Details:)
  aCHDrawerName: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Drawer Name"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Drawer Name"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Drawer Name"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCh")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Bank Name (section: Recurring ACH Details:)
  aCHBankName: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank Name"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank Name"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Bank Name"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCe")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Relationship Type (section: Recurring ACH Details:)
  aCHRelationshipType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Relationship Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Relationship Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Relationship Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCn")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Start Date (section: Recurring ACH Details:)
  aCHStartDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Start Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Start Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Start Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCq")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Debit Amount (section: Recurring ACH Details:)
  aCHDebitAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCg")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH End Date (section: Recurring ACH Details:)
  aCHEndDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH End Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH End Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH End Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCi")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Next Debit Date (section: Recurring ACH Details:)
  aCHNextDebitDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Next Debit Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Next Debit Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Next Debit Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCl")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Second Debit Date (section: Recurring ACH Details:)
  aCHSecondDebitDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Second Debit Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Second Debit Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Second Debit Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuCp")][contains(@id, "_ileinner")]',
    ],
  },
  // ACH Debit Day (section: Recurring ACH Details:)
  aCHDebitDay: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Day"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Day"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Recurring ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="ACH Debit Day"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuD0")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Routing Number (section: One time ACH Details:)
  oTACHRoutingNumber: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Routing Number"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Routing Number"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Routing Number"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIm")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Account Number (section: One time ACH Details:)
  oTACHAccountNumber: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Number"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Number"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Number"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIZ")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Account Type (section: One time ACH Details:)
  oTACHAccountType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Account Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIa")][contains(@id, "_ileinner")]',
    ],
  },
  // OT Borrower ACH (section: One time ACH Details:)
  oTBorrowerACH: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT Borrower ACH"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT Borrower ACH"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT Borrower ACH"]]/following-sibling::td[1]',
    ],
  },
  // OT ACH Bank Name (section: One time ACH Details:)
  oTACHBankName: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Bank Name"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Bank Name"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Bank Name"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIb")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer Name (section: One time ACH Details:)
  oTACHDrawerName: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Name"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Name"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Name"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIg")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Debit Date (section: One time ACH Details:)
  oTACHDebitDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Debit Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Debit Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Debit Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIc")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer Address Line 1 (section: One time ACH Details:)
  oTACHDrawerAddressLine1: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 1"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 1"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 1"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuId")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Fee Amount (section: One time ACH Details:)
  oTACHFeeAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Fee Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Fee Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Fee Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIj")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer Address Line 2 (section: One time ACH Details:)
  oTACHDrawerAddressLine2: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 2"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 2"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Address Line 2"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIe")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Payment Amount (section: One time ACH Details:)
  oTACHPaymentAmount: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Payment Amount"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Payment Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Payment Amount"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIk")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer City (section: One time ACH Details:)
  oTACHDrawerCity: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer City"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer City"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer City"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIf")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Relationship Type (section: One time ACH Details:)
  oTACHRelationshipType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Relationship Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Relationship Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Relationship Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIl")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer State (section: One time ACH Details:)
  oTACHDrawerState: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer State"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer State"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer State"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIh")][contains(@id, "_ileinner")]',
    ],
  },
  // OT ACH Drawer Zip (section: One time ACH Details:)
  oTACHDrawerZip: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Zip"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Zip"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="One time ACH Details:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="OT ACH Drawer Zip"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIi")][contains(@id, "_ileinner")]',
    ],
  },
  // Portfolio Type (section: Credit Bureau Reporting:)
  portfolioType: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Portfolio Type"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Portfolio Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Portfolio Type"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIB")][contains(@id, "_ileinner")]',
    ],
  },
  // Include In Credit Reporting (section: Credit Bureau Reporting:)
  includeInCreditReporting: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Include In Credit Reporting"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Include In Credit Reporting"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Include In Credit Reporting"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuF3")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment Rating (section: Credit Bureau Reporting:)
  paymentRating: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Rating"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Rating"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment Rating"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIA")][contains(@id, "_ileinner")]',
    ],
  },
  // Account Type Code (section: Credit Bureau Reporting:)
  accountTypeCode: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Type Code"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Type Code"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Type Code"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuI1")][contains(@id, "_ileinner")]',
    ],
  },
  // Payment History (section: Credit Bureau Reporting:)
  paymentHistory: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment History"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment History"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Payment History"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuI9")][contains(@id, "_ileinner")]',
    ],
  },
  // Account Status Code (section: Credit Bureau Reporting:)
  accountStatusCode: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Status Code"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Status Code"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Account Status Code"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuI0")][contains(@id, "_ileinner")]',
    ],
  },
  // Next Credit Bureau Payment Profile Date (section: Credit Bureau Reporting:)
  nextCreditBureauPaymentProfileDate: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Credit Bureau Payment Profile Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Credit Bureau Payment Profile Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Next Credit Bureau Payment Profile Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuIR")][contains(@id, "_ileinner")]',
    ],
  },
  // Date of First Delinquency (section: Credit Bureau Reporting:)
  dateOfFirstDelinquency: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Date of First Delinquency"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Date of First Delinquency"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Date of First Delinquency"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuI8")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Reported Metro2 Date (section: Credit Bureau Reporting:)
  lastReportedMetro2Date: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Reported Metro2 Date"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Reported Metro2 Date"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Reported Metro2 Date"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "00NgK00004xyuI3")][contains(@id, "_ileinner")]',
    ],
  },
  // Created By (section: Credit Bureau Reporting:)
  createdBy: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Created By"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Created By"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Created By"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "CreatedByj_id0_")][contains(@id, "_ileinner")]',
    ],
  },
  // Last Modified By (section: Credit Bureau Reporting:)
  lastModifiedBy: {
    xpath: '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Modified By"]]/following-sibling::td[1]',
    alternates: [
      '//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Modified By"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Credit Bureau Reporting:"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//td[contains(@class, "labelCol")][.//text()[normalize-space()="Last Modified By"]]/following-sibling::td[1]',
      '//div[starts-with(@id, "LastModifiedByj")][contains(@id, "_ileinner")]',
    ],
  },
  // Loan (section: Information)
  loan: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Loan"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Loan"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Information"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Loan"]]/following-sibling::td[1]',
    ],
  },
  // Fee (section: Information)
  fee: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Fee"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Fee"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Information"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Fee"]]/following-sibling::td[1]',
    ],
  },
  // Reference
  reference: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Reference"]]/following-sibling::td[1]',
    alternates: [],
  },
  // Interest Bearing (section: Interest & Amount)
  interestBearing: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Bearing"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Bearing"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Interest & Amount"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Bearing"]]/following-sibling::td[1]',
    ],
  },
  // Interest Rate (3) (section: Interest & Amount)
  interestRate3: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Interest & Amount"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Interest Rate"]]/following-sibling::td[1]',
    ],
  },
  // Accrue Interest From (section: Interest & Amount)
  accrueInterestFrom: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Accrue Interest From"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Accrue Interest From"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Interest & Amount"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Accrue Interest From"]]/following-sibling::td[1]',
    ],
  },
} as const;

/** Summary tiles at the top (frame: loanHeader). */
export const headerTileLabels = {
  // Today's Payoff (approx.)
  todaysPayoffApprox: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Today\'s Payoff (approx.)"]',
    alternates: [],
  },
  // Amount to Current
  amountToCurrent: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Amount to Current"]',
    alternates: [],
  },
  // Oldest Unpaid Due Date
  oldestUnpaidDueDate: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Oldest Unpaid Due Date"]',
    alternates: [],
  },
  // Payment Amount
  paymentAmount: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Payment Amount"]',
    alternates: [],
  },
  // Status
  status: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Status"]',
    alternates: [],
  },
} as const;

/** Summary tile values (frame: loanHeader). */
export const headerTileValues = {
  // Today's Payoff (approx.)
  todaysPayoffApprox: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Today\'s Payoff (approx.)"]/following-sibling::*[contains(@class, "mfHPvalue")][1]',
    alternates: [
      '//td[contains(@class, "mfHPlabelBorder")][.//label[normalize-space()="Today\'s Payoff (approx.)"]]//label[contains(@class, "mfHPvalue")]',
      '//label[contains(@id, ":cvalue1")]',
    ],
  },
  // Amount to Current
  amountToCurrent: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Amount to Current"]/following-sibling::*[contains(@class, "mfHPvalue")][1]',
    alternates: [
      '//td[contains(@class, "mfHPlabelBorder")][.//label[normalize-space()="Amount to Current"]]//label[contains(@class, "mfHPvalue")]',
      '//label[contains(@id, ":cvalue2")]',
    ],
  },
  // Oldest Unpaid Due Date
  oldestUnpaidDueDate: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Oldest Unpaid Due Date"]/following-sibling::*[contains(@class, "mfHPvalue")][1]',
    alternates: [
      '//td[contains(@class, "mfHPlabelBorder")][.//label[normalize-space()="Oldest Unpaid Due Date"]]//label[contains(@class, "mfHPvalue")]',
      '//label[contains(@id, ":cvalue3")]',
    ],
  },
  // Payment Amount
  paymentAmount: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Payment Amount"]/following-sibling::*[contains(@class, "mfHPvalue")][1]',
    alternates: [
      '//td[contains(@class, "mfHPlabelBorder")][.//label[normalize-space()="Payment Amount"]]//label[contains(@class, "mfHPvalue")]',
      '//label[contains(@id, ":cvalue4")]',
    ],
  },
  // Status
  status: {
    xpath: '//label[contains(@class, "mfHPlabel5")][normalize-space()="Status"]/following-sibling::*[contains(@class, "mfHPvalue")][1]',
    alternates: [],
  },
} as const;

/** Alerts table column headers (frame: loanAlert). */
export const alertColumns = {
  // Code
  code: {
    xpath: '//th[normalize-space()="Code"]',
    alternates: [
      '//th[contains(normalize-space(), "Code")]',
    ],
  },
  // Level
  level: {
    xpath: '//th[normalize-space()="Level"]',
    alternates: [
      '//th[contains(normalize-space(), "Level")]',
    ],
  },
  // Alert Message
  alertMessage: {
    xpath: '//th[normalize-space()="Alert Message"]',
    alternates: [
      '//th[contains(normalize-space(), "Alert Message")]',
    ],
  },
} as const;

/** Sections in the Additional Parameters block (frame: loanParametersContractInlinePage). */
export const parameterSections = {
  // End Of Day Parameters
  endOfDayParameters: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="End Of Day Parameters"]',
    alternates: [
      '//div[contains(@class, "pbSubheader")][contains(@title, "End Of Day Parameters")]',
      '//h3[normalize-space()="End Of Day Parameters"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Other Parameters
  otherParameters: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Other Parameters"]',
    alternates: [
      '//div[contains(@class, "pbSubheader")][contains(@title, "Other Parameters")]',
      '//h3[normalize-space()="Other Parameters"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
  // Minimum Interest Parameters
  minimumInterestParameters: {
    xpath: '//div[contains(@class, "pbSubheader")]//h3[normalize-space()="Minimum Interest Parameters"]',
    alternates: [
      '//div[contains(@class, "pbSubheader")][contains(@title, "Minimum Interest Parameters")]',
      '//h3[normalize-space()="Minimum Interest Parameters"]/ancestor::div[contains(@class, "pbSubheader")]',
    ],
  },
} as const;

/** Parameter field VALUE cells (frame: loanParametersContractInlinePage). */
export const parameterFields = {
  // Advance Interest (section: Other Parameters)
  advanceInterest: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Advance Interest"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Advance Interest"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Advance Interest"]]/following-sibling::td[1]',
    ],
  },
  // Apply Payments On Deposit (section: Other Parameters)
  applyPaymentsOnDeposit: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Apply Payments On Deposit"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Apply Payments On Deposit"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Apply Payments On Deposit"]]/following-sibling::td[1]',
    ],
  },
  // Auto Change Deposit Rate (section: Other Parameters)
  autoChangeDepositRate: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Auto Change Deposit Rate"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Auto Change Deposit Rate"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Auto Change Deposit Rate"]]/following-sibling::td[1]',
    ],
  },
  // Balloon Type (section: Other Parameters)
  balloonType: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Type"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Type"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Balloon Type"]]/following-sibling::td[1]',
    ],
  },
  // Collect Advance Interest On Disbursal (section: Other Parameters)
  collectAdvanceInterestOnDisbursal: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Collect Advance Interest On Disbursal"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Collect Advance Interest On Disbursal"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Collect Advance Interest On Disbursal"]]/following-sibling::td[1]',
    ],
  },
  // Enable Forecasting (section: Other Parameters)
  enableForecasting: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Forecasting"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Forecasting"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Forecasting"]]/following-sibling::td[1]',
    ],
  },
  // Manual Loan Closure (section: Other Parameters)
  manualLoanClosure: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Manual Loan Closure"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Manual Loan Closure"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Manual Loan Closure"]]/following-sibling::td[1]',
    ],
  },
  // Days to Payment Amount Change (section: Other Parameters)
  daysToPaymentAmountChange: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Days to Payment Amount Change"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Days to Payment Amount Change"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Days to Payment Amount Change"]]/following-sibling::td[1]',
    ],
  },
  // Enable Delay For Manual Rate Change (section: Other Parameters)
  enableDelayForManualRateChange: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Delay For Manual Rate Change"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Delay For Manual Rate Change"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Enable Delay For Manual Rate Change"]]/following-sibling::td[1]',
    ],
  },
  // Delinquency Grace Amount (section: Other Parameters)
  delinquencyGraceAmount: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Amount"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Delinquency Grace Amount"]]/following-sibling::td[1]',
    ],
  },
  // Skip Amortization Schedule Generation (section: Other Parameters)
  skipAmortizationScheduleGeneration: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Skip Amortization Schedule Generation"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Skip Amortization Schedule Generation"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Skip Amortization Schedule Generation"]]/following-sibling::td[1]',
    ],
  },
  // Variable Rate Based Repayment Schedule (section: Other Parameters)
  variableRateBasedRepaymentSchedule: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Variable Rate Based Repayment Schedule"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Variable Rate Based Repayment Schedule"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Variable Rate Based Repayment Schedule"]]/following-sibling::td[1]',
    ],
  },
  // Retain Future Charges During Payoff (section: Other Parameters)
  retainFutureChargesDuringPayoff: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Retain Future Charges During Payoff"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Retain Future Charges During Payoff"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Other Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Retain Future Charges During Payoff"]]/following-sibling::td[1]',
    ],
  },
  // Minimum Interest Option (section: Minimum Interest Parameters)
  minimumInterestOption: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Option"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Option"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Minimum Interest Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Option"]]/following-sibling::td[1]',
    ],
  },
  // Minimum Interest Amount (section: Minimum Interest Parameters)
  minimumInterestAmount: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Amount"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Amount"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Minimum Interest Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Amount"]]/following-sibling::td[1]',
    ],
  },
  // Minimum Interest Period (In Days) (section: Minimum Interest Parameters)
  minimumInterestPeriodInDays: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (In Days)"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (In Days)"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Minimum Interest Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (In Days)"]]/following-sibling::td[1]',
    ],
  },
  // Minimum Interest Period (Date) (section: Minimum Interest Parameters)
  minimumInterestPeriodDate: {
    xpath: '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (Date)"]]/following-sibling::td[1]',
    alternates: [
      '//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (Date)"]]/following-sibling::td[contains(@class, "dataCol")][1]',
      '//div[contains(@class, "pbSubheader")][.//h3[normalize-space()="Minimum Interest Parameters"]]/following-sibling::div[contains(@class, "pbSubsection")][1]//th[contains(@class, "labelCol")][.//text()[normalize-space()="Minimum Interest Period (Date)"]]/following-sibling::td[1]',
    ],
  },
} as const;
class ClContractDetailPage extends Page {
  /**
   * Returns the element for a locator from this file
   */
  public el(locator: Locator): ChainablePromiseElement {
    return $(locator.xpath);
  }

  /**
   * Switches from the Lightning page into the CL Contract Visualforce frame
   */
  public async switchToContractFrame(): Promise<void> {
    await this.switchToMainPage();
    // Wait first, then look the frame up again: an element fetched before the
    // iframe existed has no id, and switchToFrame() rejects it with
    // "missing 'ELEMENT'" even after waitForExist() succeeds.
    await $(frames.contract).waitForExist({ timeout: 60000 });
    await browser.switchToFrame(await $(frames.contract));
    await this.el(tabs.details).waitForExist({ timeout: 60000 });
  }

  /**
   * Switches into one of the inner frames (e.g. "loanHeader")
   */
  public async switchToInnerFrame(frameName: InnerFrame): Promise<void> {
    await this.switchToContractFrame();
    await $(frames[frameName]).waitForExist({ timeout: 30000 });
    await browser.switchToFrame(await $(frames[frameName]));
  }

  /**
   * Switches back to the top-level Lightning page
   */
  public async switchToMainPage(): Promise<void> {
    // Step out one level at a time; at the top level this is a no-op.
    // Frames are at most two deep (contract frame > inner frame).
    await browser.switchToParentFrame();
    await browser.switchToParentFrame();
  }

  /**
   * Opens a tab on the contract page (call switchToContractFrame first)
   */
  public async openTab(tab: keyof typeof tabs): Promise<void> {
    const element = await this.el(tabs[tab]);
    await element.waitForExist({ timeout: 30000 });
    await element.click();
  }

  /**
   * Reads a field value on the Details tab (call switchToContractFrame first)
   */
  public async getFieldValue(field: keyof typeof fields): Promise<string> {
    const element = await this.el(fields[field]);
    await element.waitForExist({ timeout: 30000 });
    return element.getText();
  }

  /**
   * Reads a summary tile value from the loanHeader frame
   */
  public async getHeaderTileValue(
    tile: keyof typeof headerTileValues,
  ): Promise<string> {
    await this.switchToInnerFrame("loanHeader");
    const element = await this.el(headerTileValues[tile]);
    await element.waitForExist({ timeout: 30000 });
    const value = await element.getText();
    await this.switchToContractFrame();
    return value;
  }
}

export default new ClContractDetailPage();
