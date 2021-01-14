const loader = () => ({
    type: "SET_LOADER"
})

const setFetchedPosts = (dataPosts) => ({
    type: "SET_FETCHED_POSTS",
    payload: dataPosts
})

export const fetchPosts = async dispatch => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    const data = await res.json()
    console.log(data)
    dispatch(loader());
    dispatch(setFetchedPosts(data));
}
