import React from 'react'

function FetchedPost({ title, body }) {
    return (
        <li>
            <h2>{title}</h2>
            <span>{body}</span>
        </li>
    )
}

export default FetchedPost
