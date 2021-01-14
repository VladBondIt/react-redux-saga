const loader = () => ({
    type: "SET_LOADER"
})

const setFetchedPosts = (dataPosts) => ({
    type: "SET_FETCHED_POSTS",
    payload: dataPosts
})

export const fetchPosts = async dispatch => {
    dispatch(loader());
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const data = await res.json()
    dispatch(setFetchedPosts(data));
}
