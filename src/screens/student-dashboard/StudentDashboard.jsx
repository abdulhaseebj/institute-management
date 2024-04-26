import React, { useEffect, useState } from 'react'
import { getStudentData,signOutUser } from '../../config/firebase/firebasemethod';
import { auth } from '../../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import ActionAreaCard from '../../components/Singlestudentcard';
import ResponsiveAppBar from '../../components/Navbar';
import { onAuthStateChanged } from "firebase/auth";
import Loader from '../../components/Loader';

const Student = () => {
  // useState
  const [userData, setUserData] = useState([])
  // useNavigate
  const navigate = useNavigate()
  // // get data from firestore
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        getStudentData("users",{user})
        .then((res) => {
              // console.log(res);
              setUserData(res)
        
            })
            .catch((err) => {
              console.log(err);
            });
      } else {
        console.log('err');
      }
    });

   
  }, []);

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
      <ResponsiveAppBar logout={logOut} />
      {userData.length > 0 ? userData.map((item, index) => {
        return <ActionAreaCard key={index} userImg={item.imgUrl} userName={item.names} course={item.cource} gender={item.gender} date={item.date} />
      }) : <Loader/>}
    </>
  )
}

export default Student