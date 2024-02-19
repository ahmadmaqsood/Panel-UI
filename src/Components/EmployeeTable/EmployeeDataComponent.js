import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function EmployeeDataComponent() {
    return (
        <tr className="bg-transparent text-white  border-b    hover:bg-[#282A36]  ">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-[#8b56c1] bg-transparent border-gray-300 rounded " />
                    <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="px-5 py-4 font-medium text-white whitespace-nowrap"><AccountCircleIcon className='text-[#8b56c1] me-2' />Employee Name </td>
            <td className="px-5 py-4 ">IT Manager </td>
            <td className="px-5 py-4">IT </td>
            <td className="px-5 py-4">$200.00</td>
            <td className="px-5 py-4">4</td>
            <td className="px-5 py-4">active</td>
            <td className="px-5 py-4">
                <a href="#" className="font-medium text-[#8b56c1] px-6  text-center rounded-lg py-2 border-2 border-[#8b56c1]  hover:bg-[#8b56c1] hover:text-white "><EditIcon className='me-1  ' style={{ fontSize: "14px" }} />Edit</a>
            </td>
        </tr>
    )
}
