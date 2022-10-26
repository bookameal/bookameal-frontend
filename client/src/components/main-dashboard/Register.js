import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import './login.css';
import regimg from '../../assets/Register2.jpg';

function Register(){

  const [formData,setData] = useState({});
  const[data,setUser]=useState('');
  const navigate = useNavigate()

  useEffect(()=>{

    fetch('http://localhost:3000/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
   },[])
    
    function handleChange(event) {
    const name=event.target.name;
    const value=event.target.value;
    setData({
    ...formData,
    [name]: value,
    })
    }

    function handleSubmit(event) {
        if (data.find(item=>item.email===formData.email)){
        alert('This user Alredy Exist!');
        event.preventDefault();
        } else {     
          fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify(formData),
        })   
          event.target.reset()
          navigate('/login')
        }
    }


  return (
    <div className="join">
        <Navigation />
            <form action="" onSubmit={handleSubmit}>
              <div className="form-inner reg">
                <h2>Register to get started</h2> 
                <div className="form-group">
                  <label htmlFor="name">Username:</label>
                  <input type="text" name="username" id="username-field" className="input-field" placeholder="Username" onChange={handleChange} required></input>        
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" name="email" id="usermail-field"  className="input-field" placeholder="Email" onChange={handleChange} required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="password-field"  className="input-field" placeholder="Set Password" onChange={handleChange} required></input> 
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password:</label>            
                    <input type="password" name="confirm-password" id="password-field2" className="input-field" placeholder="Confirm Password" onChange={handleChange} required></input> 
                </div>
                <button type='submit' className='log' id='logIn'>Sign Up</button>
              </div>
              <img src={regimg} alt="ramen" className="regimg" width ="770" height="760"/>

            </form>
    </div>
  );
}

export default Register;