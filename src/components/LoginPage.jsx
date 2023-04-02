import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Web3Auth } from "@web3auth/modal";

const LoginPage = () => {
	// const [web3auth, setWeb3Auth] = useState(null);

	//Initialize within your constructor

	const web3auth = new Web3Auth({
		clientId:
			"BAH7lodtp3WqHykU5lYQlVsFCatzpNKtUcdoSuKvAyylksydBbvKaICe3Hihlw6MyKIYYb_as2dhTvv1jaa7uD8", // Get your Client ID from Web3Auth Dashboard
		chainConfig: {
			chainNamespace: "eip155",
			chainId: "0x89", // Please use 0x5 for Goerli Testnet
		},
	});

	useEffect(() => {
		// const a = web3auth.initModal();
		// web3auth.initModal().then((e) => {
		// 	console.log("s", e);
		// });
	}, []);

	// const handleSingWeb3Auth = async () => {
	// 	console.log(web3auth);
	// 	await web3auth.connect();
	// };

	return (
		<section className="h-screen">
			<Navbar />
			<div className="flex flex-row justify-center items-center h-[54%]">
				<ConnectButton />
				{/* <button onClick={handleSingWeb3Auth}>aaa</button> */}
			</div>
			<Footer />
		</section>
	);
};

export default LoginPage;
