import React from "react";
import Crm2 from '../assets/Crm/crm2.svg';
import Crm3 from '../assets/Crm/crm3.svg';
import Crm4 from '../assets/Crm/crm4.svg';
import Crm5 from '../assets/Crm/crm5.svg';
import Crm6 from '../assets/Crm/crm6.svg';
import Crm7 from '../assets/Crm/crm7.svg';
import CrmImg  from '../assets/CrmImg.svg';

function Crm(){
    return(

        <div className="my-20 lg:my-10 md:my-10">
            <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
              Build Stronger Customer Relationships 
              with Smart CRM
              </h1>
              <h3 className="sm:text-xl text-lg font-bold text-gray-700">
                
              </h3>
            </div>
            <div class="flex-grow pl-6 ">
          <p className="mb-8 leading-relaxed">
          "Understand your customers, enhance engagement, and <br/> drive repeat business with our powerful CRM tools. <br/>Manage customer data, track preferences, and create <br/>personalized experiences—all in one place."
          </p>
          </div>

        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={CrmImg} />
        </div>
      </div>
    </section>
    <section className="text-gray-600 body-font">
    <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 text-center ">
      Key Features 
              </h1>

         <div className="container px-2 py-5 mx-auto flex flex-wrap">
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                 <img src={Crm2}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Customer Profiles & Order History</h2>
                 <p className="leading-relaxed"> Store detailed customer information, including contact details, dining preferences, and past orders for a personalized experience..</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
   <img src={Crm3}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Loyalty & Rewards Programs</h2>
                 <p className="leading-relaxed">Set up loyalty points, cashback offers, and special discounts to encourage repeat visits and customer retention..</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
           
             </div>
           <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Crm4}/>            </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Automated Marketing & Promotions</h2>
                 <p className="leading-relaxed">Send personalized SMS, email, and app notifications for special events, discounts, and new menu items..</p>
               </div>
             </div>
           </div>
   
           <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
             
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Crm5}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Online & Offline Order Tracking</h2>
                 <p className="leading-relaxed">Track customer orders from dine-in, takeaway, and online platforms to maintain consistency and improve service..</p>
               </div>
             </div>
           </div>
          
           
           <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
         
             </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Crm6}/>            </div>
               
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Customer Feedback & Reviews</h2>
                 <p className="leading-relaxed">Collect real-time feedback and ratings to improve customer satisfaction and address concerns instantly..</p>
               </div>
             </div>
           </div>
           <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
             <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              
             </div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
               <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
               <img src={Crm7}/>
               </div>
               <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                 <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Integration with POS & Payment Systems</h2>
                 <p className="leading-relaxed">Seamlessly connects with your POS billing system, payment gateways, and online ordering for a unified experience.</p>
               </div>
             </div>
           </div>
         
           <div className="w-full text-center mt-0">
      <h1 className="text-red-700 text-2xl font-medium">
      Boost Customer Engagement with Our POS CRM!
      </h1>
    </div>
         </div>
        
       </section>
        </div>
    )
}
export default Crm