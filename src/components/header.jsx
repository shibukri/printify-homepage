import { RxHamburgerMenu } from "react-icons/rx";
import { FiChevronDown } from "react-icons/fi";
import Container from "./container";
import CustomButton from "./customButton";
import AsideNavbar from "./asideNavbar";
import { useState } from "react";
import { motion } from "framer-motion";
const delay = 0.3
export default function Header() {
  const [mobileNavActive, setMobileNavActive] = useState("false");
  return (
    <header className="border-b">
      <AsideNavbar className={`${!mobileNavActive ? 'translate-x-0' : '-translate-x-full'}`} />
      <Container className="overflow-hidden">
        <nav className="flex justify-between items-center py-4">
          <ul className="flex gap-2 items-center">
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3}} onClick={()=>setMobileNavActive(pre=>!pre)}>
              <CustomButton onclick className="border-none p-2 lg:hidden">
                <RxHamburgerMenu size={22} />
              </CustomButton>
            </motion.li>
            <motion.li initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.3, delay:delay}}>
              <a href="">
                <img
                className="hidden sm:inline-block"
                  src="https://printify.com/pfh/media/logo-WQH7INSW.svg"
                  alt="Printify Logo"
                />
                <img
                className="sm:hidden"
                src="https://printify.com/pfh/media/logo-small-PPDIFGJH.svg" alt="Printify Logo Mobile" srcset="" />
              </a>
            </motion.li>
          </ul>

          <ul className="hidden lg:text-sm xl:text-lg lg:flex gap-4 justify-center items-center relative z-50 overflow-hidden">
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay}}>
              <a href="">Catalog</a>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.1}} className="relative group">
              <a href="" className="flex items-center justify-center">
                How it works

                <FiChevronDown
                  size={23}
                  className="mt-1 group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <aside className="-z-10 absolute hidden flex-col top-0 pt-12 hover:block group-hover:block opacity-0 group-hover:opacity-100 w-[250px]">
                <div className="flex flex-col px-4 shadow-2xl py-4">
                  <a className="hover:" href="">
                    How Printify Works
                  </a>
                  <a className="hover:" href="">
                    Print On Demand
                  </a>
                  <a className="hover:" href="">
                    Printify Quality Promise
                  </a>
                  <a className="hover:" href="">
                    What to Sell?
                  </a>
                </div>
              </aside>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.2}}>
              <a href="">Pricing</a>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.3}}>
              <a href="">Blog</a>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.4}} className="relative group">
              <a href="" className="flex items-center justify-center">
                Services

                <FiChevronDown
                  size={23}
                  className="mt-1 group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <aside className="-z-10 absolute hidden flex-col top-0 pt-12 hover:block group-hover:block opacity-0 group-hover:opacity-100 w-[250px]">
                <div className="flex flex-col px-4 shadow-2xl py-4">
                  <a className="hover:text-blue-700 hover:underline" href="">
                    Printify Studio
                  </a>
                  <a className="hover:text-blue-700 hover:underline" href="">
                    Printify Express Delivery
                  </a>
                  <a className="hover:text-blue-700 hover:underline" href="">
                    Tranfer Products
                  </a>
                  <a className="hover:text-blue-700 hover:underline" href="">
                    Order in Bulk
                  </a>
                  <a className="hover:text-blue-700 hover:underline" href="">
                    Experts Program
                  </a>
                </div>
              </aside>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.5}} className="relative group">
              <a href="" className="flex items-center justify-center">
                Use-cases

                <FiChevronDown
                  size={23}
                  className="mt-1 group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <aside className="-z-10 absolute hidden flex-col top-0 pt-12 hover:block group-hover:block opacity-0 group-hover:opacity-100 w-[250px]">
                <div className="flex flex-col px-4 shadow-2xl py-4">
                  <a className="hover:" href="">
                    Merch for Fans
                  </a>
                  <a className="hover:" href="">
                    Merch for eCommerce
                  </a>
                  <a className="hover:" href="">
                    Merch for Enterprises
                  </a>
                  <a className="hover:" href="">
                    Grow Your Store
                  </a>
                </div>
              </aside>
            </motion.li>
            <motion.li initial={{opacity:0, y:-100}} animate={{opacity:1, y:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay+0.6}} className="relative group">
              <a href="" className="flex items-center justify-center">
                Need Help?

                <FiChevronDown
                  size={23}
                  className="mt-1 group-hover:rotate-180 transition-transform duration-200"
                />
              </a>
              <aside className="-z-10 absolute hidden flex-col top-0 pt-12 hover:block group-hover:block opacity-0 group-hover:opacity-100 w-[250px]">
                <div className="flex flex-col px-4 shadow-2xl py-4">
                  <a className="hover:" href="">
                    Help Center
                  </a>
                  <a className="hover:" href="">
                    Contacts
                  </a>
                  <a className="hover:" href="">
                    My Requests
                  </a>
                </div>
              </aside>
            </motion.li>
          </ul>

          <motion.ul initial={{opacity:0, x:100}} animate={{opacity:1, x:0, ease:'easeInOut'}} transition={{duration:0.3, delay:delay}} className="flex gap-4 justify-center items-center">
            <CustomButton>Login</CustomButton>
            <CustomButton type="secondary">Sign up</CustomButton>
          </motion.ul>
        </nav>
      </Container>
    </header>
  );
}
