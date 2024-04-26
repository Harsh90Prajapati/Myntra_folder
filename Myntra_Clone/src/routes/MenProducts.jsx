import MenTop from "../components/MenTop";
import SideFilter from "../components/SideFilter";

const MenProducts=()=>{

  return(
    <>
    <MenTop/>
    <div className="my-20 mx-10 flex flex-col md:flex-row justify-between border items-center max-w-7xl lg:mx-auto ">
      <SideFilter />
      <div className="md:shrink md:w-9/12 border">actual products</div>
    </div>
    </>
  )
}


export default MenProducts;

