// import { useState, useEffect, useCallback } from "react";
// import { Abstraxion, useAbstraxionAccount, useModal } from "@burnt-labs/abstraxion";
// import { useKeplr } from "@/hooks/useKeplr";
// import { useWalletAuthMutation } from "@/api/authService";
// import { useAppDispatch, useAppSelector } from "@/store";
// import { setAuthenticated } from "@/features/authSlice";
// import AuthStore from "@/utils/AuthStore";
// import { useToast } from "@/hooks/useToast";

// //? npm i @burnt-labs/ui  --force
// //? npm i @burnt-labs/abstraxion --force
// export function useWallet() {
//     const dispatch = useAppDispatch();
//     const toast = useToast();
//     const { isAuthenticated, user } = useAppSelector((state) => state.auth);
//     const [walletAuth, { isLoading }] = useWalletAuthMutation();
    
//     //? Xion Abstraction
//     const { data: { bech32Address } = {}, isConnected, isConnecting } = useAbstraxionAccount();
//     // const { data: { bech32Address, keypair, granter } = {}, isConnected, isConnecting } = useAbstraxionAccount();
//     // console.log("Keypair:", keypair);
//     // console.log("Granter:", granter);
//     const [showModal, setShow] = useModal();
  
//     //? Keplr Wallet
//     const { address, connect, disconnect } = useKeplr();
//     const [loading, setLoading] = useState(false);
  
//     const walletAddress = bech32Address || address;
//     const isWalletConnected = isConnected || Boolean(address);
  
//     useEffect(() => {
//       if (walletAddress && !isAuthenticated) {
//         handleAuth();
//       }
//     }, [walletAddress, isAuthenticated]);
  
//     const handleAuth = useCallback(async () => {
//       if (!walletAddress) return;
//       toast.dismiss();
//       const loadingToast = toast.loading("Authenticating wallet...");
  
//       try {
//         const response = await walletAuth({ walletAddress }).unwrap();
//         toast.dismiss(loadingToast);
  
//         if (response.status === 200) {
//           dispatch(setAuthenticated({ isAuthenticated: true, user: response.data }));
//           AuthStore.setAccessToken(response.data.accessToken);
//           toast.success("Wallet connected successfully!");
//         } else {
//           toast.error(response.message || "Authentication failed");
//         }
//       } catch (error) {
//           console.info(error)
//         toast.dismiss(loadingToast);
//         toast.error("Wallet authentication failed. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     }, [walletAddress, walletAuth, dispatch]);
  
//     const handleConnect = async (walletType: "xion" | "keplr") => {
//       setLoading(true);
//       if (walletType === "xion") {
//           console.log("Connecting Xion Wallet");
//           setShow(true); 
//       } else {
//           console.log("Connecting Keplr Wallet");
//         await connect();
//       }
//     };
  
//     const handleDisconnect = () => {
//       if (window.confirm("Are you sure you want to disconnect?")) {
//         disconnect();
//         AuthStore.removeAccessToken();
//         dispatch(setAuthenticated({ isAuthenticated: false, user: null }));
//         toast.success("Wallet disconnected successfully.");
//       }
//     };
  
//     return {
//       walletAddress,
//       isWalletConnected,
//       handleConnect,
//       handleDisconnect,
//       loading: loading || isLoading,
//       showModal,
//       setShow,
//       isConnecting
//     };
//   }