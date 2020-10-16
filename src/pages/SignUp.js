import React from "react";
import {useFormik, Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";

// const SignUp = props => {
//
//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: ""
//         },
//         onSubmit: values => console.log(values),
//         validationSchema: Yup.object({
//             email: Yup.string().email().required(),
//             password: Yup.string().min(8).required()
//         })
//     });
//
//     return <div className="flex h-screen bg-white">
//         <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
//             <form onSubmit={formik.handleSubmit} className="m-5 w-10/12">
//                 <h1 className="w-full text-4xl tracking-widest text-center my-6"> Signup </h1>
//                 <div className="w-full my-6">
//                     <input className="p-2 rounded shadow w-full text-black"
//                            type="email"
//                            {...formik.getFieldProps('email')}
//                            // name="email"
//                            // value={formik.values.email}
//                            // onChange={formik.handleChange}
//                            // onBlur={formik.handleBlur}
//                            placeholder="Email"/>
//                     {
//                         formik.touched.email && formik.errors.email
//                         ? <p className="text-red-600"> {formik.errors.email} </p>
//                             : null
//
//                     }
//                 </div>
//                 <div className="w-full my-6">
//                     <input className="p-2 rounded shadow w-full text-black"
//                            placeholder="*******"
//                            {...formik.getFieldProps('password')}
//                            type="password"/>
//                     {
//                         formik.touched.password && formik.errors.password
//                             ? <p className="text-red-600"> {formik.errors.password} </p>
//                             : null
//
//                     }                </div>
//                 <div className="w-full my-10">
//                     <button type="submit"
//                             // disabled={isLoading}
//                             className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
//                         SignUp
//                         {/*Login { isLoading ?  <i className="fas fa-spinner fa-spin"/> : null }*/}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
// }

const SignUp = props => {

    return <Formik
        initialValues={{
            email: "",
            password: ""
        }}
        onSubmit = {values => console.log(values)}
        validationSchema ={Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required()
        })}>
        <div className="flex h-screen bg-white">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <Form className="m-5 w-10/12">
                <h1 className="w-full text-4xl tracking-widest text-center my-6"> Signup </h1>
                <div className="w-full my-6">
                    <Field className="p-2 rounded shadow w-full text-black"
                           type="email"
                         name="email"
                         placeholder="Email"/>
                         <ErrorMessage className="text-2xl text-red-500" name="email"/>
                </div>
                <div className="w-full my-6">
                    <Field className="p-2 rounded shadow w-full text-black"
                           name="password"
                           placeholder="*******"
                           type="password"/>

                           <ErrorMessage className="text-2xl text-red-500"
                               name="password"/>
                </div>
                <div className="w-full my-10">
                    <button type="submit"
                        // disabled={isLoading}
                            className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                        SignUp
                        {/*Login { isLoading ?  <i className="fas fa-spinner fa-spin"/> : null }*/}
                    </button>
                </div>
            </Form>
        </div>
    </div>
    </Formik>
}
export default SignUp;
