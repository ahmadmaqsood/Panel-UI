import React from 'react'
import './employeetable.css'
import EmployeeDataComponent from './EmployeeDataComponent'
import AddIcon from '@mui/icons-material/Add';
export default function EmployeeTable() {
    return (


        <div className="relative  overflow-x-auto bg-[#20222E] shadow-md rounded-xl ">
            <div className="pb-4 grid  dark:bg-gray-900  mt-5 mx-3">
                <div className='flex justify-between flex-wrap sm:flex-nowrap '>
                    <label for="table-search" className="sr-only">Search</label>
                    <div className="relative mt-1 mb-2 w-96  sm:w-0">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search" className="block py-4 ps-10 text-sm  placeholder:text-white border border-gray-600 rounded-lg w-50 bg-transparent focus:ring-transparent focus:border-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-transparent dark:focus:border-transparent" placeholder="Search Employee" />
                    </div>
                    <div className=''>
                        <button className='text-white text-sm border-2 rounded-lg font-semibold  px-7  py-4 sm:px-7 sm:py-4  me-3 border-gray-600'>Import from CV</button>
                        <button className='text-white text-sm border-0 rounded-lg  font-semibold px-4 py-4 sm:px-7  sm:py-4  bg-[#8d3dd3]'><AddIcon className='mb-1 me-2' style={{ fontSize: "16px" }} />Add Employee</button>
                    </div>
                </div>
            </div>
            <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
                <thead className="text-xs  text-white   bg-[#282A36] dark:bg-gray-700 dark:text-gray-400">
                    <tr >
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-all-search" className="sr-only">checkbox</label>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Job title </th>
                        <th scope="col" className="px-6 py-3">Department </th>
                        <th scope="col" className="px-6 py-3">Based Salary </th>
                        <th scope="col" className="px-6 py-3">Total Project</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        <th scope="col" className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeDataComponent />
                    <EmployeeDataComponent />
                    <EmployeeDataComponent />
                    <EmployeeDataComponent />
                    <EmployeeDataComponent />
                    <EmployeeDataComponent />

                </tbody>
            </table>
        </div>

    )
}
