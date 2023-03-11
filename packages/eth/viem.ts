import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

// does it make a diff if its a fn? a constant?
export const ethClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
