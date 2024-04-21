import React from "react";

/**componente con props */
function InfoClient (props){
    console.log(props);
    return (
        <div className='empleado' 
        style={{
            backgroundColor:props.color
            }} >
            <h2>Nombre:{props.nombre}</h2>
            <h3>Edad:{props.edad}</h3>
            <p>Correo:{props.correo}</p>
        </div>
    );
}



export default InfoClient;