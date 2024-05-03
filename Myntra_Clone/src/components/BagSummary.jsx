import { BiSolidOffer } from "react-icons/bi";
import BagItems from "../components/BagItems";
import {useSelector} from "react-redux"

const BagSummary =()=>{
    

    const bagItemsIds = useSelector(state => state.bag)
    const items = useSelector(state => state.items)

    const finalItems = items.filter( items =>{
      const itemIndex = bagItemsIds.indexOf(items.id);
      return itemIndex >= 0;
    })

    const CONVENIENCE_FEES = 99;
    let totalItem = bagItemsIds.length
    let totalMRP = 0;
    let totalDiscount = 0;

    
     finalItems.forEach((bagItemsIds)=>{
      totalMRP += bagItemsIds.original_price;
      totalDiscount += bagItemsIds.original_price - bagItemsIds.current_price;
     })
    
    let finalPayment = (totalMRP - totalDiscount + CONVENIENCE_FEES);

    return(
        <>
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
                <h1 className="uppercase text-xs text-center lg:text-start font-bold mb-5" >price details ({totalItem} item)</h1>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Total MRP</p>
                    <p>₹{totalMRP}</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Discount on MRP</p>
                    <p className="text-green-400">-₹{totalDiscount}</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Coupon Discount</p>
                    <p className="text-rose-500">Apply Coupon</p>
                </div>
                <div className=" mx-4 font-semibold text-slate-500 text-xs flex justify-between border-b pb-2 items-center">
                    <p>Convenience Fee</p>
                    <p>₹{CONVENIENCE_FEES}</p>
                    <p className="text-rose-500">Free</p>
                </div>
                <div className=" mx-4 font-bold text-sm flex justify-between py-2 items-center">
                    <p>Total Amount</p>
                    <p>₹{finalPayment}</p>
                </div>

                <button className="uppercase bg-rose-400 text-sm font-semibold py-2 text-white w-full"> place order</button>
            </div>

        </div>
        </>
    )
}

export default BagSummary;