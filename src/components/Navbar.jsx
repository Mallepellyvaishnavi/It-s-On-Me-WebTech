import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import BillingLogo from '../assets/BillingLogo.svg';
import InventoryLogo from '../assets/InventoryLogo.svg';
import CrmLogo from '../assets/CrmLogo.svg';
import ReportingLogo from '../assets/ReportingLogo.svg';
import OnlineLogo from '../assets/OnlineLogo.svg';
import EmpLogo from '../assets/EmpLogo.svg';
function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-1">
      <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/')} />

        {/* Navigation */}
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
          <span 
    className="relative cursor-pointer text-black-700 hover:text-black-900 transition duration-300 before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-red-700 before:transition-all before:duration-300 hover:before:w-full"
    onClick={() => navigate('/')}
  >
    Home
  </span>

            {/* Features Dropdown */}
            <div 
  className="relative" 
  onMouseEnter={() => setIsDropdownOpen(true)} 
  onMouseLeave={() => setIsDropdownOpen(false)}
>

            <div className="relative">
            <button 
    onClick={toggleDropdown} 
    className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition duration-300 
               before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-red-700 
               before:transition-all before:duration-300 hover:before:w-full focus:outline-none"
  >
    Features
  </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <ul className="py-2">
                  <li className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate("/billing"); }}>
                    <img src={BillingLogo} width={20} height={20} className="mr-2" />
                    Billing
                  </li>

                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate('/inventory'); }}>
                    <img src={InventoryLogo} width={20} height={20} className="mr-2" />
                    <span>Inventory</span>
                  </li>
                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate('/online-ordering'); }}>
                    <img src={OnlineLogo} width={20} height={20} className="mr-2 order-first" />
                    <span>Online Ordering</span>
                  </li>

                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate('/crm'); }}>
                    <img src={CrmLogo} width={20} height={20} className="mr-2" />
                    <span>CRM</span>
                  </li>

                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate('/crm'); }}>
                    <img src={ReportingLogo} width={20} height={20} className="mr-2" />
                    <span>Reporting</span>
                  </li>


                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => { setIsDropdownOpen(false); navigate('/online-ordering'); }}>
                    <img src={EmpLogo} width={20} height={20} className="mr-2 order-first" />
                    <span>Employee Management</span>
                  </li>

                </ul>
              </div>
            )}
          </div>
          </div>

          <span 
    className="relative cursor-pointer text-black-700 hover:text-black-900 transition duration-300 
               before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-red-700 
               before:transition-all before:duration-300 hover:before:w-full"
    onClick={() => navigate('/pricing')}
  >
    Pricing
  </span>
  <span 
    className="relative cursor-pointer text-black-700 hover:text-black-900 transition duration-300 
               before:absolute before:left-0 before:-bottom-1 before:w-0 before:h-1 before:bg-red-700 
               before:transition-all before:duration-300 hover:before:w-full"
    onClick={() => navigate('/integration')}
  >
    Integration
  </span>
        </nav>

        {/* Request Button */}
        <div className="ml-4">
          <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={() => navigate('/contact-us')}>
             Request A Demo
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
