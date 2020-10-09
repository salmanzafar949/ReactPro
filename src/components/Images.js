import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {ImageDisplay} from "./ImageDisplay";

export const Images = () => {

    const [url, setUrl] = useState('');

    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ]);

    const [title, setTitle] = useState('React js');

    const inputBoxRef = useRef(null);

    const imagesCountRef = useRef(images.length);

    useEffect(() => {

        inputBoxRef.current.focus();

        const interval = setInterval(() => {
            console.log("abcdef");
        }, 1000);

       return () => clearInterval(interval)

    },[]);

    /*
    * useEffect for update
    */
    useEffect(() => {
        imagesCountRef.current = imagesCountRef.current - 1;
    })

    useLayoutEffect(() => setTitle('React Js World'), []);

    const handleNewImageURl = () => {

        setImages([...images, url]);

        setUrl('')
    }

    const handleImageRemove = (index) => {
        setImages(images.filter((image, i) => i !== index))
    }

    function ShowImage () {
        return images.map((image, index) => <ImageDisplay key={index} image={image} index={index} handleImageRemove={handleImageRemove}/>)
    }

    function FormComp () {

        return <div className="flex justify-between my-5">
            <div className="w-full">
                <input type={"text"} ref={inputBoxRef} className="p-2 border border-gray-800 shadow rounded w-full"  onChange={e => setUrl(e.target.value)} value={url} required={true}/>
            </div>

            <div className="">
                <button type='button' className={`p-2 text-white ml-2 ${url ? 'bg-green-600' : 'bg-green-200'}`} onClick={handleNewImageURl} disabled={!url}>Add</button>
            </div>
        </div>
    }

    return <section>
        <h1> {imagesCountRef.current } </h1>
        <p>
            {title}
        </p>
      <div className="flex flex-wrap justify-center">
          <ShowImage/>
      </div>
        <FormComp/>
    </section>
}
