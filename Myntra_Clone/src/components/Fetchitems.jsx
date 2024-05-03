import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const Fetchitems = ()=>{

    const fetchStatus = useSelector((store)=>store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(fetchStatus.fetchDone) return;
        
        const controller = new AbortController();
        const signal = controller.signal;
        
        //dispatch(fetchStatusActions.markFetchingStart())
        fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) =>{
            // dispatch(fetchStatusActions.markFetchDone());
            // dispatch(fetchStatusActions.markFetchingFinished())
            dispatch(itemActions.addInitialItem(items[0]))
        });

        return () => {
            //controller.abort();
        };
          
    },[fetchStatus])
    return(
        <>
        </>
    )
}

export default Fetchitems;