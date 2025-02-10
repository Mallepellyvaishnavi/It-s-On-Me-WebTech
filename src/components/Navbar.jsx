import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.jpg';
import BillingLogo from '../assets/BillingLogo.svg';
import InventoryLogo from '../assets/InventoryLogo.svg';
import CrmLogo from '../assets/CrmLogo.svg';
import ReportingLogo from '../assets/ReportingLogo.svg';

function Navbar() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

        {/* Logo */}
        <img src={Logo} alt="Logo" className="h-12 w-auto cursor-pointer" onClick={() => navigate('/')} />

        {/* Navigation */}
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-6">
          <span className="hover:text-gray-900 cursor-pointer" onClick={() => navigate('/')}>Home</span>

          {/* Features Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="hover:text-gray-900 focus:outline-none cursor-pointer">
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
                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => { setIsDropdownOpen(false); navigate('/online-ordering'); }}>
                    Online Ordering
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


                  <li className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => { setIsDropdownOpen(false); navigate('/employee-management'); }}>
                    Employee Management
                  </li>
                </ul>
              </div>
            )}
          </div>

          <span className="hover:text-gray-900 cursor-pointer" onClick={() => navigate('/pricing')}>Pricing</span>
          <span className="hover:text-gray-900 cursor-pointer" onClick={() => navigate('/integration')}>Integration</span>
        </nav>

        {/* Request Button */}
        <div className="ml-4">
          <button onClick={() => navigate('/contact-us')}>

          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
