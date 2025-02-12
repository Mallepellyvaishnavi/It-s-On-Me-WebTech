import React from "react";
import IntegrationImg from '../assets/IntegrationImg.svg';
import StripeImg from '../assets/Integration/Stripe.svg';
import Square from '../assets/Integration/Square.svg';
import Razorpay from '../assets/Integration/RazorPay.svg';
import uber from '../assets/Integration/Uber.svg';
import Zomato from '../assets/Integration/Zomato.svg';
import Swiggy from '../assets/Integration/Swiggy.svg';
import DoorDash from '../assets/Integration/DoorDash.svg';
import zoho from '../assets/Integration/Zoho.svg';
import UniCommerce from '../assets/Integration/Unicommerce.svg';
import TallyPrime from '../assets/Integration/TallyPrime.svg';
import Mark from '../assets/Integration/Mark.svg';
import LeadSquade from '../assets/Integration/LeaderSquared.svg';
import WhatdsApp from '../assets/Integration/WhatsApp.svg';
import Lark from '../assets/Integration/Lark.svg';
import Zapier from '../assets/Integration/Lark.svg';
import Google from '../assets/Integration/Google.svg';

function Integration() {
  return (
    <div className="my-20">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 flex-end items-center text-center">
            <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700 mb-6">
                Seamless Integrations for a Smarter
                Restaurant POS       </h1>

            </div>

            <div className="lg:ml-auto">

            </div>
            <div class="flex-col">
              <ul className="list-disc pl-0 ml-0 text-black custom-list mb-10">
                <li>Effortless third-party connections</li>
                <li>Sync payments, orders, and inventory in real time</li>
                <li>Boost productivity with automation</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
                Request a Demo
              </button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/9">
            <img className="object-cover object-center rounded" alt="hero" src={IntegrationImg} width={500} />
          </div>
        </div>
      </section>
      <section className="p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6  text-red-700">Simple Box Section</h1>
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4  text-red-700">Payment and Transations</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={StripeImg} width={24} height={24} alt="Inventory" />
                <span>Inventory</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Square} width={24} height={24} alt="Orders" />
                <span>Square</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Razorpay} width={24} height={24} alt="Analytics" />
                <span>RazorPay</span>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4  text-red-700">Online Ordering & Delivery</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={uber} width={24} height={24} alt="Inventory" />
                <span>UberEats</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Zomato} width={24} height={24} alt="Orders" />
                <span>Zomato</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Swiggy} width={24} height={24} alt="Analytics" />
                <span>Swiggy</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={DoorDash} width={24} height={24} alt="Analytics" />
                <span>DoorDash</span>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4  text-red-700"> Invetory and  Suppiler Management</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={TallyPrime} width={24} height={24} alt="Inventory" />
                <span>TallyPrime</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={UniCommerce} width={24} height={24} alt="Orders" />
                <span>UniCommerce</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={zoho} width={24} height={24} alt="Analytics" />
                <span>Zoho Inventory</span>
              </div>
            </div>
          </div>

          {/* Box 4 */}
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4  text-red-700">Accounting & Financial Management </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={TallyPrime} width={24} height={24} alt="Inventory" />
                <span>Tally Prime </span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Mark} width={24} height={24} alt="Orders" />
                <span>Marg Erp</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={zoho} width={24} height={24} alt="Analytics" />
                <span>Zoho Books</span>
              </div>
            </div>
          </div>

          {/* Box 5 */}
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4  text-red-700">Customer Engagement& CRM</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={zoho} width={24} height={24} alt="Inventory" />
                <span>Zoho Crm</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={LeadSquade} width={24} height={24} alt="Orders" />
                <span>Lead Squared</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={WhatdsApp} width={24} height={24} alt="Analytics" />
                <span>Whatsapp Business</span>
              </div>
            </div>
          </div>

          {/* Box 6 */}
          <div className="w-80 p-6 h-auto flex flex-col items-center border-2 border-black rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-700">Productivity & Automation</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2">
                <img src={Lark} width={24} height={24} alt="Inventory" />
                <span>Lark</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Zapier} width={24} height={24} alt="Orders" />
                <span>Zapier</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={Google} width={24} height={24} alt="Analytics" />
                <span>Google Sheets</span>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className="p-4">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6  text-red-700">Header</h1>
          <div className="flex flex-wrap justify-center gap-6 w-full">
            <div className="p-10 bg-gray-200 rounded-lg shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold mb-2  text-red-700">Save Time</h2>
              <p>Automate tasks and reduce manual effort</p>
            </div>
            <div className="p-10 bg-gray-200 rounded-lg shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold mb-2  text-red-700">Reduce Error</h2>
              <p>Ensure accurate data across platforms</p>
            </div>
            <div className="p-10 bg-gray-200 rounded-lg shadow-md w-80 text-center">
              <h2 className="text-xl font-semibold mb-2  text-red-700">Scale Faster</h2>
              <p> Use enterprise-level tools to grow
                your business</p>
            </div>
          </div>
        </div>
      </section>



    </div>
  )

}
export default Integration