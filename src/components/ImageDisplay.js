import React, {useState} from "react";

export const ImageDisplay = ({image, index, handleImageRemove}) => {

    const [isHovering, setIsHovering] = useState(false);

    return <div className='w-1/3 my-4 flex justify-center'>
        <div className="relative"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            {
                isHovering ? <i className='fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100' onClick={() => handleImageRemove(index)}/> : null
            }
            <img src={image}
                 width={'150'}
                 alt={image}/>
        </div>
    </div>
}
