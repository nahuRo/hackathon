import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import img_landing from "../assets/img_landig.png";
import img_preguntas from "../assets/img_preguntas.png";
import asteroides from "../assets/asteroide.svg";

import { BsBarChartLineFill } from "react-icons/bs";

const MainPage = () => {
	return (
		<>
			<section className="bg-[#9670c0]">
				<Navbar />
			</section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-col sm:flex-row items-center justify-between sm:py-20">
				<div className="mt-20 w-full sm:w-7/12">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-[#9670c0]">
						PROYECTOS QUE ROCKEAN
					</h1>
					<p className="text-sm md:text-base lg:text-xl py-4 text-gray-700">
						Tu sistema de gestión para el mundo descentralizado
					</p>
					<div className="space-x-4 mt-4 sm:mt-8">
						<a href="#" className="bg-[#9670c0] py-2 px-6 rounded">
							Get Started
						</a>
						<a className="border border-[#d8c7ee] py-2 px-8 rounded hover:border-[#9670c0]  hover:duration-300 text-black cursor-pointer">
							Learn
						</a>
					</div>
				</div>
				<img src={img_landing} alt="" className="w-3/6 sm:w-4/12 pt-12 sm:pt-0" />
			</section>
			<section className="bg-[#9670c0] mt-20 py-8 sm:py-14  flex justify-center relative">
				<div className="w-[600px] max-w-screen-lg h-56 mr-[26rem]">
					<h2 className="text-white text-2xl pb-2">Nuestra Mision</h2>
					<p>
						La misión de BONDLY es ayudar a las organizaciones con el manejo de sus
						fondos y al mismo tiempo poder brindar transparencia a sus inversores,
						integrantes, comunidades o usuarios.
					</p>
					<p>
						BONDLY es la mano que las organizaciones necesitan para no perder
						dinero por falta de control.
					</p>
				</div>
				<img src={asteroides} alt="asteroides" className="absolute right-0 top-0 " />
			</section>
			<section className="py-14 px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto flex flex-row">
				<div className="w-1/2">
					<h2 className="text-4xl text-[#9670c0]">Preguntas Frecuentes</h2>
					<div className="flex flex-col justify-between gap-y-5 py-4">
						<div className="bg-[#77ACD2]  flex flex-col justify-between p-4 lg:p-8 rounded-lg">
							<h3 className="text-lg font-[600] ">
								Pregunta frecuente numero 1
							</h3>
							<p className="text-base font-[300] text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Commodi, illum! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dicta, sunt! Lorem, ipsum dolor sit amet
								consectetur
							</p>
							<BsBarChartLineFill />
						</div>
						<div className="bg-[#77ACD2]  flex flex-col justify-between p-4 lg:p-8 rounded-lg">
							<h3 className="text-lg font-[600]">Pregunta frecuente numero 2</h3>
							<p className="text-base font-[300] text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Commodi, illum! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dicta, sunt! Lorem, ipsum dolor sit amet
								consectetur
							</p>
							<BsBarChartLineFill />
						</div>
						<div className="bg-[#77ACD2]  flex flex-col justify-between p-4 lg:p-8 rounded-lg">
							<h3 className="text-lg font-[600]">Pregunta frecuente numero 3</h3>
							<p className="text-base font-[300] text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Commodi, illum! Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Dicta, sunt! Lorem, ipsum dolor sit amet
								consectetur
							</p>
							<BsBarChartLineFill />
						</div>
					</div>
				</div>
				<div className="w-1/2">
					<img src={img_preguntas} alt="" />
				</div>
			</section>
			<Footer />
		</>
	);
};

export default MainPage;
