//import { useEffect, useState } from "react"



const TopBanners =()=>{
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
        <div className=" max-w-[1400px] mx-auto md:my-6 mb-2">
            <a href=""><img src="../img/banner/carnival.png" alt="" /></a>
        </div>
        <img src="../img/banner/coupn.png" alt="" />
        </>
    )
}

export default TopBanners