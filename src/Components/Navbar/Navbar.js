import React from 'react'
import DatasetIcon from '@mui/icons-material/Dataset';
import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Navbar({ toggleSidebar }) {
  const handleClick = () => {
    toggleSidebar(); // Call toggleSidebar function when the dataset icon is clicked
    console.log("btn is clicked")
  };
  return (
    <>

      <div className=' grid sm:grid-cols-12 gap-2  '>
        <div className='sm:col-span-7 col-span-12 header rounded-xl py-3 sm:py-[18px] px-4 border-2 border-slate-600  '>
          <div className="flex items-center " >
            <span className='me-2 opacity-80 '><DatasetIcon onClick={handleClick} /></span>
            <span className='me-2 opacity-80'><KeyboardArrowRightIcon /></span>
            <span className='me-2 opacity-80'>Employee</span>
            <span className='me-2 opacity-80'><KeyboardArrowRightIcon /></span>
            <span className='opacity-80' >Manage Employee</span>
          </div>
        </div>
        <div className='sm:col-span-3 col-span-6 header rounded-xl py-1 sm:pt-3  px-4 border-2 border-slate-600  '>
          <div className='flex items-center '>
            <SearchIcon className='bg-transparent  ' />
            <input type="search" placeholder='Search' className='bg-transparent placeholder:text-white focus:ring-transparent focus:border-transparent border-none  ' />
          </div>
        </div>
        <div className="sm:col-span-2 col-span-6 header rounded-xl py-1 sm:pt-3  px-1 border-2 border-slate-600 divide-x ">
          <div className='flex justify-around items-center mt-1'>
            <NotificationsNoneIcon className='bg-transparent' />
            <span className='text-2xl opacity-60'>|</span>
            <span>
              <AccountCircleIcon className='bg-transparent ' />
              <KeyboardArrowDownIcon />
            </span>

          </div>
        </div>
      </div>




    </>
  )
}
