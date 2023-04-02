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
	const [showMyQR, setShowMyQR] = useState(false);
	const { address } = useAccount();

	const handleSearch = (e) => {
		e.preventDefault();

		const newProyect = {
			id: uuidv4(),
			name: e.target.name.value,
			description: e.target.description.value,
			validity: e.target.validity.value,
			estimate: e.target.estimate.value,
			finalized: false,
			img: e.target.img_proyect.value,
			movements: [],
		};
		setProyects([newProyect, ...proyects]);
		setShowMyQR(true);
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

			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto py-10 ">
				<h2 className="text-lg text-black pb-8 text-center">Generar nuevo Proyecto</h2>
				<form
					onSubmit={handleSearch}
					className="flex flex-col justify-evenly  gap-4 bg-[#77ACD2] p-3 w-full rounded-sm my-0 mx-auto"
				>
					<div className="w-full ">
						<label>
							<span className="font-[500]">Nombre:</span>
							<input
								type="text"
								name="name"
								required
								className="w-full rounded p-3 mt-2 bg-white"
							/>
						</label>
					</div>
					<div className="flex flex-row gap-x-4">
						<div className="w-full">
							<label>
								<span className="font-[500]">Vigencia:</span>

								<input
									type="date"
									name="validity"
									className="w-full rounded p-3 mt-2"
								/>
							</label>
						</div>
						<div className="w-full">
							<label>
								<span className="font-[500]">Presupuesto:</span>
								<input
									type="number"
									name="estimate"
									className="w-full rounded p-3 mt-3"
								/>
							</label>
						</div>
						<div className="w-full">
							<label>
								<span className="font-[500]">Imagen Representativa:</span>
								<input
									type="file"
									name="img_proyect"
									accept="image/png, image/jpeg"
									className="w-full rounded p-3 mt-2"
								/>
							</label>
						</div>
					</div>
					<div className="flex flex-row gap-x-4 justify-start">
						<span className="font-[500]">Privacidad del Proyecto:</span>
						<div>
							<input type="radio" id="huey" name="drone" value="huey" checked />
							<label htmlFor="huey">Huey</label>
						</div>
						<div>
							<input type="radio" id="dewey" name="drone" value="dewey" />
							<label htmlFor="dewey">Dewey</label>
						</div>
					</div>
					<div className="w-full">
						<label>
							<span className="font-[500]">Descripcion:</span>
							<textarea
								name="description"
								className="w-full rounded p-3 mt-2"
								rows={5}
							/>
						</label>
					</div>

					<button className="bg-white hover:bg-indigo-900 hover:text-white p-2 rounded w-full duration-300 font-[700]">
						Crear
					</button>
				</form>
			</section>
			{showMyQR && (
				<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto py-10 flex flex-col items-center justify-center">
					<h2 className="text-lg text-white pb-8 text-center">
						Comparte el QR a los demas Integrantes
					</h2>
					<QRCode value="www.google.com" />
				</section>
			)}

			<Footer />
		</>
	);
};

export default DashPage;
