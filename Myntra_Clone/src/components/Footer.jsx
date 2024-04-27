

import { FaFacebookSquare , FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter , FaSquareYoutube } from "react-icons/fa6";
const Footer =()=>{
    return(
        <footer className="bg-slate-100 p-5">
            <div className="flex flex-wrap justify-between max-w-5xl mx-auto p-5">
                <div className="flex flex-col">
                    <h3 className="pb-4 text-xs  font-semibold">ONLINE SHOPPING</h3>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Men</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Women</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Kids</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Trending Fashions</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Beauty Products</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Myntra Insider</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Gift Cards</a>
                </div>

                <div className="flex flex-col">
                    <h3 className="pb-4 text-xs  font-semibold">CUSTOMER POLICIES</h3>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Contact Us</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">FAQ</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">T&C</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Terms Of Use</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Track Orders</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Shipping</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Returns</a>
                </div>

                <div className="flex flex-col">
                    <h3 className="pb-4 text-xs  font-semibold">USEFUL LINKS</h3>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Blogs</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Careers</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Site Map</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Corporate Information</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Whitehat</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Cleartrip</a>
                    <a href="#" className="sm:text-sm text-xs pb-1 text-slate-500">Privacy Policy</a>
                </div>
                <div className="flex flex-col">
                    <h3 className="sm:pt-0 py-4 text-xs  font-semibold">EXPERIENCE MYNTRA APP ON MOBILE</h3>
                     <div className="flex gap-2 flex-wrap">
                        <img src="./img/pay/app.jpg" alt="app store" className="w-32"/>
                        <img src="./img/pay/play.jpg" alt="play store" className="w-32"/>
                     </div>
                     <div>
                        <img src="./img/pay/pay.png" alt="payment mode" className="my-4 w-full" />
                     </div>
                     <h3 className="py-2 text-xs  font-semibold">KEEP IN TOUCH</h3>
                     <div className="flex gap-1">
                        <FaFacebookSquare className="text-2xl text-slate-500 hover:text-black hover:duration-500"/>
                        <FaSquareXTwitter className="text-2xl text-slate-500 hover:text-black hover:duration-500"/>
                        <FaSquareYoutube className="text-2xl text-slate-500 hover:text-black hover:duration-500"/>
                        <FaInstagramSquare className="text-2xl text-slate-500 hover:text-black hover:duration-500"/>
                     </div>
                </div>
            </div>
            <hr className=" border-slate-300 mt-6 " />
            <center className="text-sm text-slate-400 pt-2">copyright 2023 | www.myntra.com | All rights reserved</center>
        </footer>
    )
}

export default Footer;