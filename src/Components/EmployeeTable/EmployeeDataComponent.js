import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { employeeData } from './data';
export default function EmployeeDataComponent() {
    return (
        <tbody>
            {
                employeeData.map((items, i) => {
                    return <tr className="bg-transparent text-white  border-b    hover:bg-[#282A36] overflow-x-auto " key={i}>
                        <td className="w-4 p-4">
                            <div className="flex items-center">
                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-[#8b56c1] bg-transparent border-gray-300 rounded " />
                                <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td className="px-4 py-4 font-medium text-white whitespace-nowrap"><AccountCircleIcon className='text-[#8b56c1] me-2' />{items.name} </td>
                        <td className="px-4 py-4 ">{items.jobTitle} </td>
                        <td className="px-4 py-4">{items.Department} </td>
                        <td className="px-4 py-4">{items.Salary}</td>
                        <td className="px-4 py-4">{items.Project}</td>
                        <td className="px-4 py-4">{items.status}</td>
                        <td className="">
                            <a href="#" className="font-medium text-[#8b56c1] px-2  text-center rounded-lg py-2 border-2 border-[#8b56c1]  hover:bg-[#8b56c1] hover:text-white "><EditIcon className='me-1  ' style={{ fontSize: "14px" }} />Edit</a>
                        </td>
                    </tr>

                })
            }
        </tbody>
    )
}
