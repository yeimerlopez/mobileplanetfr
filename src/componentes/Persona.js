export function Persona (props) {
    console.log(props);
    return (
        <div className='empleado'
        style={{
            backgroundColor:props.color
        }}
        >
            <h2>Id:{props.id}</h2>  
            <h2>Nombre:{props.nombre}</h2>  
            <p>Edad:{props.edad}</p>
            <p>Correo:{props.correo}</p>    
        </div>
    )
}   

