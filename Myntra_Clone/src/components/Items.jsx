
import{ useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice";

const items = ({ items }) => {
  
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag)
  const elementFound = bagItems.indexOf(items.id) >=0;

  const handleAddToBag = () =>{
    dispatch(bagActions.addToBag(items.id))
  }
  const handleRemove = () =>{
    dispatch(bagActions.removeFromBag(items.id))
  }
  return (
    <div className="min-w-40 w-1/4 p-3 border rounded-md">
      <img src={items.image} alt="image" className="w-full rounded-md" />
      <div className="text-start space-y-1">
        <span className="text-[10px] capitalize">{items.company}</span>
        <p className="lg:text-xs text-[10px] capitalize tracking-wide font-semibold">
          {items.item_name.slice(0,33)}
        </p>
        <div className="flex itemss-center gap-1">
          <p className="text-xs">{items.rating.stars}⭐</p>
          <p className="text-xs">/{items.rating.count}</p>
        </div>
         <p className="text-[12px] lg:text-sm font-bold">
            ₹{items.current_price}
            <span className="text-[10px] px-1 font-normal line-through text-slate-400">
              ₹{items.original_price}
            </span>
            <span className="text-[10px] font-semibold text-red-400">
              ({items.discount_percentage}% OFF)
            </span>
          </p>
          {!elementFound?<button
            onClick={handleAddToBag}
            className="text-center w-full bg-emerald-500 rounded-sm text-white font-semibold py-1 text-sm "
          >
          Add to Cart
          </button>
          :
          <button
            onClick={handleRemove}
            className="text-center w-full bg-red-500 rounded-sm text-white font-semibold py-1 text-sm "
          >
          Remove from Cart
          </button>
          }
      </div>
    </div>
  );
};

export default items;
