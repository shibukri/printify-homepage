import React from 'react'
import Container from './container';
import { motion } from 'framer-motion';
export default function Features() {
    const features = [
        {
          imgSrc: "https://printify.com/pfh/assets/legacy/higher-profits.svg",
          imgAlt: "Higher Profits Icon",
          name: "Higher Profits",
          description: "We offer some of the lowest prices in the industry because print providers continuously compete to win your business."
        },
        {
          imgSrc: "https://printify.com/pfh/assets/legacy/robust-scaling.svg",
          imgAlt: "Robust Scaling Icon",
          name: "Robust Scaling",
          description: "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality."
        },
        {
          imgSrc: "https://printify.com/pfh/assets/legacy/best-selection.svg",
          imgAlt: "Best Selection Icon",
          name: "Best Selection",
          description: "With 900+ products and top quality brands, you can choose the best products for your business."
        }
      ];
      
  return (
    <Container className='md:flex-row flex flex-col gap-10 px-16 my-10 sm:my-10 md:py-[144px]'>
        {features.map((feature, index) => (
            <motion.div key={index} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.3, delay:0.3}} viewport={{ once: true }} className='flex flex-col gap-3 md:items-start items-center w-full'>

                <img className='w-[120px]' src={feature.imgSrc} alt={feature.imgAlt} />


                <h3 className='text-2xl font-bold md:text-left text-center'>{feature.name}</h3>
                <p className='text-lg md:text-left text-center'>{feature.description}</p>
            </motion.div>

        ))}
    </Container>

  )
}
