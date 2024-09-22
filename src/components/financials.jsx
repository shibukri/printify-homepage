import React from 'react'
import Container from './container'
import { AiFillCaretDown } from 'react-icons/ai'
import plantImage from '../public/images/moneyPlant.jpg'
import CustomButton from './customButton'
import { motion } from 'framer-motion'

export default function Financials() {
  return (
    <Container className='relative overflow-hidden pt-20 sm:pt-40 pb-16 sm:pb-32'>
        <div className="absolute -top-60 left-0 right-0 hidden sm:grid place-items-center z-10">
        <AiFillCaretDown size={450} className="text-[rgb(247,247,247)]" />
      </div>

      <motion.div viewport={{ once: true }} whileInView={{opacity:1, width:"100%"}} initial={{opacity:0, width:0}} transition={{duration:0.5, delay:0.3, ease:"easeIn"}} className="flex justify-between bg-[#203741] lg:pl-14 rounded-xl pt-2 pb-10 lg:px-20 px-8 relative gap-3">
          <div className="absolute lg:block hidden bottom-0 overflow-hidden -right-0 w-1/2 rounded-2xl">
            <img

            className='rounded-2xl'
              src={plantImage}
              alt="image"
              srcset=""
            />
          </div>
          <div className="lg:w-[45%] lg:pr-10 tracking-tight space-y-7 mt-10">
            <h2 className="text-5xl font-bold text-white">
            Make Money, Risk-Free

            </h2>

            <p className="text-xl text-gray-300">
            You pay for fulfillment only when you make a sale.
            </p>

            <div className='grid grid-cols-2 justify-center items-center w-full rounded-xl bg-[#17262b] px-4 lg:px-8 py-14 text-white text-lg font-semibold space-y-3'>
               <p>You sell t-shirt</p>
               <p className='text-right'>$30</p>
               <p>You pay for its production</p>
               <p className='text-right'>$12</p>
               <hr className='col-span-2 mt-5'/>
               <h2 className='text-secondary font-bold'>Your Profit</h2>
               <h2 className='text-right text-secondary font-bold'>$18</h2>
            </div>

            <CustomButton type='secondary'>Start Selling</CustomButton>
            <p className='text-gray-300'>100% Free to use · 900+ Products · Largest print network </p>
          </div>
        </motion.div>

    </Container>
  )
}

