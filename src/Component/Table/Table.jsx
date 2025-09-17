import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
export default function Table({rows,onEdit } ){

  return <>
  <div className="table-responsive">
  <table className="table table-striped table-hover">
    <thead className=" bg-success">
      <tr>
       <th >#</th>
        <th >Name</th>
        <th >Email</th>
        <th >Phone</th>
        <th >Edit</th>
      </tr>
    </thead>
    <tbody>
    
  {rows.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
                <td>{u.phone}</td>
              <td ><button className="btn btn-sm btn-outline-primary "  onClick={() => onEdit(u)}>Edit</button></td>
            </tr>
          ))}
        



    
    </tbody>
  </table>
  
</div>

   
  </>
}
