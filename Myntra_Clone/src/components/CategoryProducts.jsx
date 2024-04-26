import MenTop from "./MenTop";
import ShopCategory from "./ShopCategory";
import WomenProducts from "../routes/WomenProducts";
import WomenTop from "./WomenTop";



const CategoryProducts = () => {
  return (
    <>
      <ShopCategory/>
      <center className="mt-12 text-xl md:text-2xl font-semibold font-serif text-blue-500">Men</center>
      <MenTop/>
      <center className="mt-12 text-xl md:text-2xl font-semibold font-serif text-pink-500">Women</center>
      <WomenTop/>
      {/* <WomenProducts/> */}
      
      </>
  );
};

export default  CategoryProducts;
