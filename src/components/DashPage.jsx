import { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";

import { appContext } from "../context/index";
import { v4 as uuidv4 } from "uuid";

import QRCode from "react-qr-code";

const DashPage = () => {
	const { setProyects, proyects } = useContext(appContext);
	const { address } = useAccount();

	const { data } = useBalance({
		address,
	});

	const handleSearch = (e) => {
		e.preventDefault();

		const newProyect = {
			name: e.target.name.value,
			description: e.target.description.value,
			validity: e.target.validity.value,
			estimate: e.target.estimate.value,
			id: uuidv4(),
		};
		setProyects([newProyect, ...proyects]);
	};

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

			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto py-10 ">
				<h2 className="text-lg text-white">Crea un nuevo</h2>
				<form
					onSubmit={handleSearch}
					className="flex flex-col justify-evenly items-center gap-4 bg-red-200 p-3 w-1/2 rounded-sm my-0 mx-auto"
				>
					<div className="w-full">
						<label>
							Nombre:
							<input
								type="text"
								name="name"
								required
								className="w-full rounded p-3 mt-2"
							/>
						</label>
					</div>
					<div className="w-full">
						<label>
							Descripcion:
							<textarea
								name="description"
								className="w-full rounded p-3 mt-2"
								rows={10}
							/>
						</label>
					</div>
					<div className="w-full">
						<label>
							Vigencia:
							<input
								type="date"
								name="validity"
								className="w-full rounded p-3 mt-2"
							/>
						</label>
					</div>
					<div className="w-full">
						<label>
							Presupuesto:
							<input
								type="number"
								name="estimate"
								className="w-full rounded p-3 mt-3"
							/>
						</label>
					</div>

					<button className="bg-red-700 p-2 rounded w-full">Crear</button>
				</form>
			</section>

			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto py-10 ">
				<QRCode value="www.google.com" />
			</section>
			<Footer />
		</>
	);
};

export default DashPage;
