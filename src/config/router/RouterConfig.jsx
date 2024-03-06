import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../screens/login/Login'
import Admission from '../../screens/admission/Admission'
import Student from '../../screens/student-dashboard/StudentDashboard'
import Admin from '../../screens/admin-dashboard/AdminDashboard'

const Routerconfig = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='' element={<Login/>}/>
                <Route path='admission' element={<Admission/>}/>
                <Route path='admin/*' element={<Admin/>}/>
                <Route path='student' element={<Student/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routerconfig