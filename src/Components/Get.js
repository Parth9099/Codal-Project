 import { useState, useEffect } from "react"
 import axios from "axios"
 const Get = () =>{
    const [num, setnum] = useState()
    const [name, setname] = useState()
    const [moves, setmoves] = useState()

    useEffect(() => {
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
            console.log(res)
            setname(res.data.name)
            setmoves(res.data.moves.length)
        }

        getData();
    },);

    


    return(
        <>
        <div className="container" >
             <h1 className="text-center text-danger">Axiso in React js</h1>
             <hr/>
            <h3>You chooes <span style={{color:'red'}}  > {num}  </span>number</h3>
            <h3> My name is <span style={{color:'red'}}> {name} </span></h3>
            <h3>I have <span style={{color:'red'}}> {moves} </span>moves</h3>
             
            <label>Select a Value</label><br/>
            <select onChange={(e) => {
                 setnum(e.target.value)
             }}>
                 <option value="1">1</option>
                 <option value="25">25</option>
                 <option value="3">3</option>
                 <option value="4">4</option>
                 <option value="100">100</option>
             </select>
             
        </div>
            
        </>
    )
}
export default Get;