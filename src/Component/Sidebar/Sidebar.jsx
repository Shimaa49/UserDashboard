import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return <>
  <div className='sidebar'> 
<div className="container">


<div className="title d-flex align-items-center px-3 py-4">
     <i className="fa-solid fa-table-columns fs-2"></i>
    <h1 >Dashboard </h1>
   
   
</div>
<div className="links">

     <ul  className='list-unstyled px-3'>
          <li><NavLink to="/" className="nav-link"> <i className="fa-solid fa-user fs-4"></i>User</NavLink></li>
          <li><NavLink to="Setting" className="nav-link"><i className="fa-solid fa-gear fs-4"></i>Setting</NavLink></li>

         
        </ul>
</div>
  </div>
  </div>
  </>
}
