import "./App.css";
import { Jetton } from "./components/Jetton";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { CHAIN, TonConnectButton } from "@tonconnect/ui-react";
import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk"

const StyledApp = styled.div`

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }

  min-height: 100vh;
  margin: 0;
  padding: 20px;
`;

const AppContainer = styled.div`
  margin: 0 auto;
`;

function App() {
  const { network } = useTonConnect()

  return (
    <StyledApp>
      <AppContainer>
        <FlexBoxCol>
          <FlexBoxRow>
            <TonConnectButton />
            <Button>
              {network
                ? network === CHAIN.MAINNET
                  ? "mainnet"
                  : "testnet"
                : "N/A"}
            </Button>
          </FlexBoxRow>
          {/* <Jetton /> */}
        </FlexBoxCol>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
