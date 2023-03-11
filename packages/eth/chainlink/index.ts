import { CHAINLINK_ABI, CHAINLINK_CONTRACTS } from "./constants";
import { Token } from "./types";
import { ethClient } from "../viem";

export async function getPrice(token: Token) {
  const [_roundId, answer, _] = await ethClient.readContract({
    address: CHAINLINK_CONTRACTS[token],
    abi: CHAINLINK_ABI,
    functionName: "latestRoundData",
  });

  return Number(answer) / 10 ** 8;
}
