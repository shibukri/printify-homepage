import { AiFillCheckCircle } from "react-icons/ai";
import React from "react";
import Container from "./container";
import CustomButton from "./customButton";
import heroVideo from "../public/videos/swipe.webm";
import { motion } from "framer-motion";
export default function Hero() {
  return (

    <Container className="flex flex-col md:flex-row  justify-between p-10 px-10 md:mt-20 items-center gap-5">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:0.3}} viewport={{ once: true }} className="space-y-5">
        <h1 className=" text-4xl md:text-5xl font-bold tracking-tight">
          <span className="bg-gradient-to-tr from-secondary to-green-900 text-transparent bg-clip-text">
            Create And Sell
          </span>
          <br />
          Custom Products
        </h1>
        <div className="pl-4 space-y-1">
          <div className="flex gap-1 items-center">
            <AiFillCheckCircle className="text-green-500" size={25} />

            <p className="text-lg font-semibold">100% Free to use</p>
          </div>
          <div className="flex gap-1 items-center">
            <AiFillCheckCircle className="text-green-500" size={25} />
            <p className="text-lg font-semibold">900+ High-Quality Products</p>
          </div>
          <div className="flex gap-1 items-center">
            <AiFillCheckCircle className="text-green-500" size={25} />
            <p className="text-lg font-semibold">
              Largest global print network
            </p>
          </div>
        </div>
        <CustomButton className="mr-5">Start for free</CustomButton>
        <CustomButton type="secondary">How it works?</CustomButton>
        <p className="text-lg font-semibold text-green-600 tracking-tighter">
          Trusted by 100,000+ businesses worldwide
        </p>
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:0.6}} className="md:w-1/2 w-[90%] max-h-[400px] aspect-square items-center mt-8 md:mt-0">
        <video
          className="object-cover rounded-lg"
          autoPlay
          muted
          loop
        >
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.

        </video>

      </motion.div>
    </Container>
  );
}
