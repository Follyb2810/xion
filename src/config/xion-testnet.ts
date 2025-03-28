export const Xion_Chain={
    "rpc": "https://rpc.xion-testnet-1.burnt.com/",
    "rest": "https://api.xion-testnet-1.burnt.com/",
    "chainId": "xion-testnet-1",
    "chainName": "Xion Testnet",
    "chainSymbolImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
    "stakeCurrency": {
      "coinDenom": "XION",
      "coinMinimalDenom": "uxion",
      "coinDecimals": 6,
      "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png"
    },
    "bip44": {
      "coinType": 118
    },
    "bech32Config": {
      "bech32PrefixAccAddr": "xion",
      "bech32PrefixAccPub": "xionpub",
      "bech32PrefixValAddr": "xionvaloper",
      "bech32PrefixValPub": "xionvaloperpub",
      "bech32PrefixConsAddr": "xionvalcons",
      "bech32PrefixConsPub": "xionvalconspub"
    },
    "currencies": [
      {
        "coinDenom": "XION",
        "coinMinimalDenom": "uxion",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png"
      }
    ],
    "feeCurrencies": [
      {
        "coinDenom": "XION",
        "coinMinimalDenom": "uxion",
        "coinDecimals": 6,
        "coinImageUrl": "https://raw.githubusercontent.com/chainapsis/keplr-chain-registry/main/images/xion-testnet/chain.png",
        "gasPriceStep": {
          "low": 0.005,
          "average": 0.01,
          "high": 0.02
        }
      }
    ],
    "features": [
      "cosmwasm"
    ],
    "nodeProvider": {
      "name": "Dylan Schultzie",
      "email": "security@lavenderfive.com",
      "website": "https://lavenderfive.com"
    }
  }