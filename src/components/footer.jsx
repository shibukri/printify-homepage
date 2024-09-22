import { BsTiktok } from "react-icons/bs"; 
import { BsReddit } from "react-icons/bs"; 
import { BsYoutube } from "react-icons/bs"; 
import { BsTwitter } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs"; 
import { BsFacebook } from "react-icons/bs"; 
import Container from "./container"
const footerLinks = [
  {
    category: "Integrations",
    links: [
      { name: "Shopify", url: "https://printify.com/shopify/" },
      { name: "Etsy", url: "https://printify.com/etsy/" },
      { name: "eBay", url: "https://printify.com/ebay/" },
      { name: "Amazon", url: "https://printify.com/amazon/" },
      { name: "TikTok Shop", url: "https://printify.com/tiktok-shop/" },
      { name: "PrestaShop", url: "https://printify.com/prestashop/" },
      { name: "BigCommerce", url: "https://printify.com/bigcommerce/" },
      { name: "Wix", url: "https://printify.com/wix/" },
      { name: "WooCommerce", url: "https://printify.com/woocommerce/" },
      { name: "Squarespace", url: "https://printify.com/squarespace/" },
      { name: "Printify API", url: "https://printify.com/printify-api/" },
      { name: "Printify Pop-Up Store", url: "https://printify.com/pop-up-store/" },
      { name: "Shutterstock", url: "https://printify.com/shutterstock/" }
    ]
  },
  {
    category: "Discover",
    links: [
      { name: "Blog", url: "https://printify.com/blog/" },
      { name: "Guides", url: "https://printify.com/guides/" },
      { name: "Products", url: "https://printify.com/app/products" },
      { name: "Etsy print-on-demand", url: "https://printify.com/sell-on-etsy-drop-shipping/" },
      { name: "Shopify print-on-demand", url: "https://printify.com/sell-on-shopify-print-on-demand/" },
      { name: "Woocommerce print-on-demand", url: "https://printify.com/sell-on-woocommerce/" },
      { name: "Wix print-on-demand", url: "https://printify.com/sell-on-wix/" },
      { name: "Squarespace print-on-demand", url: "https://printify.com/how-to-sell-on-squarespace/" },
      { name: "Make Your Own Shirt", url: "https://printify.com/make-your-own-shirt/" },
      { name: "Brands", url: "https://printify.com/app/brands" },
      { name: "Pricing", url: "https://printify.com/pricing/" },
      { name: "Shipping Rates", url: "https://printify.com/shipping-rates/" },
      { name: "Mockup Generator", url: "https://printify.com/mockup-generator/" }
    ]
  },
  {
    category: "Start selling",
    links: [
      { name: "Custom T-shirts", url: "https://printify.com/custom-t-shirts/" },
      { name: "Custom Hoodies", url: "https://printify.com/custom-hoodies/" },
      { name: "Custom Mugs", url: "https://printify.com/custom-mugs/" },
      { name: "Custom Socks", url: "https://printify.com/custom-socks/" },
      { name: "Custom Backpacks", url: "https://printify.com/custom-backpacks/" },
      { name: "Custom Branding", url: "https://printify.com/custom-branding/" },
      { name: "Sell on Etsy", url: "https://printify.com/guide/how-to-sell-on-etsy/" },
      { name: "Sell on Social Media", url: "https://printify.com/sell-on-social-media/" },
      { name: "Free T-shirt Designs", url: "https://printify.com/free-t-shirt-designs/" },
      { name: "Custom Products", url: "https://printify.com/custom-products/" },
      { name: "Custom All-Over-Print Hoodies", url: "https://printify.com/all-over-print-hoodies/" },
      { name: "Start a Clothing Line", url: "https://printify.com/blog/how-to-start-a-clothing-line/" },
      { name: "Start POD Business", url: "https://printify.com/blog/how-to-start-a-print-on-demand-business/" },
      { name: "Bulk Orders", url: "https://printify.com/bulk-orders/" },
      { name: "Transferring To Printify", url: "https://printify.com/transfer-products-to-printify/" }
    ]
  },
  {
    category: "Printify",
    links: [
      { name: "Print on Demand", url: "https://printify.com/print-on-demand/" },
      { name: "Print Providers", url: "https://printify.com/app/print-providers" },
      { name: "Experts Program", url: "https://printify.com/experts-program/hire-an-expert/" },
      { name: "Printify Express Delivery", url: "https://printify.com/printify-express-delivery/" },
      { name: "Become a Partner", url: "https://printify.com/become-a-partner/" },
      { name: "About", url: "https://printify.com/about/" },
      { name: "Printify Quality Promise", url: "https://printify.com/the-printify-quality-promise/" },
      { name: "Jobs", url: "https://jobs.printify.com/" },
      { name: "Webinars", url: "https://printify.com/webinars/" },
      { name: "Printing Profits Podcast", url: "https://printify.com/printing-profits/" },
      { name: "Contact Us", url: "https://printify.com/contacts/" },
      { name: "Affiliate", url: "https://printify.com/affiliate/" },
      { name: "Contact Sales", url: "https://printify.com/contact-sales/" },
      { name: "POD Glossary", url: "https://printify.com/pod-glossary/" },
      { name: "Network Fulfillment Status", url: "https://printify.com/network-fulfillment-status/" },
      { name: "Merchant Protection", url: "https://printify.com/merchant-protection/" },
      { name: "Security", url: "https://printify.com/security/" },
      { name: "Sitemap", url: "https://printify.com/sitemap/" }
    ]
  }
];
const siteInfoLinks = {
  links: [
    { label: "Intellectual Property Policy", url: "https://printify.com/intellectual-property-policy/" },
    { label: "Terms of Service", url: "https://printify.com/terms-of-service/" },
    { label: "Privacy Policy", url: "https://printify.com/privacy-policy/" },
    { label: "Security", url: "https://printify.com/security/" }
  ]
};


