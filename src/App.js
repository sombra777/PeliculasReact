import './App.css';
import Pelicula from './pelicula';
import peliculasJson from './peliculas.json';
import PageWrapper from './pageWrapper';
import Paginacion from './Paginacion';
import React, { useState } from 'react';
function App() {

  /* creamos una variable PagAcual  y para modificarla creamos setPaginaActual */
  const [PagActual, setPaginaActual] = useState(1); 

  let TOTAL_PAG = 7;

  let peliculas = peliculasJson;

  const cargarPeliculas = ()=>{
    peliculas = peliculas.slice((PagActual -1) * TOTAL_PAG, PagActual + TOTAL_PAG)
  }
  cargarPeliculas();
  
  const getPagina = () =>{
    let CantidadDePelis = peliculasJson.length;
    return Math.ceil(CantidadDePelis/TOTAL_PAG);
  }
  return (
    <PageWrapper>
      {peliculas.map(pelicula => 
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
      img={pelicula.img}/>
    )}

    <Paginacion pagina={PagActual} total={getPagina} onChange={(pagina)=>{
      /* llamanos a setPaginaActual para indicar que tiene q renderizar el valor (renderizar significa mostrar en pantalla) */
      setPaginaActual(pagina);
    }}/>
    </PageWrapper>

  );
}

export default App;
