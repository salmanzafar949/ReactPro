import React, {useEffect, useState} from "react";
import Axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function useFetchImage(page, query) {

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

    useEffect(() => {
        if (!query) return;
        setIsLoading(true)
        Axios.get( `${URL}search/photos/?client_id=${API_KEY}&page=${page}&query=${query}`)
            .then(res => {
                setIsLoading(false)
                setImages([...res.data.results])
            })
            .catch(err => {
                setIsLoading(false)
                setErrors(err.response.data.errors)
            });
    },[query])

    return [images, setImages, errors, setErrors, isLoading, setIsLoading];
}
