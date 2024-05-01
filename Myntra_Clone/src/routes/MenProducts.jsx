import MenTop from "../components/MenTop";
import SideFilter from "../components/SideFilter";
import { CiShoppingCart } from "react-icons/ci";


const MenProducts=()=>{

  return (
    <>
      <MenTop />
      <div className="my-20 mx-10 lg:w-full flex flex-col md:flex-row justify-start items-start md:border max-w-7xl lg:mx-auto">
        <SideFilter />
        <div className=" lg:w-4/5 md:h-[932px] no-scrollbar flex sm:items-start items-center sm:justify-start justify-evenly flex-wrap md:gap-0 gap-2 overflow-scroll">
          <div className="min-w-48 w-1/4 p-3 border rounded-md">
            <img
              src="../img/products/n1.jpg"
              alt=""
              className="w-full rounded-md"
            />
            <div className="text-start py-3">
              <span className="text-xs">Roadstar</span>
              <h5 className="text-sm pt-2">Denim Shirt</h5>
              <div className="rate">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <div className="flex justify-between items-center">
                <h4 className="pt-2 text-sm font-bold text-red-500">
                  Rs. 750.00
                </h4>
                <a
                  href=""
                  className="flex justify-center items-center w-10 h-10 rounded-full bg-emerald-200"
                >
                  <CiShoppingCart size={20} className="font-extrabold text-white" />
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}


export default MenProducts;

