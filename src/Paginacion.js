export default function Paginacion(props){

    const getPaginas = () =>{
        const resultado = [];
        /* recorro el total de paginas en un for, inicializo la pag y en el arreglo resultado lo pego*/
        for(let i =0; i<props.total; i++){ 
            let pagina = i +1; 
            resultado.push(<a onClick={()=>props.onChange(pagina)} className={props.pagina === pagina ? "active": ""} >{pagina}</a>)
            
        }
        return resultado;
    }
    
    return(
        <div className="topbar-filter">
        <label>Movies per page:</label>
       
        <div className="pagination2">
            <span>pagina {props.pagina} de {props.total}:</span>
            
            {getPaginas()}
        </div>
    </div>
    )
}