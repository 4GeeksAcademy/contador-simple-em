import React from 'react'
import ReactDOM from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

import '../styles/index.css'

import SecondsCounter from './components/Home';

const tiempoObjetivo = parseInt(prompt("¿Cuándo quieres que pare?"), 10);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <SecondsCounter tiempoObjetivo={tiempoObjetivo} />
    </React.StrictMode>
);