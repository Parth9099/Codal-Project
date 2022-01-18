 import axios from "axios";
import { useState, useEffect } from "react"
 

const Co = () =>{
   
    const baseUrl = 'https://api.track-covid19.in/reports_v2.json'
    const [Name, setName] = useState(null)
    useEffect(() => {
       axios.get(baseUrl).then( (Response) =>{
           setName(Response.data)
       })
    }, []);

    if(!Name) return 'No'
    return(
        <>
        <h1>State : {Name.states.AP.name}</h1>

        </>
    )
}

export default Co