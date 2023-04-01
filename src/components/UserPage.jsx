import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
// /^0x[a-fA-F0-9]{40}$/g  eth
import { useAccount, useDisconnect, useBalance } from "wagmi";
const UserPage = () => {
	const { address, connector, isConnected } = useAccount();
	const { disconnect } = useDisconnect();

	const { data, isError, isLoading } = useBalance({
		address,
	});

	if (isLoading) return <div>Fetching balance…</div>;
	if (isError) return <div>Error fetching balance</div>;

	if (!isConnected) {
		return (
			<section className="h-screen">
				<Navbar />
				<div className="flex flex-row justify-center items-center h-[54%]">
					<h1 className="text-white">Usuario no conectado, Debe iniciar sesion</h1>
				</div>
				<Footer />
			</section>
		);
	}

	return (
		<>
			<Navbar />
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto sm:py-20">
				<div className="text-start">
					<span className="text-2xl sm:text-3xl md:text-4xl lg:text-6xlfont-bold text-gray-200">
						Wallet Address: {address}
					</span>
					Balance:
					<span className="text-2xl text-slate-50">
						{data?.formatted} {data?.symbol}
					</span>
				</div>

				<div>
					<form action="">
						<div className="space-x-4 my-2">
							<label>
								Name:
								<input type="text" name="name" />
							</label>
							<label>
								Wallet Address:
								<input type="text" name="walletAddress" />
							</label>
						</div>
						<div className="space-x-4 my-2">
							<label>
								Name:
								<input type="text" name="name" />
							</label>
							<label>
								Wallet Address:
								<input type="text" name="walletAddress" />
							</label>
						</div>
						<button className="p-2 bg-white text-black rounded">
							Generar Address
						</button>
					</form>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default UserPage;
