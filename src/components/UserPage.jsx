import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PieGraph from "./pieGraph";
import { Link } from "react-router-dom";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import { MdOutlineStackedBarChart } from "react-icons/md";
const UserPage = () => {
	const { address, isConnected } = useAccount();

	const dataCrytos = [
		{
			blockchain: "Polygon",
			value: 140.5,
			name: "MATIC",
			usdConv: 156.64,
			url: "https://coinmarketcap.com/es/currencies/polygon/",
		},
		{
			blockchain: "Polygon",
			value: 60.4,
			name: "USDT",
			usdConv: 60.4,
			url: "https://coinmarketcap.com/es/currencies/tether/",
		},
		{
			blockchain: "Ethereum",
			value: 40,
			name: "DAI",
			usdConv: 40,
			url: "https://coinmarketcap.com/es/currencies/multi-collateral-dai/",
		},
		{
			blockchain: "Ethereum",
			value: 0.6,
			name: "ETH",
			usdConv: 1095.31,
			url: "https://coinmarketcap.com/es/currencies/ethereum/",
		},
		{
			blockchain: "Avalanche",
			value: 24.5,
			name: "AVAX",
			usdConv: 437.57,
			url: "https://coinmarketcap.com/es/currencies/avalanche/",
		},
		{
			blockchain: "Avalanche",
			value: 34,
			name: "USDC",
			usdConv: 34.068,
			url: "https://coinmarketcap.com/es/currencies/usd-coin/",
		},
	];

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

	const getTotal = (dato) => {
		let total = 0;
		for (let i of dato) total += i.usdConv;
		return total.toFixed(2);
	};

	return (
		<>
			<section className="bg-[#9670c0]">
				<Navbar />
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between py-4">
				<div className="flex flex-row gap-x-4 text-black text-lg">
					<h2>User: Thinkathonics</h2>
					<h2>Address: {address}</h2>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between pb-4">
				<div className="flex flex-row gap-x-2 text-white">
					<Link
						to="/profile"
						className=" p-2 bg-indigo-500 duration-300 text-white hover:bg-indigo-500/80 rounded-md font-semibold"
					>
						Wallet Status
					</Link>
					<Link
						to="/profile/dashboard"
						className=" p-2 bg-indigo-500 duration-300 text-white hover:bg-indigo-500/80 rounded-md font-semibold"
					>
						Create Proyect
					</Link>
					<Link
						to="/profile/proyects"
						className=" p-2 bg-indigo-500 duration-300 text-white hover:bg-indigo-500/80 rounded-md font-semibold"
					>
						Proyects
					</Link>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col items-center justify-between">
				<h2 className="text-black text-xl">
					Total de cuenta: {getTotal(dataCrytos)} Usd
				</h2>
				<PieGraph data={dataCrytos} />
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between sm:py-10">
				<table className="w-full bg-slate-100 py-4">
					<thead>
						<tr className="bg-indigo-500">
							<th>BlockChain</th>
							<th>Crypto</th>
							<th>Usd</th>
						</tr>
					</thead>
					<tbody>
						{dataCrytos.map((item) => (
							<tr key={item.name}>
								<th>{item.blockchain}</th>
								<th className="flex flex-row gap-2 items-center justify-center">
									{item.value} {item.name}
									<a href={item.url} target="_blank">
										<MdOutlineStackedBarChart className="inline-block" />
									</a>
								</th>
								<th> $ {item.usdConv}</th>
							</tr>
						))}
					</tbody>
				</table>
			</section>

			<Footer />
		</>
	);
};

export default UserPage;
