import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const DeleteStudent = () => {
const{id} = useParams();
const navigate = useNavigate();
const handleDelete = () => {
    // Delete student logic here
    axios.delete(`http://localhost:5000/data/${id}`)
    navigate('/table')
}

const handleNo = () =>{
    navigate('/table');
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      Are you sure you want to delete this student
      <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold rounded-xl px-5 py-2 mx-3">
        Yes
      </button>
      <button onClick={handleNo} className='bg-green-400 hover:bg-green-600 text-black font-bold rounded-xl px-5 py-2'>
        No
      </button>


    </div>
  )
}

export default DeleteStudent
