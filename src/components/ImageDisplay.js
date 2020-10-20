import React, {useRef, useState} from "react";
import PropTypes from 'prop-types';
import {useTensorFlowPrediction} from "../utils/hooks/useTensorFlowPrediction";

const ImageDisplay = ({image, index, handleImageRemove, showImage}) => {

    const imageRef = useRef();
    const [isHovering, setIsHovering] = useState(false);
    const {predict, isLoading, predictions, setPredictions} = useTensorFlowPrediction()

    return (
        <div className="relative"
             onMouseEnter={() => setIsHovering(true)}
             onMouseLeave={() => setIsHovering(false)}>
            {(predictions.length > 0 || isLoading) && (
                <span
                    className="absolute bg-gray-800 text-white rounded-lg shadow px-2 left-0 ml-5"
                    onClick={() => setPredictions([])}
                >
          {isLoading && <p>Fetching results...</p>}
                    {predictions.map((prediction, index) => (
                        <div key={index} className="flex justify-between text-sm">
                            <p>{prediction.className}</p>
                            <p>{Math.floor(prediction.probability * 100)} %</p>
                        </div>
                    ))}
        </span>
            )}
            <i className={`fas fa-times absolute right-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`} onClick={() => handleImageRemove(index)}/>
            <i className={`fas fa-search absolute left-0 cursor-pointer opacity-25 hover:opacity-100 ${isHovering ? "" : "hidden"}`} onClick={() => predict(imageRef.current)}/>
            <img onClick={showImage}
                 crossOrigin='anonymous'
                 ref={imageRef}
                 src={image}
                 width="100%"
                 height="auto"
                 alt={image}/>
        </div>
    )
}

/*const types = {
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
}*/

ImageDisplay.propTypes = {

    image: PropTypes.string,

    showImage: PropTypes.func,

    index: PropTypes.number,

    handleImageRemove: PropTypes.func
}

export default ImageDisplay;
