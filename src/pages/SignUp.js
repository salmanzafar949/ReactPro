import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

const SignUp = props => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => console.log(values),
        validationSchema: Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).required()
        })
    });

    return <div className="flex h-screen bg-white">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <form onSubmit={formik.handleSubmit} className="m-5 w-10/12">
                <h1 className="w-full text-4xl tracking-widest text-center my-6"> Signup </h1>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black"
                           type="email"
                           name="email"
                           value={formik.values.email}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           placeholder="Email"/>
                    {
                        formik.touched.email && formik.errors.email
                        ? <p className="text-red-600"> {formik.errors.email} </p>
                            : null

                    }
                </div>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black"
                           placeholder="*******"
                           name="password"
                           value={formik.values.password}
                           onChange={formik.handleChange}
                           onBlur={formik.handleBlur}
                           type="password"/>
                    {
                        formik.touched.password && formik.errors.password
                            ? <p className="text-red-600"> {formik.errors.password} </p>
                            : null

                    }                </div>
                <div className="w-full my-10">
                    <button type="submit"
                            // disabled={isLoading}
                            className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                        SignUp
                        {/*Login { isLoading ?  <i className="fas fa-spinner fa-spin"/> : null }*/}
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default SignUp;
