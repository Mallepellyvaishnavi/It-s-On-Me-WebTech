import React from "react";
import Reporting1 from '../assets/Reporting/Reporting1.svg';
import Reporting2 from '../assets/Reporting/Reporting2.svg';
import Reporting3 from '../assets/Reporting/Reporting3.svg';
import Reporting4 from '../assets/Reporting/Reporting4.svg';
import Reporting5 from '../assets/Reporting/Reporting5.svg';
import Reporting6 from '../assets/Reporting/Reporting6.svg';
import ReportingImg from '../assets/ReportingImg.svg';
function Reporting(){
    return(
        <div className="my-20">
        <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
              Make Data-Driven Decisions with 
              Advanced Reporting
              </h1>
              <h3 className="sm:text-xl text-lg font-bold text-gray-700">
               
              </h3>
            </div>
            <div class="flex-grow pl-6 ">
          <p className="mb-8 leading-relaxed">
          Track sales, monitor performance, and optimize operations with real-time reports.<br/>
           Gain deep insights into your restaurant’s success—anytime, anywhere.
          </p>
          </div>
          <div className="flex justify-center">
          <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Request  a Demo
            </button>

          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={ReportingImg} width={400} />
        </div>
      </div>
    </section>  
    <section className="text-gray-600 body-font">
         <div className="container px-2 py-5 mx-auto flex flex-wrap">
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                 <img src={Reporting1}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Sales & Revenue Reports   </h2>
                 <p className="leading-relaxed">View daily, weekly, and monthly sales trends to understand revenue patterns and growth.  .</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
   <img src={Reporting2}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Best-Selling Items Analysis</h2>
                 <p className="leading-relaxed">Identify your most popular dishes and optimize your menu for maximum profitability.</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
           
             </div>
           <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Reporting3}/>            </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Expense & Profit Tracking</h2>
                 <p className="leading-relaxed">Monitor ingredient costs, labor expenses, and net profits to maximize efficiency.</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
             
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Reporting4}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Inventory & Stock Reports</h2>
                 <p className="leading-relaxed"> Keep track of stock levels, prevent wastage, and get alerts for low inventory in real time..</p>
               </div>
             </div>
           </div>
          
           
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Reporting5}/>            </div>
               
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Online vs Offline Sales Comparison</h2>
                 <p className="leading-relaxed">Analyze dine-in, takeaway, and online orders separately to fine-tune sales strategies..</p>
               </div>
             </div>
           </div>
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Reporting6}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Employee Performance Reports</h2>
                 <p className="leading-relaxed">Track staff efficiency, order handling speed, and customer ratings to improve service..</p>
               </div>
             </div>
           </div>
         
   
         </div>
        
       </section>
       </div>
    )
}
export default Reporting