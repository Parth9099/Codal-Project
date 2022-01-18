import './Dashbord/Css/Logincss.css'
import Logindata from './Logindata'
import Validateinfo from './Dashbord/Validateinfo';
import { Link } from 'react-router-dom';
const Login = () =>{

  const {handleChange, errors} = Logindata(Validateinfo);

    return(
        <>
      

<div className='contanier'>
      <div className='row'>
                <div className='col-lg-6 Boxes'>

                <h3>Login</h3>
        <div class="card-body login_card my-5 ">
                 <h5>This is a real web-app with React.js Frontend - use "admin@flatlogic.com / password" to login!</h5>
                </div>
        <div className="login">
        <form  >
    <div className='my-3'>
        <label className='lable'>Username</label><br/>
        <input type="text" placeholder=' Enter Username' name='username' className='input'  onChange= {handleChange}></input>
        <p className='text-danger' > {errors.username}</p>
    </div>
    
    <div className='my-2'>
        <label className='lable'>E-mail</label><br/>
        <input type="email" placeholder=' Enter email adrress' name='email' className='input'></input>
        
    </div>

    <div className='my-4'>
        <label className='lable'>Password</label><br/>
        <input type="password" placeholder='Enter Password' name='password' className='input' input/>
       
    </div>

    <div className='my-4'>
        <label className='lable'>Confirm Password</label><br/>
        <input type="password" placeholder=' Enter Confirm Password' name='cpassword' className='input'  input/>
        
    </div>


    <div>
      <button className='btn btn-dark ax' type='submit' ><Link to="/Dash" style={{textDecoration:'none', color:'white'}}>Login</Link></button>
    </div>
 </form>
 </div>
   
                </div>
        

        
                <div className='col-lg-6 '>
                <img src='./images/login.jpg' alt="login_image" className='imge mx-2'></img>
          
                </div>
        </div>
      </div>
      
    
   
        </>
    )
}

export default Login