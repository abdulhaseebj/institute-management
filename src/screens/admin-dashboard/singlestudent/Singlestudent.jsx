import ActionAreaCard from '../../../components/Singlestudentcard'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { getData } from '../../../config/firebase/firebasemethod';

const Singlestudent = () => {
  // useParams
  const param = useParams()
  // useState
  const [userData, setUserData] = useState([])

  // get data from firestore
  useEffect(() => {
    getData("users", { uid: param.id })
      .then((res) => {
        console.log(res);
        setUserData(res)

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      {userData.length > 0 ? userData.map((item, index) => {
        return <ActionAreaCard key={index} userImg={item.imgUrl} userName={item.names} course={item.cource} gender={item.gender} date={item.date}/>
      }) : <h1>loading..</h1>}
    </>
  )
}

export default Singlestudent