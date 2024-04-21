import React from "react";

export function Tabla(props) {
    console.log(props);
    return(
        <div>
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Correo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>  
                        <td>{props.nombre}</td> 
                        <td>{props.edad}</td>
                        <td>{props.correo}</td>
                    </tr>  
                </tbody>      
            </table>
        </div>
    )
}
// export default Tabla;  ya no se usa gracias al export que se pone arriba antes de function
