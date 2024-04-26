import React , {useState , useEffect} from 'react'
import WomenTop from '../components/WomenTop';
import MenTop from '../components/MenTop';

const WomenProducts = () => {

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
    <div>
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
    </div>
  );
}

export default WomenProducts