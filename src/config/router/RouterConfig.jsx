import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Admission from '../../screens/admission/Admission'
import Student from '../../screens/student-dashboard/Student'
import Admin from '../../screens/admin-dashboard/Admin'

const Routerconfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='admission' element={<Admission/>}/>
                <Route path='student' element={<Student/>}/>
                <Route path='admin' element={<Admin/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig