import React from 'react';
import { Link } from 'react-router-dom';
//import FormularioUsuario from '../ui/FormularioUsuario';

const Usuario= () => {
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Usuario</h1>
         <Link to="/Usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Ingresar Usuario
            </Link>
        </>
     );
}
 
export default Usuario;