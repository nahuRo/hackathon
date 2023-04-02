import { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";

import { appContext } from "../context/index";

const ProyectDetail = () => {
	const { setProyects, proyects } = useContext(appContext);
	const { id } = useParams();
	const { address } = useAccount();

	const { data } = useBalance({
		address,
	});
	console.log(proyects);
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
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto  pb-10">
				{proyects &&
					proyects
						.filter((proyect) => proyect.id === id)
						.map((item) => (
							<>
								<div key={item.id} className="text-white py-4">
									<h2>Nombre del Proyecto: {item.name}</h2>
									<p>Detalles del Proyecto: {item.description}</p>
									<span>Fecha del Proyecto: {item.validity}</span>
									<span>Precio estimado del Proyecto: {item.estimate}</span>
								</div>
								<section>
									<table className="w-full bg-slate-100 py-4">
										<thead>
											<tr className="bg-indigo-500">
												<th>Titulo</th>
												<th>Descripcion</th>
												<th>Blockchain</th>
												<th>Token</th>
												<th>Cantidad</th>
												<th>To</th>
												<th>From</th>
												<th>File</th>
											</tr>
										</thead>
										<tbody>
											{item.movements.map((mov) => (
												<tr key={mov.id}>
													<th>{mov.title}</th>
													<th>{mov.description}</th>
													<th>{mov.blockchan}</th>
													<th>{mov.token}</th>
													<th>{mov.quantity}</th>
													<th>{mov.to_address}</th>
													<th>{mov.from_address}</th>
													<th>{mov.file}</th>
												</tr>
											))}
										</tbody>
									</table>
								</section>
							</>
						))}
			</section>
			<Footer />
		</>
	);
};

export default ProyectDetail;
