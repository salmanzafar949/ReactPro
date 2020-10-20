import React from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Gallery from "../../pages/Gallery";
import SignUp from "../../pages/SignUp";
import TensorFlow from "../../pages/TensorFlow";

export default [
    {
        path: "/",
        exact: true,
        component: () => <Home/>,
        middleware: null,
    },
    {
        path: "/login",
        exact: true,
        component: () => <Login/>,
        middleware: "guest",
    },
    {
        path: "/signup",
        exact: true,
        component: () => <SignUp/>,
        middleware: "guest",
    },
    {
        path: "/gallery",
        exact: true,
        component: () => <Gallery/>,
        middleware: "auth",
    },
    {
        path: "/tensorflow",
        exact: true,
        component: () => <TensorFlow/>,
        middleware: null,
    },
]
