import React from "react";
import {useFormik} from "formik";

const SignUp = props => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: values => console.log(values),
        validate: values => {
            const errors = {}
            if (!values.email)
            {
                errors.email = "Email is required"
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
            {
                errors.email = 'Invalid email address';
            }

            if (!values.password)
            {
                errors.password = "Password is Required"
            }
            else if (values.password.length < 8)
            {
                errors.password = "Password Should be minimum of 8 characters"
            }

            return errors;
        }
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
