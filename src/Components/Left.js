import './Dashbord/Leftcss.css';
import { Link } from 'react-router-dom';
const Left = () =>{


    return(
        <>
          <div className="main">
              <div>
              <i class="fas fa-address-card"><span style={{fontSize:'25px', paddingLeft:'10px'}}>SOFIYA</span></i>
              </div>
              <br/>
              <div>
              <button type="button" class="btn btn-primary">
              <i class="fas fa-home"></i> Notifications <span class="badge bg-secondary">4</span>
                </button>
                </div>
                <br/>  
                <div>
                    <h4>TEMPLATE</h4>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="left_btn" >
                    
                    <button type="button"   class="btn text-start "><i class="fas fa-sort-amount-down-alt"><span style={{ paddingLeft:'10px'}}>Features</span></i></button><br/>
                    <button type="button"   class="btn text-start"><i class="fas fa-table"><span style={{ paddingLeft:'10px'}}>Tables</span></i></button><br/>
                    <button type="button" class="btn text-start"><i class="fas fa-bell"><span style={{ paddingLeft:'10px'}}>Notification</span></i></button><br/>
                    <div class="dropdown">
  <button class="btn text-start dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="fas fa-cube"><span style={{ paddingLeft:'10px'}}>API'S</span></i> 
  </button>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" style={{ textDecoration:'none'}} to="/Get">Get</Link></li>
    <li><Link class="dropdown-item" style={{ textDecoration:'none'}} to="/Post">Post</Link></li>
    <li><Link class="dropdown-item" style={{ textDecoration:'none'}} to="/Delete">Delete</Link></li>
    <li><Link class="dropdown-item" style={{ textDecoration:'none'}} to="/Covid">Covid</Link></li>
  </ul>
</div>
                    </div>
                    </nav>
                </div>
          </div>
        </>
    )
}

export default Left;