import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";

const ProyectsPage = () => {
	const { address } = useAccount();

	const { data } = useBalance({
		address,
	});
	return (
		<>
			<Navbar />
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between py-4">
				<div className="flex flex-row gap-x-4 text-white text-lg">
					<h2>User: user name</h2>
					<h2>Address: {address}</h2>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between pb-4">
				<div className="flex flex-row gap-x-8 text-white">
					<Link
						to="/profile"
						className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
					>
						Wallet Status
					</Link>
					<Link
						to="/profile/dashboard"
						className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
					>
						Create
					</Link>
					<Link
						to="/profile/proyects"
						className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
					>
						Historical
					</Link>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between pb-10">
				<div className="w-full">
					<h2 className="my-4">Activos</h2>
					<div className="flex flex-col gap-2">
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
					</div>
					<br />
					<h2 className="my-4">Finalizados</h2>
					<div className="flex flex-col gap-2">
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
						<span className="p-3 bg-slate-50 rounded hover:bg-slate-500 hover:text-white duration-300 cursor-pointer">
							MeetUp Presencias 04/23/2123
						</span>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ProyectsPage;
