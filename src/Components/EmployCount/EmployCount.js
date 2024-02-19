import React from 'react'
import EmployCountCard from './EmployCountCard'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GamesIcon from '@mui/icons-material/Games';
import UnsubscribeIcon from '@mui/icons-material/Unsubscribe';
export default function EmployCount() {
    const BoardingIcon = GamesIcon;
    const PersonIcon = PersonOutlineIcon;
    const onLeave = UnsubscribeIcon;
    const color1 = '#403D96';
    const color2 = '#3E7B69';
    const color3 = '#AE566E';
    const color4 = '#966640';
    const backgroundColor1 = "#23253C";
    const backgroundColor2 = "#1D2C31";
    const backgroundColor3 = "#31212E";
    const backgroundColor4 = "#2F292B";
    return (
        <div class="grid grid-cols-12 gap-2 my-5">
            <EmployCountCard name="Total Employee" number="120" icon={PersonIcon} color={color1} backgroundColor={backgroundColor1} />
            <EmployCountCard name="Active Employee" number="60" icon={PersonIcon} color={color2} backgroundColor={backgroundColor2} />
            <EmployCountCard name="On Leave" number="24" icon={onLeave} color={color3} backgroundColor={backgroundColor3} />
            <EmployCountCard name="Onboarding" number="36" icon={BoardingIcon} color={color4} backgroundColor={backgroundColor4} />
        </div>
    )
}
