import React from "react";
import Employee1 from '../assets/Employee/Employee1.svg';
import Employee2 from '../assets/Employee/Employee2.svg';
import Employee3 from '../assets/Employee/Employee3.svg';
import Employee5 from '../assets/Employee/Employee5.svg';
import Employee6 from '../assets/Employee/Employee6.svg';
import Employee7 from '../assets/Employee/Employee7.svg';
import EmployeeImg from '../assets/Employee.svg';

function EmployeeManagement() {
  return (  
    <div className="my-20">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="flex justify-end flex-col items-end">
              <h1 className="title-font sm:text-4xl text-6xl font-medium text-red-700">
              Effortless Employee Management for
              Your Restaurant
              </h1>
              <h3 className="sm:text-xl text-lg font-bold text-gray-700">
               
              </h3>
            </div>
            <div class="flex-grow pl-6 ">
            <p className="mb-8 leading-relaxed py-8">
            "Streamline staff scheduling, track performance, and manage payroll—all in one place. Empower your team with a POS system designed for efficiency and productivity."   .
            </p>
            </div>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              Request  a Demo
            </button>
            
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src={EmployeeImg} />
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
                <img src={Employee1} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">AShift Scheduling & Attendance Tracking</h2>
                <p className="leading-relaxed">Easily assign shifts, track clock-in/clock-out times, and avoid scheduling conflicts.</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Employee2} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Employee Performance Monitoring</h2>
                <p className="leading-relaxed">Get insights into order handling speed, customer ratings, and sales performance for each staff member.</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Employee3} />            </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Payroll & Salary Management</h2>
                <p className="leading-relaxed">Automate salary calculations, deductions, and bonuses with integrated payroll features.</p>
              </div>
            </div>
          </div>

          <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Employee5} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Role-Based Access Control</h2>
                <p className="leading-relaxed">Assign custom roles and permissions to control access to sensitive data..</p>
              </div>
            </div>
          </div>


          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Employee7} />            </div>

              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Staff Training & Task Management</h2>
                <p className="leading-relaxed">Train new employees with guidelines, SOPs, and performance tracking tools for a smooth onboarding process..</p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">

            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div className="flex-shrink-0 w-15 h-15 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
                <img src={Employee6} />
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-red-700 mb-1 text-xl">Internal Communication & Announcements </h2>
                <p className="leading-relaxed">Keep your team informed with instant notifications, updates, and announcements within the POS system.</p>
              </div>
            </div>
          </div>


        </div>

      </section>
    </div>
  )
}
export default EmployeeManagement