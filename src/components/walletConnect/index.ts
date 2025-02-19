import { usePublicClient, useWalletClient } from "wagmi";

export const shortenAddress = (address: any) => {
  if (!address) return "";

  const addressStart = address.substring(0, 6);
  const addressEnd = address.substring(address.length - 4);
  return `${addressStart}...${addressEnd}`;
};

export const useWalletSigner = () => {
  return useWalletClient().data;
};

export const useWalletProvider = () => {
  return usePublicClient();
};
