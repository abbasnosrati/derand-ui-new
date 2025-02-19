import "./App.css";
import BoxSection from "./components/BoxSection/BoxSection";
import Details from "./components/Details/Deatils";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Main from "./components/MainPage/ConnectWallet/Main";
// import Example from "./components/Example/Example";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { WagmiProvider } from "wagmi";
import { config } from "./components/walletConnect/wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DappNavbar from "./components/DappNavbar/DappNavbar";

function App() {
  const queryClient = new QueryClient();
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={
                  <div className="page-noise ">
                    <div className="content relative flex items-center justify-center">
                      <div className="max-w-[1440px] above-1440:max-w-[1920px] w-full">
                        <Header />
                        {/* <Example /> */}
                        <BoxSection />
                        <Details />
                        <Footer />
                      </div>
                    </div>
                  </div>
                }
              />
              <Route
                path="/dApps"
                element={
                  <div>
                    <DappNavbar />
                    <Main />
                  </div>
                }
              />
            </Routes>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
