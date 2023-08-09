import React from 'react';
import guideService from './guideService';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookGuide = () => {

    const [formData, setFormData] = useState({
        u_id:'',
        u_name:'',
        u_address:'',
        num_of_people:'',
        travel_place:'',
        num_days:'',
        g_id:'',
        u_phone:''
      });
      
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    
    const navigate=useNavigate();


   const handleSubmit = async (e) => {
    e.preventDefault();
    let result=await guideService.bookGuide(formData);
    if(result.data==="OK")
    {  //alert('booked successfully click ok to go to dashboard')
        navigate('/userHome')
    }
    else
    {   //alert('problem in booking try again')
      toast.error('Invalid username or password', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        hideProgressBar: true,
      });
        navigate('/BookGuide')
    }
  };

  return (
     <>
      <ToastContainer position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
      <form onSubmit={handleSubmit} className='register-form-group'>

        <div className='input'>
          <center>
          <label htmlFor="u_id" className='label'> User Id</label>
          <input className='input'
            type="text"
            id="u_id"
            name="u_id"
            value={formData.u_id}
            onChange={handleChange}
            placeholder='Enter User Id '
          />
          </center>
        </div>

        <div className='input'>
          <center>
          <label htmlFor="u_name" className='label'> Name:</label>
          <input className='input'
            type="text"
            id="u_name"
            name="u_name"
            value={formData.u_name}
            onChange={handleChange}
            placeholder='Enter name'
          />
          </center>
        </div>

        <div>
          <center>
          <label htmlFor="u_address" className='label'>user Address:</label>
          <input className='input'
            type="u_address"
            id="u_address"
            name="u_address"
            value={formData.u_address}
            onChange={handleChange}
            placeholder='Enter user address'
          />
          </center>
        </div>

        <div>
          <center >
          <label htmlFor="number of people" className='label'>number of people:</label>
          <input className='input'
            type="num_of_people"
            id="num_of_people"
            name="num_of_people"
            value ={formData.num_of_people}
            onChange={handleChange}
            placeholder='Enter number of people'
          />
          </center>
        </div>

        


        <div>
          <center>
          <label htmlFor="travel_place" className='label'>travel_place:</label>
          <input className='input'
            type="travel_place"
            id="travel_place"
            name="travel_place"
            value={formData.travel_place}
            onChange={handleChange}
            placeholder='Enter travel_place'
          />
          </center>
        </div>

        <div>
          <center >
          <label htmlFor="num_days" className='label'>num_days:</label>
          <input className='input'
            type="num_days"
            id="num_days"
            name="num_days"
            value ={formData.num_days}
            onChange={handleChange}
            placeholder='Enter num_days'
          />
          </center>
        </div>

        <div>
          <center>
          <label htmlFor="g_id" className='label'>g_id:</label>
          <input className='input'
            type="g_id"
            id="g_id"
            name="g_id"
            value={formData.g_id}
            onChange={handleChange}
            placeholder='Enter g_id'
          />
          </center>
        </div>

        <div>
          <center >
          <label htmlFor="u_phone" className='label'>u_phone:</label>
          <input className='input'
            type="u_phone"
            id="u_phone"
            name="u_phone"
            value ={formData.u_phone}
            onChange={handleChange}
            placeholder='Enter u_phone'
          />
          </center>
        </div>



        <center>
        <button type="submit" className='kondal'>Book</button>
        </center>
      </form>
      </>
  );
};

export default BookGuide;
