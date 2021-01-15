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

        dispatch(fetchPosts())
    }

    return (
        isLoaded === false
            ?
            fetchedPosts.length > 0
                ? <ul>
                    {fetchedPosts.map(item => <FetchedPost {...item} key={item.id} />)}</ul>
                : <button
                    onClick={onFetchPosts}
                    className="btn btn-primary"><h3>Loading Posts</h3></button>
            : <Loader />

    )
}

export default FetchedPosts
