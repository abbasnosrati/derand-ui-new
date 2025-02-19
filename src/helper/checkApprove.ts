import { readContract } from "@wagmi/core";
import { config } from "../components/walletConnect/wagmi";
import { contractAddress } from "../constants/contractAddress";
import { getAccount } from "@wagmi/core";
import pionAbi from "../abi/pionAbi";
import BigNumber from "bignumber.js";
import { Address } from "viem";

export function toBN(num: any) {
  return new BigNumber(num);
}

export const toWei = (amount: any, decimals = 18) => {
  const bnAmount = toBN(amount);
  if (bnAmount.isZero()) return 0;
  return bnAmount.multipliedBy(toBN(10).pow(decimals)).toNumber();
};

export const fromWei = (amount: any, decimals = 18) => {
  const bnAmount = toBN(amount);
  if (bnAmount.isZero()) return "0";
  return bnAmount.dividedBy(toBN(10).pow(decimals)).toString();
};

export const checkApprove = async () => {
  const account = getAccount(config);
  try {
    const result = await readContract(config, {
      abi: pionAbi,
      address: contractAddress.pion as Address,
      functionName: "allowance",
      args: [
        account.address as Address,
        contractAddress.deRandFeeManagerTestnet as Address,
      ],
    });
    return fromWei(result);
  } catch {
    return 0;
  }
};
