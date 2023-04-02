import { useContext, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link, useParams } from "react-router-dom";
import { useAccount, useBalance } from "wagmi";
import { v4 as uuidv4 } from "uuid";
import { appContext } from "../context/index";
import { MdKeyboardArrowLeft } from "react-icons/md";
import ExampleFile from "../assets/example-file.pdf";

const ProyectDetail = () => {
	const { setProyects, proyects } = useContext(appContext);
	const [movDone, setMovDone] = useState([]);
	const { id } = useParams();
	const { address } = useAccount();

	const handleNewMov = (e) => {
		e.preventDefault();

		const newMovement = {
			title: e.target.title.value,
			description: e.target.description.value,
			blockchain: e.target.blockchain.value,
			token: e.target.token.value,
			quantity: e.target.quantity.value,
			to_address: e.target.address.value,
			file: e.target.file.value,
			id: uuidv4(),
		};

		setMovDone([newMovement, ...movDone]);

		proyects.map((proyect) => {
			if (proyect.id === id) {
				proyect.movements.push(newMovement);
			}
		});

		setProyects(proyects);
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
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto  pb-10">
				{proyects &&
					proyects
						.filter((proyect) => proyect.id === id)
						.map((item) => (
							<>
								<div key={item.id} className="bg-[#f7f2fd] p-4">
									<p className=" text-[#9670c0]">
										Nombre del Proyecto:
										<span className="text-black"> {item.name}</span>
									</p>
									<p className=" text-[#9670c0]">
										Detalles del Proyecto:
										<span className="text-black"> {item.description}</span>
									</p>
									<p className=" text-[#9670c0]">
										Fecha del Proyecto:
										<span className="text-black"> {item.validity}</span>
									</p>
									<p className=" text-[#9670c0]">
										Precio estimado del Proyecto:
										<span className="text-black"> {item.estimate}</span>
									</p>

									<p className=" text-[#9670c0]">
										Actividad del Proyecto:
										<span className="text-black">
											{item.activity ? " Finalizado" : " No Finalizado"}
										</span>
									</p>
								</div>
								<section className="py-8">
									<table className="w-full bg-slate-100 py-4">
										<thead>
											<tr className="bg-indigo-500">
												<th>Titulo</th>

												<th>Blockchain</th>
												<th>Token</th>
												<th>Cantidad</th>
												<th>To</th>
												<th>File</th>
											</tr>
										</thead>
										<tbody>
											{item.movements &&
												item.movements.map((mov) => (
													<tr key={mov.id}>
														<th>{mov.title}</th>
														<th>{mov.description}</th>

														<th>{mov.token}</th>
														<th>{mov.quantity}</th>
														<th>{mov.to_address}</th>
														<th>{mov.file}</th>
													</tr>
												))}
										</tbody>
									</table>
								</section>
							</>
						))}
				<a
					href={ExampleFile}
					download
					className="p-2 rounded bg-[#eee6f8] duration-300 cursor-pointer"
				>
					Descargar Analiticas del Proyecto
				</a>
			</section>
			{proyects &&
				proyects
					.filter((proyect) => proyect.id === id)
					.map((item) => {
						if (!item.finalized) {
							return (
								<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col gap-4 pb-10">
									<div className="relative w-full overflow-hidden rounded ">
										<input
											type="checkbox"
											className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
										/>

										<div className="bg-slate-200 h-12 w-full pl-5 flex items-center ">
											<h3 className="text-lg font-semibold text-black">
												Crear Nuevo Movimiento
											</h3>
										</div>
										<div className="absolute top-4 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:-rotate-90 ">
											<MdKeyboardArrowLeft />
										</div>
										<div className="bg-white overflow-hidden transition-all  h-0 peer-checked:h-full">
											<div className="p-4">
												<form
													onSubmit={handleNewMov}
													className="flex flex-col justify-evenly items-center gap-4 bg-[#77ACD2] p-3 w-1/2 rounded-sm my-0 mx-auto"
												>
													<div className="w-full">
														<label>
															Titulo:
															<input
																type="text"
																name="title"
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
																rows={3}
															/>
														</label>
													</div>

													<div className="w-full">
														<label>
															Blockchain:
															<select
																name="blockchain"
																className="w-full rounded p-3 mt-2"
															>
																<option defaultValue="value1">
																	Polygon
																</option>
																<option defaultValue="value2">
																	Otra
																</option>
																<option defaultValue="value3">
																	Otra 3
																</option>
															</select>
														</label>
													</div>
													<div className="w-full">
														<label>
															Token:
															<select
																name="token"
																className="w-full rounded p-3 mt-2"
															>
																<option defaultValue="value1">
																	USDT
																</option>
																<option defaultValue="value2">
																	Otra
																</option>
																<option defaultValue="value3">
																	Otra 3
																</option>
															</select>
														</label>
													</div>
													<div className="w-full">
														<label>
															Cantidad:
															<input
																type="number"
																name="quantity"
																className="w-full rounded p-3 mt-3"
															/>
														</label>
													</div>
													<div className="w-full">
														<label>
															Address Destino:
															<input
																type="text"
																name="address"
																required
																className="w-full rounded p-3 mt-2"
															/>
														</label>
													</div>
													<div className="w-full">
														<label>
															Ajuntar Comprobante:
															<input
																type="file"
																name="file"
																accept="image/png, image/jpeg"
																className="w-full rounded p-3 mt-2"
															/>
														</label>
													</div>

													<button className="bg-white hover:bg-indigo-900 hover:text-white p-2 rounded w-full duration-300 font-[700]">
														Crear
													</button>
												</form>
											</div>
										</div>
									</div>
									<div className="relative w-full overflow-hidden">
										<input
											type="checkbox"
											className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
										/>

										<div className="bg-slate-200 h-12 w-full pl-5 flex items-center">
											<h3 className="text-lg font-semibold text-black">
												Movimientos ejecutados
											</h3>
										</div>
										<div className="absolute top-4 right-3 text-black transition-transform duration-500 rotate-0 peer-checked:-rotate-90 ">
											<MdKeyboardArrowLeft />
										</div>
										<div className="bg-white overflow-hidden transition-all  h-0 peer-checked:h-full">
											<div className="p-4">
												<div className="relative w-full overflow-hidden">
													<input
														type="checkbox"
														className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
													/>

													<div className="bg-slate-300 h-12 w-full pl-5 flex items-center">
														<h3 className="text-lg font-semibold text-black">
															Fotografia
														</h3>
													</div>
													<div className="absolute top-4 right-3 text-red-600 transition-transform duration-500 rotate-0 peer-checked:-rotate-90 ">
														<MdKeyboardArrowLeft />
													</div>
													<div className="bg-white overflow-hidden transition-all  h-0 peer-checked:h-full">
														<div className="p-4">
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Nombre: Fotografia</h3>
															</span>
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Cantidad: 2000 USDT</h3>
															</span>
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Address: 0x23217821</h3>
															</span>
															<div className="flex flex-row gap-2">
																<button className="p-2 bg-indigo-600 hover:bg-indigo-400 w-full rounded">
																	Aprobar
																</button>
																<button className="p-2 bg-indigo-600 hover:bg-indigo-400 w-full rounded">
																	Desestimar
																</button>
															</div>
														</div>
													</div>
												</div>
												<div className="relative w-full overflow-hidden">
													<input
														type="checkbox"
														className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
													/>

													<div className="bg-slate-300 h-12 w-full pl-5 flex items-center">
														<h3 className="text-lg font-semibold text-black">
															Fotografia
														</h3>
													</div>
													<div className="absolute top-4 right-3 text-red-600 transition-transform duration-500 rotate-0 peer-checked:-rotate-90 ">
														<MdKeyboardArrowLeft />
													</div>
													<div className="bg-white overflow-hidden transition-all  h-0 peer-checked:h-full">
														<div className="p-4">
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Nombre: Fotografia</h3>
															</span>
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Cantidad: 2000 USDT</h3>
															</span>
															<span className="p-1 m-1 bg-slate-300 block">
																<h3>Address: 0x23217821</h3>
															</span>
															<div className="flex flex-row gap-2">
																<button className="p-2 bg-indigo-600 hover:bg-indigo-400 w-full rounded">
																	Aprobar
																</button>
																<button className="p-2 bg-indigo-600 hover:bg-indigo-400 w-full rounded">
																	Desestimar
																</button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="relative w-full overflow-hidden">
										<input
											type="checkbox"
											className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer"
										/>

										<div className="bg-slate-200 h-12 w-full pl-5 flex items-center">
											<h3 className="text-lg font-semibold text-black">
												Movimientos pendientes
											</h3>
										</div>
										<div className="absolute top-4 right-3 text-black  transition-transform duration-500 rotate-0 peer-checked:-rotate-90 ">
											<MdKeyboardArrowLeft />
										</div>
										<div className="bg-white overflow-hidden transition-all  h-0 peer-checked:h-full">
											<div className="p-4">
												{movDone.length > 0 ? (
													<>
														{movDone.map((mov) => (
															<div className="p-1 m-1 bg-slate-300">
																<h3> Nombre: {mov.title}</h3>
																<h3>
																	{" "}
																	Blockchain:{" "}
																	{mov.blockchain}
																</h3>
																<h3> Token: {mov.token}</h3>
																<h3>
																	{" "}
																	Cantidad: {mov.quantity}
																</h3>
															</div>
														))}
													</>
												) : (
													<h3>Aun no hay nuevos moviminetos</h3>
												)}
											</div>
										</div>
									</div>
								</section>
							);
						}
					})}

			<Footer />
		</>
	);
};

export default ProyectDetail;
