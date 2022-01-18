import axios from "axios";
import { useState, useEffect } from "react"
const baseURL = "https://api.track-covid19.in/reports_v2.json";
const Covid = () =>{

    const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

    return(
        <>
        <div>
        <h1 className="text-center text-primary bg-dark">All over Case in State</h1>
        
      </div>
      
      <div className="container">
      <div class="row ">
  <div class="col-lg-3 my-3">
    <div class="card  bg-primary">
      <div class="card-body text-center">
        <h5 class="card-title"><b>Country</b></h5>
        <p class="card-text text-light fs-5" >India</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 my-3">
    <div class="card bg-warning">
      <div class="card-body text-center">
        <h5 class="card-title"><b>Positive Case</b></h5>
        <p class="card-text text-light fs-5"> {post.active}</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 text-center my-3">
    <div class="card bg-success">
      <div class="card-body">
        <h5 class="card-title"><b> Recovered</b> </h5>
        <p class="card-text  text-light fs-5">{post.recovered}</p>
      </div>
    </div>
  </div>
  <div class="col-lg-3 text-center my-3">
    <div class="card bg-danger">
      <div class="card-body">
        <h5 class="card-title "><b> Total Dead</b></h5>
        <p class="card-text  text-light  fs-5">{post.dead}</p>
      </div>
    </div>
  </div>
      <hr className="my-5 bg-danger" style={{width:'1200px', height:'3px'}}/>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-primary ">
      <div class="card-body">
        <h5 class="card-title "><b> State</b></h5>
        <p class="card-text text-light fs-5">{post.states.GJ.name}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-primary">
      <div class="card-body">
        <h5 class="card-title "><b> Active</b></h5>
        <p class="card-text text-light fs-5">{post.states.GJ.active}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-primary">
      <div class="card-body">
        <h5 class="card-title "><b> Recoverd</b></h5>
        <p class="card-text text-light fs-5">{post.states.GJ.recovered}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-primary">
      <div class="card-body">
        <h5 class="card-title "><b> Dead</b></h5>
        <p class="card-text text-light fs-5">{post.states.GJ.dead}</p>
      </div>
    </div>
  </div>

  <hr className="my-5 bg-primary" style={{width:'1200px', height:'3px'}}/>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-success ">
      <div class="card-body">
        <h5 class="card-title "><b> State</b></h5>
        <p class="card-text text-light fs-5">{post.states.GA.name}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-success ">
      <div class="card-body">
        <h5 class="card-title "><b> Active</b></h5>
        <p class="card-text text-light fs-5">{post.states.GA.active}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-success">
      <div class="card-body">
        <h5 class="card-title "><b> Recoverd</b></h5>
        <p class="card-text text-light fs-5">{post.states.GA.recovered}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-success">
      <div class="card-body">
        <h5 class="card-title "><b> Dead</b></h5>
        <p class="card-text text-light fs-5">{post.states.GA.dead}</p>
      </div>
    </div>
  </div>



  <hr className="my-5 bg-warning" style={{width:'1200px', height:'3px'}}/>

  


  <div class="col-lg-3 text-center my-1">
    <div class="card bg-warning">
      <div class="card-body">
        <h5 class="card-title "><b> State</b></h5>
        <p class="card-text text-light fs-5">{post.states.AP.name}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-warning">
      <div class="card-body">
        <h5 class="card-title "><b> Active</b></h5>
        <p class="card-text text-light fs-5">{post.states.AP.active}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-warning">
      <div class="card-body">
        <h5 class="card-title "><b> Recoverd</b></h5>
        <p class="card-text text-light fs-5">{post.states.AP.recovered}</p>
      </div>
    </div>
  </div>

  <div class="col-lg-3 text-center my-1">
    <div class="card bg-warning">
      <div class="card-body">
        <h5 class="card-title "><b> Dead</b></h5>
        <p class="card-text text-light fs-5">{post.states.AP.dead}</p>
      </div>
    </div>
  </div>
  

  <hr className="my-5 bg-success" style={{width:'1200px', height:'3px'}}/>
</div>         
</div>
        </>
    )
}

export default Covid