import React from 'react';
import BillingOne from '../assets/BillingOne.svg';
import Billing2 from '../assets/svg/Billing2.svg';
import Billing3 from '../assets/svg/Billing3.svg';
import Billing4 from '../assets/svg/Billing4.svg';
import Billing5 from '../assets/svg/Billing5.svg';
import Billing6 from '../assets/svg/Billing6.svg';
import Billing1 from '../assets/Billing.svg';
function Billing() {
  return (
    <div className='my-20 lg:my-10 md:my-10'>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 flex-end items-center text-center">
            <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
                Effortless Billing for Restaurants
              </h1>
              <h3 className="sm:text-xl text-lg font-bold text-gray-700">
                -Fast, secure, and accurate
              </h3>
            </div>

            <div className="lg:ml-auto">

            </div>
            <div class="flex-grow pl-6 ">
            <p className="mb-8 leading-relaxed  text-black-700">
              "Streamline your restaurant’s order processing with 
              our intuitive POS billing system. Seamlessly handle 
              payments,taxes, and invoices in one simple solution."
            </p>
            </div>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={Billing1} />
          </div>
        </div>
      </section>
      <section className="text-gray-600  body-font">
        <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 text-center ">
        Effortless Billing with PowerFul Features
                </h1>
        
        <div className="container px-2 py-1 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={BillingOne} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Quick & Easy Billing</h2>
                <p className="leading-relaxed">Process orders in seconds with a fast and intuitive POS  system,reducing wait times and improving efficiency..</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Billing2} />
              </div>

              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Integrated Order & Inventory Management</h2>
                <p className="leading-relaxed">Track stock, auto-update inventory, and prevent shortages while ensuring efficient order handling..</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Billing3} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Multiple Payment Methods</h2>
                <p className="leading-relaxed">Accept payments via Cash, Credit/Debit Card, UPI, Digital Wallets, and more for a seamless checkout experience..</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Billing4} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Automated Tax & Discounts</h2>
                <p className="leading-relaxed">Auto-calculates GST, VAT, service charges, and discounts, ensuring 100% accuracy without manual effort..</p>
              </div>
            </div>
          </div>


          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Billing5} />
              </div>

              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Customizable Invoices</h2>
                <p className="leading-relaxed"> Personalize bills with your restaurant’s logo, customer details, and itemized breakdown for a professional touch..</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Billing6} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Refund & Cancellation</h2>
                <p className="leading-relaxed">Process refunds and order cancellations effortlessly, ensuring customer satisfaction and smooth operations..</p>
              </div>
            </div>

          </div>

          <div className="w-full text-center mt-0">
      <h1 className="text-red-700 text-2xl font-medium">
        "Upgrade Your Restaurant with Smart POS Billing!"
      </h1>
    </div>
        </div>

      </section>
     

    </div>



  )
}
export default Billing