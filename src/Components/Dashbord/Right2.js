import { Link } from "@material-ui/core"
const Right2 = () =>{
    return(
        <>
        <div className='card  my-2' style={{width:"350px",height:'400px'}}>
            <div className='container my-3'>
                <div class="dropdown">
                <span><b>Your Meals</b></span>
                    <Link class="dropdown-toggle abc" to="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                     Weekly
                    </Link>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><Link class="dropdown-item" to="#">Action</Link></li>
                        <li><Link class="dropdown-item" to="#">Another action</Link></li>
                        <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                    </ul>
                </div>
               </div>
               
                <div class="card mx-4 my-2" style={{height:"80px"}}>
                
                 <div class="card-body bg-info">
                 <img src="./images/meal1.png" alt="Nothing" width="60px" height="60px"></img>
                    <b>Salmon Salad</b> 2kg  <span style={{color:'royalblue'}}><b>175cal</b></span>
                </div>                </div>
                <div class="card mx-4 my-2" style={{height:"80px"}}>
                 <div class="card-body bg-secondary">
                 <img src="./images/meal2.png" alt="Nothing" width="60px" height="60px"></img>
                    <b>Salmon Salad</b> 600g   <span style={{color:'red'}}><b>255cal</b></span>
                 </div>
                </div>
                <div class="card mx-4 my-2" style={{height:"80px"}}>
                 <div class="card-body bg-success">
                 <img src="./images/meal3.png" alt="Nothing" width="60px" height="60px"></img>
                    <b>Salmon Salad</b> 500g   <span style={{color:'yellow'}}><b>375cal</b></span>
                 </div>
                </div>
        </div>
        </>
    )
}

export default Right2