const SideFilter =()=>{


       return (
         <div className="border-2">
           <form action="" className="flex flex-col m-2 border">
             <h1 className="font-semibold uppercase">Filter</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="men" className="text-sm font-semibold text-slate-500">Men</label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="women" className="text-sm font-semibold text-slate-500">Women</label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="boyss" className="text-sm font-semibold text-slate-500">Boys</label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Girls</label>
               </div>
             </div>

             <hr className="" />

             <h1 className="font-semibold text-sm uppercase mt-4">categories</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-sm font-semibold text-slate-500">Tshirts</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-sm font-semibold text-slate-500">Jeans</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-sm font-semibold text-slate-500">shirts</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Trousers</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Shoes</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Jackets</label>
               </div>
             </div>

             <hr />

             <h1 className="font-semibold text-sm uppercase mt-4">Brands</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-xs text-slate-500">Roadster</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-xs text-slate-500">WRONG</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-xs text-slate-500">HIGHLINDER</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">Mast & Harbour</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">Arrow</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">Allen Solly</label>
               </div>
             </div>

             <hr />
             <h1 className="font-semibold text-sm uppercase mt-4">categories</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-sm font-semibold text-slate-500">Tshirts</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-sm font-semibold text-slate-500">Jeans</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-sm font-semibold text-slate-500">shirts</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Trousers</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Shoes</label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm font-semibold text-slate-500">Jackets</label>
               </div>
             </div>f
             <div>discount range</div>
           </form>
         </div>
       );
}

export default SideFilter;