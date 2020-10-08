import React, {useEffect, useState} from "react";

export const Images = () => {

    const [url, setUrl] = useState('');
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ]);

    useEffect(() => {

       const interval = setInterval(() => {
            console.log("abcdef");
        }, 1000);

       return () => clearInterval(interval)

    },[]);

    const handleNewImageURl = () => {

        setImages([...images, url]);

        setUrl('')
    }
    function ShowImage () {
        return images.map(image => {
            return <div className='w-1/3'>
                <img src={image} width={'150'} alt={image}/>
            </div>
        })
    }

    function FormComp () {

        return <div className="flex justify-between my-5">
            <input type={"text"} className="p-2 border border-gray-800 shadow rounded"  onChange={e => setUrl(e.target.value)} value={url} required={true}/>
            <button type='button' className="p-2 bg-green-600 text-white" onClick={handleNewImageURl}>Add</button>
        </div>
    }

    return <section>
      <div className="flex flex-wrap justify-center">
          <ShowImage/>
      </div>
        <FormComp/>
    </section>
}
