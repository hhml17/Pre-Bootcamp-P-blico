import { useState } from "react"

const Foto = () => {
    const [fotoGato, setFotoGato] = useState('');
    const [cargando, setCargando] = useState(false);

    const obtenerFoto = async () => {
        setCargando(true); // Indicamos que la carga está en progreso
        try {
            // Realizamos la solicitud a la API
            const respuesta = await fetch('https://api.thecatapi.com/v1/images/search');
            // Esperamos a que la respuesta se convierta en JSON
            const datos = await respuesta.json();
            // Establecemos la foto en el estado
            setFotoGato(datos[0].url);
        } 
        catch (error) {
            // Si hay un error, lo manejamos aquí
            console.error('Error al obtener la foto:', error);        } 
        finally {
            // Indicamos que la carga ha terminado
            setCargando(false);
        }
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1> API de gatitos </h1>
            <button
                onClick={obtenerFoto}
                disabled={cargando}
                style={{ padding: '10px 20px', fontSize: '16px' }}
            >
                {cargando ? 'Cargando...' : 'Obtener Foto'}
            </button>
            <p style={{ marginTop: '20px', fontSize: '18px' }}>
                <img src={fotoGato} alt="Foto de un gatito"/>
            </p>
        </div>
      );
} 

export default Foto;
