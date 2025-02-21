import React from "react";
import DemoImg from '../assets/Demo.svg';
import RequestImg from '../assets/DemoImage.svg';
import DemoIcon from '../assets/DemoIcon.svg';
import CustomerImg from '../assets/Customer.svg';
function Demo() {
  return (
    <div className="my-20">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 flex-end items-center text-center">
            <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
                Experience the Power of Smart
                Restaurant POS
              </h1>
              <h3 className="sm:text-xl text-lg start-0.5 text-gray-700 text-red-700">
                -  Book A Free Demo
              </h3>
            </div>

            <div className="lg:ml-auto">

            </div>
            <div class="flex-col">
              <p>See how our POS system can streamline your restaurant
                operations,improve efficiency, and boost sales in real-time.</p>
            </div>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={DemoImg} />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font relative">
        <div className="container px-3  mx-auto">
          <div className="flex flex-col text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-red-700">Get In Touch</h1>

          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Full Name</label>
                  <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Mobile Number</label>
                  <input type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Restaurant Name</label>
                  <input type="tel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Restaurant Type</label>
                  <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Demo Type</label>
                  <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">Any Specific Requirements</label>
                  <textarea className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>

              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg ">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font relative">
        <div className="container mx-auto px-5 py-10">

          {/* Centered Header at the Top */}
          <div className="flex flex-col text-center w-full mb-6">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-700">
              Get In Touch
            </h1>
          </div>


          <div className="flex flex-col md:flex-row items-right md:items-start">
            <div className="lg:w-1/2 w-full flex flex-col items-center mt-10 md:mt-20 mx-auto">
              <ol className="list-decimal list-outside space-y-3 px-20 text-gray-700 text-start w-full">
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>Fast & Easy Billing</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>Real-Time Inventory Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>Seamless Online Ordering</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>Insightful Reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>Multi-Payment Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <img src={DemoIcon} alt="Support" className="w-6 h-6 ml-2" />
                  <span>CRM & Loyalty Programs</span>
                </li>
              </ol>
            </div>




            {/* Right Section (Image) */}
            <div className="lg:w-1/2 w-full flex justify-center mt-6 md:mt-0">
              <img className="object-cover object-center rounded" alt="contact" src={RequestImg} />
            </div>

          </div>

        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-12">


          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-red-700">
              What our clients say about us.
            </h1>
          </div>


          <div className="flex flex-wrap -m-4 justify-center">


            <div className="p-4 md:w-1/3 w-full">
              <div className="border border-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={CustomerImg}
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">James Pattinson</h2>
                    <div className="flex text-yellow-500 mt-1">★★★★★</div>
                  </div>
                </div>
                <h3 className="font-bold">"Game-Changer for Our Restaurant!"</h3>
                <p className="text-gray-700">
                  "Since switching to this POS system, our
                  order processing time has reduced by 50%!
                  Managing billing, inventory, and online
                  orders has never been easier."
                </p>
                <div className="flex justify-between mt-4 text-gray-800 font-light text-red-700 font-medium">
      <span>Owner Spice Delight</span>
      <span>Mumbai,India</span>
    </div>

              </div>
            </div>

            {/* Review 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="border border-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={CustomerImg}
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">James</h2>
                    <div className="flex text-yellow-500 mt-1">★★★★☆</div>
                  </div>
                </div>
                <h3 className="font-bold">"Game-Changer for Our Restaurant!"</h3>
                <p className="text-gray-700">
                  "I love how it integrates with Zomato and
                  Swiggy. Our restaurant operations have
                  become so much smoother, and we’ve
                  increased revenue by 20%!"
                </p>
                <div className="flex justify-between mt-4 text-gray-800 font-light text-red-700 font-medium">
      <span>Manager Food Club</span>
      <span>Chennai,India</span>
    </div>

              </div>
            </div>

            {/* Review 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="border border-black p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={CustomerImg}
                    alt="Customer"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">James</h2>
                    <div className="flex text-yellow-500 mt-1">★★★★★</div>
                  </div>
                </div>
                <h3 className="font-bold">"Game-Changer for Our Restaurant!"</h3>
                <p className="text-gray-700">
                  "Handling multiple branches used to be a
                  nightmare. Now, with real-time sales
                  tracking and easy billing, I can manage
                  everything from one place!"
                </p>
                <div className="flex justify-between mt-4 text-gray-800 font-light text-red-700 font-medium">
      <span>Founder Urban Bites</span>
      <span>Delhi,India</span>
    </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  )
}
export default Demo