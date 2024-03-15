import React, { useEffect, useState } from 'react';
import { getAllData } from '../../../config/firebase/firebasemethod';
import AlignItemsList from '../../../components/Allstudentlist';
import { Typography } from '@mui/material';

const Allstudent = () => {
  const [allStudent, setAllStudent] = useState([]);

  useEffect(() => {
    getAllData('users')
      .then((res) => {
        // console.log(res);
        // setAllStudent(res)
        const studentData = res.filter((data) => data.type === 'student');
        console.log(studentData);
        setAllStudent(studentData);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {allStudent.length > 0 ? allStudent.map((data, index) => {
        return <AlignItemsList key={index} studentName={data.names} studentImg={data.imgUrl} course={data.cource} date={data.date} uid={data.uid} />;
      }) : <Typography>loading...</Typography>}
    </>
  );
};

export default Allstudent;
