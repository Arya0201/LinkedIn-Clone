import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">
       <div className="header__left">
            <LinkedInIcon color='primary' className="licon"/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
       </div>
       <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="home"/>
          <HeaderOption Icon={SupervisorAccountIcon } title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption avtar="https://media-exp1.licdn.com/dms/image/C4D03AQHB0lJ1PbHi5w/profile-displayphoto-shrink_200_200/0/1636021682472?e=1668643200&v=beta&t=GB92RCsC8An8RYhTQcUYS2OqGOVMBV6sLAeyWIafthk" title="me"/>
       </div>
    </div>
  )
}

export default Header
