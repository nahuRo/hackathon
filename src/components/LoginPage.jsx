import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LoginPage = () => {
	return (
		<section className="h-screen">
			<section className="bg-[#9670c0]">
				<Navbar />
			</section>
			<div className="flex flex-row justify-center items-center h-[54%]">
				<ConnectButton />
			</div>
			<Footer />
		</section>
	);
};

export default LoginPage;
