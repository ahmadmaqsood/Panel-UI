import React from 'react'
import './employcard.css'
export default function EmployCountCard({ name, number, icon: Icon, color,backgroundColor }) {
  return (

    <div className="employment_count_card py-5 px-5 sm:col-span-6 col-span-12 border-2 border-slate-600 rounded-xl  flex items-center">
      <span className='w-[50px] h-[50px] rounded-xl  mr-4  flex items-center justify-center' style={{ backgroundColor}}>
        <Icon className='  font-extrabold opacity-100' style={{ color }} />
      </span>
      <div className="text-sm">
        <p className="text-white font-medium  leading-none mb-1 opacity-85">{name}</p>
        <p className="text-white font-bold text-lg">{number}</p>
      </div>
    </div>

  )
}
