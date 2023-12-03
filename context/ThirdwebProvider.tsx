"use client";

import {
  ThirdwebProvider,
  metamaskWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";
import { CeloAlfajoresTestnet } from "@thirdweb-dev/chains";

export function ThirdwebProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={CeloAlfajoresTestnet}
      supportedWallets={[metamaskWallet(), embeddedWallet()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
