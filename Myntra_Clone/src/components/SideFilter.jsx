const SideFilter =()=>{


       return (
         <div className="border sm:w-64 hidden md:block">
           <form action="" className="flex flex-row md:flex-col flex-wrap m-2">
             <h1 className="font-semibold uppercase">Filter</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="men" className="text-sm ">
                   Men
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="women" className="text-sm ">
                   Women
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="boyss" className="text-sm ">
                   Boys
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="radio" name="gender" />
                 <label htmlFor="girls" className="text-sm ">
                   Girls
                 </label>
               </div>
             </div>

             <hr className="" />

             <h1 className="font-semibold text-sm uppercase mt-4">
               categories
             </h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-sm  text-slate-500">
                   Tshirts
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-sm  text-slate-500">
                   Jeans
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-sm  text-slate-500">
                   shirts
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   Trousers
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   Shoes
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   Jackets
                 </label>
               </div>
             </div>

             <hr />

             <h1 className="font-semibold text-sm uppercase mt-4">Brands</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-xs text-slate-500">
                   Roadster
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-xs text-slate-500">
                   WRONG
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-xs text-slate-500">
                   HIGHLINDER
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">
                   Mast & Harbour
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">
                   Arrow
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-xs text-slate-500">
                   Allen Solly
                 </label>
               </div>
             </div>

             <hr />
             <h1 className="font-semibold text-sm uppercase mt-4">colors</h1>
             <div className="flex flex-col justify-between p-5 items-start">
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="men" className="text-sm  text-slate-500">
                   Red
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="women" className="text-sm  text-slate-500">
                   Blue
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="boyss" className="text-sm  text-slate-500">
                   Green
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   Yelllow
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   Black
                 </label>
               </div>
               <div className="space-x-3">
                 <input type="checkbox" name="gender" />
                 <label htmlFor="girls" className="text-sm  text-slate-500">
                   White
                 </label>
               </div>
             </div>

             <hr />
             <h1 className="font-semibold text-sm uppercase my-4">
               Discount Range
             </h1>
             <div>
               <input type="range" list="value" className="w-full" />
               <datalist id="values" className="flex justify-between text-xs">
                 <option value="0" label="10%"></option>
                 <option value="25" label="20%"></option>
                 <option value="50" label="30%"></option>
                 <option value="75" label="40%"></option>
                 <option value="100" label="70%"></option>
               </datalist>
             </div>
           </form>
         </div>
       );
}

export default SideFilter;