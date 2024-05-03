import React , {useState , useEffect} from 'react';
import { useSelector } from "react-redux";
import WomenTop from '../components/WomenTop';
import SideFilter from "../components/SideFilter";
import Items from "../components/Items";

const WomenProducts = () => {

  const items = useSelector(store=> store.items)

    // const [ posts , setPosts] = useState([])

    // useEffect(()=>{
    //    const fetchApp = async()=>{
    //        let res  = await fetch('https://fakestoreapi.com/products');
    //        let data = await res.json();
    //        console.log(data)
    //        setPosts(data)
    //    };
    //    fetchApp()
    // },[]);
  return (
    <>
      <WomenTop />
      {/* {posts.map((items) => {
        return (
          <div className="bg-red-600 inline-block my-2">
            <div key={items.id}>
              <img
                src={items.image}
                alt=""
                className="w-28  p-2 bg-transparent"
              />
              <p className="text-xs">{items.title}</p>
              <p>{items.category}</p>
              <p>{items.price}</p>

              <p>{String(items.rating.rate)}</p>
              <p>{items.description}</p>
            </div>
          </div>
        );
      })} */}
      <div className=" md:my-20 m-10 lg:w-full flex flex-col md:flex-row justify-start items-start md:border max-w-7xl lg:mx-auto">
        <SideFilter />
        <div className=" lg:w-4/5 md:max-h-[932px] no-scrollbar flex md:flex-wrap md:items-start items-center justify-center md:justify-start flex-wrap md:gap-0 gap-2 overflow-scroll"> 
        {items.map(item => <Items key={item.id} items = {item}/>)}
        </div>
      </div>
    </>
  );
}

export default WomenProducts