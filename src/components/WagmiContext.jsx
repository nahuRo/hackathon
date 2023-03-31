import { WagmiConfig, createClient, configureChains } from "wagmi";

import { goerli } from "@wagmi/core/chains";

import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider } = configureChains(
	[goerli], // blockchain goerli es de prueba
	[infuraProvider({ apiKey: "881814375e214e519eb86264b18f8a36" }), publicProvider()] // como la "api" para conectarme a la blockchain, como alckemy o infura
);

// connects (wallets) desde rainbowKit
const { connectors } = getDefaultWallets({
	appName: "My RainbowKit App",
	chains,
});

// Set up client
const client = createClient({
	autoConnect: true,
	connectors,
	provider,
});

export const ProviderWagmi = ({ children }) => {
	return (
		<WagmiConfig client={client}>
			<RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
		</WagmiConfig>
	);
};
