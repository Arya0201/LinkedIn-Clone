import { Avatar } from '@mui/material'
import React from 'react'
import "./HeaderOption.css"
function HeaderOption({avtar,Icon,title}) {
  return (
    <div className="HeaderOption">
        {Icon && <Icon className="HeaderOption__icon"/>}
        {avtar &&(
          <Avatar className="HeaderOption__icon" src={avtar}/>
        )}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption
