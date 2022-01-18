import '../Dashbord/Rightcss.css';
import Pop from './Pop';
const Right = () =>{
    return(
        <>
            <div className="mains">
            <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <Pop/>
  </div>
</nav>
            </div>
          
            
        </>
    )
}

export default Right;