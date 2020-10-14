import React from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Gallery from "../../pages/Gallery";

export default [
    {
        path: "/",
        exact: true,
        component: () => <Home/>
    },
    {
        path: "/login",
        exact: true,
        component: () => <Login/>
    },
    {
        path: "/gallery",
        exact: true,
        component: () => <Gallery/>
    },
]
