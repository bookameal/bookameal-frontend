import React,{useState} from 'react'
import Navigation from './Navigation'
import { Link,useNavigate } from 'react-router-dom'
import './login.css';
import logimg from '../../assets/Locked-Login.jpg';


function LoginForm({ onLogin, error }){

// const [formData,setData] = useState({})
// const[data,setUser]=useState('');
const [action,setAction] = useState(true);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate();

// useEffect(()=>{
//   fetch('http://localhost:3000/me')
//   .then(res=>res.json())
//   .then(data=>setUser(data))
// },[])

// function handleChange(event) {
//   const name=event.target.name;
//   const value=event.target.value;
//   setData({
//     ...formData,
//     [name]: value,
//   })

// }
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
    // const item=data.find(item=>item.email===formData.email)
    // if (item && item.password===formData.password){
    //   if(action){
    //     alert('Login Successfull !...')
    //     event.target.reset()
    //     navigate('/menu')
    //   }
    //   else{
    //     fetch(`http://localhost:3000/users/${item.id}`, {
    //       method: "DELETE",
    //     })
    //   alert(`User Account Deleted succesfully`)
    //   event.target.reset()
    //   navigate('/')
    //   }
    // }else{
    //   event.preventDefault();
    //   alert('Login Failure! Wrong email or password!')
    // };
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

                  <button type='submit' classNameName='log' id='logIn'>{action?'Login' :'Register'}</button>
       
                  <h3 id="account">Don't have an account? <Link to="/register" className="register">{isLoading ? "Loading..." : "Login"}</Link></h3>  
                    {errors.map((err) => (
                    <error key={err}>{err}</error>
                     ))}    
                  <h3 id="account">Do you want to {action ?'Register':'Login'} Account? <Link to="/register" className="register" onClick={handleAction}>{action?'Register':'Login'}</Link></h3>
              </div>
          </form>
      </div>
     );
    }
    

export default LoginForm;