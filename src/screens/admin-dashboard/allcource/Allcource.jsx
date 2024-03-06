import React, { useEffect, useState } from 'react'
import RecipeReviewCard from '../../../components/Card'
import { getAllData } from '../../../config/firebase/Firebasemethod'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Typography } from '@mui/material';

const Allcource = () => {
  // useState
  const [getCourse, setGetCourse] = useState([])
  // useEffect
  useEffect(() => {
    getAllData('course')
      .then((res) => {
        console.log(res);
        setGetCourse(res)
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  return (
    <>
      <Typography className=''>
        <h2>All Course</h2>
        <Typography className="p-($spacer * .25)">
          {getCourse.length > 0 ? getCourse.map((item, index) => {
            return <RecipeReviewCard key={index} teacherName={item.teacher} course={item.course} days={item.days} />
          }) : <h1>Loading...</h1>}
        </Typography>
      </Typography>
    </>

  )
}

export default Allcource