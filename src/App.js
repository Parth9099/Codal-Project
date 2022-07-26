import {Routes, Route} from 'react-router-dom';
import Dash from './Components/Dashbord/Dash';
import Login from './Components/Login';
import Error from './Components/Dashbord/Error';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Get from './Components/Get';
import Post from './Components/Post';
import Delete from './Components/Decvbcvbcvblete';
import Covid from './Components/Cocvbcvbvid';
import Card from './Components/Card';
function App() {
  return (
    <>   
  <Routes>
  
  <Route exact path="/" element={<Login/>}></Route>
  <Route exact path='/Login' element={<Login/>}></Route>
    <Route exact path='/Dash' element={<Dash/>}></Route>
    <Route exact path='/Card' element={<Card/>}></Route>
    <Route exact path='/Get' element={<Get/>}></Route>
    <Route exact path='/Post' element={<Post/>}></Route>
    <Route exact path='/Delete' element={<Delete/>}></Route>
    <Route exact path='/Covid' element={<Covid/>}></Route>
    <Route element={<Error/>}></Route>
      </Routes>
  
    </>

  )
}

export default App;





