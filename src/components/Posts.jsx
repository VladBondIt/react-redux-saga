import React from 'react'
import Post from './Post'

function Posts({ posts }) {
    return (
        !posts ? <h1>Have not posts</h1> : posts.map((post) => <Post post={post} key={Math.random().toFixed(3)} />)
    )
}

export default Posts
