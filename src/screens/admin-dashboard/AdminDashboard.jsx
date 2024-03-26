import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Addcource from './addcource/Addcource'
import Allcource from './allcource/Allcource'
import Allstudent from './allstudent/Allstudent'
import Singlecource from './singlecource/Singlecource'
import PersistentDrawerLeft from '../../components/Drawer'
import Singlestudent from './singlestudent/Singlestudent'
import { signOutUser } from '../../config/firebase/firebasemethod'

const Admin = () => {
// useNavigate
const navigate = useNavigate()

  // logOut function
  function logOut() {
    signOutUser().then((res) => {
      console.log(res);
      navigate('/')
    })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <>
      <PersistentDrawerLeft logout={logOut} screen={

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