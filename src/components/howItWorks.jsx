import { AiFillCaretDown } from "react-icons/ai";
import React from "react";
import Container from "./container";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
const howItWorks = [

  {
    imgSrc: "https://printify.com/pfh/assets/legacy/custom-products.png",
    imgAlt: "Custom Products Icon",
    step: "Create",
    title: "custom products",
    description:
      "Easily add your designs to a wide range of products using our free tools.",
  },
  {
    imgSrc: "https://printify.com/pfh/assets/legacy/your-products.png",
    imgAlt: "Sell Products Icon",
    step: "Sell",
    title: "on your terms",
    description: "You choose the products, sale price, and where to sell.",
  },
  {
    imgSrc: "https://printify.com/pfh/assets/legacy/fullfillment.png",
    imgAlt: "Fulfillment Icon",
    step: "We handle",
    title: "fulfillment",
    description:
      "Once an order is placed, we automatically handle all the printing and delivery logistics.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f7f7f7] relative">
      <div className="absolute hidden lg:grid -top-60 w-full place-items-center">
        <AiFillCaretDown size={450} className="text-white" />
      </div>
      <Container className="pt-10 sm:pt-[280px] px-20 xl:pb-10">
        <motion.div viewport={{ once: true }} whileInView={{width: '100%', opacity:1}} initial={{width:"0%", opacity:0}} transition={{duration:0.5, delay:0.3, ease:"easeInOut"}} className="flex flex-col lg:flex-row justify-end bg-white rounded-xl lg:pt-10 pb-12 sm:pb-32 lg:pr-10 relative">
          <div className="lg:absolute bottom-5 left-0 h-[400px] lg:h-auto lg:w-[42%] lg:max-w-[460px] bg-green-500 rounded-xl">
            <img
              src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp"
              className="w-full h-full object-cover"

              alt="image"
              srcset=""
            />
          </div>
          <div className="lg:max-w-[350px] tracking-tight space-y-6 px-10 lg:px-0 lg:mr-20 mt-10">
            <h2 className="text-3xl font-bold ">
              Easily add your design to a wide range of products
            </h2>

            <p className="text-xl text-gray-500">
              With our free design tools, you can easily add your custom designs
              to tshirts, mugs, phone cases, and hundreds of other products.
            </p>
            <a
              href=""
              className="flex items-center  text-secondary hover:text-green-600 font-bold group transition-all duration-200"
            >
              All Products
              <AiOutlineArrowRight
                size={20}
                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition-all text-secondary group-hover:text-green-600"
              />
            </a>
          </div>
        </motion.div>
       <div className="flex flex-col text-center md:text-left md:flex-row items-center md:justify-between mt-20 sm:mt-32 gap-5 space-y-10 md:space-y-0 pb-20 overflow-hidden">
       {
          howItWorks.map((item, index) => (

            <motion.div viewport={{ once: true }} key={index} whileInView={{opacity:1, translateY:0}} initial={{opacity:0, translateY:100}} transition={{duration:0.5, delay:0.3+index*0.1, ease:"easeInOut"}} className="tracking-tighter space-y-6 md:w-[30%] max-w-[350px] group cursor-pointer">
              <img src={item.imgSrc} className="max-w-[156px] mx-auto md:mx-0 group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-105" alt={item.imgAlt} />
              <div>

              <h3 className="text-2xl font-bold text-secondary uppercase">{item.step}</h3>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              </div>
              <p className="text-md text-gray-500">{item.description}</p>

            </motion.div>
          ))
        }
       </div>
      </Container>

    </section>
  );
}
