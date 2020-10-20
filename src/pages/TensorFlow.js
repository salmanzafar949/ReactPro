import React, {useRef} from "react";
import {useTensorFlowPrediction} from "../utils/hooks/useTensorFlowPrediction";

const TensorFlow = (props) => {

    const ImageRef = useRef();
    const [predict, isLoading, predictions] = useTensorFlowPrediction()

    return (
        <div className="flex justify-center">
            <div className="w-1/3">
                <h1 className="text-center">TensorFlow example</h1>
                <img width="400"
                     crossOrigin="anonymous"
                     src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3MjkzNX0"
                     ref={ImageRef} alt=""/>
                     <div className="text-center my-5">
                         <button disabled={isLoading} onClick={() => predict(ImageRef.current)} className="p-2 rounded bg-green-700 text-white">
                             Predict { isLoading && <i className="fas fa-spinner fa-spin"/> }
                         </button>
                     </div>

                {
                    predictions.length > 0 &&
                        predictions.map((data, index) => {
                            return <div key={index}>
                                className: {data.className} - probability {Math.floor(data.probability * 100)}
                            </div>
                        })
                }
            </div>
        </div>
    )
}

export default TensorFlow;
