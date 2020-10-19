import React from "react";
import { motion } from "framer-motion"

const Home = () => {
    return <div className="flex h-screen">
        <motion.h1 initial={{
            opacity: 0,
            y: -400
        }}
            animate={{
                scale: 1.5,
                opacity: 1,
                transition: {duration: 3},
                y: 0,
                rotate: 720
            }}
            className="m-auto text-5xl">Welcome Home</motion.h1>
    </div>
}

export default Home;
