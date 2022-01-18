import Left from "../Left";
import '../Dashbord/Dashbordcss.css';
import Right from "./Right";
import Right1 from "./Right1";
import Right2 from "./Right2";
import Right3 from "./Right3";
import RightBottom from "./RightBottom";

function Dash() {
  return (
    <>    
    <div className="container-fluid">
            <div className="row">
            <div className="col-lg-2">
                <h1 className='header'>
                    <Left/>
                </h1>
            </div> 
            <div className="col-lg-10">
                <h1 className='center' style={{backgroundColor:'pink'}}>
                    <Right/>
                </h1>
                <div className="container" style={{backgroundColor:'rgb(217, 242, 247)'}}>
                <h4>Dashbord</h4>
                <div className="row">
                <div className="col-lg-4">
                  <Right1/>
                 
                </div>
                <div className="col-lg-4">
                  <Right2/>
                </div>
                <div className="col-lg-8">
                <RightBottom />
                </div>

                
                <div className="col-lg-4">
                  <Right3/>
                  
                </div>
                
             
                </div>
        
                </div>
            </div> 
            
            </div>
            
            </div>

    </>

  )
}

export default Dash;
