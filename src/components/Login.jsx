import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', userName);
    console.log('Password:', password);
    navigate('/table');
  };


  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-xs">

          <form className="bg-[#ffff0] shadow-md rounded px-8 pt-6 pb-8 mb-4"
               onSubmit={handleSubmit} >
                
                <div className='mb-4'>
                  <label>Username:</label>
                  <input type="text" placeholder="Enter your username" required
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight'
                  value={userName} onChange={(e)=>setUserName(e.target.value)} />
                </div>

              <div className='mb-6'>
                <label>Password</label>
                <input type="text" placeholder='Enter your passsword' required
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              </div>

              <div className='flex items-center justify-between'>
                
                  <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    Log In
                  </button>
                
              </div>
              

          </form>    
          </div>
        </div>
    </div>
  )
}

export default Login;
