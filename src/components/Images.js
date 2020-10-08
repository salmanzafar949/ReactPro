import React, {useEffect, useState} from "react";

export const Images = () => {

    const [url, setUrl] = useState('');
    const [isHovering, setIsHovering] = useState(-1);
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
        return images.map((image, index) => {
            return <div className='w-1/3 my-4 flex justify-center' key={index}>
                <div className="relative"
                     onMouseEnter={() => setIsHovering(index)}
                     onMouseLeave={() => setIsHovering(-1)}>
                    {
                        isHovering === index ? <i className='fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100' onClick={() => {
                            setImages(images.filter((image, i) => i !== index))
                        }}/> : null
                    }
                    <img src={image}
                         width={'150'}
                         alt={image}/>
                </div>
            </div>
        })
    }

    function FormComp () {

        return <div className="flex justify-between my-5">
            <div className="w-full">
                <input type={"text"} className="p-2 border border-gray-800 shadow rounded w-full"  onChange={e => setUrl(e.target.value)} value={url} required={true}/>
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
