import { createWeb3Modal } from "@web3modal/wagmi/react";
import { http, createConfig } from "wagmi";
import { bsc } from "wagmi/chains";
import { walletConnect, injected } from "wagmi/connectors";

const projectId = "9ba1501155f1e72178bc1861538ba8bd";

const metadata = {
  name: "Derand",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

export const config = createConfig({
  chains: [bsc],
  // autoConnect: true,
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
  ],
  transports: {
    [bsc.id]: http(),
  },
});

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});
