import Carddata from "./Carddata"
import Cards from "../Cards"
const Card = () =>{

    function ncard(data){
        return(
<Cards
        id = {data.id}
        name = {data.name}
        number = {data.number}
        city = {data.city}
    />
        );
        
    }
    return(
        <>
          
          <h1 className="text-center text-warning">Card in react with map function</h1>
          {Carddata.map(ncard)} ;
        </>
    )
}

export default Card