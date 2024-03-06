import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Addcource from './addcource/Addcource'
import Allcource from './allcource/Allcource'
import Allstudent from './allstudent/Allstudent'
import Singlecource from './singlecource/Singlecource'
import PersistentDrawerLeft from '../../components/Drawer'
import { Box } from '@mui/material'

const Admin = () => {
  return (
    <>
      <PersistentDrawerLeft screen={

        <Routes>
          <Route path='/' element={<Addcource />} />
          <Route path='/allcourse' element={<Allcource />} />
          <Route path='/allstudents' element={<Allstudent />} />
          <Route path='/singlecourse' element={<Singlecource />} />

        </Routes>
      } />
    </>
  )
}

export default Admin