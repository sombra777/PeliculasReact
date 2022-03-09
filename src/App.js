import './App.css';
import Pelicula from './pelicula';
import peliculasJson from './peliculas.json';
import PageWrapper from './pageWrapper';
import Paginacion from './Paginacion';
import React, { useState } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
function App() {

  /* creamos una variable PagAcual  y para modificarla creamos setPaginaActual */
  const [PagActual, setPaginaActual] = useState(1); 

  let TOTAL_POR_PAGINA = 7;

  let peliculas = peliculasJson;

  const buscarPeliculas = async ()=>{
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';
    let respuesta = await fetch(url, {
      "method": 'GET',
      "mode": "no-cors",
      "headers": {
        "Accep":'application/json',
        "content-type": "application/json"
      }
    });
    let json = await respuesta.json();

    alert(json);
  }
  debugger;

  buscarPeliculas();

  const cargarPeliculas = ()=>{
    peliculas = peliculas.slice((PagActual -1) * TOTAL_POR_PAGINA, PagActual + TOTAL_POR_PAGINA)
  }
  cargarPeliculas();

  const getPagina = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }
  
  return (
    <PageWrapper>
      {peliculas.map(pelicula => 
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
      img={pelicula.img}/>
    )}

    <Paginacion pagina={PagActual} total={getPagina()} onChange={(pagina)=>{
      /* llamanos a setPaginaActual para indicar que tiene q renderizar el valor (renderizar significa mostrar en pantalla) */
      setPaginaActual(pagina);
    }}/>
    </PageWrapper>

  );
}

export default App;
