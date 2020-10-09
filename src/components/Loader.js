import React from "react";

export default function Loader() {

    return <div className="flex h-screen">
        <p className="m-auto">
            <i className="fas fa-circle-notch fa-spin text-5xl text-yellow-600"/>
        </p>
    </div>
}
