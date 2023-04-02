import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
const Footer = () => {
	return (
		<footer className="bg-indigo-700">
			<div className="max-w-screen-lg my-0 mx-auto py-[100px] flex flex-row justify-between">
				<div className="flex flex-col gap-y-4">
					<img src={logo} alt="logo" className="w-36" />
					<div className="flex flex-row justify-evenly">
						<a href="#">
							<AiFillInstagram className="w-10" />
						</a>
						<a href="#">
							<AiFillLinkedin />
						</a>
						<a href="#">
							<AiFillFacebook />
						</a>
					</div>
				</div>
				<div className="flex flex-col gap-y-4">
					<h2 className="text-xl text-gray-200">Contáctanos</h2>
					<span>
						Whatsapp o correo electrónico <br /> hello@hackatonics.com
					</span>
					<span>
						Lunes a Viernes de 9:00 am a 6:00 pm <br /> horario del centro de
						Argentina.
					</span>
				</div>
				<div className="flex flex-col gap-y-4">
					<h2 className="text-xl text-gray-200">Acerca de</h2>
					<div className="flex flex-row items-center space-x-2 text-[#15C8FC]">
						<span>Aviso de Privacidad</span>
						<AiOutlineArrowRight />
					</div>
					<div className="flex flex-row items-center space-x-2 text-[#15C8FC]">
						<span>Términos y condiciones</span>
						<AiOutlineArrowRight />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
