import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from '@mui/material'
import React, { useRef, useState } from 'react'
import { sendData, signOutUser } from '../../../config/firebase/firebasemethod';
import { useNavigate } from 'react-router-dom';

const Addcource = () => {
  // useState
  const [days, setDays] = useState('');
  const [course, setCourse] = useState('');
  // useRef
  const teacherName = useRef()
  // useNavigate
  const navigate = useNavigate()

  // let selectedValue;
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    // console.log('Selected Value:', selectedValue);

    const fieldName = event.target.name;
    if (event.target.name === 'days') {
      setDays(selectedValue);
    } else if (event.target.name === 'course') {
      setCourse(selectedValue);
    }
  }

  const addCourse = (event) => {
    event.preventDefault()
    // console.log('Teacher Name:', teacher);
    // console.log('Days:', days);
    // console.log('Course:', course);
    sendData({
      teacher: teacherName.current.value,
      days: days,
      course: course
    }, "course")
      .then((res) => {
        console.log(res);
        navigate('/admin/allcourse')
      })
      .catch((err) => {
        console.log(err);
      })


  }
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
      <form onSubmit={addCourse} >
        <div>
          <TextField sx={{ m: 1, minWidth: 250 }} id="standard-basic" label="Teacher Name" variant="standard" inputRef={teacherName} />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }} >
            <InputLabel id="demo-simple-select-label">Select Days</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={days}
              label="Days"
              name="days"
              onChange={handleChange}
            >
              <MenuItem value={'MWF'}>MWf</MenuItem>
              <MenuItem value={'TTS'}>TTS</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 250 }}>
            <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={course}
              label="Course"
              name="course"
              onChange={handleChange}
            >
              <MenuItem value={'Web Development'}>Web Development</MenuItem>
              <MenuItem value={'Graphics Design'}>Graphics Design</MenuItem>
              <MenuItem value={'Mobile Development'}>Mobile Development</MenuItem>
              <MenuItem value={'Flutter Development'}>Flutter Development</MenuItem>
            </Select>
          </FormControl>
          <Button type='submit' variant="contained">Add Course</Button>
        </div>
      </form>
      <button onClick={logOut}>Logout</button>
    </>
  )
}

export default Addcource