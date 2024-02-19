import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function EmployApprovalCard() {
  return (
    <div className='flex justify-between items-center mt-2'>
      <div className='flex items-center'>
        <AccountCircleIcon className='text-[#8b56c1]    font-extrabold me-2' />
        <p className="text-white  leading-none  opacity-85">Employee Name</p>
      </div>
      <div className='flex'>
        <p className="text-white  text-sm">Leave Request</p>
        <KeyboardArrowRightIcon className='text-[#8b56c1]' />
      </div>
    </div>

  )
}
