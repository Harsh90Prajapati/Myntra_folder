import { useState } from "react";
import { useSelector } from "react-redux";
import EmptyBag from "../components/EmptyBag";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const [open, setOpen] = useState(true);

  const bagItems = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);

  const finalItems = items.filter((items) => {
    const itemIndex = bagItems.indexOf(items.id);
    return itemIndex >= 0;
  });
  return (
    <>
      {bagItems[0] ? (
        <div className="max-w-[1000px] border lg:mx-auto mx-10 mb-5">
          <div className="text-center text-xs sm:tracking-[5px] font-semibold border-b uppercase space-x-1 py-5">
            <span>Bag</span>
            <span>----------</span>
            <span>Address</span>
            <span>----------</span>
            <span>Payment</span>
          </div>
          <div></div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
            <div className="lg:border-r shadow-b-lg no-scrollbar max-h-[600px] overflow-y-scroll ">
              {finalItems.map((items) => (
                <BagItems items={items} key={items.id} />
              ))}
            </div>

            {/* side bill section */}

            <BagSummary />
          </div>
        </div>
      ) : (
        <EmptyBag />
      )}
    </>
  );
};

export default Bag;
