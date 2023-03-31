import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rocket from "../assets/rocket.png";

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
			<section></section>
			<section className="px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto"></section>
			<section></section>

			<Footer />
		</>
	);
};

export default MainPage;
