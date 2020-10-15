import React from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Gallery from "../../pages/Gallery";

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
        path: "/gallery",
        exact: true,
        component: () => <Gallery/>,
        middleware: "auth",
    },
]
