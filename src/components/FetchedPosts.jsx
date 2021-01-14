import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions/fetchPosts'
import FetchedPost from './FetchedPost';
import Loader from './Loader';

function FetchedPosts() {
    const dispatch = useDispatch();

    const { fetchedPosts, isLoaded } = useSelector(store => ({
        fetchedPosts: store.posts.fetchedPosts,
        isLoaded: store.posts.isLoaded,
    }))


    const onFetchPosts = () => {
        dispatch(fetchPosts)
    }

    return (
        fetchedPosts.length === 0
            ? <button
                onClick={onFetchPosts}
                className="btn btn-primary"><h3>Loading Posts</h3></button>
            : <ul>
                {isLoaded === false
                    ? <Loader />
                    : fetchedPosts.map(item => <FetchedPost {...item} key={item.id} />)}
            </ul>
    )
}

export default FetchedPosts
