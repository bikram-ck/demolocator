/**
 * Static demo test data, mirroring the original framework's
 * test/data/defaultData.ts pattern.
 */
export default {
  search: {
    keyword: "Acme",
  },
  listing: {
    objectApiName: "Account",
    objectLabel: "Account",
    itemName: "Acme",
  },
  loanServicing: {
    appName: "Loan Servicing",
    tabName: "CL Contracts",
    // Add more { number, id } entries to open more contracts.
    contracts: [{ number: "LAI-00000000", id: "aKEgK00000dJpF8WAK" }],
  },
};
