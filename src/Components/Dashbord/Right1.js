import { Link } from '@material-ui/core'
import './Css/Right123css.css';
import Graph from './Graph';

const Right1 = () =>{
    return(
        <>
           <div className='card  my-2' style={{width:"350px",height:'400px',}}>
           <div className=' mx-3 my-3'>
                <div class="dropdown">
                <b>Your Activity</b>
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
               <Graph/>
               
           </div>

        </>
    )
}

export default Right1