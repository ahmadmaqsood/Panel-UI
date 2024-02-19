import './App.css';
import Sidebar from './Components/SideBar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import EmployCount from './Components/EmployCount/EmployCount';
import EmployApproval from './Components/EmployApproval/EmployApproval';
import EmployeeTable from './Components/EmployeeTable/EmployeeTable';
import React, { useState } from 'react';
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
      <div style={{ backgroundColor: "#151724" }}>
        <div className='p-4 grid gap-2 sm:grid-cols-12' >
          <div className={`min-h-screen sm:col-span-3  sm:block ${sidebarOpen ? 'sm:block ' : 'hidden'}`}>
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
          <div className=' sm:col-span-9  '>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className='grid sm:grid-cols-12 gap-2'>
              <div className='EmployeeCount sm:col-span-7'>
                <EmployCount />
              </div>
              <div className='EmployeeApproval sm:col-span-5 '>
                <EmployApproval />

              </div>
            </div>

            <div className='grid employee__table mt-10 sm:mt-2  '>
              <EmployeeTable />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default App;
