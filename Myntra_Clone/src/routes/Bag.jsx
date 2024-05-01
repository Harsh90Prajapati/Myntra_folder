import { useState } from "react";
import EmptyBag from "../components/EmptyBag";
import { AiOutlineClose} from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";

const Bag = () =>{
      const [open, setOpen] = useState(true)

 return(
    <>
    {!open?
    <EmptyBag/>
    :
    <div className="max-w-[1000px] border lg:mx-auto mx-10 mb-5">
       <div className="text-center text-xs sm:tracking-[5px] font-semibold border-b uppercase space-x-1 py-5">
            <span>Bag</span>
            <span>----------</span>
            <span>Address</span>
            <span>----------</span>
            <span>Payment</span>
       </div>
       <div>

       </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start"> 
        <div className="lg:w-3/5 border-r shadow-b-lg no-scrollbar h-[600px] overflow-y-scroll ">
            <div className="border m-4 p-2 flex justify-evenly">
                <img src="../img/products/n1.jpg" alt="" className="rounded h-40" />
                <div className="col-span-2 space-y-1 px-2">
                    <h3 className="font-semibold text-sm md:text-base">Mast & Harbour</h3>
                    <p className="md:text-[13px] text-[10px]">Men Blue & White Slim Fit Striped Casual Sustainable Shirt</p>
                    <p className="text-[10px] text-slate-400">Sold by: Private Limited</p>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1 mr-1 rounded-sm">Size: M </span>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1  ml-1 rounded-sm">Qty : 1</span>
                    <br />
                    <span className="text-sm font-semibold">₹ 650</span>
                    <span className="text-xs px-2 line-through text-slate-400">2999</span>
                    <span className="text-xs text-red-500">40% OFF</span>
                    <p className="text-xs">↩14 day return available </p>
                </div>
                < AiOutlineClose size={20}/>
            </div>

            <div className="border m-4 p-2 flex justify-evenly">
                <img src="../img/products/n1.jpg" alt="" className="rounded h-40" />
                <div className="col-span-2 space-y-1 px-2">
                    <h3 className="font-semibold text-sm md:text-base">Mast & Harbour</h3>
                    <p className="md:text-[13px] text-[10px]">Men Blue & White Slim Fit Striped Casual Sustainable Shirt</p>
                    <p className="text-[10px] text-slate-400">Sold by: Private Limited</p>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1 mr-1 rounded-sm">Size: M </span>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1  ml-1 rounded-sm">Qty : 1</span>
                    <br />
                    <span className="text-sm font-semibold">₹ 650</span>
                    <span className="text-xs px-2 line-through text-slate-400">2999</span>
                    <span className="text-xs text-red-500">40% OFF</span>
                    <p className="text-xs">↩14 day return available </p>
                </div>
                < AiOutlineClose size={20}/>
            </div>

            <div className="border m-4 p-2 flex justify-evenly">
                <img src="../img/products/n1.jpg" alt="" className="rounded h-40" />
                <div className="col-span-2 space-y-1 px-2">
                    <h3 className="font-semibold text-sm md:text-base">Mast & Harbour</h3>
                    <p className="md:text-[13px] text-[10px]">Men Blue & White Slim Fit Striped Casual Sustainable Shirt</p>
                    <p className="text-[10px] text-slate-400">Sold by: Private Limited</p>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1 mr-1 rounded-sm">Size: M </span>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1  ml-1 rounded-sm">Qty : 1</span>
                    <br />
                    <span className="text-sm font-semibold">₹ 650</span>
                    <span className="text-xs px-2 line-through text-slate-400">2999</span>
                    <span className="text-xs text-red-500">40% OFF</span>
                    <p className="text-xs">↩14 day return available </p>
                </div>
                < AiOutlineClose size={20}/>
            </div>
            <div className="border m-4 p-2 flex justify-evenly">
                <img src="../img/products/n1.jpg" alt="" className="rounded h-40" />
                <div className="col-span-2 space-y-1 px-2">
                    <h3 className="font-semibold text-sm md:text-base">Mast & Harbour</h3>
                    <p className="md:text-[13px] text-[10px]">Men Blue & White Slim Fit Striped Casual Sustainable Shirt</p>
                    <p className="text-[10px] text-slate-400">Sold by: Private Limited</p>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1 mr-1 rounded-sm">Size: M </span>
                    <span className="bg-slate-200 text-[12px] font-semibold px-1  ml-1 rounded-sm">Qty : 1</span>
                    <br />
                    <span className="text-sm font-semibold">₹ 650</span>
                    <span className="text-xs px-2 line-through text-slate-400">2999</span>
                    <span className="text-xs text-red-500">40% OFF</span>
                    <p className="text-xs">↩14 day return available </p>
                </div>
                < AiOutlineClose size={20}/>
            </div>
        </div>

        {/* side bill section */}

        <div className="lg:w-2/5 my-2 lg:my-0 w-full space-y-4 p-4 max-w-[583px]">
            <div className="flex justify-between  items-center p-2 bg-rose-50 border rounded-sm ">
                <h1 className="text-xs tracking-wide font-semibold">Check delivery time & services</h1>
                <button className="text-xs uppercase border border-rose-400 text-rose-500 p-3 font-bold"> Enter pin code</button>
            </div>
            
            <div className="p-2 border">
               <div className="flex items-center gap-1">
               <BiSolidOffer className="text-rose-500" size={20} />
               <p className="text-xs font-bold">Available Offers</p>
               </div>
               <p className="text-xs my-1 lg:px-0 px-2 text-slate-400">10% Instant Discount on a minimum spend of ₹3,000.TCA</p>
               <button className="text-sm px-2 text-rose-500 font-semibold">Show More </button>
            </div>
            <hr/>
            <div className=" space-y-3">
                <h1 className="uppercase text-xs text-center lg:text-start font-bold mb-5" >price details (1 item)</h1>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Total MRP</p>
                    <p>₹2,099</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Discount on MRP</p>
                    <p className="text-green-400">-₹1,470</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Coupon Discount</p>
                    <p className="text-rose-500">Apply Coupon</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Platform Fee</p>
                    <p>₹100</p>
                    <p className="text-rose-500">Free</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Shipping Fee</p>
                    <p>₹79</p>
                    <p className="text-rose-500">Free</p>
                </div>

                <div className=" mx-4 font-bold text-sm flex justify-between py-2 items-center">
                    <p>Total Amount</p>
                    <p>₹629</p>
                </div>

                <button className="uppercase bg-rose-400 text-sm font-semibold py-2 text-white w-full"> place order</button>
            </div>

        </div>
      </div> 
    </div>
    }
    </>
 )
 
}


export default Bag;