import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario"

const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const {id} = useParams();

  useEffect(() => {
      const obtenerClienteAPI = async () => {
          try {
             const url = `http://localhost:4000/clientes/${id}`; 
             const respuesta = await fetch(url);
             const resultado = await respuesta.json();
             setCliente(resultado);
          } catch (error) {
              console.log(error);
          };
          setCargando(!cargando);
      };
      obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3'>{cliente.nombre && 'Utiliza este formulario para editar los datos de un cliente'}</p>

      {cliente.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p className="bg-red-600 border-x-4 w-80 p-5 mx-5 my-5 text-center font-bold text-white text-2xl">Cliente ID no válido</p>}
    </>
  )
}

export default EditarCliente