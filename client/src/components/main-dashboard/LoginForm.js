import React,{useState} from 'react'
import Navigation from './Navigation'
import { Link,useNavigate } from 'react-router-dom'
import './login.css';
import logimg from '../../assets/Locked-Login.jpg';


function LoginForm({ onLogin, error }){

const [action,setAction] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate();

function handleAction(){
  setAction(!action)
}


function submitHandler(e){
  e.preventDefault();
  setIsLoading(true);
  fetch("https://bookameal-backend.herokuapp.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => onLogin(user))
      navigate('/UserHome')
      alert('Login Successfull !...')
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
    
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
                        <input type="email" name="email" id="username-field" className="input-field" placeholder="Email"  onChange={(e) => setEmail(e.target.value)} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password-field" className="input-field" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} required></input>
                    </div>

                  <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Delete'}</button>
       
                <h3 id="account">Don't have an account? <Link to="/register" className="register">{isLoading ? "Loading..." : "Sign Up"}</Link></h3>  
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                     ))}    
                  <h3 id="account">Do you want to {action ?'Delete':'Login'} Account? <Link to="" className="register" onClick={handleAction}>{action?'Delete':'Login'}</Link></h3>
              </div>
          </form>
      </div>
     );
    }
    

export default LoginForm;