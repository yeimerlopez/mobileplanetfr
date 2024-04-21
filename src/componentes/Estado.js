import { useState, useEffect } from "react";

const Estado = () => {
    const [msg, setMsg] = useState("");

    const sTexto = (eDeEvento) => {
        setMsg(eDeEvento.target.value);
    }

    useEffect(() => {
        
        console.log("Binevienidos a la clase de React 'montaje'");

        return () => {
            console.log("Adios de la clase de React 'desmontaje'");
        }
    }, []);

    useEffect(() => {
        console.log("El estado de la variable 'msg' ha cambiado");
    }, [msg]);


    return (
        <div>
            <input type="text" onChange={sTexto}/>
            <p>{msg}</p>
        </div>
    )
}  


export default Estado;
