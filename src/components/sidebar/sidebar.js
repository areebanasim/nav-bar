import React from 'react'
import "./sidebar.css"
import SideBarData from '../sideBarData';


const Sidebar = () => {

  return (
    <div className='menu'>
      <ul>
        {SideBarData.map((val, key) => {
          <li key={key} onClick={()=>{window.location.pathname=val.link}}>
          
            <div>{val.icon}</div>
          </li>
        })}
      </ul>
    </div>
  )
}

export default Sidebar;
