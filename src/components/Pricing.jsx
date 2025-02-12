import React from "react";
import PricingImg from '../assets/PricingImg.svg';
function Pricing(){
    return(
        <div className="my-20">
             <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 flex-end items-center text-center">
                        <div className="flex justify-end flex-col items-end">
                          <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
                          Flexible Pricing Plans for Every Restaurant
                          </h1>
                          <h3 className="sm:text-xl text-lg start-0.5 text-gray-700">
                          Choose a plan that fits your business needs—whether you're a small café or a multi-chain restaurant.
                          </h3>
                        </div>
            
                        <div className="lg:ml-auto">
            
                        </div>
                        <div class="flex-col">
                        <ul className="list-disc pl-0 ml-0 text-black custom-list">
        <li>Transparent pricing with no hidden features</li>
        <li>Pay-as-you-grow flexibility</li>
        <li>Scalable solutions for all restaurant types</li>
      </ul>
                        </div>
                        <div className="flex justify-center">
                          <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                            Request a Demo
                          </button>
            
                        </div>
                      </div>
                      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={PricingImg} />
                      </div>
                    </div>
                  </section>
                  <section class="p-4">
                  <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 text-center ">
      Pricing Plans
              </h1>
       
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg max-w-[100%] mx-auto">
    
        <table class="w-full text-sm text-left text-gray-700 border border-gray-300">
            <thead class="text-xs uppercase bg-gray-100 border-b border-gray-300">
                <tr>
                    <th scope="col" class="px-6 py-3 w-1/4 border-r border-gray-300">Starter Plan</th>
                    <th scope="col" class="px-6 py-3 w-1/4 border-r border-gray-300">Business Plan</th>
                    <th scope="col" class="px-6 py-3 w-1/4">EnterPrise Plan</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-300">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">Best for  small cakes &Food Trucks</th>
                    <td class="px-6 py-4 border-r border-gray-300">Perfect for Restuarant &chains</td>
                    <td class="px-6 py-4">Full control &cutomization
                    </td>
                </tr>
                <tr class="border-b border-gray-300">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">Affordable pricing</th>
                    <td class="px-6 py-4 border-r border-gray-300">Advanced pricing </td>
                    <td class="px-6 py-4">custom integrations</td>
                </tr>
                <tr class="border-b border-gray-300">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">Upto 2 users</th>
                    <td class="px-6 py-4 border-r border-gray-300">Inventory Tracking</td>
                    <td class="px-6 py-4">AI-Powered Analytics</td>
                </tr>
                <tr class="border-b border-gray-300">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">Basic POS features</th>
                    <td class="px-6 py-4 border-r border-gray-300">Multiple payment options</td>
                    <td class="px-6 py-4">Priority Support</td>
                </tr>
                <tr class="border-b border-gray-300">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 border-r border-gray-300">Choose Starter Plan</th>
                    <td class="px-6 py-4 border-r border-gray-300">Choose Business Plan </td>
                    <td class="px-6 py-4">Choose Enterprise Plan</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-0">

      <h1 class="sm:text-3xl text-2xl font-medium title-font text-red-700 mb-0">Additional Benefits</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-20 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">

            <h2 class="text-gray-900 text-lg title-font font-medium text-red-700">No setup fees</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Get Started Instantly</p>

          </div>
        </div>
      </div>
      <div class="p-20 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">

            <h2 class="text-gray-900 text-lg title-font font-medium text-red-700">24/7 Customer Support</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Help When you need it</p>
           
          </div>
        </div>
      </div>
      <div class="p-20 md:w-1/3">
        <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div class="flex items-center mb-3">

            <h2 class="text-gray-900 text-lg title-font font-medium text-red-700">Free updates</h2>
          </div>
          <div class="flex-grow">
            <p class="leading-relaxed text-base">Stay Ahead with the latest Feature.</p>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</div>
    )
}
export default Pricing
