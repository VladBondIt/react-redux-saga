import React from 'react'

function FetchedPosts({ posts }) {
    return (
        !posts
            ? <button className="btn btn-primary"><h3>Loading Posts</h3></button>
            : <div>
                <h1>Fetched Posts</h1>
            </div>
    )
}

export default FetchedPosts
