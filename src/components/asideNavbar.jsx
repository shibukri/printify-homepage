import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const navData = [
  {
    name: "Catalog",
    link: "#",
    subNav: false,
  },
  {
    name: "How it works?",
    link: "#",
    subNav: [
      {
        name: "How Printify Works",
        link: "#",
      },
      {
        name: "Print on Demand",
        link: "#",
      },
      {
        name: "Printify Quality Promise",
        link: "#",
      },
      {
        name: "What to Sell?",
        link: "#",
      },
    ],
  },
  {
    name: "Pricing",
    link: "#",
    subNav: false,
  },
  {
    name: "Blog",
    link: "#",
    subNav: false,
  },
  {
    name: "Services",
    link: "#",
    subNav: [
      {
        name: "Printify Studio",
        link: "#",
      },
      {
        name: "Printify Express Delivery",
        link: "#",
      },
      {
        name: "Transfer Products",
        link: "#",
      },
      {
        name: "Order in Bulk",
        link: "#",
      },
      {
        name: "Experts Program",
        link: "#",
      },
    ],
  },
  {
    name: "Use-cases?",
    link: "#",
    subNav: [
      {
        name: "Merch for Fans",
        link: "#",
      },
      {
        name: "Merch for eCommerce",
        link: "#",
      },
      {
        name: "Merch for Enterprises",
        link: "#",
      },
      {
        name: "Grow Your Store",
        link: "#",
      },
    ],
  },
  {
    name: "Need Help?",
    link: "#",
    subNav: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Contacts",
        link: "#",
      },
      {
        name: "My Requests",
        link: "#",
      },
    ],
  },
];

export default function AsideNavbar({ className = "" }) {
    const [subNavActive, setSubNavActive] = useState({isVisible : false, index : 0})
  return (
    <div
      className={`w-[80%] max-w-[360px] transition-transform duration-200 lg:hidden fixed top-0 left-0 mt-[74px] shadow ${className} cursor-pointer pr-3 pb-3 bg-white`}
    >
      <ul className="w-full text-xl mt-3">
        {navData.map((li, index) =>
          li.subNav ? (
            <li key={index} className="w-full pl-3 py-2">
              <div  className="flex items-center justify-between gap-2">
                {li.name}
                <FiChevronDown
                    onClick={()=>setSubNavActive(pre=>({isVisible: !pre.isVisible, index}))}
                  size={23}
                  className={`mt-1 group-hover:rotate-180 transition-transform duration-200 ${subNavActive.isVisible && subNavActive.index == index && 'rotate-180'}`}
                />
              </div>
              <ul className={`transition-all duration-200 my-2 transfrom ${subNavActive.isVisible && subNavActive.index == index ? 'scale-1' : 'scale-0 hidden'}`}>
              {
                li.subNav.map(subLi => (
                    <li key={subLi.name} className="hover:bg-[#d0d0c3] pl-3 my-2">
                        <a href={subLi.link}>{subLi.name}</a>
                    </li>
                ))
              }
              </ul>
            </li>
          ) : (
            <li key={index} className="w-full pl-3 py-2 hover:bg-[#d0d0c3]">
                <a href={li.link}>{li.name}</a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
