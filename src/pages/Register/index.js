// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import * as yup from "yup";
// // import Typography from "@mui/material/Typography";
// // import Container from "@mui/material/Container";
// // import Grid from "@mui/material/Grid";
// // import CardMedia from "@mui/material/CardMedia";
// // import FormControl from "@mui/material/FormControl";
// // import TextField from "@mui/material/TextField";
// // import Alert from "@mui/material/Alert";
// // import Snackbar from "@mui/material/Snackbar";
// // import Button from "@mui/material/Button";
// // import image from "../../Utli/images/sign in.avif";
// // import validationRegister from "../../Utli/text/index";
// // // import "./style.css";

// // function Register() {
// //   const navigate = useNavigate();
// //   const [username, setUsername] = useState();
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [mobile, setMobile] = useState("");
// //   const [error, setError] = useState("");
// //   const [open, setOpen] = useState(false);
// //   const validationErrors = {};

// //   const handleSignin = (event) => {
// //     navigate("/login");
// //   };

// //   const handleClose = (reason) => {
// //     if (reason === "clickaway") {
// //       return;
// //     }
// //     setOpen(false);
// //   };

// //   const handleusername = (event) => {
// //     setUsername(event.target.value);
// //   };
// //   const handlepassword = (event) => {
// //     setPassword(event.target.value);
// //   };

// //   const handleconfirmPassword = (event) => {
// //     setConfirmPassword(event.target.value);
// //   };

// //   const handlemobile = (event) => {
// //     setMobile(event.target.value);
// //   };

// //   const clear = () => {
// //     setUsername("");
// //     setPassword("");
// //     setConfirmPassword("");
// //     setMobile("");
// //   };

// //   const handleAddUser = async (event) => {
// //     event.preventDefault();
// //     try {
// //       await validationRegister.validate(
// //         { username, password, confirmPassword, mobile },
// //         { abortEarly: false }
// //       );

// //       const userData = {
// //         username,
// //         password,
// //         mobile,
// //       };
// //       const response = await fetch(
// //         'https://my-json-server.typicode.com/Besan-mohmmad/api/users',
// //         {
// //           method: "POST",
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //           body: JSON.stringify(userData),
// //         }
// //       );
// //       if (response.ok) {
// //         const data = await response.json();
// //         clear();
// //         setOpen(true);
// //         handleClose();
// //         navigate("/login");
// //       }
// //     } catch (error) {
// //       if (error instanceof yup.ValidationError) {
// //         error.inner.forEach((err) => {
// //           validationErrors[err.path] = err.message;
// //         });
// //       }
// //       setError(validationErrors);
// //     }
// //   };

// //   return (
// //     <Container maxWidth="lg" className="divregister">
// //       <Grid
// //         container
// //         justify="center"
// //         alignItems="center"
// //         spacing={12}
// //         paddingTop="2em"
// //       >
// //         <Grid item xs={12} sm={12} md={6} lg={6}>
// //           <CardMedia className="imgregister" component="img" image={image} />
// //         </Grid>
// //         <Grid item xs={12} sm={12} md={6} lg={6}>
// //           <article className="article-register">
// //             <Typography variant="h2"> Sign Up</Typography>
// //             <FormControl defaultValue="" className="formregister" required>
// //               <TextField
// //                 id="outlined-basic"
// //                 label="Enter user name..."
// //                 variant="outlined"
// //                 value={username}
// //                 onChange={handleusername}
// //                 required
// //               />
// //               {error && (
// //                 <Typography variant="p" className="error">
// //                   {error.username}
// //                 </Typography>
// //               )}
// //               <br />

// //               <TextField
// //                 type="password"
// //                 id="outlined-basic"
// //                 label="Enter Password..."
// //                 variant="outlined"
// //                 value={password}
// //                 onChange={handlepassword}
// //                 required
// //               />
// //               {error && (
// //                 <Typography variant="p" className="error">
// //                   {error.password}
// //                 </Typography>
// //               )}
// //               <br />
// //               <TextField
// //                 type="password"
// //                 id="outlined-basic"
// //                 label="Confirm password...."
// //                 variant="outlined"
// //                 value={confirmPassword}
// //                 onChange={handleconfirmPassword}
// //                 required
// //               />
// //               {error && (
// //                 <Typography variant="p" className="error">
// //                   {error.confirmPassword}
// //                 </Typography>
// //               )}
// //               <br />
// //               <TextField
// //                 type="text"
// //                 id="outlined-basic"
// //                 label="Enter you phone number..."
// //                 variant="outlined"
// //                 value={mobile}
// //                 onChange={handlemobile}
// //                 required
// //               />
// //               {error && (
// //                 <Typography variant="p" className="error">
// //                   {error.mobile}
// //                 </Typography>
// //               )}
// //               <Snackbar
// //                 open={open}
// //                 autoHideDuration={6000}
// //                 onClose={handleClose}
// //               >
// //                 <Alert onClose={handleClose} severity="success">
// //                   Congrats! Signed up Successfully
// //                 </Alert>
// //               </Snackbar>
// //               <Button
// //                 onClick={handleAddUser}
// //                 sx={{
// //                   marginTop: "1.5em",
// //                   color: "white",
// //                   bgcolor: "#EB9235",
// //                   fontSize: "20px",
// //                   fontWeight: "300",
// //                   "&:hover": {
// //                     backgroundColor: "#EB9235",
// //                     color: "white",
// //                   },
// //                 }}
// //               >
// //                 Sign up
// //               </Button>
// //               <Typography variant="p" className="Account">
// //                 {" "}
// //                 Do You Account?<span onClick={handleSignin}> Signin here</span>
// //               </Typography>
// //             </FormControl>
// //           </article>
// //         </Grid>
// //       </Grid>
// //     </Container>
// //   );
// // }

