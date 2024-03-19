import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import FirstComponent from './Date';
import { addImageToStorage, signUpUser } from '../config/firebase/firebasemethod';



const defaultTheme = createTheme();

export default function SignUp() {
    // useNavigate
    const navigate = useNavigate()
    // useRef
    const firstNameRef = React.useRef()
    const lastNameRef = React.useRef()
    const emailRef = React.useRef()
    const passwordRef = React.useRef()
    const image = React.useRef()

    // show password function
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // date function
    const [date, setDate] = React.useState()
    const handleDateChange = (date) => {
        // console.log('Selected Date', date);
        setDate(date)
    };

    // get value from selected feild
    const [gender, setGenders] = React.useState('');
    const [course, setCourse] = React.useState('');
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
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={admission} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    inputRef={firstNameRef}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    inputRef={lastNameRef}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    inputRef={emailRef}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
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
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FirstComponent onDateChange={handleDateChange} />

                            </Grid>
                            <Grid item xs={12} >
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
                            </Grid>
                            <Grid item xs={12}>
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

                            </Grid>
                            <Grid item xs={12}>
                                <input type="file" ref={image} />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Typography variant="body2">
                                {"Already have an account? "}
                                <Button onClick={() => navigate('/')} variant="text">LogIn</Button>
                            </Typography>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}