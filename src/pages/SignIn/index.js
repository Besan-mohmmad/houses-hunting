import React,{useState} from 'react';

import NavBar from '../../components/NavBar';
// import validationSchema from '../../Util/validation/login'
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import image from '../../Utli/images/sign in.avif'
import { Link } from 'react-router-dom';
import './style.css';
const SignIn = ()=>{
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
export default SignIn;


