import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';




function DetalleUsuario() {

    // validación y leer los datos del formulario
    const formik = useFormik({
        initialValues: {
            id: '',
            nombre: '',
            email: '',
            password: '',
           
        },
        validationSchema: Yup.object.shape({
            id: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('El id es obligatorio'),
            
            nombre: Yup.string()
                .min(3, 'Debes agregar un nombre')
                .required('el nombre es obligatorio'),

            email: Yup.string()
                .min(3, 'Debes agregar un email')
                .required('el email es obligatorio'),

            password:Yup.string()
            .min(3, 'Debes agregar un password')
            .required('el password es obligatorio'),
        }),
        onSubmit: datos => {

            console.log(datos);

        }
    });




    return (
        <>

            <h1 className="text-3xl font-light mb-4">Detalle usuario</h1>

            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form onSubmit={formik.handleSubmit}
                    >
                    
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="id "
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        {formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null}



                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificacion</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identificacion"
                                type="number"
                                placeholder="identificacion "
                                value={formik.values.identificacion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        {formik.touched.identificacion && formik.errors.identificacion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.identificacion} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre "
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        {formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">
 
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            placeholder="Correo Electrónico" 
                            value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.email} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">    
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="text"
                            placeholder="Contraseña" 
                            value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur} />
                        </div>


                        {formik.touched.password && formik.errors.password ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.password} </p>
                            </div>
                        ) : null}
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="ingresar " />
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default DetalleUsuario;