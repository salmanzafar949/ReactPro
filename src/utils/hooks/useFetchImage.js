import React, {useEffect, useState} from "react";
import Axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function useFetchImage(page) {

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        Axios.get( `${URL}photos/?client_id=${API_KEY}&page=${page}`)
            .then(res => {
                setIsLoading(false)
                setImages([...images, ...res.data])
            })
            .catch(err => {
                setIsLoading(false)
                setErrors(err.response.data.errors)
            });
    },[page])

    return [images, setImages, errors, setErrors, isLoading, setIsLoading];
}
