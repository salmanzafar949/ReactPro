import React, {useState} from "react";

export const ImageDisplay = ({image, index, handleImageRemove, showImage}) => {

    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="relative"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            {
                isHovering ? <i className='fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100' onClick={() => handleImageRemove(index)}/> : null
            }
            <img onClick={showImage}
                 src={image}
                 width="100%"
                 height="auto"
                 alt={image}/>
        </div>
    )
}
