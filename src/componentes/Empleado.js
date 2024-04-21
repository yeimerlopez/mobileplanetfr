import { useState } from "react";
import {Persona} from './Persona';


const Empleado = () => {

    const [empleado, setEmpleado] = useState([
        {
            id: 1,
            nombre:"Yeimer", 
            edad: 38, 
            correo: "yair@gmail.com"
        },
        {
            id: 2,
            nombre:"Santiago", 
            edad: 13, 
            correo: "Santiago@gmail.com"
        },
        {
            id: 3,
            nombre:"viviana", 
            edad: 30, 
            correo: "viviana@gmail.com"
        }
    ]);

    return (
        <>
            {empleado.map((persona) => {
                return (
                        <Persona key={persona.id} 
                            id={persona.id}
                            nombre={persona.nombre}
                            edad={persona.edad}
                            correo={persona.correo}
                        />
                    
                    )
                }
            )}
        </>
    )
}

export default Empleado;