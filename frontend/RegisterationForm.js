import React, { useState } from 'react';
import './RegisterationForm.css';
import { useNavigate,Link } from 'react-router-dom';
import LoginService from './LoginService';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    u_id:''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  let navigate=useNavigate()
  const handleSubmit = async  (e) => {
    
    e.preventDefault();

    let result=await LoginService.verifyUser(formData.email,formData.password);
    if(result.data==="OK")
    {
        alert('user already existed')
        navigate('/register')
    }
    else
    {
    await LoginService.addUser(formData)
    navigate('/')
    }
      
  };
  

  return (
    <div  className='container '>
      <h2 className='register'><center>REGISTERATION FORM</center></h2>
      <form onSubmit={handleSubmit} className='register-form-group'>
        <div className='input'>
          <center>
          <label htmlFor="name" className='label'> Name:</label>
          <input className='input'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Enter name'
          />
          </center>
        </div>
        <div>
          <center>
          <label htmlFor="email" className='label'>Email:</label>
          <input className='input'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Enter email'
          />
          </center>
        </div>
        <div>
          <center >
          <label htmlFor="password" className='label'>Password:</label>
          <input className='input'
            type="password"
            id="password"
            name="password"
            value ={formData.password}
            onChange={handleChange}
            placeholder='Enter password'
          />
          </center>
        </div>
        <div>
          <center >
          <label htmlFor="u_id" className='label'>user id:</label>
          <input className='input'
            type="input"
            id="u_id"
            name="u_id"
            value ={formData.u_id}
            onChange={handleChange}
            placeholder='Enter your id'
          />
          </center>
        </div>
        <center>
        <button type="submit" className='kondal'>Register</button>
        </center>
      </form>
      <h6>if already registered <Link to="/user">Click Me to login</Link></h6>
    </div>
  );
};

export default RegistrationForm;