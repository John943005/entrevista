import React from 'react';
import { Link } from 'react-router-dom';

const Productos = () => {
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Inventario</h1>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Producto
            </Link>
        <div>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Eliminar Productos
            </Link>
        </div>
        <div>
            <Link to="/nuevo-producto" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Actualizar Productos
            </Link>
            </div>
        </>
     );
}
 
export default Productos;