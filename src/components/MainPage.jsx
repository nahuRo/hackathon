import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rocket from "../assets/rocket.png";

import { SiBitcoincash } from "react-icons/si";
import { IoMdMicrophone } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { BsBarChartLineFill } from "react-icons/bs";

const MainPage = () => {
	return (
		<>
			<Navbar />
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between sm:py-20">
				<div className="mt-20 w-full sm:w-7/12">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xlfont-bold text-gray-200">
						INSPIRA, CONECTA Y EXPANDE TU HISTORIA.
					</h1>
					<p className="text-sm md:text-base lg:text-xl py-4 text-gray-600">
						Somos la primera experiencia inmersiva de micropodasting basada en
						Inteligencia Artificial, geolocalización y blockchain.
					</p>
					<div className="space-x-4 mt-4 sm:mt-8">
						<a href="#" className="bg-[#15C8FC] py-2 px-6 rounded">
							Get Started
						</a>
						<a className="border border-white py-2 px-8 rounded hover:border-[#15C8FC] hover:duration-300 hover:text-white">
							Learn
						</a>
					</div>
				</div>
				<img src={rocket} alt="" className="w-3/6 sm:w-4/12 pt-12 sm:pt-0" />
			</section>
			<section className="bg-indigo-700 mt-20 py-8 sm:py-14 px-8">
				<div className="max-w-screen-xl my-0 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="">
						<div className="flex flex-row justify-start gap-x-4 py-4">
							<IoMdMicrophone className="text-3xl" />
							<h3 className="text-base md:text-lg">Empieza ahora tu camino</h3>
						</div>
						<p className="text-sm lg:text-base">
							Te orientamos en tus primeros pasos por la comunidad Omaly para que
							empieces a crear tu podcast y usar nuestras herramientas.
						</p>
					</div>
					<div className="">
						<div className="flex flex-row justify-start gap-x-4 py-4">
							<IoPeopleSharp className="text-3xl" />
							<h3 className="text-base md:text-lg">Crea tu comunidad</h3>
						</div>
						<p className="text-sm lg:text-base">
							En Omaly puedes encontrar una comunidad que comparte contenido
							cultural y de valor.
						</p>
					</div>
					<div className="">
						<div className="flex flex-row justify-start gap-x-4 py-4">
							<BsBarChartLineFill className="text-3xl" />
							<h3 className="text-base md:text-lg">Haz crecer tu audiencia</h3>
						</div>
						<p className="text-sm lg:text-base">
							Herramientas para entender que necesitan tus seguidores y acelerar
							así tu crecimiento
						</p>
					</div>
					<div className="">
						<div className="flex flex-row justify-start gap-x-4 py-4">
							<SiBitcoincash className="text-3xl" />
							<h3 className="text-base md:text-lg">Genera ganancias ya</h3>
						</div>
						<p className="text-sm lg:text-base">
							Monetiza tus podcasts desde el día uno. Pon en valor tus proyectos
							a partir del reconocimiento que te dé tu audiencia.
						</p>
					</div>
				</div>
			</section>
			<section className="py-14 px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto">
				<h2 className="font-bold text-5xl text-gray-200">Preguntas Frecuentes</h2>
				<div className="flex flex-col sm:flex-row flex-wrap mt-16 justify-between gap-y-10">
					<div className="bg-[#15C8FC] w-[450px] h-[248px] flex flex-col justify-between p-4 lg:p-8 mt-[120px] rounded-lg">
						<h3 className="text-lg font-[600]">Pregunta frecuente numero 1</h3>
						<p className="text-base font-[300] text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
							illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dicta, sunt! Lorem, ipsum dolor sit amet consectetur
						</p>
						<BsBarChartLineFill />
					</div>
					<div className="bg-[#15C8FC] w-[450px] h-[248px] flex flex-col justify-between p-8 rounded-lg">
						<h3 className="text-lg font-[600]">Pregunta frecuente numero 2</h3>
						<p className="text-base font-[300] text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
							illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dicta, sunt! Lorem, ipsum dolor sit amet consectetur
						</p>
						<BsBarChartLineFill />
					</div>
					<div className="bg-[#15C8FC] w-[450px] h-[248px] flex flex-col justify-between p-8 rounded-lg">
						<h3 className="text-lg font-[600]">Pregunta frecuente numero 3</h3>
						<p className="text-base font-[300] text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
							illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dicta, sunt! Lorem, ipsum dolor sit amet consectetur
						</p>
						<BsBarChartLineFill />
					</div>
					<div className="bg-[#15C8FC] w-[450px] h-[248px] flex flex-col justify-between p-8 mt-[-120px] rounded-lg">
						<h3 className="text-lg font-[600]">Pregunta frecuente numero 4</h3>
						<p className="text-base font-[300] text-gray-600">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
							illum! Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Dicta, sunt! Lorem, ipsum dolor sit amet consectetur
						</p>
						<BsBarChartLineFill />
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default MainPage;
