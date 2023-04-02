import { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";
import DashPage from "./components/DashPage";
import ProyectsPage from "./components/ProyectsPage";
import ProyectDetail from "./components/ProyectDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderWagmi } from "./components/WagmiContext";

import { ProyectProvider } from "./context/index";

function App() {
	return (
		<div className="bg-[#fff] ">
			<ProviderWagmi>
				<ProyectProvider>
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/profile" element={<UserPage />} />
							<Route path="/profile/dashboard" element={<DashPage />} />
							<Route path="/profile/proyects" element={<ProyectsPage />} />
							<Route path="/profile/proyects/:id" element={<ProyectDetail />} />
						</Routes>
					</BrowserRouter>
				</ProyectProvider>
			</ProviderWagmi>
		</div>
	);
}

export default App;
