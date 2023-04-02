import { useState } from "react";
import "@rainbow-me/rainbowkit/styles.css";
import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";
import DashPage from "./components/DashPage";
import ProyectsPage from "./components/ProyectsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProviderWagmi } from "./components/WagmiContext";

function App() {
	return (
		<div className="App bg-gray-800 ">
			<ProviderWagmi>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/profile" element={<UserPage />} />
						<Route path="/profile/dashboard" element={<DashPage />} />
						<Route path="/profile/proyects" element={<ProyectsPage />} />
					</Routes>
				</BrowserRouter>
			</ProviderWagmi>
		</div>
	);
}

export default App;