export default function Footer() {
  return (
    <footer>
        <Container className="py-3 sm:py-10">
            <div className="flex justify-between items-center flex-wrap gap-4">
                <img src="https://printify.com/pfh/media/logo-WQH7INSW.svg" alt="" srcset="" />

                <div className="flex items-center gap-2 flex-wrap">
                    <BsFacebook size={35} className="p-1 text-green-500  hover:scale-105 cursor-pointer rounded bg-white"/>
                    <BsInstagram size={35} className="p-1 text-green-500 hover:scale-105 cursor-pointer  rounded bg-white "/>
                    <BsTwitter size={35} className="p-1 text-green-500 cursor-pointer rounded hover:scale-105 bg-white"/>
                    <BsLinkedin size={35} className="p-1 text-green-500 cursor-pointer hover:scale-105 rounded bg-white"/>

                    <BsYoutube size={35} className="p-1 text-green-500  hover:scale-105 cursor-pointer rounded bg-white"/>
                    <BsTiktok size={35} className="p-1 text-green-500  hover:scale-105 cursor-pointer rounded bg-white"/>
                    <BsReddit size={35} className="p-1 text-green-500  hover:scale-105 cursor-pointer rounded bg-white"/>

                </div>
            </div>
          {/* footer links */}
          <div className="grid  grid-cols-2 xl:grid-cols-4 gap-4 mt-20">
            {footerLinks.map((link) => (
              <div key={link.category}>

                <h3 className="text-xl font-bold mb-5">{link.category}</h3>
                <div className="space-y-2">
                  {link.links.map((item) => (
                    <a key={item.name} href={item.url} className="text-sm text-gray-500 hover:text-gray-900 block">{item.name}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
        <section className="bg-[#f7f7f7]">
            <Container className="py-10">
              <div className="flex flex-wrap items-center gap-5 justify-center">
                {
                  siteInfoLinks.links.map((item) => (
                    <a key={item.label} href={item.url} className="text-sm text-gray-500 whitespace-nowrap hover:text-gray-900 block">{item.label}</a>
                  ))
                }
              </div>

              <p className="text-center text-sm text-gray-900 mt-6">© 2024 Printify, Inc. All rights reserved. </p>
            </Container>
        </section>

    </footer>
  )
}
