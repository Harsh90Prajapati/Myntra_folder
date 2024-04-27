import { useState } from "react";
import { CiHeart, CiUser, CiBag1, CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose  , AiOutlineMenu} from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";

const Header = () => {

    const[ open , setOpen] = useState(false) 
  return (
    <><nav className="sm:p-4 p-4 shadow">
      <div className="flex justify-evenly items-center">
        <div className="lg:hidden" onClick={() => { setOpen(!open); } }>
          {!open ? <AiOutlineMenu className="text-2xl" /> : <AiOutlineClose className="text-2xl" />}
        </div>
        <Link to="/"><img src="Myntra-icon-logo.svg" alt="" className="w-10 mx-4 sm:w-12" /></Link>
        <div className="hidden gap-6 mx-5 2xl:mx-0 xl:gap-10 lg:flex items-center text-xs uppercase text-slate-600 font-bold">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="">Kids</Link>
          <Link to="">Brand</Link>
          <Link to="">Beauty</Link>
          <Link to="">Studio
            <span className=" absolute top-5 text-[9px] text-end font-extrabold text-red-600">new</span></Link>
        </div>
        <input
          type="search"
          placeholder="Search"
          className=" sm:w-[550px] w-full mx-6 px-4 py-2 outline-none bg-gray-100 rounded-md" />
        <div className="flex justify-between items-center sm:gap-7 gap-1">
          <div className="flex flex-col justify-center items-center">
            <CiUser size={20} />
            <span className="hidden sm:block text-[12px] font-semibold uppercase">
              profile
            </span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <CiHeart size={20} />
            <span className="hidden sm:block text-[12px] font-semibold uppercase">
              wishlist
            </span>
          </div>
          <div className="flex flex-col justify-center items-center"> 
            <span className="absolute right-4 xl:right-14 top-3 sm:top-1 text-sm font-bold text-red-500 ">0</span>
            <CiBag1 size={20} />
            <span className="hidden sm:block text-[12px] font-semibold uppercase">
              bag
            </span>
          </div>
        </div>
      </div>

      {/* Mobile View Navbar */}

      {open && <div className="absolute top-[70px] w-full left-0 z-10 lg:hidden flex flex-wrap justify-between  border px-6 pb-4 shadow-md  bg-white">
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
          <h3 className="text-xs mb-2 font-semibold">HELP CENTER</h3>
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
    </nav><Outlet /></>
  );
};

export default Header;
