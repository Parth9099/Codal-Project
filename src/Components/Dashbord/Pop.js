import {Dialog,DialogTitle, DialogContent} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
const Pop = () =>{

    const [state, setstate] = useState(false);

    const Open = () =>{setstate(true)}
    const Close = () =>{setstate(false)}
  
    return(
        <>

        <img src="./images/notification.png" 
        width="45px" height="45px" alt="" style={{marginLeft:'300px'}} onClick={Open}></img>

<div class="dropdown">
  <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <img src="./images/profile.jpg" width="30px" height="30px" alt="Not found" class="rounded-circle"/> Mr.John Wick
  </button>
  <ul class="dropdown-menu my-3 "  style={{marginLeft:'-30px', borderRadius:"25px"}} aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item my-3" to="#"><i class="fas fa-user-alt text-danger mx-5"><span className="mx-2">Profile</span></i></Link></li>
    <li><Link class="dropdown-item my-3" to="#"><i class="fas fa-tasks text-info  mx-5"><span className="mx-2">Task</span></i></Link></li>
    <li><Link class="dropdown-item my-3" to="#"><i class="fas fa-sms  mx-5"><span className="mx-2">Message</span></i></Link></li>
    <button type="button" class="btn btn-dark mx-5" 
    style={{marginTop:'50px', width:"130px",borderRadius:'20px'}}><Link to="/Login" style={{textDecoration:'none' }}>Logout</Link></button>
  </ul>
</div>
<Dialog open={state} onClose={Close} className="pop">

<DialogTitle>New Order have arrived </DialogTitle>
<DialogContent dividers>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
<img src="https://th.bing.com/th/id/R.708e6ada8e79fdf82fdab36eb88c7490?rik=InzpSizVDO8DNA&riu=http%3a%2f%2fcdn.wallpapersafari.com%2f47%2f6%2frXWYwK.jpg&ehk=jJ6FjUnUzFpp6XL48J%2bT4bkRmksqIM4hO920E69zGq0%3d&risl=&pid=ImgRaw&r=0" 
width="250px" height="150px" alt="not found" style={{ borderRadius:'15px'}}></img>
<p>This is simple pop box using Material.</p>
</DialogContent>

    <h6 className="mx-4">Follow on <i class="fab fa-instagram  fa-lg my-2 mx-2 text-danger"></i>  <i class="fab fa-facebook-f fa-lg  mx-2 text-primary"></i> <i class="fab fa-twitter fa-lg  mx-2 text-secondary"></i></h6>

</Dialog>
        </>
    )
}

export default Pop