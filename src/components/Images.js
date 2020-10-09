import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import {ImageDisplay} from "./ImageDisplay";
import Axios from "axios";
import useScroll from "../utils/hooks/useScroll";
import useFetchImage from "../utils/hooks/useFetchImage";

export const Images = () => {

    const [url, setUrl] = useState('');

    const [images, setImages] = useFetchImage();

    const inputBoxRef = useRef(null);

     const imagesCountRef = useRef(images.length);

    useEffect(() => {

        inputBoxRef.current.focus();

        /*const interval = setInterval(() => {
            console.log("abcdef");
        }, 1000);

       return () => clearInterval(interval)*/

    },[]);

    /*
    * useEffect for update
    */
    // useEffect(() => {
    //     // imagesCountRef.current = 0;
    // })

    // useLayoutEffect(() => setTitle('React Js World'), []);

    const handleNewImageURl = () => {

        setImages([...images, url]);

        setUrl('')
    }

    const handleImageRemove = (index) => {
        setImages(images.filter((image, i) => i !== index))
         imagesCountRef.current = imagesCountRef.current - 1;
    }

    function ShowImage () {
        return images.map((img, index) => <ImageDisplay key={index} image={img.urls.regular} index={index} handleImageRemove={handleImageRemove}/>);
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

      <div className="flex flex-wrap justify-center">
          <ShowImage/>
      </div>
        <FormComp/>
    </section>
}
