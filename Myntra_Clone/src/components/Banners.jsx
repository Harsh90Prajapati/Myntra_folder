//import { useEffect, useState } from "react"

import TopBanner from "./TopBanner"

const Banners =()=>{
   //  const [ posts , setPosts] = useState([])

   //  useEffect(() => {
   //      const fetchPost = async () => {
   //         const response = await fetch(
   //            'https://dummyjson.com/products/'
   //         );
   //         const data = await response.json();
   //         console.log(data.products);
   //         setPosts(data.products);
   //      };
   //      fetchPost();
   //   }, []);


    return(
        <>
        <TopBanner/>
        </>
    )
}

export default Banners