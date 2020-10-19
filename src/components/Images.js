import React, {useEffect, useRef, useState} from "react";
import {ImageDisplay} from "./ImageDisplay";
import Loader from './Loader';
import ErrorComp from './ErrorComp';
import useFetchImage from "../utils/hooks/useFetchImage";
import InfiniteScroll from "react-infinite-scroll-component";
import useDeBounce from "../utils/hooks/useDebounce";
import {AnimatePresence, AnimateSharedLayout, motion} from "framer-motion";

export const Images = () => {

    const [url, setUrl] = useState('');

    const [pageNo, setPageNo] = useState(1)

    const [searchTerm, setSearchTerm] = useState("");

    const [images, setImages, errors, setErrors, isLoading, setIsLoading] = useFetchImage(pageNo, searchTerm);

    const debounce = useDeBounce();

    const inputBoxRef = useRef(null);

    const imagesCountRef = useRef(images.length);

    /* useEffect(() => {

         if (scrollPosition >= document.body.offsetHeight - window.innerHeight)
         {
             setPageNo(pageNo + 1)
         }

         console.log(scrollPosition, window.innerHeight, document.body.offsetHeight)

     },[scrollPosition])*/

    useEffect(() => {

        // inputBoxRef.current.focus();

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
        const [showPreview, setShowPreview] = useState(null);

        return <AnimateSharedLayout>
            <InfiniteScroll className="flex flex-wrap" next={() => setPageNo(pageNo + 1)} hasMore={true} dataLength={images.length}>
                {
                    images.map((image, index) => <motion.div layoutId={image.urls.regular} key={index} className='w-1/6 p-1 border flex justify-center'>
                        <ImageDisplay showImage={() => setShowPreview(image.urls.regular)} image={image.urls.regular} index={index} handleImageRemove={handleImageRemove}/>
                    </motion.div>)
                }
            </InfiniteScroll>
            <AnimatePresence>
                {
                    showPreview && (
                        <motion.section layoutId={showPreview} exit={{opacity: 0, rotate: 360, transition: {duration: 1}}} className="fixed w-full h-full flex justify-center items-center top-0 left-0 z-40" onClick={() => setShowPreview(false)}>
                            <div className="bg-white">
                                <p>
                                    <img src={showPreview}
                                         width="300"
                                         height="auto"
                                         alt={showPreview}/>
                                </p>
                            </div>
                        </motion.section>
                    )
                }
            </AnimatePresence>
        </AnimateSharedLayout>;
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

    function handleInput (e) {

        const term = e.target.value;

        debounce(() => setSearchTerm(term))
    }

    function ShowData(){
        return<div>
                <ShowImage/>
        </div>
    }

    return <section>
        <div className="my-5 border rounded shadow">
            <input
                type="text"
                className="w-full"
                onChange={handleInput}
                placeholder="Search photos"/>
        </div>
        <ShowData/>
        {
            errors && errors.length > 0 && <ErrorComp errors={errors}/>
        }
        {isLoading && <Loader/>}
    </section>
}
