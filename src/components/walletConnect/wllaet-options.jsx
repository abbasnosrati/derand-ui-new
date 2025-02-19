import * as React from "react";
import { useConnect } from "wagmi";
import "../modal/style.css";

export function WalletOptions() {
  const { connectors, connect } = useConnect();

  return (
    <div className="display-wallets">
      {connectors.map((connector) => (
        <WalletOption
          key={connector.uid}
          connector={connector}
          onClick={() => connect({ connector })}
        />
      ))}
    </div>
  );
}

function WalletOption({ connector, onClick }) {
  const [ready, setReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return (
    <div className="wallet">
      <div disabled={!ready} onClick={onClick}>
        {connector.name}
      </div>
    </div>
  );
}
