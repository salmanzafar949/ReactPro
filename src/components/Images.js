import React, {useEffect} from "react";

export const Images = () => {

    useEffect(() => {

       const interval = setInterval(() => {
            console.log("abcdef");
        }, 1000);

       return () => clearInterval(interval)

    },[]);

    return <img src={"https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} alt={''}/>
}
