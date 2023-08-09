import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import {Link, useNavigate} from "react-router-dom";
import './LoginForm.css';
import LoginService from "./LoginService";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate=useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(role==="user"){
    let result=await LoginService.verifyUser(username,password);
    if(result.data==="OK")
    {  localStorage.setItem('email',username)
        navigate('/userHome')
    }
    else
    {   toast.error('Invalid username or password', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
        //alert('invalid username or password')
        navigate('/user')
    }
    }
    else{
      let result=await LoginService.verifyGuide(username,password);
    if(result.data==="OK")
    {  localStorage.setItem('email',username)
        navigate('/guide/guideHome')
    }
    else
    {   toast.error('Invalid username or password', {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
        //alert('invalid username or password')
        navigate('/user')
    }
    }

  };

  return (
    <>
    <div className='container'>
      <ToastContainer position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
    <h1 className='hello'><center>LOGIN FORM</center></h1>
    <Form  className='login-form'>
      <Form.Group controlId="formUsername" className='form-group'>
        <Form.Label className='form-label'>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          value={username}
          name="email"
          onChange={(e) => setUsername(e.target.value)}
          className='form-control'
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className='form-group'>
        <Form.Label className='form-label'>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className='form-control'
        />
      </Form.Group>
      
      <Form.Group controlId="formRole" className='form-group'>
      <Form.Label className='form-label'>Role</Form.Label>
      <Form.Control
        as="select"
        value={role}
        name="role"
        onChange={(e) => setRole(e.target.value)}
        className='form-control'
       >
        <option value="guide">guide</option>
        <option value="user">User</option>
      </Form.Control>
      </Form.Group>

      <Button variant="primary" type="button" className="login-button" onClick={handleSubmit}>
        LOGIN
      </Button>
    </Form>
    <h6>if not user <Link to="/register">Click Me to Register</Link></h6>
    </div>
    </>
  )
}
export default LoginForm
