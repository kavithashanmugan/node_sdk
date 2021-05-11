const { koi_tools } = require("../index.js");
var ktools = new koi_tools();
require("dotenv").config();
const walletKeyLocation =
  "/Users/makdasebhatu/Documents/my-wallet/Arweave-1/key@2.json";
//var walletKeyLocation = process.env.WALLET_LOCATION;
async function test() {
  await ktools.loadWallet(walletKeyLocation);
  // await testSubmitTrafficLog();
  await testStake();
}
async function testStake() {
  // test 4 - test create stake
  var qty = 1;

  var result = await ktools.stake(qty);

  console.log("transaction.............", result);

  if (typeof result === "undefined" || result === null) {
    throw Error("Failed while attempting to stake");
  }
}
async function testSubmitTrafficLog() {
  let arg = {
    gateWayUrl: "https://arweave.dev/logs/",
    stakeAmount: 2,
  };

  var result = await ktools.submitTrafficLog(arg);

  console.log("transaction", result);
  if (typeof result === "undefined" || result === null) {
    throw Error("Failed while attempting to vote");
  }
}

test();
