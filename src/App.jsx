import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Content from './components/Content'
import Billing from './components/Billing'
import Inventory from './components/Inventory'
import OnlineOrdering from './components/OnlineOrdering'
import Crm from './components/Crm'
import Reporting from './components/Reporting'
import EmployeeManagement from './components/EmployeeManagement'
import Pricingpage from './components/Pricing'
import Integration from './components/Integration'
import Contactus from './components/ContcatUs'
function App() {
  return (
    <div>
   
      <Navbar />
      <Routes>
      <Route path="/" element={<Content/>}/>
      <Route path="/billing" element={<Billing/>}/>
    <Route path="/inventory" element={<Inventory/>}/>
    <Route path="/online-ordering" element={<OnlineOrdering/>}/>
  <Route path="/crm" element={<Crm/>}/>
  <Route path="reporting" element={<Reporting/>}/>
  <Route path="employee-management" element={<EmployeeManagement/>}/>
  <Route path="pricing" element={<Pricingpage/>}/>
  <Route path="integration" element={<Integration/>}/>
 <Route path="contact-us" element={<Contactus/>}/>
      </Routes>
    
    </div>
  )
}

export default App