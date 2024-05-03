import { AiOutlineClose} from "react-icons/ai";
import {useDispatch} from "react-redux"
import { bagActions } from "../store/bagSlice";


const BagItems = ( { items }) =>{
    
    const dispatch = useDispatch()

    const handleRemoveItem = () =>{
        console.log("clicked")
        dispatch(bagActions.removeFromBag(items.id))
      }
       
    return (
      <div
        className="border m-4 p-2 flex justify-evenly items-start"
        key={items.id}
      >
        <img src={items.image} alt="" className="rounded h-20 sm:h-40" />
        <div className=" sm:space-y-1 px-2">
          <h3 className="font-semibold text-xs md:text-base">
            {items.company}
          </h3>
          <p className="md:text-[13px] text-[10px]">
            {items.item_name.slice(0, 33)}
          </p>
          <p className="text-[10px] text-slate-400">Sold by: Private Limited</p>
          <span className="bg-slate-200 text-[11px] font-semibold px-1 mr-1 rounded-sm">
            Size: M{" "}
          </span>
          <span className="bg-slate-200 text-[11px] font-semibold px-1  ml-1 rounded-sm">
            Qty : 1
          </span>
          <br />
          <span className="text-sm font-semibold">₹{items.current_price}</span>
          <span className="text-xs px-2 line-through text-slate-400">
            {items.original_price}
          </span>
          <span className="text-xs text-red-500">
            {items.discount_percentage}% OFF
          </span>
          <p className="text-[10px]">
            ↩{items.return_period} day return available{" "}
          </p>
          <p className="text-[10px]">
            Delivery by{" "}
            <span className="text-green-500">{items.delivery_date}</span>
          </p>
        </div>
        <button onClick={handleRemoveItem}>
          <AiOutlineClose size={15} />
        </button>
      </div>
    );

}

export default BagItems;