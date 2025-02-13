import React from "react";
import  ContactImg from '../assets/ContactUs.svg';
import Email from '../assets/Email.svg';
import Phone from '../assets/Phone.svg';
import Location from '../assets/Location.svg';
function Contact(){
    return(
        <div className="my-10">
             <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 flex-end items-center text-center">
                        <div className="flex justify-end flex-col items-end">
                          <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 mb-6">
                          Let's talk with us                                </h1>
            
                        </div>
            
                        <div className="lg:ml-auto">
            
                        </div>
                        <div class="flex-col">
                          <ul className="list-disc pl-0 ml-0 text-black custom-list mb-10">
                          <li className="flex items-center gap-2">
            <img src={Location} alt="Icon" className="w-5 h-5" />
            6-3-353, Nagarjuna Cir Rd, Mothi Nagar, Dwarakapuri, Punjagutta, Hyderabad, Telangana 500082
          </li>
          <li className="flex items-center gap-2">
            <img src={Email} alt="Icon" className="w-5 h-5" />
            ItsOnme@gmail.com
          </li>
          <li className="flex items-center gap-2">
            <img src={Phone} alt="Icon" className="w-5 h-5" />
            +91 9988778877
          </li>
                          </ul>
                        </div>
                        
                      </div>
                      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={ContactImg} />
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
                <label className="leading-7 text-sm text-gray-600">First Name</label>
                <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Last Name</label>
                <input type="text" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Phone</label>
                <input type="tel" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label className="leading-7 text-sm text-gray-600">Message</label>
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
                  </div>
    )
}
export default Contact

