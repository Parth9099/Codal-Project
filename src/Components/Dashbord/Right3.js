import { Link } from "@material-ui/core"
const Right3 = () =>{
    return(
        <>
<div className='card abcz' style={{width:"340px",height:'auto'}}>
    <div>
        <img src="./images/profile.jpg" alt="Nothing" className="profile"></img>
        <span className="name">Mr.John Wick<h6 style={{marginLeft:'120px',marginTop:'-20px', color:'blue'}}>India</h6></span><br/>
            <div>
               <span style={{paddingLeft:'45px' }}>Weight </span>
             <span style={{paddingLeft:'45px'}}>Height  </span> 
             <span style={{paddingLeft:'45px'}}>Age</span>      
</div>
<hr style={{width:'80px', marginLeft:"35px", backgroundColor:'red', height:'2px'}}/> 
<hr style={{width:'80px',marginLeft:"130px", marginTop:'-17px', backgroundColor:'brown', height:'2px'}}/> 
<hr style={{width:'80px',marginLeft:"220px",marginTop:'-17px', backgroundColor:'black', height:'2px'}}/> 
            <div>
             <span style={{paddingLeft:'45px', fontWeight:'bolder' }}>60kg </span>
             <span style={{paddingLeft:'58px', fontWeight:'bolder' }}>180sm </span> 
             <span style={{paddingLeft:'45px', fontWeight:'bolder' }}>30y</span>   
             </div>   
        
    </div>
    <div class="dropdown mx-3 my-5">
                <span><b>Your Goal's</b></span>
                    <Link class="dropdown-toggle abc" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                     Weekly
                    </Link>

                    <ul class="dropdown-menu" style={{marginLeft:'-40px', borderRadius:"5px"}} aria-labelledby="dropdownMenuLink">
                        <li><Link class="dropdown-item" to="#">Action</Link></li>
                        <li><Link class="dropdown-item" to="#">Another action</Link></li>
                        <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                </div>
    <div>
    <span style={{marginLeft:'25px', fontWeight:'bolder'}}>Sleep</span> <span style={{marginLeft:'190px'}}><b>50</b>/100</span>
    <div class="progress mx-4" style={{height: "5px"}}>
        <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
<br/>
        <span style={{marginLeft:'25px', fontWeight:'bolder'}}>Sports</span> <span style={{marginLeft:'180px'}}><b>75</b>/100</span>
    <div class="progress mx-4" style={{height: "5px"}}>
        <div class="progress-bar bg-danger" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <br/>
        <span style={{marginLeft:'25px', fontWeight:'bolder'}}>Work</span> <span style={{marginLeft:'190px'}}><b>90</b>/100</span>
    <div class="progress mx-4" style={{height: "5px"}}>
        <div class="progress-bar bg-warning" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>

            <div className="mx-3 my-4">
                <h5>Appoinments</h5>
                <div className="cards my-3 ">
                <div class="card-body">
                 <img src="./images/therapy.png" alt="Nothing" width="50px" height="40px"></img>
                    <b className="mx-3">Therapy</b> 1 Hr  
                    <div class="form-check checkbox">
  <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
</div>
                </div>  
                </div>
                <div className="cards my-3">
                <div class="card-body ">
                 <img src="./images/yoga.jpg" alt="Nothing" width="50px" height="40px"></img>
                    <b className="mx-3">Yoga, Gym</b> 2 Hr
                    <div class="form-check checkbox">
  <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault"/>
</div>
                </div>  
                </div>
            </div>

</div>
        </>
    )
}

export default Right3