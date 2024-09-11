import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const  AddStudent = () => {
const[name, setStudentName] = useState('');
const[rollNo, setRollNo] = useState('');
const[emailId, setMailId] = useState('');
const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', name);
    if(!name || !rollNo || !emailId) return;
    
    const newStudent={
      name, rollNo, emailId
    }
    axios.post('http://localhost:5000/data', newStudent)
    .then((response) => {
      console.log(response.data.name)
      navigate('/table')
      })
    .catch(error => {
      console.error('Error adding data', error);
    });
  };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-xs">

          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
               onSubmit={handleAdd} >
                
                <div className='mb-4'>
                  <label>Student Name:</label>
                  <input type="text" placeholder="Enter your name" required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
                  value={name} onChange={(e)=>setStudentName(e.target.value)} />
                </div>

              <div className='mb-6'>
                <label>Mail Id</label>
                <input type="text" placeholder='Enter your email id' required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight'
                value={emailId}
                onChange={(e) => setMailId(e.target.value)} />
              </div>

              <div>
                <label>Roll No.</label>
                <input type="text" placeholder='Enter your roll no.' required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight'
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)} />
              </div>

              <div className='flex items-center justify-between'>
                
                  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Add Student
                  </button>
               
              </div>
              

          </form>    
          </div>
        </div>
    </div>
  )
}

export default AddStudent;
