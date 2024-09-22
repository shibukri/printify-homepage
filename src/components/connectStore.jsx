import React from "react";
import Container from "./container";
import { AiFillCaretDown } from "react-icons/ai";
import CustomButton from "./customButton";
import { motion } from "framer-motion";
export default function ConnectStore() {
  const stores = [
    {
      name: "PrestaShop",
      url: "https://printify.com/prestashop/",
      imgSrc: "https://printify.com/pfh/media/presta-54F6AYUU.svg",
      position: { left: 23.9987, top: 47.9743 },
    },
    {
      name: "Wix",
      url: "https://printify.com/wix/",
      imgSrc: "https://printify.com/pfh/media/wix-MWZCZDTE.svg",
      position: { left: 94.7994, top: -1.9963 },
    },
    {
      name: "WooCommerce",
      url: "https://printify.com/woocommerce/",
      imgSrc: "https://printify.com/pfh/media/woo-PGFAG65X.svg",
      position: { left: 76.9993, top: 34.9818 },
    },
    {
      name: "Squarespace",
      url: "https://printify.com/squarespace/",
      imgSrc: "https://printify.com/pfh/media/squarespace-FIBF2RIF.svg",
      position: { left: 63.9987, top: 9.9927 },
    },
    {
      name: "Shopify",
      url: "https://printify.com/shopify/",
      imgSrc: "https://printify.com/pfh/media/shopify-3NAPXPBF.svg",
      position: { left: 51.9993, top: 74.9633 },
    },
    {
      name: "Integrations",
      url: "https://printify.com/integrations/",
      imgSrc: "https://printify.com/pfh/media/more-integration-4S3FHLQZ.svg",
      position: { left: 37.999, top: 69.9633 },
    },
    {
      name: "Etsy",
      url: "https://printify.com/etsy/",
      imgSrc: "https://printify.com/pfh/media/etsy-MXXFYORZ.svg",
      position: { left: 87.999, top: 58.9708 },
    },
    {
      name: "Printify API",
      url: "https://printify.com/printify-api/",
      imgSrc: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      position: { left: 1.9993, top: 63.967 },
    },
    {
      name: "BigCommerce",
      url: "https://printify.com/bigcommerce/",
      imgSrc: "https://printify.com/pfh/media/big-commerce-EGSGKPYX.svg",
      position: { left: 31.9993, top: 2.9963 },
    },
  ];

  const randomSize = () => {
    const min = 74;
    const max = 165;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  return (
    <Container className="relative overflow-hidden pb-20">
      <div className="absolute -top-60 left-0 right-0 hidden sm:grid place-items-center text-center">
        <AiFillCaretDown size={450} className="text-[#f7f7f7]" />
      </div>

      <div className="flex flex-col md:items-center justify-center space-y-6 mt-20 md:mt-28 mb-20">
        <h2 className="text-4xl font-bold">Connect your store</h2>
        <p className="text-lg text-gray-500">

          Printify easily integrates with major e-commerce platforms and
          marketplaces API
        </p>
        <div className="relative mx-10">
          {stores.map((store, index) => (
            <motion.div
            viewport={{ once: true }}
              whileInView={{left: `${store.position.left}%`, top: `${store.position.top}%`, transform: "translate(0%, 0%)"}}
              initial={{left: `50%`, top: `50%`, transform: "translate(-50%, -50%)"}}
              transition={{duration:0.5, delay:0.3+index*0.05, ease:"easeInOut"}}
              key={index}
              className={`absolute p-1 sm:p-5 border bg-white shadow-2xl rounded-2xl cursor-pointer aspect-square hover:scale-110 duration-300 object-cover flex items-center justify-center`}

              style={{
                left: `${store.position.left}%`,
                top: `${store.position.top}%`,
                maxWidth: `${randomSize()}px`,
                width: `15%`,
              }}
            >
              <img
                className="w-full h-full object-contain"
                src={store.imgSrc}
                alt={store.name}
              />
            </motion.div>
          ))}

          <div className="absolute p-1 sm:p-5 min-w-[40px] border w-[15%] max-w-[150px] bg-green-500 aspect-square object-contain top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-2xl rounded-2xl hover:scale-110 duration-300 cursor-pointer flex items-center justify-center z-50">
            <img
              src="https://printify.com/pfh/media/printify-E3TBSF5R.svg"

              alt=""
              srcset=""
              className="w-full h-full object-contain"
            />
          </div>

          <img
            src="https://printify.com/pfh/media/stores-background-QSGENTOX.svg"
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="bg-[#e2f7e3] py-4 md:py-8 px-8 lg:px-20 relative rounded-2xl overflow-hidden mx-8 md:mx-20 flex gap-4 items-center justify-between flex-wrap md:flex-nowrap">
        <img className="absolute right-0 top-0 bottom-0 h-full" src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg" alt="" srcset="" />
        <h2 className="text-sm md:text-xl lg:text-2xl font-bold text-green-800 md:whitespace-nowrap relative  z-10">Are you a large business looking <br className="hidden md:block"/> for custom solutions?</h2>
        <CustomButton className="relative z-10 bg-white text-sm md:text-base"> Talk to sales</CustomButton>
      </div>

    </Container>

  );
}
