const loadAccount = async () => {
  const RICH_WALLET_PK = "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110";
  if (process.env.NODE_ENV == "test") {
    return RICH_WALLET_PK;
  } else {
    return process.env.PRIVATE_KEY;
  }
};
module.exports.loadAccount = loadAccount;
