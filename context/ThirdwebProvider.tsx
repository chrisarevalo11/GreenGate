"use client";

import {
  ThirdwebProvider,
  ChainId,
  metamaskWallet,
  embeddedWallet,
  useSigner,
  useSDK,
} from "@thirdweb-dev/react";

export function ThirdwebProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={ChainId.Mumbai}
      supportedWallets={[metamaskWallet(), embeddedWallet()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
