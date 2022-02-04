
const Cards = (props) =>{
    return(
        <>
           <div className="container">
           <div className="row w-25 my-3">
           <div className="card justify-content-center">
                <div className="card-title">
                    {props.name}
                </div>
                <div className="card-body">
                    {props.number}
                    <br/>
                    {props.city}
                </div>
           </div>
</div>
           </div> 
        </>
    )
}

export default Cards