import React,{useState,useEffect} from 'react'
import Navigation from './Navigation'
import { Link,useNavigate } from 'react-router-dom'
import './login.css';
import logimg from '../../assets/Locked-Login.jpg';


function LoginForm({ Login, error }){

const [formData,setData] = useState({})
const[data,setUser]=useState('');
const [action,setAction] = useState(true);
const navigate=useNavigate();

useEffect(()=>{
  fetch('http://localhost:3000/users/logins')
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
function handleAction(){
  setAction(!action)
}


function submitHandler(event){
    const item=data.find(item=>item.email===formData.email)
    if (item && item.password===formData.password){
      if(action){
        alert('Login Successfull !...')
        event.target.reset()
        navigate('/menu')
      }
      else{
        fetch(`http://localhost:3000/users/${item.id}`, {
          method: "DELETE",
        })
      alert(`User Account Deleted succesfully`)
      event.target.reset()
      navigate('/')
      }
    }else{
      event.preventDefault();
      alert('Login Failure! Wrong email or password!')
    };
}

    return(
     <div className="join">
        <Navigation />
            <form onSubmit={submitHandler}>
            <img src={logimg} alt="ramen" className="logimg" width ="750" height="750"/>
                <div className="form-inner">
                    <h2>Login to order</h2>
                    {(error !== "") ? (<div classname="error">{error}</div>) : ""}
               
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="username-field" className="input-field" placeholder="Email" onChange={handleChange} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password-field" className="input-field" placeholder="Password" onChange={handleChange} required></input>
                    </div>

                  <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button>
       
                  <h3 id="account">Don't have an account? <Link to="/register" className="register">Sign up</Link></h3>      
                  <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <Link to="" className="register" onClick={handleAction}>{action?'Delete':'Login'}</Link></h3>
              </div>
          </form>
      </div>
     );
    }
    

export default LoginForm;