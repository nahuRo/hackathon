import { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";

import { appContext } from "../context/index";

const ProyectsPage = () => {
	const { proyects } = useContext(appContext);

	const { address } = useAccount();

	return (
		<>
			<Navbar />
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between py-4">
				<div className="flex flex-row gap-x-4 text-white text-lg">
					<h2>User: Thinkathonics</h2>
					<h2>Address: {address}</h2>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between pb-4">
				<div className="flex flex-row gap-x-2 text-white">
					<Link
						to="/profile"
						className=" p-2 bg-white hover:bg-indigo-500 duration-300 hover:text-white rounded-md text-black font-semibold"
					>
						Wallet Status
					</Link>
					<Link
						to="/profile/dashboard"
						className=" p-2 bg-white hover:bg-indigo-500 duration-300 hover:text-white rounded-md text-black font-semibold"
					>
						Create Proyect
					</Link>
					<Link
						to="/profile/proyects"
						className=" p-2 bg-white hover:bg-indigo-500 duration-300 hover:text-white rounded-md text-black font-semibold"
					>
						Proyects
					</Link>
				</div>
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row  justify-between pb-10 min-h-screen">
				<div className="w-full">
					<div className="border-b-2 border-white">
						<h2 className="pb-2 font-bold text-2xl text-white">Activos</h2>
					</div>
					<div className="flex flex-row gap-2 pt-4 flex-wrap">
						{proyects &&
							proyects.map((proyect) => {
								if (!proyect.finalized)
									return (
										<div className="w-[300px] h-[300px] p-2 bg-white rounded">
											<Link
												to={`/profile/proyects/${proyect.id}`}
												key={proyect.id}
												className="flex flex-col items-center justify-between bg-white"
											>
												<img
													src={proyect.img}
													alt={proyect.name}
													className="w-full h-[250px] object-cover rounded"
												/>
												<span className="p-2 font-[500]">
													{proyect.name}
												</span>
											</Link>
										</div>
									);
							})}
					</div>
					<br />
					<div className="border-b-2 border-white">
						<h2 className="pb-2 font-bold text-2xl text-white">Finalizados</h2>
					</div>
					<div className="flex flex-row gap-2 pt-4 flex-wrap">
						{proyects &&
							proyects.map((proyect) => {
								if (proyect.finalized)
									return (
										<div className="w-[300px] h-[300px] p-2 bg-white rounded">
											<Link
												to={`/profile/proyects/${proyect.id}`}
												key={proyect.id}
												className="flex flex-col items-center justify-between bg-white"
											>
												<img
													src={proyect.img}
													alt={proyect.name}
													className="w-full h-[250px] object-cover rounded"
												/>
												<span className="p-2 font-[500]">
													{proyect.name}
												</span>
											</Link>
										</div>
									);
							})}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default ProyectsPage;
