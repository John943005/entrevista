import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



function DetalleOrdenes() {
              // validación y leer los datos del formulario
      const formik = useFormik({
         initialValues: {
          referencia: '',
          nombre_de_producto: '',
          cantidad: '',
          precio_de_venta: '',
       
          },
         validationSchema: Yup.object.shape({
         referencia: Yup.number()
            .min(1, 'Debes agregar un número')
            .required('El referencia es obligatorio'),
        
         nombre_de_producto: Yup.string()
            .min(3, 'Debes agregar un nombre')
            .required('el nombre es obligatorio'),

        cantidad: Yup.number()
            .min(3, 'Debes agregar un cantidad')
            .required('el cantidad es obligatorio'),

        precio_de_venta:Yup.number()
         .min(3, 'Debes agregar un precio_de_venta:')
         .required('el precio_de_venta es obligatorio'),
    }),
    onSubmit: datos => {

        console.log(datos);

    }
});




return (
    <>

        <h1 className="text-3xl font-light mb-4">Detalle orden</h1>

        <div className="flex justify-center mt-10">
            <div className="w-full max-w-3xl">
                <form onSubmit={formik.handleSubmit}
                >
                
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">referencia</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="referencia"
                            type="number"
                            placeholder="referencia "
                            value={formik.values.referencia}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                    </div>
                    {formik.touched.id && formik.errors.id ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className="font-bold">Hubo un error:</p>
                            <p>{formik.errors.referencia} </p>
                        </div>
                    ) : null}



                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">nombre_de_producto</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="nombre_de_producto"
                            type="string"
                            placeholder="nombre_de_producto "
                            value={formik.values.nombre_de_producto}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                    </div>
                    {formik.touched.nombre_de_producto && formik.errors.nombre_de_producto ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className="font-bold">Hubo un error:</p>
                            <p>{formik.errors.nombre_de_producto} </p>
                        </div>
                    ) : null}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">cantidad</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cantidad"
                            type="text"
                            placeholder="cantidad "
                            value={formik.values.cantidad }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                    </div>
                    {formik.touched.cantidad  && formik.errors.cantidad  ? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className="font-bold">Hubo un error:</p>
                            <p>{formik.errors.cantidad} </p>
                        </div>
                    ) : null}

                    <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">precio_de_venta</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="precio_de_venta"
                        type="text"
                        placeholder="Correo Electrónico" 
                        value={formik.values.precio_de_venta}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                    </div>
                    {formik.touched.precio_de_venta && formik.errors.precio_de_venta? (
                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                            <p className="font-bold">Hubo un error:</p>
                            <p>{formik.errors.precio_de_venta} </p>
                        </div>
                    ) : null}

                    
                    <input
                        type="submit"
                        className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                        value="/ " />
                </form>
            </div>
        </div>
    </>
);
}
                  
export default DetalleOrdenes;