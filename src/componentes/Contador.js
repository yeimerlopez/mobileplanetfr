
import { useState } from "react";

export const Contador = () => {
    const [numero, setNumero] = useState(0);

    const sumar = () => { setNumero(numero + 1)};
    const restar = () => { setNumero(numero - 1)};
        

return (
    <div>
        <h2>{numero}</h2>
        <nav>
            <button onClick={restar}>-</button>
            <button onClick={sumar}>+</button>
        </nav>
    </div>
)
}