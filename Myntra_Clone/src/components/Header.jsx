
import { CiHeart , CiUser , CiBag1 } from "react-icons/ci";


const Header = () => {
return(
    <nav className="w-full p-6 px-10 shadow">
        <div className="flex justify-between items-center">
            <img src="Myntra-icon-logo.svg" alt=""className="w-14 mx-3" />
            <div className="w-full flex items-center justify-center gap-10 mx-3 text-xs uppercase text-slate-600 font-bold">
                <a href="">Men</a>
                <a href="">Women</a>
                <a href="">Kids</a>
                <a href="">Home & Living</a>
                <a href="">Beauty</a>
                <a href="">Studio</a>
            </div>
            <input type="search" placeholder="Search" className="w-full px-4 mx-4 py-2 outline-none bg-gray-100 rounded-md"/>
            <div className="flex justify-between items-center mx-4 gap-7">
                <div className="flex flex-col justify-center items-center">
                <CiUser size={23} />
                <span className="text-xs font-semibold uppercase">profile</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                <CiHeart size={23} />
                <span className="text-xs font-semibold uppercase">wishlist</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                <CiBag1 size={23} />
                <span className="text-xs font-semibold uppercase">bag</span>
                </div>
            </div>
        </div>
    </nav>
)
}

export default Header;