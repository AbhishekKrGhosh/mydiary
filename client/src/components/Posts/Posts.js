import React from "react";
import Post from "./Post/Post";
import useStyles from './styles'
import { useSelector } from "react-redux";
function Posts(){
    const posts = useSelector((state)=>state.posts)
    const classes = useStyles()
    console.log(posts)
    return(
        <div>
            <Post/>
            <Post/>
        </div>
)
}

export default Posts