import React, {useEffect, useState} from "react";
import Axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function useFetchImage(page, query) {

    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetch = () => {

        setIsLoading(true);

        const endpoint = query ? `search/photos/?query=${query}&` : `photos?`

        Axios.get( `${URL}${endpoint}client_id=${API_KEY}&page=${page}`)
            .then((res) => {
                if (query)
                    fetchSearchedImages(res)
                else
                    fetchRandomImages(res)
            })
            .catch(err => {
                setIsLoading(false)
                setErrors(err.response.data.errors)
            });

    }

    const fetchSearchedImages = (res) => {
        if (page > 1)
            setImages([...images, ...res.data.results])
        else
            setImages([...res.data.results])
    }

    const fetchRandomImages = (res) => {
        if (page > 1)
            setImages([...images, ...res.data])
        else
            setImages([...res.data])
    }

    useEffect(() => {
        fetch();
    },[page, query])

    /*useEffect(() => {
        fetch();
    },[query])*/

    return [images, setImages, errors, setErrors, isLoading, setIsLoading];
}
