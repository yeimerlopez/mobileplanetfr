import { useState } from 'react';

export const Modo = () => {
    const [show, setShow] = useState(true);

    function handleShow() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
            {show === true && <h2>Esto es un parrafo</h2>}
        </div>
    )

}
