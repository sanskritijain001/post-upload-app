import React, { useState,useEffect } from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id:"1",
            image: "https://tse4.mm.bing.net/th/id/OIP.hXWwNOQw15ZVWKlMs-xv0wHaFQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            caption: "beautiful flower",
        }
    ])

    useEffect( ()=>{
        axios.get("https://post-upload-backend.onrender.com/posts")
        .then((res) =>{
            console.log(res.data.posts)
            setPosts(res.data.posts)
        })
        .catch((err) =>{
            console.log(err)
        })

    },[])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ?(
                    posts.map( (post) =>(
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption}/>
                            <p>{post.caption}</p> 

                        </div>
                    ))
                ):(
                    <h1>No posts available</h1>
                )
            }

        </section>
    )
}

export default Feed