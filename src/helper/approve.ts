import { writeContract } from "@wagmi/core";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../components/walletConnect/wagmi";
import { contractAddress } from "../constants/contractAddress";
import { Address, parseEther } from "viem";
import { getAccount } from "@wagmi/core";
// import { estimateGas } from "@wagmi/core";
import pionAbi from "../abi/pionAbi";

export const approve = async (formValues: any) => {
  const { PIONAmount } = formValues;
  const account = getAccount(config);
  if (!PIONAmount || !account) return false;

  try {
    // const estimate = await estimateGas(config, {
    //   abi: pionAbi,
    //   address: contractAddress.pion,
    //   functionName: "approve",
    //   args: [contractAddress.deRandFeeManagerTestnet, parseEther(PIONAmount)],
    //   account: account.address,
    // });

    const result = await writeContract(config, {
      abi: pionAbi,
      address: contractAddress.pion as Address,
      functionName: "approve",
      args: [
        contractAddress.deRandFeeManagerTestnet as Address,
        parseEther(PIONAmount),
      ],
      account: account.address,
      // estimateGas: estimate,
    });
    await waitForTransactionReceipt(config, {
      hash: result,
    });
  } catch (e) {
    console.log(e);
  }
};
