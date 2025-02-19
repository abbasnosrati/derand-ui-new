import { writeContract } from "@wagmi/core";
import deRandFeeManagerAbi from "../abi/deRandFeeManagerAbi";
import { waitForTransactionReceipt } from "@wagmi/core";
import { config } from "../components/walletConnect/wagmi";
import { contractAddress } from "../constants/contractAddress";
import { getAccount } from "@wagmi/core";
// import { estimateGas } from "@wagmi/core";
import { Address, parseEther } from "viem";

export const handleDeRandFeeManager = async (formValues: any) => {
  const { dAppContract, executor, chainId, PIONAmount } = formValues;
  const account = getAccount(config);
  if (!dAppContract || !executor || !chainId || !PIONAmount || !account)
    return false;

  try {
    // const estimate = await estimateGas(config, {
    //   abi: deRandFeeManagerAbi as any,
    //   address: contractAddress.deRandFeeManagerTestnet,
    //   functionName: "depositForExecutor",
    //   args: [
    //     dAppContract,
    //     chainId,
    //     "0xa8cf36161298b8D6AE8959938391444D0294b2eA",
    //     parseEther(PIONAmount),
    //   ],
    //   account: account.address,
    // });

    const result = await writeContract(config, {
      abi: deRandFeeManagerAbi,
      address: contractAddress.deRandFeeManagerTestnet as Address,
      functionName: "depositForExecutor",
      args: [
        dAppContract,
        chainId,
        "0xa8cf36161298b8D6AE8959938391444D0294b2eA",
        parseEther(PIONAmount),
      ],
      // value: parseEther(PIONAmount),
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
