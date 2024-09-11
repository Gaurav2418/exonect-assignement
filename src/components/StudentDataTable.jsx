import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';



const StudentDataTable = () => {
const [studentData, setStudentData] = useState([])

useEffect(()=>{

  axios.get('http://localhost:5000/data')
  .then(response =>{
    setStudentData(response.data)
    console.log(response.data)
  })
  .catch(err => {
          console.error('Error fetching data:', err);
        });
}
,[])

  return (
    <div className='bg-[#faf9f6]'>
      <div className='flex justify-center items-center font-bold text-2xl'>Student Data</div>
      <Link to='/addstudent'> <MdOutlineAddBox className='size-8 float-right'/> </Link>
      <table className='w-full text-center  border-separate border-spacing-2 mt-3'>
        <thead className='text-center'>
          <tr className='w-full text-center'>
            <th className='border border-slate-700 rounded-md'>SR.No</th>
            <th className='border border-slate-700 rounded-md'>Student Name</th>
            <th className='border border-slate-700 rounded-md'> Mail ID</th>
            <th className='border border-slate-700 rounded-md'> Roll No.</th>
            <th className='border border-slate-700 rounded-md'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) =>(
            <tr kay={student.id}>
              <td className='border border-slate-700 rounded-md'>{index+1}</td>
              <td className='border border-slate-700 rounded-md'>{student.name}</td>
              <td className='border border-slate-700 rounded-md'>{student.emailId}</td>
              <td className='border border-slate-700 rounded-md'>{student.rollNo}</td>
              <td>
                <div className='flex justify-center gap-x-4 border border-slate-700 rounded-md p-1'>

                    
                    <Link to={`/editstudent/${student.id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                    </Link>
                    <Link to={`/deletestudent/${student.id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600' /> 
                    </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

export default StudentDataTable
