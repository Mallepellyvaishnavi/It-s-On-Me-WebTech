import React from "react";
import Inventory1 from '../assets/Inventory/Inventory1.svg';
import Inventory2 from '../assets/Inventory/Inventory2.svg';
import Inventory3 from '../assets/Inventory/Inventory3.svg';
import Inventory4 from '../assets/Inventory/Inventory4.svg';
import Inventory5 from '../assets/Inventory/Inventory5.svg';
import Inventory6 from '../assets/Inventory/Inventory6.svg';
import InventoryImg from '../assets/svg/Inventory.svg';
function Inventory(){
    return( 
<div className='my-20'>
<section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-2 py-3 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
              Effortless Inventory Tracking
              </h1>
              <h3 className="sm:text-xl text-lg font-bold text-gray-700">
              – Never Run Out of Stock Again!
              </h3>
            </div>
            <div class="flex-grow pl-6 ">
          <p className="mb-8 leading-relaxed text-1xl">
          "Monitor stock levels, reduce wastage, and streamline purchases with our smart inventory management system.".
          </p>
          </div>
          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-2/4 w-9/9">
          <img className="object-cover object-center rounded" alt="hero" src={InventoryImg}  />
        </div>
      </div>
    </section>
       <section className="text-gray-600 body-font">
       <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 text-center ">
      Key Features Of Inventory Tracking
              </h1>
         <div className="container px-2 py-2 mx-auto flex flex-wrap">
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                 <img src={Inventory1} />
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Real-Time Stock Updates</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                      <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
   <img src={Inventory2}/>
               </div>
   
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Low Stock Alerts</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
           
             </div>
           <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
   <img src={Inventory3}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Automated Reordering</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
             
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Inventory4}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Supplier & Purchase Tracking</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
          
           
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                 <img src={Inventory5}/>
               </div>
               
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Reduce Waste & Theft</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
   <img src={Inventory6}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Multi-Outlet Inventory Sync</h2>
                 <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
               </div>
             </div>
           </div>
           <div className="w-full text-center mt-0">
      <h1 className="text-red-700 text-2xl font-medium">
      "Take Control of Your Inventory Today"
      </h1>
    </div>
         </div>
        
       </section>
</div>
    )
}
export default Inventory