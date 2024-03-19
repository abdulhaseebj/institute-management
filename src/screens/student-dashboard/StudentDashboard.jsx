import React, { useEffect, useState } from 'react'
import { getStudentData, signOutUser } from '../../config/firebase/firebasemethod';
import { auth } from '../../config/firebase/firebaseconfig';
import { useNavigate } from 'react-router-dom';
import ActionAreaCard from '../../components/Singlestudentcard';

const Student = () => {
  // useState
  const [userData, setUserData] = useState([])
  // useNavigate
  const navigate = useNavigate()
  // // get data from firestore
  useEffect(() => {
    getStudentData("users")
      .then((res) => {
        console.log(res);
        setUserData(res)
        console.log(auth.currentUser.uid);

      })
      .catch((err) => {
        console.log(err);
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
      {userData.length > 0 ? userData.map((item, index) => {
        return <ActionAreaCard key={index} userImg={item.imgUrl} userName={item.names} course={item.cource} gender={item.gender} date={item.date} />
      }) : <h1>loading..</h1>}
      <button onClick={logOut}>LogOut</button>
    </>
  )
}

export default Student