import React from "react";
import logo from "../assets/Horizontal 2.png";
import { Link } from "react-router-dom";
import { useAccount, useDisconnect } from "wagmi";

const Navbar = () => {
	const { isConnected } = useAccount();
	const { disconnect } = useDisconnect();

	return (
		<nav className="flex flex-row justify-between items-center py-4 px-4 sm:px-0 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg my-0 mx-auto">
			<img src={logo} className="w-32" />
			<ul className="flex flex-row space-x-4 text-white">
				<li>
					<Link
						to="/"
						className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
					>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/profile"
						className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
					>
						User
					</Link>
				</li>
				{isConnected ? (
					<li>
						<button onClick={disconnect}>
							<Link
								to="/"
								className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
							>
								Disconnect
							</Link>
						</button>
					</li>
				) : (
					<li>
						<Link
							to="/login"
							className="relative after:content-[''] after:absolute after:bg-gray-500 after:h-[3px] after:w-0 after:left-0 after:-bottom-[5px] after:rounded-xl after:duration-500 hover:after:w-full"
						>
							Login
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
