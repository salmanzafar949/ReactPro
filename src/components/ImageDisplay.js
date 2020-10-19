import React, {useState} from "react";
import {motion} from "framer-motion";

export const ImageDisplay = ({image, index, handleImageRemove}) => {

    const [isHovering, setIsHovering] = useState(false);

    return <div className='w-1/5 p-1 border flex justify-center'>
        <div className="relative"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            {
                isHovering ? <i className='fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100' onClick={() => handleImageRemove(index)}/> : null
            }
            <motion.img src={image}
                        whileHover={{
                            scale: 2
                        }}
                        width="100%"
                        height="auto"
                        alt={image}/>
        </div>
    </div>
}
