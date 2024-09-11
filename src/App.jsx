import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import StudentDataTable from './components/StudentDataTable'
import Login from './components/Login'
import AddStudent from './components/AddStudent'
// import SingleStudent from './components/SingleStudent'
import EditStudent from './components/EditStudent'
import DeleteStudent from './components/DeleteStudent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Hello Students
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/table' element={<StudentDataTable />} />
        {/* <Route path='/student/:id' element={<SingleStudent />} /> */}
        <Route path='/addstudent' element={<AddStudent />} />
        <Route path='/editstudent/:id' element={<EditStudent />} />
        <Route path='/deletestudent/:id' element={<DeleteStudent />} />
     </Routes>
     
    </>
  )
}

export default App
