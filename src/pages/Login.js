import React from "react";

const Login = () => {

    function handleLogin(e){
        e.preventDefault();
    }

    return <div className="flex h-screen bg-white">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <form onSubmit={handleLogin} className="m-5 w-10/12">
                <h1 className="w-full text-4xl tracking-widest text-center my-6"> Login </h1>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full"
                           type="email"
                           placeholder="Email"/>
                </div>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full"
                           type="password"/>
                </div>
                <div className="w-full my-10">
                    <button type="submit" className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default Login;
