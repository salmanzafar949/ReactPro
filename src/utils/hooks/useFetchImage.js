import React, {useEffect, useState} from "react";
import Axios from "axios";

const URL = process.env.REACT_APP_API_BASE_URL;
const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

export default function useFetchImage(page) {

    const [images, setImages] = useState([]);

    useEffect(() => {
        Axios.get( `${URL}?client_id=${API_KEY}&page=${page}`).then(res => setImages([...images, ...res.data])).catch();
    },[page])

    return [images, setImages];
}
