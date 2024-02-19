import React from 'react'
import './employapproval.css'
import EmployApprovalCard from './EmployApprovalCard';
export default function EmployApproval() {
    return (

        <div class="employment_count_card h-[195px] py-5 px-5 col-span-6 border-2 border-slate-600 rounded-xl mt-5">
            <div className='flex justify-between items-center text-sm mb-4'>
                <p className="text-white font-medium  leading-none  opacity-85">Pending Approval</p>
                <p className=" font-medium leading-none text-[#8b56c1]  opacity-85">36 request</p>
            </div>
            <EmployApprovalCard  />
            <EmployApprovalCard  />
            <EmployApprovalCard  />
            <EmployApprovalCard  />
        </div>

    )
}
