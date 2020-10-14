import React, {useState} from "react";
import {Images} from "../components/Images";

const Gallery = () => {

    const [isShowing, setIsShowing] = useState(false);

    const Toggler = props => {
        return <div className="text-center">
            <button onClick={() => setIsShowing(!isShowing)} className="p-1 bg-blue-700 text-white my-2">
                Toggle
            </button>
        </div>
    }

    return (
        <section className="flex justify-center">
            <div className="w-10/12">
                <Images/>
                {/*<Toggler/>*/}
                {/*{ isShowing ? <Images/> : null}*/}
            </div>
        </section>
    );
}

export default Gallery;
