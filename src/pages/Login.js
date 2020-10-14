import React, {useState} from "react";
import firebase from "../config/firebase";
import {useHistory} from 'react-router-dom';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    function handleLogin(e){
        e.preventDefault();
        setIsLoading(true)
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then((res) => {
                console.log(res)
                history.replace('/')
                setError("")
                setIsLoading(false)
            }).catch((err) => {
                setIsLoading(false)
                setError(err.message)
        })
    }

    return <div className="flex h-screen bg-white">
        <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-indigo-600">
            <form onSubmit={handleLogin} className="m-5 w-10/12">
                    {
                        error && <p className="text-red-600 text-3xl"> {error} </p>
                    }
                <h1 className="w-full text-4xl tracking-widest text-center my-6"> Login </h1>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black"
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="Email"/>
                </div>
                <div className="w-full my-6">
                    <input className="p-2 rounded shadow w-full text-black"
                           placeholder="*******"
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           type="password"/>
                </div>
                <div className="w-full my-10">
                    <button type="submit"
                            disabled={isLoading}
                            className="p-2 rounded shadow w-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black">
                        Login { isLoading ?  <i className="fas fa-spinner fa-spin"/> : null }
                    </button>
                </div>
            </form>
        </div>
    </div>
}

export default Login;
