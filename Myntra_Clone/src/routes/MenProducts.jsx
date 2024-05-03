import { useSelector } from "react-redux";
import MenTop from "../components/MenTop";
import SideFilter from "../components/SideFilter";
import Items from "../components/Items";
import Fetchitems from "../components/Fetchitems";


const MenProducts=()=>{

 const items = useSelector(store=> store.items)

  return (
    <>
      <MenTop />
      <div className="my-20 mx-10 lg:w-full flex flex-col md:flex-row justify-start items-start md:border max-w-7xl lg:mx-auto">
        <SideFilter />
        <div className=" lg:w-4/5 md:max-h-[932px] no-scrollbar flex md:flex-wrap md:items-start items-center justify-center md:justify-start flex-wrap md:gap-0 gap-2 overflow-scroll"> 
        <Fetchitems/>
        {items.map(item => <Items key={item.id} items = {item}/>)}
        </div>
      </div>
    </>
  );
}


export default MenProducts;

