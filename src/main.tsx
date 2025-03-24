import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./RouteLayout";
import { store } from "./store";
import { Provider } from "react-redux";
import { Toaster } from 'sonner';
// import {AbstraxionProvider} from "@burnt-labs/abstraxion";

// import "@burnt-labs/abstraxion/dist/index.css";
// import "@burnt-labs/ui/dist/index.css";

// const seatContractAddress =
//   "xion1z70cvc08qv5764zeg3dykcyymj5z6nu4sqr7x8vl4zjef2gyp69s9mmdka";

// const legacyConfig = {
//   contracts: [
//     // Usually, you would have a list of different contracts here
//     seatContractAddress,
//     {
//       address: seatContractAddress,
//       amounts: [{ denom: "uxion", amount: "1000000" }],
//     },
//   ],
//   stake: true,
//   bank: [
//     {
//       denom: "uxion",
//       amount: "1000000",
//     },
//   ],
//   // Optional params to activate mainnet config
//   // rpcUrl: "https://rpc.xion-mainnet-1.burnt.com:443",
//   // restUrl: "https://api.xion-mainnet-1.burnt.com:443",
// };

// const treasuryConfig = {
//   treasury: "xion1nn55ch09p4a4z30am967n5n8r75m2ag3s3sujutxfmchhsxqtg3qghdg7h", // Example XION treasury instance for executing seat contract
//   gasPrice: "0.001uxion", // If you feel the need to change the gasPrice when connecting to signer, set this value. Please stick to the string format seen in example
//   // Optional params to activate mainnet config
//   // rpcUrl: "https://rpc.xion-mainnet-1.burnt.com:443",
//   // restUrl: "https://api.xion-mainnet-1.burnt.com:443",
// };

// const treasuryConfig = {
//   treasury: "YOUR_TREASURY_CONTRACT_ADDRESS_HERE",
// }
const router = Router();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    {/* <AbstraxionProvider config={{}}> */}
            
      <Toaster expand visibleToasts={9} position="top-center"  />
      <RouterProvider router={router} />
    {/* </AbstraxionProvider> */}
    </Provider>
  </StrictMode>
);
