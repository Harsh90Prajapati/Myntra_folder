import { Link } from "react-router-dom";

const EmptyBag =()=>{
    return(
        <div className="my-20 flex flex-col justify-center items-center">
            <img src="pngegg.png" alt="logo" className="w-1/5 max-w-40 p-4" />
            <h1 className="font-bold text-xl p-1 text-slate-600">Hey,it feels so light!</h1>
            <p className="text-sm text-slate-400">There is nothing in your bag. Let's add some items.</p>
            <Link to="/wishlist" className="bg-transparent text-xs font-bold border-rose-300 text-rose-500 uppercase my-4 border-2 p-2">add items from wishlist</Link>
        </div>
    )
}

export default EmptyBag;