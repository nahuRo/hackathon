import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const appContext = createContext();

export const ProyectProvider = ({ children }) => {
	const mys_proyects = [
		{
			name: "Construcción",
			description: "Construcción de Bodeba Catena",
			validity: "2023-04-15",
			estimate: "12000",
			id: uuidv4(),

			movements: [
				{
					title: "1",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 100,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
					id: uuidv4(),
				},
				{
					title: "2",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 200,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
					id: uuidv4(),
				},
				{
					title: "3",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 300,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
					id: uuidv4(),
				},
			],
		},
		{
			name: "Reparacion",
			description: "Reparacion de Bodeba Catena",
			validity: "2023-04-15",
			estimate: "12000",
			id: uuidv4(),

			movements: [
				{
					title: "1",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 100,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
				{
					title: "2",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 200,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
				{
					title: "3",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 300,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
			],
		},
		{
			name: "Compra terreno",
			description: "Compra terreno barrio privado",
			validity: "2023-04-15",
			estimate: "12000",
			id: uuidv4(),

			movements: [
				{
					title: "1",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 100,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
				{
					title: "2",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 200,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
				{
					title: "3",
					description: "hola como estas",
					blockchan: "Polygon",
					token: "USDT",
					quantity: 300,
					to_address: "sd",
					from_address: "ss",
					file: "imagen.jpg",
				},
			],
		},
	];
	const [proyects, setProyects] = useState(mys_proyects);

	// useEffect(() => {
	// 	(async () => {
	// 		const { data } = await axios.get(
	// 			`http://www.omdbapi.com/?i=tt3896198&apikey=adb234ba&s=${movie}`
	// 		);
	// 		setmyMovie(data);
	// 	})();
	// }, [movie]);

	return (
		<appContext.Provider value={{ proyects, setProyects }}>{children}</appContext.Provider>
	);
};
