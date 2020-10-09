import React from "react";

export default function ErrorComp({errors}){

    return <div className="flex h-screen">
        <p className="m-auto">
            {errors}
        </p>
    </div>
}
