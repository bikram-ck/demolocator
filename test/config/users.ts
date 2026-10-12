import { demoUsername, demoPassword, demoMfaSecret } from "../../wdio.conf.ts";

/**
 * Credential sets per environment, mirroring the original framework's
 * test/config/users.ts pattern. Values are sourced from wdio.conf.ts, which
 * reads them from environment variables (.env) - see ".env.example" for the
 * placeholders to fill in. Never hard-code real credentials here.
 *
 * All named roles below point at the same placeholder credential since this
 * is a demo - the original framework has a distinct credential per role.
 */
const placeholderCredential = {
  username: demoUsername,
  password: demoPassword,
  mfaSecret: demoMfaSecret,
};

const roleSet = {
  admin: placeholderCredential,
  secondAdmin: placeholderCredential,
  thirdAdmin: placeholderCredential,
  loanUser: placeholderCredential,
  loanUser2: placeholderCredential,
  salescloudUser: placeholderCredential,
  originateUser: placeholderCredential,
  originateUser2: placeholderCredential,
  originateUserForLoanDefault: placeholderCredential,
  originateUserForLoan1: placeholderCredential,
  originateUserForLoan2: placeholderCredential,
  originateUserForLoan3: placeholderCredential,
  originateUserForCase: placeholderCredential,
  originateUserForCase1: placeholderCredential,
  originateUserForCase2: placeholderCredential,
  originateUserForCase3: placeholderCredential,
  originateUserForAmend: placeholderCredential,
  originateUserForBalanceTransfer: placeholderCredential,
  serviceCloudUser: placeholderCredential,
  nonLegalUser: placeholderCredential,
};

export default {
  sit: roleSet,
  sitPartial: roleSet,
};
