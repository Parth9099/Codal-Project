import { useState, useEffect } from "react";
import axios from "axios";
const Post = () =>{

    const [post, setpost] = useState(null)

    const baseURL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        axios.get(`${baseURL}`).then((Response) =>{
            setpost(Response.data)
        })
    }, []);

    function updatePost() {
        axios.post(
            baseURL,{
                title :'Hello Parth',
                body : 'You are study in marwadi university'
            }
        ).then( (Response) =>{
            setpost(Response.data)
        })
    }

    if(!post) return null;

    return(
        <>
             <div className="container">
             <h1 className="text-center text-primary">Post method in Axios</h1>
                 <h4>{post.title}</h4>
                 <p>{post.body}</p>
                 <button className="btn btn-success" onClick={updatePost}>Upadte Post</button>
             </div>
        </>
    )
}

export default Post