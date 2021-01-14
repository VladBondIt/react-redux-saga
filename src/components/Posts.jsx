import React from 'react';
import Post from './Post';
import { connect } from 'react-redux'


function Posts({ syncPosts }) {
    return (
        syncPosts.length === 0
            ? <h1>Have not posts</h1>
            : syncPosts.map((post) => <Post {...post} key={Math.random().toFixed(3)} />)
    )
}

const mapStateToProps = (state) => {
    return {
        syncPosts: state.posts.syncPosts
    }
}

export default connect(mapStateToProps)(Posts);