// // export default Register;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Alert from '@mui/material/Alert';
// import image from '../../Utli/images/sign in.avif';
// const Register = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const clear = () => {
//     setEmail('');
//     setPassword('');
//     setError(null);
//   };

//   const handleEmail = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleSubmit = async (event) => {
//     try {
//       event.preventDefault();
//       setIsLoading(true);

//       // Perform registration logic here...
//       // You can send the registration data to your backend API or perform any required actions.

//       // For now, I'll simulate a delay of 2 seconds to mimic registration process.
//       await new Promise((resolve) => setTimeout(resolve, 2000));

//       clear();
//       setIsLoading(false);
//       navigate('/profile'); // Redirect to profile page after successful registration
//     } catch (err) {
//       setError('An error occurred during registration.');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className='bg-image'>
//         <img src={image} className='image' alt='Sign Up' />
//         <div className='login-form-container'>
//           <h2>Sign Up</h2>
//           <form onSubmit={handleSubmit}>
//             <div className='form-group'>
//               <label htmlFor='email' className='email-label'>
//                 Email
//               </label>
//               <input
//                 type='email'
//                 id='email'
//                 value={email}
//                 placeholder='Enter your email...'
//                 onChange={handleEmail}
//                 className='email-input'
//                 required
//               />
//             </div>
//             <div className='form-group'>
//               <label htmlFor='password' className='password-label'>
//                 Password
//               </label>
//               <input
//                 type='password'
//                 id='password'
//                 placeholder='Enter a password...'
//                 value={password}
//                 onChange={handlePassword}
//                 className='password-input'
//                 required
//               />
//               {error && <Alert severity='error'>{error}</Alert>}
//             </div>
//             <button
//               type='submit'
//               style={{
//                 backgroundColor: '#FFA41B',
//                 border: 'none',
//                 marginLeft: '2.3rem',
//                 width: '410px',
//                 height: '40px',
//               }}
//             >
//               {isLoading ? 'Registering...' : 'Sign Up'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Register;

import React,{useState} from 'react';

import NavBar from '../../components/NavBar';
// import validationSchema from '../../Util/validation/login'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import image from '../../Utli/images/sign in.avif'
import { Link } from 'react-router-dom';
// import './style.css';
const Register = ()=>{
  const navigate = useNavigate();
  function navToHome(){
    navigate('/profile')
  }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState();
    const[ setUsers] = useState([]);
    const [error, setError] = useState();
    const clear = () => {
      setEmail('');
      setPassword('');
      setError(null);
    };
    const handleEmail = (event) => {
      setEmail(event.target.value);
    };
    const handlePassword = (event) => {
      setPassword(event.target.value);
    };
    const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        setIsLoading(true);
        const userData = {
          email,
          password,
        };
        await validationSchema.validate(userData, {
          abortEarly: false,
        });
        const response = await fetch('https://my-json-server.typicode.com/Besan-mohmmad/api/users',userData);
        const data = await response.json();
         console.log(data);
        clear();
        setIsLoading(false);
       navToHome();
      } catch (err) {
        setError(err.response ? err.response.data.message : err.errors[0]);
        setIsLoading(false);
      }
    };
  return (
  <>
     
      <div className='bg-image' >
       <img src={image } className='image'/>
      <div className="login-form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='email'></label>
          <input
            type="text"
            id="username"
            value={email}
            placeholder="Enter user email..."
            onChange={handleEmail}
            className='email'
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='password'></label>
          <input
            type="password"
            id="password"
            placeholder="Enter the password..."
            value={password}
            onChange={handlePassword}
            className='password'
          />
           {error && (
            <Alert  severity="error">
              {error}
            </Alert>
          )}
        </div>
        <button onClick={handleSubmit}  style={{backgroundColor:'#FFA41B', border:'none', marginLeft:'2.3rem', width:'410px', height:'40px'}}>
          <Link to='/' style={{textDecoration:'none', color:'#fff', fontSize:'20px'}}>
        {isLoading ? "Successfully" : 'Sign In'}
        </Link>
          </button>
      </form>
    </div>
    </div>
  </>
      );
}
export default Register;


