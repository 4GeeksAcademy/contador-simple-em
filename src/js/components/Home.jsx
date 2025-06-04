import React from "react";
import { useState, useEffect } from "react";

const SecondsCounter = ({tiempoObjetivo}) => {
	const [seconds, setSeconds] = useState(0);

	// Aqui he usado useEffect para pasarle un intervalo de tiempo

	useEffect (() => {
		const interval = setInterval (() => {
			setSeconds ((prev) => {
				if (prev + 1 === tiempoObjetivo){
					alert("Tieeeeeempo!");
				}
				return prev + 1;
			});
		}, 1000);

		return () => clearInterval(interval);
    }, [tiempoObjetivo]);

	// Para que se aparezca bonito, creo un array de dígitos individuales

	const digits = String(seconds).padStart(6,"0").split("");

	// Y ya, devuelvo el contenedor con la magia hecha

	return (
		<div className="container mt-5 d-flex justify-content-center">
			<div className="d-flex bg-dark text-white p-3 rounded gap-2 fs-1">
				<div className="bg-secondary p-3 rounded">
				<i className="fa-regular fa-clock"></i>
				</div>
				{digits.map((digit,index) => (
				 <div key={index} className="bg-secondary p-3 rounded">
					{digit}
				</div>
				))}
			</div>
		</div>
	);

	}

	export default SecondsCounter;