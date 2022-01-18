import { useState, useEffect } from "react";
import axios from "axios";
const Delete = () =>{

     const [Post, setPost] = useState(null)
     const baseUrl = 'https://jsonplaceholder.typicode.com/posts/1'

     useEffect(() => {
        axios.get(baseUrl).then( (Response) =>{
            setPost(Response.data)
        })
     },[]);

     

     function onDelete(){
         axios.delete(baseUrl).then( (Response) =>{
             setPost(null)
         })
     }
     if (!Post) return "No post";
    return(
        <>
        <div className="container">
            <h1 className="text-center text-secondary">Delete method in Axios</h1>
            <hr/>
            <h4>{Post.title}</h4>
            <p>{Post.body}</p>
            <button className="btn btn-danger" onClick={onDelete}>Delete</button>
        </div>
        </>
    )
}

export default Delete