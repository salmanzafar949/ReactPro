import React, {useState} from "react";

const ImageDisplay = ({image, index, handleImageRemove, showImage}) => {

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

const types = {
    function (props, propName){
        if (typeof props[propName] !== 'function')
        {
            return new Error(`${propName} must be string but ${typeof props[propName]} given`)
        }
    },

    number(props, propName){
        if (typeof props[propName] !== 'number')
        {
            return new Error(`${propName} must be number but ${typeof props[propName]} given`)
        }
    },

    string(props, propName){
        if (typeof props[propName] !== 'string')
        {
            return new Error(`${propName} must be number but ${typeof props[propName]} given`)
        }
    },
}
ImageDisplay.propTypes = {

    image: types.string,

    showImage: types.function,

    index: types.number,

    handleImageRemove: types.function
}

export default ImageDisplay;
