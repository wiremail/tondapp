import "./App.css";
import Jetton from "./components/Jetton";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
//import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"

function App() {
  //const { network } = useTonConnect()

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'center', padding: '10px' }}>
        <TonConnectButton />
        {/* <Chip
          size="small"
          variant="outlined"
          label={network
            ? network === CHAIN.MAINNET
              ? "mainnet"
              : "testnet"
            : "N/A"}
          color="success"
        /> */}
      </div>

      <Jetton />
    </>
  );
}

export default App;
