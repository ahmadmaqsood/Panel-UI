import React from 'react'
import StarsIcon from '@mui/icons-material/Stars';
import MenuIcon from '@mui/icons-material/Menu';
import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleIcon from '@mui/icons-material/People';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import WalletIcon from '@mui/icons-material/Wallet';
import PaymentIcon from '@mui/icons-material/Payment';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import SettingsPowerIcon from '@mui/icons-material/SettingsPower';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import './sidebar.css'
export default function Sidebar({ toggleSidebar }) {
    const handleClick =()=>{
        toggleSidebar();
    }
    
    return (
        <nav className='navbar'>
            <div className='sidebar flex justify-between px-5 items-center border-2 border-slate-600   text-white py-[17px] rounded-xl'>
                <div className='flex items-center'>
                    <StarsIcon className='me-3' />
                    <h1 className='font-bold text-xl'>ZeePalm</h1>
                </div>
                <div className=''>
                    <MenuIcon className='me-3 text-[#8b56c1]' onClick={handleClick} />
                </div>
            </div>
            <div className='sidebar my-5 px-5 h-[400px]  border-2 border-slate-600   text-white py-9 rounded-xl'>
                <div className='flex mb-4 hover__effect'>
                    <WidgetsIcon className='me-3 ' />
                    <h2 className='font-semibold'>Dashboard</h2>
                </div>
                <div className='flex mb-4 justify-between'>
                    <div className='flex hover__effect '>
                        <PeopleIcon className='me-3 ' />
                        <h2 className='font-semibold'>Employee</h2>
                    </div>
                    <div className=''>
                        <KeyboardArrowUpIcon />
                    </div>
                </div>
                
                <div className='flex mb-4 hover__effect'>
                    <QueryBuilderIcon className='me-3 ' />
                    <h2 className='font-semibold'>Attendance</h2>
                </div>
                <div className='flex mb-4 hover__effect'>
                    <WalletIcon className='me-3 ' />
                    <h2 className='font-semibold'>Time Off</h2>
                </div>
                <div className='flex mb-4 hover__effect'>
                    <PaymentIcon className='me-3 ' />
                    <h2 className='font-semibold'>Payroll</h2>
                </div>
                <div className='flex hover__effect '>
                    <FlagCircleIcon className='me-3 ' />
                    <h2 className='font-semibold'>Goals</h2>
                </div>
            </div>
            <div className='sidebar my-5 px-5 border-2 border-slate-600   text-white py-5 rounded-xl'>
                <div className='flex mb-4 hover__effect'>
                    <SettingsIcon className='me-3 ' />
                    <h2 className='font-semibold'>Settings</h2>
                </div>

                <div className='flex mb-4 hover__effect'>
                    <SupportAgentIcon className='me-3 ' />
                    <h2 className='font-semibold'>Help and Support</h2>
                </div>
                <div className='flex mb-4 hover__effect'>
                    <SettingsPowerIcon className='me-3 ' />
                    <h2 className='font-semibold text-red-500'>Logout</h2>
                </div>

            </div>
        </nav>
    )
}
