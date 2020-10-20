import React, {useState} from "react";
import '@tensorflow/tfjs';
import * as mobilenet from "@tensorflow-models/mobilenet";

export const useTensorFlowPrediction = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [predictions, setPredictions] = useState([]);

    function predict(img)
    {
        setIsLoading(true)
        setPredictions([])
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
                setIsLoading(false)
                setPredictions(predictions)
            });
        });
    }

    return [predict, isLoading, predictions, setPredictions];
}
