import { useState } from "react";
import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import MainPage from "./components/MainPage";
import UserPage from "./components/UserPage";
import LoginPage from "./components/LoginPage";

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
					</Routes>
				</BrowserRouter>
			</ProviderWagmi>
		</div>
	);
}

export default App;
