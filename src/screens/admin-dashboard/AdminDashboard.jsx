import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcource from './addcource/Addcource'
import Allcource from './allcource/Allcource'
import Allstudent from './allstudent/Allstudent'
import Singlecource from './singlecource/Singlecource'
import PersistentDrawerLeft from '../../components/Drawer'
import Singlestudent from './singlestudent/Singlestudent'

const Admin = () => {
  return (
    <>
      <PersistentDrawerLeft screen={

        <Routes>
          <Route path='/' element={<Addcource />} />
          <Route path='/allcourse' element={<Allcource />} />
          <Route path='/allstudents' element={<Allstudent />} />
          <Route path='/allstudents/students/:id' element={<Singlestudent />} />
          {/* <Route path="/allstudents/student/:id" element={<SingleStudent />} /> */}
          <Route path='/singlecourse' element={<Singlecource />} />

        </Routes>
      } />
    </>
  )
}

export default Admin