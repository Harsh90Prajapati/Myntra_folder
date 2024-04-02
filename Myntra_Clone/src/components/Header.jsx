import { useState } from "react";
import { CiHeart, CiUser, CiBag1, CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose  , AiOutlineMenu} from "react-icons/ai";

const Header = () => {

    const[ open , setOpen] = useState(false) 
  return (
    <nav className="w-full sm:p-6 p-4 shadow">
      <div className="flex justify-between items-center">
        <div className="lg:hidden" onClick={()=>{setOpen(!open)}}>
          {!open?<AiOutlineMenu className="text-2xl" />:<AiOutlineClose className="text-2xl" />}
        </div>
        <img src="Myntra-icon-logo.svg" alt="" className="w-10 sm:w-14 mx-3" />
        <div className="hidden  w-full lg:flex items-center justify-center gap-10 mx-3 text-xs uppercase text-slate-600 font-bold">
          <a href="">Men</a>
          <a href="">Women</a>
          <a href="">Kids</a>
          <a href="">Home & Living</a>
          <a href="">Beauty</a>
          <a href="">Studio</a>
        </div>
        <input
          type="search"
          placeholder="Search"
          className="w-full px-4 sm:mx-4 py-2 outline-none bg-gray-100 rounded-md"
        />
        <div className="flex justify-between items-center mx-4 sm:gap-7 gap-1">
          <div className="flex flex-col justify-center items-center">
            <CiUser size={23} />
            <span className="hidden sm:block text-xs font-semibold uppercase">
              profile
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CiHeart size={23} />
            <span className="hidden sm:block text-xs font-semibold uppercase">
              wishlist
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CiBag1 size={23} />
            <span className="hidden sm:block text-xs font-semibold uppercase">
              bag
            </span>
          </div>
        </div>
      </div>
      
      {/* Mobile View Navbar */}

      {open &&<div className="flex flex-wrap justify-between px-2">
        <div className="flex flex-col mt-5 mx-2">
          <h3 className="text-xs mb-2 font-semibold">MEN</h3>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Topwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Bottomwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Innerwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Footwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Sport Wear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Sunglasses & Frames
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Watches
          </a>
        </div>
        <div className="flex flex-col mt-5 mx-2">
          <h3 className="text-xs mb-2 font-semibold">WOMEN</h3>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Indina & Fusion Wear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Western Wear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Lingerie & Sleepwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Sport Wear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Beauty Products
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Jewellery
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Watches & Wearables
          </a>
        </div>
        <div className="flex flex-col mt-5 mx-2">
          <h3 className="text-xs mb-2 font-semibold">KIDS</h3>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Boys Clothing
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Girls Clothing
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Footwear
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Toys & Games
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Infants
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Kids Accessories
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Brands
          </a>
        </div>
        <div className="flex flex-col mt-5 mx-2">
          <h3 className="text-xs mb-2 font-semibold">Help Centre</h3>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Myntra Studio
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Myntra Mall
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Myntra Insider
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Gift Cards
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Contact Us
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            FAQs
          </a>
          <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">
            Legal
          </a>
        </div>
      </div>}
    </nav>
  );
};

export default Header;
