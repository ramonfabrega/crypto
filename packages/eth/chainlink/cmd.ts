import { getPrice } from ".";
import { CHAINLINK_CONTRACTS } from "./constants";
import { Token } from "./types";

const param = process.argv[2].toUpperCase() as Token;

(async () => {
  if (param in CHAINLINK_CONTRACTS) {
    const price = await getPrice(param);
    console.log(`${param}: $${price.toFixed(2)}`);
  } else {
    console.log(`${param} not implemented`);
  }
})();
