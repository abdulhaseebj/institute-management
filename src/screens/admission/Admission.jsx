import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, } from '@mui/material'
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import React, { useState } from 'react'
import FirstComponent from '../../components/Date'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRef } from 'react';
import { addImageToStorage, signUpUser } from '../../config/firebase/firebasemethod';
import { useNavigate } from 'react-router-dom';
import { getDownloadURL, uploadBytes } from 'firebase/storage';
import { storage } from '../../config/firebase/firebaseconfig';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});




const Admission = () => {
  // useRef
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const image = useRef()

  // useNavigate
  const navigate = useNavigate()

  // show password function
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // date function
  const [date, setDate] = useState()
  const handleDateChange = (date) => {
    // console.log('Selected Date', date);
    setDate(date)
  };

  // get value from selected feild
  const [gender, setGenders] = useState('');
  const [course, setCourse] = useState('');
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    // console.log('Selected Value:', selectedValue);

    const fieldName = event.target.name;
    if (event.target.name === 'gender') {
      setGenders(selectedValue);
    } else if (event.target.name === 'course') {
      setCourse(selectedValue);
    }
  }


  // register and add user data in firstore
  function admission(e) {
    e.preventDefault()
    const names = `${firstNameRef.current.value} ${lastNameRef.current.value}`;


    const files = image.current.files[0];
    const email = emailRef.current.value;

    addImageToStorage(files, email)
      .then((url) => {
        console.log("Image URL:", url);

        signUpUser({
          names: names,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          type: 'student',
          cource: course,
          gender: gender,
          date: date,
          imgUrl: url
        }).then((res) => {
          console.log(res);
          navigate('/')
        }).catch((err) => {
          console.log(err);
        })
      })
      .catch((err) => {
        console.log("Error:", err);
      });



  }


  return (
    <>
      <form onSubmit={admission}>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          inputRef={firstNameRef}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          inputRef={lastNameRef}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          inputRef={emailRef}
        />

        <FormControl sx={{ m: 0, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            inputRef={passwordRef}

          />
        </FormControl>
        {/* <FirstComponent onDateChange={handleDateChange} /> */}
        <FirstComponent onDateChange={handleDateChange} />

        {/* <FirstComponent /> */}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={gender}
            label="Gender"
            name="gender"
            onChange={handleChange}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
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
        </FormControl >
        <input type="file" ref={image} />


        {/* <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput type="file"  />
        </Button> */}

        <Button type='submit' variant="contained">Resister</Button>
      </form>

    </>
  )
}

export default Admission