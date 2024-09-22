import { AiFillStar } from "react-icons/ai"; 
import React from 'react'
import Container from './container'
import { motion } from "framer-motion";

export default function SocialProof() {
    const socialProofItems = [
        {
          authorName: "Robert A. Voltaire",
          storeLink: "https://www.ravenouseternalhunger.com/",
          comment: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!",
          authorPhoto: "https://printify.com/pfh/media/robert-voltaire-RIZV7QXV.png"
        },
        {
          authorName: "Quinten Barney",
          storeLink: "https://www.example.com/", 
          comment: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better.",
          authorPhoto: "https://printify.com/pfh/media/quinten-barney-CHC7B3FG.png"
        },
        {
          authorName: "Nikki",
          storeLink: "https://mynerdlife.com/",
          comment: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze.",
          authorPhoto: "https://printify.com/pfh/media/nikki-TJP4NANB.png"
        },
        {
          authorName: "Spencer, Brett, and Kyle",
          storeLink: "https://brotallion.com/",
          comment: "Using Printify has been a great experience. Customer service is always very quick to respond and handle any issues that our customers may have. The premium account has more than paid for itself and has increased our margins significantly.",
          authorPhoto: "https://printify.com/pfh/media/spencer-brett-kyle-NLHTAZDT.png"
        },
        {
          authorName: "April Showers",
          storeLink: "https://afrounicorns.com/",
          comment: "I really appreciate working with Printify on my brand. Afro Unicorn was only supposed to be my design on a white shirt. It is so much more. Printify allows me the time to run the business and not work in the business.",
          authorPhoto: "https://printify.com/pfh/media/april-showers-BCJ7SD2U.jpeg"
        }
      ];
      
  return (
    <section className="bg-[#f7f7f7] py-20">
        <Container>
            <div className='tracking-tight mx-auto text-center space-y-5'>

                <h2 className='text-4xl font-bold max-w-xl mx-auto'>
                Trusted by over <br className="sm:hidden"/><span className='bg-gradient-to-tr from-secondary to-green-900 text-transparent bg-clip-text'>8M sellers</span> around the world
                </h2>
                <p className='text-gray-500 max-w-3xl mx-auto'>Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience. </p>
            </div>
            <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {
                    socialProofItems.map((item, index) => (
                        <motion.div viewport={{ once: true }} whileInView={{opacity:1, y:0}} initial={{opacity:0, y:100}} transition={{duration:0.5, delay:index*0.1, ease:"easeIn"}} key={index} className='bg-white p-4 rounded-lg shadow-lg space-y-4 cursor-pointer hover:shadow-2xl transition-all duration-300 border overflow-hidden'>
                            <div className="flex items-center gap-2"> 
                            <img src={item.authorPhoto} alt={item.authorName} className='w-12 h-12 rounded-full' />

                            <div className="space-y-1">
                            <a href={item.storeLink} target="_blank" rel="noopener noreferrer" className=''>{item.authorName}</a>
                            <div className='flex items-center'>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>

                            <AiFillStar className='text-yellow-500' size={20}/>
                            <AiFillStar className='text-yellow-500' size={20}/>
                            </div>
                            </div>
                            </div>
                            <p className='text-gray-500'>{item.comment}</p>
                        </motion.div>

                    ))
                }
            </div>

        </Container>


    </section>

  )
}
